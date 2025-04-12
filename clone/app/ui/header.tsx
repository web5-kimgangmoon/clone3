import { Earth } from "@/public/earth";
import { Logo } from "@/public/logo";
import { Logo_m } from "@/public/logo_m";
import { PersonIcon } from "@/public/personIcon";
import clsx from "clsx";
import { motion, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import useBreakpoint from "../hooks/useBreakpoint";

export default function Header() {
  const scroll = useScroll();
  const breakpoint = useBreakpoint();
  const [isTop, setIsTop] = useState(true);

  scroll.scrollY.on("change", (l) => {
    if (l === 0) setIsTop(true);
    else setIsTop(false);
  });
  return (
    <motion.header
      className="fixed top-0 left-0 xl:max-h-[160px] w-full border-b border-gray-300"
      initial={{ height: "240px" }}
      animate={isTop ? { height: "240px" } : { height: "80px" }}
    >
      <div className="container relative h-full">
        <div className="flex items-center h-[80px]">
          <div className="w-max lg:w-full flex justify-start shrink">
            <Link
              className="block hover:text-red-400 transition-colors"
              href={"/"}
            >
              <div className="hidden xl:block">
                <Logo />
              </div>
              <div className="block xl:hidden">
                <Logo_m />
              </div>
            </Link>
          </div>
          <div
            className="w-full h-full basis-full"
            style={{ flex: "0 1 auto" }}
          >
            <div className={clsx("relative w-full h-full")}>
              <CenterHeader isTop={isTop} breakpoint={breakpoint} />
            </div>
            <CenterHeader_top isTop={isTop} breakpoint={breakpoint} />
          </div>
          <div className="w-full flex justify-end">
            <div className="flex items-center gap-3">
              <Link
                className="inline-block hover:bg-zinc-100 py-2 px-4 rounded-3xl text-nowrap"
                href={"#"}
              >
                당신의 공간을 에어비앤비하세요
              </Link>
              <button className="inline-block w-[24px] cursor-pointer ">
                <Earth />
              </button>
              <button className="flex items-center gap-4 pl-4 p-2 border border-gray-300 rounded-[5rem] cursor-pointer">
                <div className="flex flex-col gap-[0.15rem] w-[0.9rem]">
                  <div className="w-full border-b-2 border-gray-600"></div>
                  <div className="w-full border-b-2 border-gray-600"></div>
                  <div className="w-full border-b-2 border-gray-600"></div>
                </div>
                <div className="w-[32px] text-gray-600">
                  <PersonIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

const CenterHeader = ({
  isTop,
  breakpoint,
}: {
  isTop: boolean;
  breakpoint: string;
}) => {
  return (
    <motion.div
      className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center max- w-full h-[80px] px-[24px] overflow-visible"
      initial={{ translateY: "0", opacity: 1 }}
      animate={{
        opacity: isTop ? 0 : 1,
        translateY: isTop ? `${breakpoint === "xl" ? "0%" : "100%"}` : `-100%`,
        translateX: isTop
          ? `${
              breakpoint !== "xl" && breakpoint !== "lg"
                ? "calc( 50vw - 50% - 54px )"
                : "0%"
            }`
          : "0%",
        display: isTop ? "none" : "block",
      }}
      transition={{
        opacity: {
          tiems: [0, 1],
          duration: 0.1,
          delay: isTop ? 0 : 0.1,
        },
        display: {
          duration: 0,
          delay: 0.1,
        },
        scale: { times: [0, 1] },
        bounce: 0,
        duration: 0.15,
      }}
    >
      <div className=" h-full flex basis-full shrink-0 justify-center items-center gap-7 text-lg font-[250]">
        <button className="cursor-pointer">숙소</button>
        <button className="text-zinc-500 cursor-pointer">체험</button>
      </div>
      <div className={clsx("h-full flex justify-center items-center")}>
        <motion.button
          className={clsx("flex min-w-0 h-[48px] bg-red-300 cursor-pointer")}
          initial={{
            scaleX: 1,
            scaleY: 1,
          }}
          animate={{
            scaleX: isTop ? 2.361 : 1,
            scaleY: isTop ? 1.33 : 1,
          }}
          transition={{
            duration: 0.15,
            bounce: 0,
          }}
          style={{
            gridTemplateColumns:
              "minmax(0, min-content) min-content minmax(0, min-content) min-content minmax(0, min-content)",
          }}
        >
          <div className=" items-center min-w-0 max-w-min">
            <div
              className={clsx("relative px-4 truncate min-w-0")}
              // style={{
              //   flex: "1 1 auto",
              // }}
            >
              어디든지
            </div>
          </div>
          <div className="w-[1px] h-[28px] my-[10px] border-r" />
          <div className=" items-center min-w-0 max-w-min">
            <div
              className={clsx("relative px-4 truncate min-w-0")}
              // style={{
              //   flex: "1 1 auto",
              // }}
            >
              언제든지 일주일
            </div>
          </div>
          <div className="w-[1px] h-[28px] my-[10px] border-r" />
          <div className=" items-center min-w-0 max-w-min">
            <div
              className={clsx("relative px-4 truncate min-w-0")}
              // style={{
              //   flex: "1 1 auto",
              // }}
            >
              게스트 추가
            </div>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

const CenterHeader_top = ({
  isTop,
  breakpoint,
}: {
  isTop: boolean;
  breakpoint: string;
}) => {
  return (
    <motion.div
      className="absolute top-[80px] xl:top-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-full max-w-[850px] h-[80px] overflow-visible"
      initial={{ translateY: "0", opacity: isTop ? [1, 0] : 1 }}
      animate={{
        opacity: isTop ? 1 : 0,
        translateY: isTop ? "0" : `${breakpoint === "xl" ? "-100%" : "-200%"}`,
        translateX: isTop
          ? "0%"
          : `${
              breakpoint !== "xl" && breakpoint !== "lg"
                ? "calc( -50vw + 239px )"
                : "0%"
            }`,
        display: isTop ? "block" : "none",
      }}
      transition={{
        opacity: {
          tiems: [0, 1],
          duration: 0.1,
          delay: isTop ? 0.1 : 0,
        },
        display: {
          duration: 0,
          delay: 0.1,
        },
        scale: { times: [0, 1] },
        bounce: 0,
        duration: 0.15,
      }}
    >
      <div className="w-full h-full flex basis-full shrink-0 justify-center items-center gap-7 text-lg font-[250]">
        <button className="cursor-pointer">숙소</button>
        <button className="text-zinc-500 cursor-pointer">체험</button>
      </div>
      <div
        className={clsx(
          "w-full h-full basis-full shrink-0 flex justify-center items-center"
        )}
      >
        <motion.div
          className={clsx("w-[100%] h-[64px] bg-red-300")}
          animate={{
            scaleY: isTop ? 1 : 0.75,
            scaleX: isTop ? 1 : 0.42353,
          }}
          transition={{
            duration: 0.15,
            bounce: 0,
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};
