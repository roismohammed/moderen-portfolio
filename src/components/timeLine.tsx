"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { RiArrowRightSLine, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAdonisjs, SiMysql, SiShadcnui, SiTypescript } from "react-icons/si";
import { ShinyButton } from "@/components/magicui/shiny-button";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  companyUrl: string;
  employmentType: string;
  period: string;
  location: string;
  description: string[];
  techStack?: {
    icon: React.ReactNode;
    className: string;
  }[];
  certificateUrl?: string;
}

export const Timeline = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: "Front-end Web Developer",
      company: "Pt Jadi Mudah Nusantara",
      companyUrl: "http://jadimudah.id/",
      employmentType: "Freelance",
      period: "Okt 2024 - Present 1 mos",
      location: "indonesia · Remote",
      description: [
        "Mengembangkan website undangan digital yang responsif menggunakan Tailwind CSS.",
        "Membuat animasi interaktif menggunakan Animate on Scroll (AOS).",
        "Melakukan hosting website secara online menggunakan Vercel."
      ],
      certificateUrl: '/pdf/sertifikat.pdf'
    },
    {
      id: 2,
      title: "Fullstack Web Developer",
      company: "Pt Puspetindo",
      companyUrl: "https://puspetindo.com",
      employmentType: "Full Time",
      period: "Agustus - Oktober 2024 - 3 mos",
      location: "Indonesia - Gresik",
      description: [
        "Mengembangkan aplikasi manajemen data internal menggunakan TypeScript (React.ts) untuk menangani tugas-tugas terkait data secara efektif dalam organisasi.",
        "Tetap mengikuti perkembangan teknologi baru dan tren industri untuk terus meningkatkan sistem dan kemampuan perangkat lunak.",
        "Ada fitur untuk mengelola data karyawan.",
        "Terdapat menu laporan untuk melihat data perusahaan dan karyawan."
      ],
      techStack: [
        { icon: <SiTypescript size={20} />, className: "text-blue-600" },
        { icon: <SiShadcnui size={20} />, className: "bg-zinc-800 text-white p-1" },
        { icon: <RiTailwindCssFill size={20} />, className: "text-cyan-400" },
        { icon: <RiReactjsFill size={20} />, className: "text-blue-500" },
        { icon: <SiAdonisjs size={20} />, className: "text-blue-600" },
        { icon: <SiMysql size={20} />, className: "text-red-400" }
      ]
    }
  ];

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl lg:-mx-6 mt-10 md:lg:mt-10 lg:mb-20">
        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div key={item.id} className={`flex justify-start pt md:pt-4 md:gap-10 ${index > 0 ? 'mt-10 lg:mt-10' : ''}`}>
            <div className="flex flex-col items-start self-start md:w-full">
              {/* Timeline dot */}
              <div className="sticky top-28">
                <div className={`h-7 absolute left-5 md:left-[${index === 0 ? '13' : '5'}] w-7 rounded-full bg-white dark:bg-black flex items-center justify-center z-10 border-2 border-blue-500`}>
                  <div className={`h-4 w-4 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-blue-200'} dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2`} />
                </div>
              </div>
              
              {/* Content */}
              <div className="block flex-col w-full items-start mt-2 px-16 md:pl-20 gap-">
                <p className="text-lg md:text-lg font-bold text-black dark:text-neutral-300">
                  {item.title}
                </p>
                <div>
                  <div className="flex items-center w-full">
                    <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                      <p className="font-bold text-neutral-500 underline text-md lg:text-lg">
                        {item.company}
                      </p>
                    </a>
                    <p className="text-neutral-500">. {item.employmentType}</p>
                  </div>
                  <div className="text-md lg:text-lg text-neutral-500">
                    <p className="py-1">{item.period}</p>
                    <p>{item.location}</p>
                    
                    {item.certificateUrl && (
                      <div className="mt-2">
                        <a href={item.certificateUrl} className='mt-30'>
                          <ShinyButton className='flex shadow-lg items-center justify-center gap-2 group mt-2'>
                            My Sertifikat
                            <RiArrowRightSLine size={20} className="transition-transform duration-300 transform group-hover:translate-x-1" />
                          </ShinyButton>
                        </a>
                      </div>
                    )}

                    {item.techStack && (
                      <div className="mt-2 flex items-center gap-2">
                        {item.techStack.map((tech, i) => (
                          <span key={i} className={`bg-gray-100 dark:bg-zinc-800 p-2 rounded-md z-50 ${tech.className}`}>
                            {tech.icon}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="mt-2 list-disc list-outside pl-5 text-justify">
                      {item.description.map((desc, i) => (
                        <li key={i} className={i > 0 ? 'py-1' : ''}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};