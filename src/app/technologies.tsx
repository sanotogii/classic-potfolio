import React from "react";
import { FaReact, FaDocker, FaJava } from "react-icons/fa";
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

const Technologies = () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl pb-6 font-serif font-bold">Technologies</h1>

      {/* Frontend Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Frontend
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="relative group cursor-pointer">
            <FaReact className="text-3xl sm:text-4xl  group-hover:text-[#61DAFB] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              React.js
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiNextdotjs className="text-3xl sm:text-4xl  transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Next.js
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiTailwindcss className="text-3xl sm:text-4xl  group-hover:text-[#06B6D4] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Tailwind CSS
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiTypescript className="text-3xl sm:text-4xl  group-hover:text-[#3178C6] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              TypeScript
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiShadcnui className="text-3xl sm:text-4xl  transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              shadcn/ui
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiReactquery className="text-3xl sm:text-4xl  group-hover:text-[#FF4154] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              TanStack Query
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiFramer className="text-3xl sm:text-4xl   group-hover:text-[#0055FF] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Motion
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiVite className="text-3xl sm:text-4xl group-hover:text-[#646CFF] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Vite
            </span>
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Backend & Databases
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="relative group cursor-pointer">
            <SiMongodb className="text-3xl sm:text-4xl  group-hover:text-[#47A248] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              MongoDB
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiPostgresql className="text-3xl sm:text-4xl  group-hover:text-[#4169E1] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              PostgreSQL
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiSupabase className="text-3xl sm:text-4xl  group-hover:text-[#3ECF8E] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Supabase
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiAppwrite className="text-3xl sm:text-4xl  group-hover:text-[#FD366E] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Appwrite
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiMysql className="text-3xl sm:text-4xl  group-hover:text-[#4479A1] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              MySQL
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <FaJava className="text-3xl sm:text-4xl  group-hover:text-[#007396] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Jakarta
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiExpress className="text-3xl sm:text-4xl  group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Express JS
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiFastapi className="text-3xl sm:text-4xl  group-hover:text-[#009688] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              FastAPI
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiSpringboot className="text-3xl sm:text-4xl  group-hover:text-[#6DB33F] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Spring Boot
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiFlask className="text-3xl sm:text-4xl  group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Flask
            </span>
          </div>
        </div>

        {/* AI & Tools Section */}
        <div className="mb-8 mt-6">
          <h2 className="text-lg font-semibold mb-4">
            AI & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="relative group cursor-pointer">
              <SiLangchain className="text-3xl sm:text-4xl group-hover:text-[#1C3C3C] transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                LangChain
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiStreamlit className="text-3xl sm:text-4xl group-hover:text-[#FF4B4B] transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Streamlit
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <FaDocker className="text-3xl sm:text-4xl group-hover:text-[#2496ED] transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Docker
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiN8N className="text-3xl sm:text-4xl  group-hover:text-[#EA4B71] transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                n8n
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
