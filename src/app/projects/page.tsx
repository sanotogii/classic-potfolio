"use client";

import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CiShare1 } from "react-icons/ci";
import { getAllProjects } from "@/lib/projects-data";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-[#b97084] pb-4">
        Projects
      </h1>
      <Input placeholder="Search" />
      <hr className="my-4" />
      <ul className="">
        {projects.map((project, index) => (
          <li key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-bold text-3xl">
                    {project.title}
                  </h2>
                  <p className="font-light text-gray-500 pr-2">
                    {project.period}
                  </p>
                </div>

                <p className="pt-1">{project.shortDescription}</p>
              </Link>
              <div className="flex items-center font-light text-gray-500 pt-4">
                <div className="flex items-center gap-2">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.links?.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <CiShare1 className="ml-auto" size={20} />
              </div>
              <hr className="my-4" />
            </motion.div>
          </li>
        ))}
      </ul>
    </>
  );
}
