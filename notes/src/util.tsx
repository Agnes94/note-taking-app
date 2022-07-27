import React from "react";
  
export const useClickOutside = (ref: React.MutableRefObject<any>, handler: (arg0: any) => void) => {
  React.useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const listener = (event: MouseEvent) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

      handler && handler(event);
    };

    const validateEventStart = (event: MouseEvent) => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};