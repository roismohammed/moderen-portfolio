import { Project } from "@/lib/constants";
import { Button } from "./ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}



export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted">
        {project.image && (
          <Image
            src={`/projects/${project.image}`}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.type}</p>
        </div>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          <Button size="sm" asChild>
            <Link href={`/projects/${project.id}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}