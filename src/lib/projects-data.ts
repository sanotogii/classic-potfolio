import { IconType } from "react-icons";
import {
  SiPython,
  SiFlask,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiGooglegemini,
  SiNextdotjs,
  SiAppwrite,
  SiGooglecloud,
} from "react-icons/si";

export interface Project {
  id: string;
  title: string;
  period: string;
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  techStack: { name: string; icon: IconType; color: string }[];
  links?: { github?: string; external?: string };
  team?: { name: string; linkedin: string }[];
  note?: string;
}

export const projects: Project[] = [
  {
    id: "passkeyper",
    title: "Passkeyper",
    period: "Jan 2024 - Feb 2024",
    shortDescription:
      "Our final project at ALX Software Engineering - a secure password manager implementing zero-knowledge architecture where all data is encrypted on the server and only decrypted on your device.",
    fullDescription: [
      "Built together with a talented team, this project showcases everything we learned about full-stack development, security, and encryption.",
      "One of the most challenging parts was implementing zero-knowledge architecture, ensuring only you can access your passwords. All data is encrypted on the server and only decrypted on your device, so even we can't see it.",
    ],
    features: [
      "Stores passwords with zero-knowledge encryption - even we can't see your passwords",
      "Security Dashboard that checks for password breaches, duplicate passwords, and weak passwords",
      "Custom password generator with configurable length and character options",
      "Import and export your passwords to JSON or CSV files for backup",
      "Google Sign-In integration for quick and secure authentication",
      "Automatic favicon detection so you can easily identify your saved websites",
    ],
    techStack: [
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        name: "Flask",
        icon: SiFlask,
        color: "#000000",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
    ],
    links: {
      github: "https://github.com/josfam/passkeyper",
      external:
        "https://www.linkedin.com/posts/khalid-lazrag_alxabrse-softwareengineering-passwordmanager-activity-7261421788352462848-YjnG",
    },
    team: [
      {
        name: "Ebubechukwu Ochemba",
        linkedin: "https://www.linkedin.com/in/ebube-ochemba/",
      },
      {
        name: "Hagar Samy",
        linkedin: "https://www.linkedin.com/in/hagar-samy-420414220/",
      },
      {
        name: "Joseph Amukun",
        linkedin: "https://www.linkedin.com/in/amukun/",
      },
    ],
  },
  {
    id: "resume-ai",
    title: "Resume AI Builder",
    period: "2023",
    shortDescription:
      "My graduation project from University Abdelmalek Saadi in Tetouan - an AI-powered resume builder that optimizes resumes for Applicant Tracking Systems (ATS).",
    fullDescription: [
      "The goal was to help job seekers get past those automated systems that filter out resumes before humans even see them.",
      "The system uses RAG (Retrieval-Augmented Generation) to match your resume against real job descriptions and suggest improvements. It's like having an AI career coach that knows exactly what recruiters and ATS systems are looking for.",
    ],
    features: [
      "Smart resume parsing from PDF and text files using OCR technology",
      "ATS keyword analysis that scores your resume and tells you what's missing",
      "AI-generated suggestions using a RAG pipeline to improve your resume based on job descriptions",
      "Real-time preview with drag-and-drop so you can reorder sections easily",
      "Export to PDF or Word with ATS-optimized layouts that actually work",
      "User authentication and secure cloud storage for all your resume versions",
    ],
    techStack: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Appwrite",
        icon: SiAppwrite,
        color: "#FD366E",
      },
      {
        name: "Gemini AI",
        icon: SiGooglegemini,
        color: "#8E75B2",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
        color: "#4285F4",
      },
    ],
    note: "Private SaaS Project • University Graduation Project",
  },
];

// Helper function: grabs a single project by its slug/id
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

// Helper function: returns all projects
export function getAllProjects(): Project[] {
  return projects;
}
