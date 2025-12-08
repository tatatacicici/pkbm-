import { io, Socket } from 'socket.io-client';

type SocketEndpoint = 'inbox' | 'notification';

class SocketService {
  private sockets: { [key in SocketEndpoint]?: Socket } = {};
  private listeners: { [key in SocketEndpoint]: { [event: string]: ((data: any) => void)[] } } = {
    inbox: {},
    notification: {}
  };

  private getURL(endpoint: SocketEndpoint): string {
    const BASE_URL = "https://api.kampusgratis.id/io";
    return `${BASE_URL}/${endpoint}`;
    // const BASE_URL_LOCAL = "http://localhost:7000/io";
    // return `${BASE_URL_LOCAL}/${endpoint}`;
  }

  connect(token: string, endpoint: SocketEndpoint) {
    if (this.sockets[endpoint]) {
      this.sockets[endpoint]?.disconnect();
    }

    const URL = this.getURL(endpoint);

    // Get the current URL
    const currentURL = typeof window !== 'undefined' ? window.location.href : 'unknown';

    this.sockets[endpoint] = io(URL, {
      auth: { token },
      query: { url_origin: currentURL },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    this.sockets[endpoint]?.on('connect', () => {
      this.reattachListeners(endpoint);
    });

    // this.sockets[endpoint]?.on('disconnect', () => {
    //   console.log(`Disconnected from ${endpoint} socket server`);
    // });

    // this.sockets[endpoint]?.onAny((event, ...args) => {
    //   console.log(`Received event on ${endpoint}:`, event, ...args);
    // });

    return this.sockets[endpoint];
  }

  disconnect(endpoint: SocketEndpoint) {
    if (this.sockets[endpoint]) {
      this.sockets[endpoint]?.disconnect();
      delete this.sockets[endpoint];
    }
  }

  reconnect(token: string, endpoint: SocketEndpoint) {
    this.disconnect(endpoint);
    return this.connect(token, endpoint);
  }

  isConnected(endpoint: SocketEndpoint) {
    return this.sockets[endpoint]?.connected || false;
  }

  onDisconnect(callback: () => void, endpoint: SocketEndpoint) {
    if (this.sockets[endpoint]) {
      this.sockets[endpoint]?.on('disconnect', callback);
    }
  }

  emit(event: string, data: any, endpoint: SocketEndpoint) {
    if (this.sockets[endpoint]) {
      this.sockets[endpoint]?.emit(event, data);
    } else {
      console.error(`Socket for ${endpoint} is not connected. Cannot emit event:`, event);
    }
  }

  on(event: string, callback: (data: any) => void, endpoint: SocketEndpoint) {
    if (!this.listeners[endpoint][event]) {
      this.listeners[endpoint][event] = [];
    }
    this.listeners[endpoint][event].push(callback);

    if (this.sockets[endpoint]) {
      this.sockets[endpoint]?.on(event, callback);
    }
  }

  off(event: string, callback: (data: any) => void, endpoint: SocketEndpoint) {
    if (this.listeners[endpoint][event]) {
      this.listeners[endpoint][event] = this.listeners[endpoint][event].filter(cb => cb !== callback);
    }
    if (this.sockets[endpoint]) {
      this.sockets[endpoint]?.off(event, callback);
    }
  }

  private reattachListeners(endpoint: SocketEndpoint) {
    Object.entries(this.listeners[endpoint]).forEach(([event, callbacks]) => {
      callbacks.forEach(callback => {
        if (this.sockets[endpoint]) {
          this.sockets[endpoint]?.on(event, callback);
        }
      });
    });
  }
}

export const socketService = new SocketService();