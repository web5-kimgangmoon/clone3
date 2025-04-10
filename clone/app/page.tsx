"use client";

import Header from "./ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen bg-white"></div>
      <div className="h-screen bg-purple-300"></div>
      <div className="h-screen bg-slate-300"></div>
    </>
  );
}
