import { useState } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

type ReturnType = {
  locked: boolean;
  updateLocked: (_: boolean) => void;
};

const useLockedBody = (): ReturnType => {
  const [locked, setLocked] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);

  const updateLocked = (currentLocked: boolean) => setLocked(currentLocked);

  return { locked, updateLocked };
};

export default useLockedBody;
