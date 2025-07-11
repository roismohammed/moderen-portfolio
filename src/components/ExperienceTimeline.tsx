import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/constants";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border -z-10 md:left-1/2" />
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 mt-1.5 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-ml-1.5" />
            
            <div className="hidden md:flex md:w-1/2"></div>
            
            <div className="ml-10 md:ml-0 md:w-1/2">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              <div className="ml-7 space-y-2">
                <p className="font-medium text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.startDate} - {exp.endDate || "Present"} • {exp.location}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}