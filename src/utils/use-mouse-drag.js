import { useEffect, useState } from 'react';

const useMouseDrag = () => {
  const [mouseAction, setMouseAction] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const mouseDown = (e) => {
      setIsDragging(false);
      setStartPosition(e.pageX);
    };
    const mouseUp = (e) => {
      if (isDragging === true && Math.abs(e.pageX - startPosition) > 100) {
        setMouseAction((prev) => !prev);
      }
    };
    const mouseMove = () => {
      setIsDragging(true);
    };

    const touchDown = (e) => {
      setIsDragging(false);
      setStartPosition(e.touches[0].pageX);
    };
    const touchUp = (e) => {
      if (
        isDragging === true &&
        Math.abs(e.changedTouches[0].pageX - startPosition) > 100
      ) {
        setMouseAction((prev) => !prev);
      }
    };
    const touchMove = () => {
      setIsDragging(true);
    };

    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('touchstart', touchDown);
    window.addEventListener('touchend', touchUp);
    window.addEventListener('touchmove', touchMove);

    return () => {
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('touchstart', touchDown);
      window.removeEventListener('touchend', touchUp);
      window.removeEventListener('touchmove', touchMove);
    };
  }, [isDragging]);

  return mouseAction;
};

export default useMouseDrag;
