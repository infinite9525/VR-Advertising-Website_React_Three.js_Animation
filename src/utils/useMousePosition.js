import React from 'react';
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    const updateTouchPosition = (ev) => {
      setMousePosition({ x: ev.touches[0].clientX, y: ev.touches[0].clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateTouchPosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateTouchPosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
