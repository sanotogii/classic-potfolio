"use client";

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { CiShare1 } from "react-icons/ci";
import { getAllProjects } from "@/lib/projects-data";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) ||
        (p.id && p.id.toLowerCase().includes(q))
    );
  }, [projects, query]);

  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#c96442] pb-4">
        Projects
      </h1>
      <div className="relative ">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <Input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      <hr className="my-4" />
      <ul className="">
        {filtered.length === 0 ? (
          <li className="py-6 text-center ">No projects found</li>
        ) : (
          filtered.map((project, index) => (
            <li key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#575279] dark:text-[#c3c0b6]">
                      {project.title}
                    </h2>
                    <p className="font-ligh text-sm pr-2">
                      {project.period}
                    </p>
                  </div>

                  <p className="pt-1 text-sm">{project.shortDescription}</p>
                </Link>
                {/* <div className="flex items-cente justify-end font-light pt-4 ml-">
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
                </div> */}
                <hr className="my-4" />
              </motion.div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
