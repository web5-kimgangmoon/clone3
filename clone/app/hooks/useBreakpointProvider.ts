import { useEffect } from "react";
import { useBreakpointStore } from "../global/zustand";

export default function () {
  const setBreakpoint = useBreakpointStore((state) => state.setBreakpoint);
  useEffect(() => {
    setBreakpoint(window.innerWidth);
    window.addEventListener("resize", (e) => {
      if (e.target instanceof Window) setBreakpoint(e.target.innerWidth);
    });
  }, []);
}
