"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllProjects, Project } from "@/lib/projects-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <Card
      className="cursor-pointer h-full transition-all hover:border-neutral-500 dark:hover:border-neutral-700 overflow-hidden"
      onClick={handleCardClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-serif font-bold md:text-2xl mb-2 text-[#3d3929] dark:text-[#c3c0b6]">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm mb-0 text-[#3d3929] dark:text-[#c3c0b6]">
              {project.period}
            </CardDescription>
          </div>
          <div className="flex items-start gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaGithub className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              </a>
            )}
            {project.links?.external && (
              <a
                href={project.links.external}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-sm leading-relaxed text-[#3d3929] dark:text-[#c3c0b6]">
          {project.shortDescription}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="group relative" title={tech.name}>
                <Icon
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                />
              </div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = getAllProjects();

  return (
    <div className="mt-8 mb-20">
      <div>
        <h1 className="font-serif font-bold text-2xl mb-8">Recent projects</h1>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-8 underline ">
        <Link href="/projects">more projects</Link>
      </div>
    </div>
  );
};

export default Projects;
