"use client";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export default function TechStack() {
const sponsors = [
  "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/reactjs_logo_dark_yjvx0e.svg",
  "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg",
  "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tailwindcss_logo_4kzqpm.svg",
  "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/typescript_logo_ghs3kz.svg",
  "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/javascript_logo_tk0l9u.svg",
  "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/adonisjs_logo_hzq8qj.svg",
  "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/inertiajs_logo_vvq7qy.svg",
];

  useEffect(() => {
    const scrollAnimation = setInterval(() => {
      const scroller = document.querySelector(".scrolling-list");
      if (scroller) {
        scroller.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(scrollAnimation);
  }, []);

  return (
    <section className="pb-20 pt-20 md:pb-32 md:pt-32 container mx-auto">
      <div className="text-center space-y-4 mx-auto max-w-4xl pb-8">
        <Badge>TRUSTED BY</Badge>
        <h2 className="mx-auto mt-4 text-3xl font-bold sm:text-5xl tracking-tight">
          Explore the Future of Innovation
        </h2>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <style>
          {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          @keyframes marquee-vertical {
            from { transform: translateY(0); }
            to { transform: translateY(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-marquee-vertical {
            animation: marquee-vertical 20s linear infinite;
          }
        `}
        </style>
        <Marquee
          pauseOnHover
          className="[--duration:20s] ms-2 flex shrink-0 flex-row justify-around gap-2"
        >
          {sponsors.map((sponsor, index) => (
            <Image
              key={index}
              src={sponsor}
              className="h-12 w-36"
              width={136}
              height={48}
              alt={`logo`}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
