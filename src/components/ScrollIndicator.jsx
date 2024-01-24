import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const listenToScrollEvent = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollEvent);

    return () => window.removeEventListener("scroll", listenToScrollEvent);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-light-blue h-2" style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;
