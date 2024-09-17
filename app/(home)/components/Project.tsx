import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiPolymerproject } from "react-icons/si";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Project() {
  const projects = [
    {
      title: "E-Commerce",
      tech: [FaReact, SiNextdotjs, RiTailwindCssFill],
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
      cover: "/image.png",
      background: "bg-indigo-500",
    },
    {
      title: "E-Commerce",
      tech: [FaReact, SiNextdotjs, RiTailwindCssFill],
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
      cover: "/image.png",
      background: "bg-green-500",
    },
    {
      title: "E-Commerce",
      tech: [FaReact, SiNextdotjs, RiTailwindCssFill],
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
      cover: "/image.png",
      background: "bg-red-500",
    },
    {
      title: "E-Commerce",
      tech: [FaReact, SiNextdotjs, RiTailwindCssFill],
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
      cover: "/image.png",
      background: "bg-indigo-500",
    },
    {
      title: "E-Commerce",
      tech: [FaReact, SiNextdotjs, RiTailwindCssFill],
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
      cover: "/image.png",
      background: "bg-green-500",
    },
    {
      title: "E-Commerce",
      tech: [FaReact, SiNextdotjs, RiTailwindCssFill],
      link: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
      cover: "/image.png",
      background: "bg-red-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <div className="flex flex-col items-center justify-center rotate-6">
        <h2 className="flex items-center gap-2 group-hover:title-green-400 transition-all duration-300">
          Projects <SiPolymerproject />
        </h2>
        <div className="w-32 h-2 bg-green-500 rounded-full"></div>
        <div className="w-32 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 pt-20">
        {projects.map((project, index) => {
          return (
            <Link target="_blank" href={project.link} key={index}>
              <div className={cn("p-1 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer bg-cover"
                >
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className=" flex gap-4 ">
                      {project.tech.map((Tech, index) => {
                        return <Tech key={index} className="w-8 h-8" />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
