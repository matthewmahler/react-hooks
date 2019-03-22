import { useLayoutEffect } from "react";

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    //also can use a function with a name
    //return function cleanup() => {
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}

export { useBodyScrollLock };
