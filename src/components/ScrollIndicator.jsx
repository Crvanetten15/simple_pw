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
    <div className="fixed left-0 top-0 z-50 h-full">
      <div className="bg-white w-2 h-full" style={{ height: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;
