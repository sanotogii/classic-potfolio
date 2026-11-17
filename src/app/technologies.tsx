import React from "react";
import { FaReact, FaDocker, FaJava, FaAws } from "react-icons/fa";
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
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiNginx,
  SiLinux,
  SiGitlab,
  SiJenkins,
  SiGooglecloud,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl pb-6 font-serif font-bold text-[#575279] dark:text-[#c3c0b6]">Technologies</h1>

      {/* Frontend Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Frontend
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="relative group cursor-pointer">
            <span className="onHover-style">            React.js
            </span>
            <FaReact className="text-3xl sm:text-4xl  group-hover:text-[#61DAFB] transition-colors" />
    
          </div>

          <div className="relative group cursor-pointer">
            <SiNextdotjs className="text-3xl sm:text-4xl  transition-colors" />
            <span className="onHover-style">
              Next.js
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiTailwindcss className="text-3xl sm:text-4xl  group-hover:text-[#06B6D4] transition-colors" />
            <span className="onHover-style">
              Tailwind CSS
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiTypescript className="text-3xl sm:text-4xl  group-hover:text-[#3178C6] transition-colors" />
            <span className="onHover-style">
              TypeScript
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiShadcnui className="text-3xl sm:text-4xl  transition-colors" />
            <span className="onHover-style">
              shadcn/ui
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiReactquery className="text-3xl sm:text-4xl  group-hover:text-[#FF4154] transition-colors" />
            <span className="onHover-style">
              TanStack Query
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiFramer className="text-3xl sm:text-4xl   group-hover:text-[#0055FF] transition-colors" />
            <span className="onHover-style">
              Motion
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiVite className="text-3xl sm:text-4xl group-hover:text-[#646CFF] transition-colors" />
            <span className="onHover-style">
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
            <span className="onHover-style">
              MongoDB
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiPostgresql className="text-3xl sm:text-4xl  group-hover:text-[#4169E1] transition-colors" />
            <span className="onHover-style">
              PostgreSQL
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiSupabase className="text-3xl sm:text-4xl  group-hover:text-[#3ECF8E] transition-colors" />
            <span className="onHover-style">
              Supabase
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiAppwrite className="text-3xl sm:text-4xl  group-hover:text-[#FD366E] transition-colors" />
            <span className="onHover-style">
              Appwrite
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiMysql className="text-3xl sm:text-4xl  group-hover:text-[#4479A1] transition-colors" />
            <span className="onHover-style">
              MySQL
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <FaJava className="text-3xl sm:text-4xl  group-hover:text-[#007396] transition-colors" />
            <span className="onHover-style">
              Jakarta
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiExpress className="text-3xl sm:text-4xl  group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF] transition-colors" />
            <span className="onHover-style">
              Express JS
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiFastapi className="text-3xl sm:text-4xl  group-hover:text-[#009688] transition-colors" />
            <span className="onHover-style">
              FastAPI
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiSpringboot className="text-3xl sm:text-4xl  group-hover:text-[#6DB33F] transition-colors" />
            <span className="onHover-style">
              Spring Boot
            </span>
          </div>

          <div className="relative group cursor-pointer">
            <SiFlask className="text-3xl sm:text-4xl  group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF] transition-colors" />
            <span className="onHover-style">
              Flask
            </span>
          </div>
        </div>

        {/* DevOps & Cloud Section */}
        <div className="mb-8 mt-6">
          <h2 className="text-lg font-semibold mb-4">
            DevOps & Cloud
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="relative group cursor-pointer">
              <SiKubernetes className="text-3xl sm:text-4xl group-hover:text-[#326CE5] transition-colors" />
              <span className="onHover-style">
                Kubernetes
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <FaDocker className="text-3xl sm:text-4xl group-hover:text-[#2496ED] transition-colors" />
              <span className="onHover-style">
                Docker
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiJenkins className="text-3xl sm:text-4xl group-hover:text-[#D24939] transition-colors" />
              <span className="onHover-style">
                Jenkins
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiGitlab className="text-3xl sm:text-4xl group-hover:text-[#FC6D26] transition-colors" />
              <span className="onHover-style">
                GitLab CI
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiTerraform className="text-3xl sm:text-4xl group-hover:text-[#7B42BC] transition-colors" />
              <span className="onHover-style">
                Terraform
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiAnsible className="text-3xl sm:text-4xl group-hover:text-[#EE0000] transition-colors" />
              <span className="onHover-style">
                Ansible
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiNginx className="text-3xl sm:text-4xl group-hover:text-[#009639] transition-colors" />
              <span className="onHover-style">
                Nginx
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiLinux className="text-3xl sm:text-4xl group-hover:text-[#FCC624] transition-colors" />
              <span className="onHover-style">
                Linux
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <FaAws className="text-3xl sm:text-4xl group-hover:text-[#FF9900] transition-colors" />
              <span className="onHover-style">
                AWS
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiGooglecloud className="text-3xl sm:text-4xl group-hover:text-[#4285F4] transition-colors" />
              <span className="onHover-style">
                Google Cloud
              </span>
            </div>
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
              <span className="onHover-style">
                LangChain
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiStreamlit className="text-3xl sm:text-4xl group-hover:text-[#FF4B4B] transition-colors" />
              <span className="onHover-style">
                Streamlit
              </span>
            </div>

            <div className="relative group cursor-pointer">
              <SiN8N className="text-3xl sm:text-4xl  group-hover:text-[#EA4B71] transition-colors" />
              <span className="onHover-style">
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
