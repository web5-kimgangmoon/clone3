import { Earth } from "@/public/earth";
import { Logo } from "@/public/logo";
import { PersonIcon } from "@/public/personIcon";
import clsx from "clsx";
import { motion, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const scroll = useScroll();
  const [isTop, setIsTop] = useState(true);

  scroll.scrollY.on("change", (l) => {
    if (l === 0) setIsTop(true);
    else setIsTop(false);
  });
  return (
    <motion.header
      className="fixed top-0 left-0 w-full border-b border-gray-300"
      initial={{ height: "160px" }}
      animate={isTop ? { height: "160px" } : { height: "80px" }}
    >
      <div className="container flex items-center h-[80px]">
        <div className="w-full flex justify-start">
          <Link
            className="block hover:text-red-400 transition-colors"
            href={"/"}
          >
            <Logo />
          </Link>
        </div>
        <CenterHeader isTop={isTop} />
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
    </motion.header>
  );
}

const CenterHeader = ({ isTop }: { isTop: boolean }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full h-[80px] max-w-[360px] overflow-visible"
      initial={{ translateY: "0" }}
      animate={isTop ? { translateY: "0" } : { translateY: "-100%" }}
      transition={{ bounce: 0 }}
    >
      <div className="w-full h-full flex basis-full shrink-0 justify-center items-center gap-7 text-lg font-[250]">
        <button className="cursor-pointer">숙소</button>
        <button className="text-zinc-500 cursor-pointer">체험</button>
      </div>
      <div className="w-max h-full basis-full shrink-0 flex justify-center items-center">
        <motion.div
          className={clsx("h-[48px] bg-red-300")}
          initial={{
            scale: 1.35,
            // opacity: 1
          }}
          animate={{
            scale: isTop ? [1, 2.5, 1.35] : 1,
            width: isTop ? 630 : 360,
            opacity: isTop ? [1, 0, 1] : 1,
          }}
          transition={{
            opacity: {
              tiems: [0, 0.7, 1],
            },
            scale: { times: [0, 0.7, 1] },
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};
