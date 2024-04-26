import { useEffect, useRef } from "react";

export function useScrollToBottom() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView(false);
    }
  }, []);

  return ref;
}
