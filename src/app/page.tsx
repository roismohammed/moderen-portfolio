import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import TechStack from "@/components/TechStack";
import { RiRocket2Fill } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);

  return (
    <div className="space-y-16">

      <section className="pb-20 pt-10 md:pb-32 md:pt-">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-3 md:mx-auto">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm rounded-lg py-1">
              <span className="mr-2 text-primary">
                <Badge>New</Badge>
              </span>
              <span> Design is out now! </span>
            </Badge>

            <div className="max-w-screen-md mx-auto text-center text-6xl md:text-8xl tracking-tighter font-bold">
              <h1>
                Muhammad Rois
                <span className="relative inline-flex sm:inline">
                  <span className="absolute inset-0 bg-gradient-to-r  opacity-30"></span>
                  <span className="relative text-transparent px-2 bg-gradient-to-r from-primary bg-clip-text">
                    Software Enginer
                  </span>
                </span>
              </h1>
            </div>

            <p className="max-w-screen-md mx-auto text-xl text-muted-foreground">
              A Software Enginer freelancer with a passion for building scalable and
              maintainable software. Specialized in Next.js, Tailwind CSS, and
              TypeScript.
            </p>

            <div className="flex justify-center gap-2 lg:gap-0 space-y-4 md:space-y-0 md:space-x-4">
              <Button className="w-2/5 lg:w-2/6 md:w-1/4 font-bold group/arrow">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-2/5 lg:w-2/6 md:w-1/4 font-bold"
              >
                <Link href="#" target="_blank">
                  Github respository
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <TechStack />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <div className='mt-20'>
        <div className='bg-gray-100 p-5 dark:bg-zinc-800 rounded-xl'>
          <p className='text-xl flex items-center gap-1 font-bold'> <RiRocket2Fill className='rotate-45' /> Ayo Bekerja sama!</p>
          <p className='text-gray-700 dark:text-gray-400 py-2'>Saya bersedia mengerjakan proyek lepas dan ingin menjajaki kemungkinan kolaborasi. Jangan ragu untuk mengirim email kepada saya, dan mari kita bahas bagaimana kita dapat bekerja sama!</p>
          <a href='mailto:id.roismohammed@gmail.com'>
            <Button className="flex items-center bg-transparent border border-gray-300 shadow-none text-black hover:bg-gray-200 dark:hover:bg-zinc-900 outline-none dark:text-white">
              Hubungi Saya
            </Button>
          </a>

        </div>


      </div>
    </div>
  );
}