"use client"
import React from "react";
import { GiSkills } from "react-icons/gi";
import { HoverEffect } from "./ui/card-hover-effect";
import { FaGitAlt, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  const Skills=[
    {
      title:'JavaScript',
      icon: SiJavascript  ,
    },
    {
      title:'React',
      icon: FaReact ,
    },
    {
      title:'Next.JS',
      icon: SiNextdotjs ,
    },
    {
      title:'Tailwind CSS',
      icon: RiTailwindCssFill  ,
    },
    {
      title:'Git',
      icon: FaGitAlt  ,
    },
    {
      title:'React',
      icon: FaReact ,
    },
  ]
  return (
    <section className="max-w-5xl mx-auto px-8">
      <div className="flex flex-col items-center justify-center -rotate-6">
        <h2 className="flex items-center gap-2 group-hover:title-green-400 transition-all duration-300">
          Skills <GiSkills />
        </h2>
        <div className="w-32 h-2 bg-green-500 rounded-full"></div>
        <div className="w-32 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>
      <HoverEffect items={Skills}/>
    </section>
  );
}
