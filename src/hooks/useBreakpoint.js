import { useEffect, useState } from "react";
import { breakpoints } from "./../utils";

export const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const isBrowser = () => typeof window !== "undefined";

  const handleResize = () => {
    setWindowSize({
      width: isBrowser() && window.innerWidth,
      height: isBrowser() && window.innerHeight
    });
  };

  useEffect(() => {
    isBrowser() && window.addEventListener("resize", handleResize);
    handleResize();

    if (0 < windowSize.width && windowSize.width < 640) {
      setBreakPoint(breakpoints[0]);
    }
    if (640 < windowSize.width && windowSize.width < 768) {
      setBreakPoint(breakpoints[640]);
    }
    if (768 < windowSize.width && windowSize.width < 1024) {
      setBreakPoint(breakpoints[768]);
    }
    if (1024 < windowSize.width && windowSize.width < 1280) {
      setBreakPoint(breakpoints[1024]);
    }
    if (1280 < windowSize.width && windowSize.width < 1536) {
      setBreakPoint(breakpoints[1280]);
    }
    if (windowSize.width >= 1536) {
      setBreakPoint(breakpoints[1536]);
    }

    return () =>
      isBrowser() && window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.width]);
  return breakpoint;
};
