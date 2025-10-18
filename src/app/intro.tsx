"use client";
import React from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import profilePic from "../images/profile.png";
import logoUni from "../../public/logo-uni.png";
import alxLogo from "../../public/alxLogo.png";
// import { Highlighter } from "@/components/magicui/highlighter";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  FaGithub,
  FaLinkedin,
  FaRegFileAlt,
  FaYoutube,
  FaReact,
  FaDocker,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiN8N,
  SiSupabase,
  SiExpress,
  SiFastapi,
  SiSpringboot,
  SiFlask,
  SiVite,
  SiLangchain,
  SiAppwrite,
  SiStreamlit,
  SiFramer,
  SiShadcnui,
  SiReactquery,
} from "react-icons/si";
// import { FaXTwitter } from "react-icons/fa6";
// import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Intro = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <Image
          src={profilePic}
          alt="Khalid"
          width={200}
          height={200}
          className="mt-8 rounded-xl flex-shrink-0"
          priority
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-w-0 md:min-w-[400px]"
        >
          <div className="w-full">
            <h1 className="text-4xl pt-8 font-bold font-serif">
              Hey, I'm Khalid
            </h1>
            {/* <div className='flex items-center space-x-2 text-gray-500 text-sm pt-3'>
          <Circle className='text-green-500' fill='currentColor' stroke='none' size={18} />
          <p>available for work</p>
          </div> */}

            <div className="flex items-center space-x-2 text-sm pt-3">
              <MapPin size={22} />
              <p className="text-l">Tangier, Morocco</p>
            </div>

            <p className="pt-4">
              {/* <Highlighter action="underline" color="#d4d27b"> */}
              <strong>Computer Science </strong>
              {/* </Highlighter>{" "} */}
              graduate and a{" "}
              {/* <Highlighter action="highlight" color="#87CEFA"> */}
              software developer
              {/* </Highlighter>{" "} */}
              from Morocco, doing the mixture of frontend and backend
              development.
            </p>
            <p className="font-stretch-50% pt-2">
              currently diving into docker/ai and self hosting
            </p>
          </div>
          {/*---------------------------------------------------------------------------*/}
          <div className="flex  space-x-3 pt-7.5 ">
            <a href="https://fra.cloud.appwrite.io/v1/storage/buckets/68bc2a32000c2a6b6535/files/68bc2aba00227edc73a9/download?project=68a9b63a00088e6597de&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjhiYzJiNGIwNDliYWJlNWQ1NGMiLCJyZXNvdXJjZUlkIjoiNjhiYzJhMzIwMDBjMmE2YjY1MzU6NjhiYzJhYmEwMDIyN2VkYzczYTkiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjM3MjY1OjEiLCJpYXQiOjE3NjAyOTk0NTN9.5YFOC1m93vNaeBRwwQe_a1A9KZr8uDZZ2KL9yI2xMfA">
              <Button
                className="max-w-[8rem] h-8 active:bg-gray-200"
                variant="outline"
              >
                <FaRegFileAlt /> Download CV{" "}
              </Button>
            </a>

            <a
              className="active:text-gray-400 hover:text-gray-900"
              href="https://github.com/sanotogii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>

            <a
              className="active:text-gray-400 hover:text-gray-900"
              href="https://www.linkedin.com/in/khalid-lazrag-91305423a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>

            {/*<FaYoutube />
          <FaXTwitter />*/}
          </div>
        </motion.div>
      </div>

      {/* Experience & Education Section */}
      <div className="w-full mt-8 px-2 sm:px-0">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="border rounded-lg p-4 sm:p-6">
                <div className="relative ml-4 sm:ml-6 border-l border-gray-200 dark:border-gray-700">
                  <div className="relative pb-0">
                    <span className="absolute -left-5 sm:-left-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                      <span className="text-lg sm:text-xl font-bold">💼</span>
                    </span>
                    <div className="pl-4 sm:pl-6">
                      <h2 className="pl-2 text-lg sm:text-xl font-bold">
                        Full-Stack Developer
                      </h2>
                      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <h3 className="pl-2 text-sm sm:text-base font-medium">
                          Freelance
                        </h3>
                        <span className="text-xs sm:text-sm">
                          February 2025 - April 2025
                        </span>
                      </div>
                      <ul className="mt-3 list-inside list-disc space-y-1 text-xs sm:text-sm ">
                        <li>
                          Built a full-stack sales management web app with
                          Next.js and MongoDB, featuring a dashboard to track
                          monthly sales and analytics
                        </li>
                        <li>
                          Created a desktop invoicing application using
                          Electron.js and React
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="border rounded-lg p-4 sm:p-6">
                <div className="relative ml-4 sm:ml-6 border-l border-gray-200 dark:border-gray-700">
                  <div className="relative pb-10 last:pb-0">
                    <span className="absolute -left-5 sm:-left-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                      <Image
                        src={logoUni}
                        alt="University Logo"
                        width={32}
                        height={32}
                        className="rounded-full object-cover sm:w-9 sm:h-9"
                      />
                    </span>
                    <div className="pl-4 sm:pl-6">
                      <h2 className="pl-2 sm:pl-3 text-lg sm:text-xl font-bold">
                        Abdelmalek Essaâdi University
                      </h2>
                      <div className="flex flex-col gap-1  md:flex-row md:items-center md:justify-between">
                        <h3 className="pl-2 text-sm sm:text-base font-medium">
                          Bachelor's in Computer Science
                        </h3>
                        <span className="pl-2 text-xs sm:text-sm">
                          2021 - 2025
                        </span>
                      </div>
                      <ul className="mt-3 list-inside list-disc space-y-1 text-xs sm:text-sm">
                        <li>
                          Built a solid base in software development principles
                        </li>
                        <li>
                          Learned how to design and manage database systems
                        </li>
                        <li>
                          Picked up the essentials of computer networks and how
                          they connect stuff
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative pb-0">
                    <span className="absolute -left-5 sm:-left-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                      <Image
                        src={alxLogo}
                        alt="alx Logo"
                        width={32}
                        height={32}
                        className="rounded-full object-cover sm:w-9 sm:h-9"
                      />
                    </span>
                    <div className="pl-4 sm:pl-6">
                      <h2 className="pl-2 text-lg sm:text-xl font-bold">
                        African Leadership X
                      </h2>
                      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <h3 className="pl-2 text-sm sm:text-base font-medium">
                          Software Engineering Program
                        </h3>
                        <span className="pl-2 text-xs sm:text-sm">
                          2023 - 2024
                        </span>
                      </div>
                      <ul className="mt-3 list-inside list-disc space-y-1 text-xs sm:text-sm ">
                        <li>
                          Got hands-on with backend systems, APIs, and frontend
                          builds
                        </li>
                        <li>
                          Practiced clean code, debugging, and team
                          problem-solving
                        </li>
                        <li>
                          Shifted more focus toward backend engineering as
                          projects grew
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/*--------------------------------------------------------------------------*/}

      </div>
    </div>
  );
};

export default Intro;
