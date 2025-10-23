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
  SiJavascript,
  SiGooglechrome,
  SiFirefox,
  SiMarkdown,
  SiC,
  SiYoutube,
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
  videoUrl?: string;
  images?: { src: string; caption: string }[];
  conclusion?: string;
}

export const projects: Project[] = [
  {
    id: "passkeyper",
    title: "Passkeyper",
    period: "Jan 2024 - Feb 2024",
    shortDescription:
      "Our final project at ALX Software Engineering - a secure password manager implementing zero-knowledge architecture where all data is encrypted on the server and only decrypted on your device.",
    videoUrl:
      "https://www.youtube.com/embed/yAMXKIo2cEI?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0",
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
    conclusion:
      "This project was the perfect way to wrap up our ALX Software Engineering journey. We got to work with real security challenges, learn about encryption, and build something people can actually use to stay safe online. Super proud of what we pulled off as a team!",
  },
  {
    id: "resume-ai",
    title: "Resume AI Builder",
    period: "2025",
    shortDescription:
      "My graduation project from University Abdelmalek Saadi in Tetouan - an AI-powered resume builder that optimizes resumes for Applicant Tracking Systems (ATS).",
    fullDescription: [
      "The goal was to help job seekers get past those automated systems that filter out resumes before humans even see them.",
      "The system analyzes your resume and matches it against job descriptions, then uses Gemini AI to suggest improvements. It's like having an AI career coach that knows exactly what recruiters and ATS systems are looking for.",
    ],
    features: [
      "ATS keyword analysis that scores your resume and tells you what's missing",
      "AI-generated suggestions to improve your resume based on job descriptions",
      "Real-time preview with drag-and-drop so you can reorder sections easily",
      "Export to PDF or Word with ATS-optimized layouts that actually work",
      "User authentication and secure cloud storage for all your resume versions",
      "Detailed match report with a score showing how well your resume aligns with job descriptions",
      "Built-in job board to discover opportunities and track your applications in one place",
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
    ],
    note: "Private SaaS Project • University Graduation Project",
    conclusion:
      "Building this for my graduation project taught me so much about AI integration and how to make technology actually helpful for real problems. Still working on polishing it up before launch, but excited to see how it could help people land their dream jobs by getting past those annoying ATS filters!",
  },
  {
    id: "youtube-summarizer",
    title: "YouTube Summarizer Extension",
    period: "2025",
    shortDescription:
      "A free browser extension that adds AI-powered video summaries to YouTube using Google's Gemini API - now available on Firefox Add-ons!",
    fullDescription: [
      "Ever wanted to know what a video is about without watching the whole thing? This extension adds a simple 'Summarize' button right on YouTube that does exactly that.",
      "Built using Chrome's Manifest V3 (the latest extension standard) and powered by Gemini 2.5 Flash Lite. It grabs the video transcript and generates a clean, formatted summary with proper markdown support.",
      "What makes it cool is how seamlessly it integrates with YouTube - the button appears automatically and works even when you navigate between videos without reloading the page.",
    ],
    features: [
      "One-click 'Summarize' button that appears on every YouTube video",
      "Uses Gemini 2.5 Flash Lite model for fast and accurate AI summaries",
      "Rich markdown formatting support with proper headings, lists, and emphasis",
      "Works smoothly with YouTube's navigation without page reloads",
      "Free to use - just bring your own Gemini API key from Google AI Studio",
      "Available on Firefox Add-ons marketplace for easy installation",
    ],
    techStack: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Chrome Extension",
        icon: SiGooglechrome,
        color: "#4285F4",
      },
      {
        name: "Firefox Extension",
        icon: SiFirefox,
        color: "#FF7139",
      },
      {
        name: "Gemini AI",
        icon: SiGooglegemini,
        color: "#8E75B2",
      },
      {
        name: "Markdown",
        icon: SiMarkdown,
        color: "#000000",
      },
      {
        name: "YouTube API",
        icon: SiYoutube,
        color: "#FF0000",
      },
    ],
    links: {
      github: "https://github.com/sanotogii/Youtube-summarizer",
      external:
        "https://addons.mozilla.org/en-US/firefox/addon/youtube-summarizer-extension/",
    },
    images: [
      {
        src: "/1-yt-sum.png",
        caption:
          "The extension in action - just hit the 'Summarize' button and watch the magic happen. It pulls the transcript and generates a clean summary right there.",
      },
      {
        src: "/2-yt-sum.png",
        caption:
          "Super simple setup - just paste your Gemini API key (free from Google AI Studio) and you're good to go. No subscriptions, no nonsense.",
      },
    ],
    conclusion:
      "This was a fun side project that turned into something actually useful! It's now live on Firefox Add-ons. Sometimes the best projects are the ones that solve your own problems first.",
  },
  {
    id: "maze-odyssey",
    title: "Maze-Odyssey",
    period: "2024",
    shortDescription:
      "A 3D maze game built from scratch using C and SDL2, inspired by the legendary Wolfenstein 3D and its raycasting techniques.",
    fullDescription: [
      "This was an exciting dive into graphics programming and game development. Built entirely in C using SDL2, it recreates that classic 3D first-person perspective using raycasting - the same technique that powered Wolfenstein 3D back in the day.",
      "The coolest part? Everything is rendered in real-time using pure math and raycasting algorithms. No game engine, no frameworks - just raw C code calculating distances, wall heights, and textures on the fly.",
      "It even has a minimap that you can toggle on and off to see where you are in the maze!",
    ],
    features: [
      "Full 3D first-person maze navigation using raycasting techniques",
      "Real-time rendering with smooth camera rotation and movement",
      "Texture mapping on walls for a more immersive experience",
      "Toggle-able minimap to see your position in the maze",
      "Smooth controls for walking forward/backward and rotating the camera",
      "Built entirely from scratch without game engines or frameworks",
    ],
    techStack: [
      {
        name: "C",
        icon: SiC,
        color: "#A8B9CC",
      },
    ],
    links: {
      github: "https://github.com/sanotogii/Maze-Odyssey",
    },
    note: "Built with SDL2 and SDL2_image • Inspired by Wolfenstein 3D",
    conclusion:
      "This project was pure fun - getting to recreate those classic FPS vibes with nothing but C code and math. It really deepened my understanding of graphics programming and made me appreciate how much was achieved with such limited resources back in the 90s!",
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
