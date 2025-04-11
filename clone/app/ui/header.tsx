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
          <CenterHeader isTop={isTop} breakpoint={breakpoint} />
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
        <CenterHeader_top isTop={isTop} breakpoint={breakpoint} />
      </div>
    </motion.header>
  );
}

// const CenterHeader = ({ isTop }: { isTop: boolean }) => {
//   return (
//     <motion.div
//       className="flex flex-col items-center w-full h-[80px] max-w-[360px] overflow-visible"
//       initial={{ translateY: "0" }}
//       animate={isTop ? { translateY: "0" } : { translateY: "-100%" }}
//       transition={{ bounce: 0 }}
//     >
//       <div className="w-full h-full flex basis-full shrink-0 justify-center items-center gap-7 text-lg font-[250]">
//         <button className="cursor-pointer">숙소</button>
//         <button className="text-zinc-500 cursor-pointer">체험</button>
//       </div>
//       <motion.div
//         className={clsx(
//           "h-full basis-full shrink-0 flex justify-center items-center",
//           isTop ? "max-w-[630px]" : "max-w-[360px]"
//         )}
//         initial={{ width: "100vw", scale: 1.35 }}
//         animate={{
//           width: isTop ? "100vw" : "100%",
//           scale: isTop ? [1, 2.5, 1.35] : 1,
//         }}
//       >
//         <motion.div
//           className={clsx("w-full h-[48px] bg-red-300")}
//           initial={
//             {
//               // opacity: 1
//             }
//           }
//           animate={{
//             opacity: isTop ? [1, 0, 1] : 1,
//           }}
//           transition={{
//             opacity: {
//               tiems: [0, 0.7, 1],
//             },
//             scale: { times: [0, 0.7, 1] },
//           }}
//         ></motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

const CenterHeader = ({
  isTop,
  breakpoint,
}: {
  isTop: boolean;
  breakpoint: string;
}) => {
  return (
    <div
      className={clsx(
        "relative w-full max-w-[408px] h-full px-[24px] shink-0 basis-full"
      )}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-full h-[80px] px-[24px] overflow-visible"
        initial={{ translateY: "0", opacity: 1 }}
        animate={{
          opacity: isTop ? 0 : 1,
          translateY: isTop
            ? `${breakpoint === "xl" ? "0%" : "100%"}`
            : `-100%`,
          translateX: isTop ? `${breakpoint === "xl" ? "0%" : "200px"}` : "0%",
        }}
        transition={{
          opacity: {
            tiems: [0, 1],
            delay: isTop ? 0 : 0.15,
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
            className={clsx("w-[100%] h-[48px] bg-red-300")}
            initial={{
              scaleX: 1,
              scaleY: 1,
              // opacity: 1
            }}
            animate={{
              scaleX: isTop ? 2.361 : 1,
              scaleY: isTop ? 1.33 : 1,
            }}
            transition={{
              duration: 0.15,
              bounce: 0,
            }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
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
        translateX: isTop ? "0%" : `${breakpoint === "xl" ? "0%" : "-200px"}`,
        translateY: isTop ? "0" : `${breakpoint === "xl" ? "-100%" : "-200%"}`,
      }}
      transition={{
        opacity: {
          tiems: [0, 1],
          delay: isTop ? 0.15 : 0,
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
