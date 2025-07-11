import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { projects } from "@/lib/constants";
import TechStack from "@/components/TechStack";

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Hi, I m <span className="text-primary">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Freelance Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground">
                I build modern web applications with Next.js, TypeScript, and Tailwind CSS.
                Specializing in responsive, accessible, and performant solutions.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-primary/10 p-8 rounded-xl aspect-square flex items-center justify-center">
                <Globe className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-accent/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <TechStack />
        </div>
      </section >

      {/* Featured Projects */}
      < section className="py-12" >
        <div className="container mx-auto px-4">
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
      </ section>

      {/* Experience */}
      <section className="py-12 bg-accent/50" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <ExperienceTimeline />
        </div>
      </section >
    </div >
  );
}