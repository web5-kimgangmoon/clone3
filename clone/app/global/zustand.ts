import { create } from "zustand";
import getBreakpoint from "../lib/getBreakpoint";

type BreakpointState = { breakpoint: string };
type BreakpointActions = {
  setBreakpoint: (size: number) => void;
};

type BreakpointStore = BreakpointState & BreakpointActions;
export const useBreakpointStore = create<BreakpointStore>()((set) => ({
  breakpoint: "xl",
  setBreakpoint: (size) => set({ breakpoint: getBreakpoint(size) }),
}));
