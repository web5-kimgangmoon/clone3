import { useBreakpointStore } from "../global/zustand";

export default function () {
  return useBreakpointStore((state) => state.breakpoint);
}
