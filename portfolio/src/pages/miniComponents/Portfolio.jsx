import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  
  // Projects data from resume
  const projects = [
    {
      _id: "1",
      title: "AI-Based Crop Disease Detection System",
      description: "Implemented a CNN-driven crop disease detection solution with 90%+ accuracy, supporting farmers with real-time predictions.",
      projectBanner: { url: "https://placehold.co/600x400/purple/white?text=Crop+Disease+Detection" },
      stack: "Python, TensorFlow, Keras, OpenCV, Streamlit",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
      gitRepoLink: "https://github.com/t-purusottam-reddy/crop-disease-detection",
    },
    {
      _id: "2",
      title: "Cybercrime Report & Awareness Portal",
      description: "Developed a full-stack web application for reporting cybercrimes and raising awareness, integrated with authentication, report submission, duplicate reporting, community scam wall, and fraud lookup tool.",
      projectBanner: { url: "https://placehold.co/600x400/blue/white?text=Cybercrime+Portal" },
      stack: "React, Supabase, PostgreSQL",
      technologies: ["React", "Supabase", "PostgreSQL"],
      gitRepoLink: "https://github.com/t-purusottam-reddy/cybercrime-portal",
    },
    {
      _id: "3",
      title: "Full-Stack Blogging Platform",
      description: "Built a blog platform with authentication, post creation/editing, and comments; integrated REST APIs.",
      projectBanner: { url: "https://placehold.co/600x400/green/white?text=Blog+Platform" },
      stack: "Django, React, REST Framework, SQLite",
      technologies: ["Django", "React", "REST Framework", "SQLite"],
      gitRepoLink: "https://github.com/t-purusottam-reddy/blog-platform",
    },
    {
      _id: "4",
      title: "Responsive E-Commerce Website",
      description: "Developed a responsive website with product catalog, smooth UI, secure navigation, user interaction.",
      projectBanner: { url: "https://placehold.co/600x400/orange/white?text=E-Commerce" },
      stack: "HTML, CSS, JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"],
      gitRepoLink: "https://github.com/t-purusottam-reddy/ecommerce-website",
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  return (
    <motion.div
      className="w-full glass-card neon-border p-10 rounded-3xl shadow-neon-purple text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="relative mb-8" variants={titleVariants}>
         <motion.h1 
          className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] tracking-[15px] mx-auto w-fit font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
         PROJECTS
        </motion.h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project._id}
            className="glass-card p-6 rounded-xl border border-neon-purple/30 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-neon-cyan font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-neon-purple/20 text-neon-cyan text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              {project.gitRepoLink && (
                <a
                  href={project.gitRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white rounded-full py-2 px-4 text-sm shadow-neon-purple transition-all duration-300"
                >
                  GitHub
                </a>
              )}
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button bg-gradient-to-r from-neon-cyan to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white rounded-full py-2 px-4 text-sm shadow-neon-cyan transition-all duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;