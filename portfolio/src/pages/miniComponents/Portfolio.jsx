import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  // projects list (final order)
  const projects = [
    {
      _id: "1",
      title: "GroNow – Smart Online Grocery Shopping Application",
      description:
        "Full MERN grocery delivery platform with product browsing, cart, checkout, seller dashboard, JWT auth, Stripe payments, and Cloudinary image uploads.",
      projectBanner: {
        url: "https://placehold.co/600x400/green/white?text=GroNow",
      },
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
      gitRepoLink:
        "https://github.com/Purusottam/GroNow-Online-Grocery-Shopping-Application",
      projectLink: "https://gro-now.vercel.app/",
    },
    {
      _id: "2",
      title: "CyberLens – Cyber Crime Reporting & Management System",
      description:
        "Secure crime reporting platform with role-based access, evidence upload, fraud lookup, user dashboard, and admin case management.",
      projectBanner: {
        url: "https://placehold.co/600x400/red/white?text=CyberLens",
      },
      stack: "MERN, Cloudinary, Multer, JWT, Bcrypt",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Multer",
        "JWT",
        "Bcrypt",
      ],
      gitRepoLink:
        "https://github.com/Purusottam/CyberLens-Cyber-Crime-Reporting-Platform",
      projectLink:
        "https://cyberlens-cyber-crime-reporting-platform.vercel.app/",
    },
    {
      _id: "3",
      title: "SpendWise – Finance Management Platform",
      description:
        "Personal finance tracker with JWT auth, analytics dashboard, category insights, Excel export, and Recharts-based visualizations.",
      projectBanner: {
        url: "https://placehold.co/600x400/blue/white?text=SpendWise",
      },
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
      gitRepoLink: "https://github.com/Purusottam/Expense-Tracker",
      projectLink: null, // add when deployed
    },
    {
      _id: "4",
      title: "Personal Portfolio",
      description:
        "Responsive and modern portfolio showcasing projects, skills, resume, and contact sections with smooth UI and animations.",
      projectBanner: {
        url: "https://placehold.co/600x400/000000/FFFFFF?text=Portfolio",
      },
      stack: "React.js, Tailwind CSS, Vite",
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      gitRepoLink: "https://github.com/Purusottam/Personal-Portfolio",
      projectLink: "https://t-purusottam-reddy-portfolio.vercel.app/",
    },
    {
      _id: "5",
      title: "AI-Based Crop Disease Detection System",
      description:
        "CNN model (90%+ accuracy) for leaf disease classification with a real-time Streamlit interface and treatment suggestions.",
      projectBanner: {
        url: "https://placehold.co/600x400/purple/white?text=Crop+Disease+Detection",
      },
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
      gitRepoLink:
        "https://github.com/Purusottam/Plant-Disease-Prediction",
      projectLink: null,
    },
    {
      _id: "6",
      title: "Thyroid Disease Prediction System",
      description:
        "ML system comparing LR, DT, RF, SVM, and XGBoost for thyroid disorder prediction with detailed performance evaluation.",
      projectBanner: {
        url: "https://placehold.co/600x400/yellow/000000?text=Thyroid+Prediction",
      },
      stack: "Python, Scikit-learn, Pandas, NumPy",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      gitRepoLink: "https://github.com/Purusottam/Thyroid-Prediction",
      projectLink: null,
    },
    {
      _id: "7",
      title: "Personalized Movie Recommender Engine",
      description:
        "Content-based and collaborative filtering system with similarity scoring, preprocessing pipeline, and personalized recommendation generation.",
      projectBanner: {
        url: "https://placehold.co/600x400/orange/white?text=Movie+Recommender",
      },
      stack: "Python, Scikit-learn, Pandas, NumPy",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      gitRepoLink:
        "https://github.com/Purusottam/Movie-Recommendation-System",
      projectLink: null,
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
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
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

export default Portfolio;        >
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
          
