import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {

  // ✅ Updated projects list
  const projects = [
    {
      _id: "1",
      title: "GroNow – Smart Online Grocery Shopping Application",
      description:
        "Developed a scalable MERN-based grocery delivery platform enabling users to browse, order, and manage groceries online. Integrated secure authentication, seller management, Stripe payments, and Cloudinary-based product image management.",
      projectBanner: { url: "https://placehold.co/600x400/green/white?text=GroNow" },
      stack:
        "React.js, Node.js, Express.js, MongoDB Atlas, Tailwind CSS, Stripe, Cloudinary, Multer",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Tailwind CSS",
        "Stripe",
        "Cloudinary",
        "Multer",
      ],
      gitRepoLink: "https://github.com/PurusottamReddy/GroNow",
    },
    {
      _id: "2",
      title: "SpendWise – Finance Management Platform",
      description:
        "Designed and developed a full-stack expense tracking system with interactive dashboards and analytics. Implemented JWT authentication, Excel export functionality, and data visualization using Recharts.",
      projectBanner: { url: "https://placehold.co/600x400/blue/white?text=SpendWise" },
      stack:
        "React, Node.js, Express, MongoDB, Tailwind CSS, Recharts, JWT, XLSX",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Recharts",
        "JWT",
        "XLSX",
      ],
      gitRepoLink: "https://github.com/PurusottamReddy/Expense-Tracker",
    },
    {
      _id: "3",
      title: "AI-Based Crop Disease Detection System",
      description:
        "Developed a CNN-based model achieving 90%+ accuracy in detecting crop diseases from leaf images. Built a Streamlit web app providing real-time detection and actionable insights for farmers.",
      projectBanner: { url: "https://placehold.co/600x400/purple/white?text=Crop+Disease+Detection" },
      stack:
        "Python, TensorFlow, Keras, NumPy, Pandas, Matplotlib, Streamlit",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Streamlit",
      ],
      gitRepoLink: "https://github.com/PurusottamReddy/Plant-Disease-Prediction",
    },
    {
      _id: "4",
      title: "Cybercrime Report & Awareness Portal",
      description:
        "Built a full-stack web app for cybercrime reporting and awareness, featuring user authentication, report submission, community scam wall, and fraud lookup tool.",
      projectBanner: { url: "https://placehold.co/600x400/red/white?text=Cybercrime+Portal" },
      stack: "React, Supabase, PostgreSQL",
      technologies: ["React", "Supabase", "PostgreSQL"],
      gitRepoLink: "https://github.com/PurusottamReddy/Cyber-Crime-Report-And-Awareness",
    },
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

  return (
    <motion.div
      className="w-full glass-card neon-border p-10 rounded-3xl shadow-neon-purple text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title Section */}
      <motion.div className="relative mb-8" variants={titleVariants}>
        <motion.h1
          className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] tracking-[15px] mx-auto w-fit font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan"
        >
          PROJECTS
        </motion.h1>
      </motion.div>

      {/* Projects Grid */}
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
              <h3 className="text-neon-cyan font-bold text-xl mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neon-purple/20 text-neon-cyan text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
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
