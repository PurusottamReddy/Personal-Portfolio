import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  // Static user data from resume
  const user = {
    name: "T. Purusottam Reddy",
    email: "purusottamreddy321@gmail.com",
    phone: "+91 82695 50737",
    location: "Berhampur, Odisha",
    about: "Computer Science and Engineering student with strong skills in programming, web development, and AI/ML.",
    resume: "https://drive.google.com/file/d/1234567890/view",
    roles: ["Full Stack Developer", "AI/ML Enthusiast", "Problem Solver"]
  };

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

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: i => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      <motion.div
        className="block w-full glass-card neon-border p-10 rounded-3xl shadow-neon-purple relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-80 h-80 bg-neon-cyan/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
          {/* Left content (2/3 of the space) */}
          <div className="lg:col-span-3">
       

            <motion.h1
              className="overflow-x-hidden text-[1.3rem] sm:text-[1.95rem] md:text-[2.2rem] lg:text-[2.2rem] tracking-[2px] mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan"
              variants={itemVariants}
            >
              Hi , I am T. PURUSOTTAM REDDY
            </motion.h1>

            <motion.h1
              className="overflow-x-hidden text-[1.3rem] sm:text-[1.55rem] md:text-[2.0rem] lg:text-[1.3rem] tracking-[10px] font-black text-glow "
              variants={itemVariants}
            >
              <Typewriter
                words={[
                  "FULLSTACK DEVELOPER",
                  "DATA ANALYST",
                   "AI ML ENGINEER",
                  "SOFTWARE DEVELOPER",
                  "FRONTEND DEVELOPER",
                  "BACKEND DEVELOPER"
                 
                ]}
                loop={70}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h1>
            <motion.p
              className="mt-5 text-medium  font-light text-gray-300 "
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {"I love turning ideas into intelligent, interactive digital experiences. Exploring the intersection of full-stack development and machine learning."}
            </motion.p>
         
            <motion.div
              className="mt-10 flex gap-5 flex-wrap"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="https://github.com/PurusottamReddy" target="_blank">
                  <Button className="cyber-button rounded-full flex items-center gap-3 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white px-8 py-6 font-semibold text-base">
                    <FaGithub className="w-5 h-5" />
                    <span>Github</span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/Resume latest.pdf" target="_blank">
                  <Button className="cyber-button rounded-full flex items-center gap-3 bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-cyan text-white px-8 py-6 font-semibold text-base">
                    <FaExternalLinkAlt className="w-5 h-5" />
                    <span>Resume</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-fit px-6 py-2 glass-card neon-border rounded-full flex gap-6 items-center mt-2 md:mt-10 lg:mt-5  transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {[

                // { icon: <FaFacebook className="text-blue-500 w-7 h-7" />, url: user.facebookURL },
                { icon: <FaLinkedin className="text-sky-400 w-7 h-7" />, url: "https://www.linkedin.com/in/t-purusottam-reddy-59614725b/" },
                // { icon: <FaTwitter className="text-blue-400 w-7 h-7" />, url: "https://x.com/" },
                { icon: <SiLeetcode className="text-amber-400 w-7 h-7" />, url: "https://leetcode.com/u/WWbnIvYSHE/" },
                { icon: <FaInstagram className="text-pink-500 w-7 h-7" />, url: "https://www.instagram.com/prasadreddy5432/" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={socialIconVariants}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <Link to={social.url} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content (1/3 of the space) */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center">
            <motion.div
              className="image-wrapper sticky relative p-2 rounded-full"
              initial={{ scale: 1, boxShadow: "0 0 0px rgba(167, 139, 250, 0.0)" }}
              animate={{
                boxShadow: [
                  "0 0 16px rgba(56, 189, 248, 0.18)",
                  "0 0 28px rgba(168, 85, 247, 0.28)",
                  "0 0 16px rgba(56, 189, 248, 0.18)"
                ],
                scale: [1, 1.005, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Outer gradient ring */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/40 via-fuchsia-500/30 to-transparent blur-lg" />
      
              <div className="neon-img-wrapper">
              <img
                src="\profile.jpg"
                alt="T. PURUSOTTAM REDDY"
                className="rounded-full object-cover w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] ring-2 ring-cyan-400/30"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              </div>
            </motion.div>
          </div>
        </div>

       
      </motion.div>
    </>
  );
};

export default Hero;