import { useRef, useEffect } from "react";

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};

// check element types below link:
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/global.d.ts
