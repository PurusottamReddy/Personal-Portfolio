import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Mail, Calendar, Languages, Briefcase, User, Laptop, Film, Gamepad } from "lucide-react";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div 
      className="w-full glass-card neon-border rounded-3xl shadow-neon-purple text-white overflow-x-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Heading Section */}
      <motion.div
        className="relative mt-10"
        variants={itemVariants}
      >
        <motion.h1
          className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] tracking-[15px] mx-auto w-fit font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT
        </motion.h1>
      </motion.div>

      {/* Backdrop Circle Decorations */}
      <div className="absolute overflow-hidden z-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-40 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div className="flex flex-col gap-8 mt-5 px-10" variants={containerVariants}>
          {/* Professional Summary */}
          <div className="mb-5">
            <p className="text-gray-300 leading-relaxed text-lg" style={{ width: '100%', textAlign: 'justify' }}>
             I am a dedicated and goal-driven B.Tech Computer Science Engineering student at Parala Maharaja Engineering College, Berhampur. Passionate about technology and innovation, I constantly strive to learn emerging tools, frameworks, and industry trends. I focus on continuous self-improvement, problem-solving, and developing efficient, scalable solutions. I believe in writing clean, maintainable code that solves real problems and creates meaningful user experiences. With a strong commitment to excellence, I aim to deliver high-quality work that makes a lasting impact.
            </p>
          </div>
          
          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mb-0">
            <div className="flex items-center gap-3">
              <User size={20} className="text-neon-purple" />
              <span className="font-medium">Name:</span>
              <span>T. Purusottam Reddy</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-neon-purple" />
              <span className="font-medium">Date of Birth:</span>
              <span>24/03/2003</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-neon-cyan" />
              <span className="font-medium">Phone:</span>
              <span>+91 82495 50737</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-neon-pink" />
              <span className="font-medium">Email:</span>
              <span>purusottamreddy321@gmail.com</span>
            </div>
             <div className="flex items-center gap-3">
              <MapPin size={20} className="text-neon-cyan" />
              <span className="font-medium">Location:</span>
              <span>Berhampur, Odisha</span>
            </div>
            <div className="flex items-center gap-3">
              <Languages size={20} className="text-neon-purple" />
              <span className="font-medium">Languages:</span>
              <span>English, Hindi, Odia, Telugu</span>
            </div>
          </div>
          
          {/* What I Love */}
          <div className="mb-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-300">
                <Heart size={20} />
              </span>
              <span className="text-blue-200 font-medium">What I love:</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8 text-blue-100/80">
              {[
                "Building intuitive user interfaces",
                "Optimizing application performance",
                "Learning new technologies",
                "Problem-solving and debugging",
                "Creating clean, maintainable code",
                "Collaborating with creative teams"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Hobbies Section */}
          <div className="mb-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-300">
                <Heart size={20} /> {/* Using Heart icon for consistency, can be changed later if a more specific icon is desired */}
              </span>
              <span className="text-blue-200 font-medium">My Hobbies:</span>
            </div>
            <ul className="grid grid-cols-1 gap-3 pl-8 text-blue-100/80">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">•</span> Exploring new technologies <span className="text-gray-400 text-sm">(Staying at the forefront of tech advancements)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">•</span> Playing cricket <span className="text-gray-400 text-sm">(Enjoying strategic thinking, teamwork and physical well-being)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">•</span> Watching movies & web series <span className="text-gray-400 text-sm">(Immersing in diverse cinematic experience)</span>
              </li>
            </ul>
          </div>
          
          {/* Quote Section
          <div className="mt-6 bg-blue-900/20 p-5 rounded-lg border border-neon-blue/20 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-neon-blue/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-blue-100 italic">
                "I believe in writing clean, maintainable code that solves real problems and creates meaningful user experiences."
              </p>
              <p className="text-neon-cyan text-right mt-2">— My Development Philosophy</p>
            </div>
          </div> */}
      </motion.div>
    </motion.div>
  );
};

export default About;
