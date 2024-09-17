import Link from "next/link";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { MovingBorderBtn } from "./ui/moving-border";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-between min-h-[60vh] flex-col gap-14 md:flex-row md:gap-0">
      <div className="space-y-10 text-center md:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋🏻 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            I&apos;m Abanoub
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Egypt, I&apos;m a Front-End Developer passionate about building a modern web application that users love "
          }
        </p>
        <Link
          href={"mailto:abanoubabdelmessih110@gmail.com"}
          className="inline-block group text-xl"
        >
          <div className="">
            <h2 className="flex items-center gap-2 group-hover:text-green-400 transition-all duration-300">
              Contact me <BiLogoGmail />{" "}
            </h2>
            <div className="w-32 h-2 bg-green-500 rounded-full"></div>
            <div className="w-32 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative ">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>
              <MdOutlineWorkOutline className="inline-block" /> Available for
              work
            </p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
