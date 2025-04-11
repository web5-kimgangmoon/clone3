"use client";

import useBreakpointProvider from "./hooks/useBreakpointProvider";
import Header from "./ui/header";

export default function Home() {
  useBreakpointProvider();
  return (
    <>
      <Header />
      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-purple-300"></div>
      <div className="h-screen bg-slate-300"></div>
    </>
  );
}
