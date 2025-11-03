import { useEffect, useCallback, RefObject } from 'react';

export const useInfiniteScroll = (
  ref: RefObject<HTMLElement>,
  loadMore: () => void,
  hasMore: boolean
) => {
  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore) {
        loadMore();
      }
    }
  }, [ref, loadMore, hasMore]);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref, handleScroll]);
};