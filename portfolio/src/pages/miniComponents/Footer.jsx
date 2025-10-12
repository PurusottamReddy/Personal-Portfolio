import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 0.4,
        duration: 0.8
      },
    },
  };

  return (
    <motion.footer
      className="p-8 mt-10 w-full  mx-auto bg-gradient-to-br from-gray-900 via-blue-950 to-slate-900 rounded-t-2xl shadow-lg shadow-blue-900/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        variants={lineVariants}
      />

      <motion.div
        className="mt-8 flex flex-col md:flex-row justify-between items-center"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 md:mb-0 text-center md:text-left tracking-[8px] bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200"
          variants={textVariants}
        >
          LET'S CONNECT!
        </motion.h1>

        <motion.div
          className="text-blue-300/80 text-sm flex flex-col sm:flex-row gap-2 sm:gap-4 text-center md:text-right"
          variants={textVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            whileHover={{ color: "#93c5fd" }}
          >
            © 2025 T. Purusottam Reddy
          </motion.span>
          <motion.span className="hidden sm:inline-block text-blue-500/30">|</motion.span>
          <motion.a
            href="#top"
            className="hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
          </motion.a>
        </motion.div>
      </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 60 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/t-purusottam-reddy-59614725b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </motion.a>

          <motion.a
            href="https://github.com/purusottamreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.25-1.15.25-2.39 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.11-.2 2.34 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/prasadreddy5432"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.footer>
  );
};

export default Footer;
