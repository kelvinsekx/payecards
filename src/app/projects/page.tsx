"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { ExternalLink, FolderCode, Home, ImageDown } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and customer analytics.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl:
      "https://via.placeholder.com/400x225/2D3748/FFFFFF?text=E-Commerce",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat application with sentiment analysis and smart reply suggestions using NLP.",
    tags: ["React", "Firebase", "TensorFlow.js"],
    imageUrl: "https://via.placeholder.com/400x225/2D3748/FFFFFF?text=AI+Chat",
    liveUrl: "https://example.com/chat-app",
    codeUrl: "https://github.com/yourusername/ai-chat",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio website showcasing skills, projects, and contact information.",
    tags: ["React", "GSAP", "CSS3"],
    imageUrl:
      "https://via.placeholder.com/400x225/2D3748/FFFFFF?text=Portfolio",
    liveUrl: "https://yourportfolio.com",
    codeUrl: "https://github.com/yourusername/portfolio",
    featured: false,
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "Collaborative task management tool with drag-and-drop interface and team permissions.",
    tags: ["React", "Redux", "Express", "PostgreSQL"],
    imageUrl:
      "https://via.placeholder.com/400x225/2D3748/FFFFFF?text=Task+Manager",
    liveUrl: "https://example.com/task-manager",
    codeUrl: "https://github.com/yourusername/task-manager",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Interactive weather application with 5-day forecasts and historical data visualization.",
    tags: ["JavaScript", "API Integration", "Chart.js"],
    imageUrl:
      "https://via.placeholder.com/400x225/2D3748/FFFFFF?text=Weather+App",
    liveUrl: "https://example.com/weather",
    codeUrl: "https://github.com/yourusername/weather-app",
    featured: false,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Mobile-first fitness application with workout logging, progress tracking, and social features.",
    tags: ["React Native", "Firebase", "D3.js"],
    imageUrl:
      "https://via.placeholder.com/400x225/2D3748/FFFFFF?text=Fitness+Tracker",
    liveUrl: "https://example.com/fitness",
    codeUrl: "https://github.com/yourusername/fitness-tracker",
    featured: true,
  },
];

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  // Extract all unique tags for filter buttons
  const allTags = [...new Set(projectsData.flatMap((project) => project.tags))];

  useEffect(() => {
    setAnimateCard({ y: 100, opacity: 0 });

    const timeoutId = setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (activeFilter === "All") {
        setFilteredProjects(projectsData);
      } else if (activeFilter === "Featured") {
        setFilteredProjects(projectsData.filter((project) => project.featured));
      } else {
        setFilteredProjects(
          projectsData.filter((project) => project.tags.includes(activeFilter))
        );
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [activeFilter]);

  return (
    <div className="px-5 md:px-12">
      <Link href={"/"} className="inline-block pt-10">
        {" "}
        <Home size={32} />
      </Link>
      <header className="py-10">
        <h2 className="text-4xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground text-base text-[#333]">
          A collection of my recent work, personal projects, and experiments.
        </p>
      </header>

      <div className="flex w-full md:w-1/2 gap-1.5 md:gap-3 mb-10 flex-wrap text-left text-[#444]">
        <button
          className={`rounded-lg px-1 flex items-center gap-1 ${
            activeFilter === "All" ? "border" : ""
          }`}
          onClick={() => setActiveFilter("All")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <span>Filter All</span>
        </button>
        {allTags.map((tag, index) => (
          <button
            key={index}
            type="button"
            className={`rounded-lg px-1 ${
              activeFilter === tag ? "border border-gray-400" : ""
            }`}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="space-y-10"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    liveUrl: string;
    codeUrl: string;
    featured: boolean;
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex w-full h-64 border border-gray-100 py-2 px-4 md:pr-28 relative"
    >
      <div className="w-1/2 h-full relative">
        <div className="w-6/7 h-full relative">
          <ImageDown />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-[#222]">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-x-1">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-1 text-sm rounded-2xl text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="">{project.description}</p>
        <div className="grid grid-cols-2 text-2xl text-white font-normal">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#222]/60 group"
          >
            <div className="py-2 md:py-4 flex items-center gap-2">
              <span className="group-hover:scale-90 transition-all ease-linear">
                Live
              </span>{" "}
              <ExternalLink className="group-hover:scale-150 transition-all ease-linear" />
            </div>
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-[#111]/90 group"
          >
            <div className="py-2 md:py-4 pl-1 flex items-center gap-2">
              <span className="group-hover:scale-90 transition-all ease-linear">
                {" "}
                Code
              </span>{" "}
              <FolderCode className="group-hover:scale-150 transition-all ease-linear" />
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
