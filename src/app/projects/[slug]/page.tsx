"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { getProjectBySlug, Project } from "@/lib/projects-data";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [project, setProject] = useState<Project | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  // Get slug from params
  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  // Fetch project when slug is available
  useEffect(() => {
    if (!slug) return;

    const projectData = getProjectBySlug(slug);
    if (!projectData) {
      notFound();
    }
    setProject(projectData);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading project...</div>
      </div>
    );
  }

  return (
    <>
      <Link
        className="text-gray-500 text-sm mb-4 hover:text-gray-700 dark:hover:text-gray-300 inline-block"
        href={"/projects"}
      >
        ← Back to projects
      </Link>

      <div className="mt-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 pr-4">
            <h1 className="font-bold text-4xl md:text-5xl font-serif mb-2">
              {project.title}
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {project.period}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaGithub className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
              </a>
            )}
            {project.links?.external && (
              <a
                href={project.links.external}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <ExternalLink className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
              </a>
            )}
          </div>
        </div>

        <hr className="my-6" />

        <div className="space-y-8">
          {/* Tech Stack Section */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              Built with:
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 group"
                  >
                    <Icon
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Description */}
          <div>
            {project.fullDescription.map((paragraph, index) => (
              <p
                key={index}
                className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Features Section */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
              What it does:
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-neutral-700 dark:text-neutral-300"
                >
                  <span className="mr-3 mt-1 text-neutral-500">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Team Section */}
          {project.team && project.team.length > 0 && (
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Built with{" "}
                {project.team.map((member, index, array) => (
                  <React.Fragment key={member.name}>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-neutral-900 dark:hover:text-neutral-300"
                    >
                      {member.name}
                    </a>
                    {index < array.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}

          {/* Note Section */}
          {project.note && (
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                {project.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
