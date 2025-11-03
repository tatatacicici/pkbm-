import { useEffect, useRef, useCallback, useState } from 'react';
import { socketService } from '@kampus-gratis/apps/kg/config/socket.service';

const ACTIVITY_TIMEOUT = 60000; // 1 minute
const HEARTBEAT_INTERVAL = 1000; // 1 second

const useScreenTimeTracker = (userId: string | undefined, accessToken: string | null) => {
  const [activeTime, setActiveTime] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const sessionStartTimeRef = useRef<number>(Date.now());
  const lastHeartbeatRef = useRef<number>(Date.now());
  const isActiveRef = useRef<boolean>(true);
  const isTabActiveRef = useRef<boolean>(true);
  const activityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateActivity = useCallback(() => {
    if (isTabActiveRef.current) {
      isActiveRef.current = true;
      
      if (activityTimeoutRef.current) {
        clearTimeout(activityTimeoutRef.current);
      }
      
      activityTimeoutRef.current = setTimeout(() => {
        isActiveRef.current = false;
      }, ACTIVITY_TIMEOUT);
    }
  }, []);

  const sendHeartbeat = useCallback(() => {
    const currentTime = Date.now();
    const timeSinceLastHeartbeat = currentTime - lastHeartbeatRef.current;
    lastHeartbeatRef.current = currentTime;
  
    const isActive = isActiveRef.current && isTabActiveRef.current;
    
    if (!userId || !accessToken) {
      console.log('Skipping heartbeat: User ID or access token missing');
      return;
    }
  
    const heartbeatData = {
      userId,
      timestamp: currentTime,
      timeSinceLastHeartbeat,
      timeSinceSessionStart: currentTime - sessionStartTimeRef.current,
      isActive,
    };
  
    socketService.emit('screen_time_heartbeat', heartbeatData, 'inbox');
  }, [userId, accessToken]);

  const handleScreenTimeUpdate = useCallback((data: { sessionTime: number; totalTime: number; connectedAt: string }) => {
    setActiveTime(data.sessionTime);
    setTotalTime(data.totalTime);
  }, []);

  useEffect(() => {
    if (!userId || !accessToken) {
      console.log('Screen time tracker not initialized: User ID or access token missing');
      return;
    }

    console.log('Initializing screen time tracker');
    sessionStartTimeRef.current = Date.now();
    lastHeartbeatRef.current = Date.now();

    let heartbeatInterval: NodeJS.Timeout | undefined;

    const handleVisibilityChange = () => {
      isTabActiveRef.current = !document.hidden;
      if (document.hidden) {
        isActiveRef.current = false;
      } else {
        updateActivity();
      }
      sendHeartbeat(); // Send a heartbeat immediately when visibility changes
    };

    const handleUserActivity = () => {
      updateActivity();
    };

    try {
      if (!socketService.isConnected('inbox')) {
        socketService.connect(accessToken, 'inbox');
      }

      document.addEventListener('visibilitychange', handleVisibilityChange);
      ['mousemove', 'keydown', 'click', 'scroll', 'touchstart', 'focus'].forEach(eventType => {
        window.addEventListener(eventType, handleUserActivity);
      });

      heartbeatInterval = setInterval(sendHeartbeat, HEARTBEAT_INTERVAL);
      
      socketService.on('screen_time_update', handleScreenTimeUpdate, 'inbox');

      updateActivity();
      sendHeartbeat(); // Send initial heartbeat
    } catch (error) {
      console.error("Error setting up screen time tracker:", error);
      if (heartbeatInterval) clearInterval(heartbeatInterval);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      ['mousemove', 'keydown', 'click', 'scroll', 'touchstart', 'focus'].forEach(eventType => {
        window.removeEventListener(eventType, handleUserActivity);
      });
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      if (activityTimeoutRef.current) clearTimeout(activityTimeoutRef.current);
      socketService.off('screen_time_update', handleScreenTimeUpdate, 'inbox');
    };
  }, [userId, accessToken, sendHeartbeat, updateActivity, handleScreenTimeUpdate]);

  return { activeTime: Math.round(activeTime), totalTime: Math.round(totalTime) };
};

export default useScreenTimeTracker;