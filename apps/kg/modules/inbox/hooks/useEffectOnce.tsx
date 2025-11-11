import { useEffect, useRef } from 'react';

const useEffectOnce = (effect: () => void | (() => void)) => {
  const destroyFunc = useRef<void | (() => void)>();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    // Only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }

    // This is the cleanup function
    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);
};

export default useEffectOnce;