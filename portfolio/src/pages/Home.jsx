import React, { useEffect, useRef } from "react";
import Hero from "./miniComponents/Hero";
import Skills from "./miniComponents/Skills";
import About from "./miniComponents/About";
import { ThemeProvider } from "@/components/theme-provider";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";
import Footer from "./miniComponents/Footer";
import Navbar from "../components/ui/navbar";
import { motion, useScroll, useSpring } from "framer-motion";



const Home = () => {
  // Scroll progress indicator animation effect
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sectionTracker = useRef();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Setup intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section came into view
            // trackSectionView(entry.target.id, entry.target.id);
            // sectionTracker.current.enterSection(entry.target.id);
          } else {
            // Section left view
            // sectionTracker.current.leaveSection(entry.target.id, entry.target.id);
          }
        });
      },
      { threshold: 0.2 } // Fire when 20% of the section is visible
    );
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    
    // Report all section times when unmounting
    return () => {
      // sectionTracker.current.reportAllSectionTimes();
      observer.disconnect();
    };
  }, []);

  // Section wrapper component for consistent animations
  const SectionWrapper = ({ children, className = "", delay = 0, id = "" }) => {
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
          delay: delay
        }}
        className={`w-full ${className}`}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="fixed inset-0 -z-20 w-full h-full">

      </div>
      
      {/* Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan z-50 origin-left shadow-neon-purple"
        style={{ scaleX }}
      />

      {/* Background Gradients */}

      <article className="w-full px-3 md:px-4 flex flex-col gap-10 md:pt-20">
        {/* Hero Section */}
        <SectionWrapper className="mt-6 md:mt-0" id="hero">
          <Hero />
        </SectionWrapper>



        {/* About Section */}
        <SectionWrapper delay={0.05} id="about">
          <About />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper delay={0.05} id="skills">
          <Skills />
        </SectionWrapper>

        {/* Portfolio Section */}
        <SectionWrapper delay={0.05} id="portfolio">
          <Portfolio />
        </SectionWrapper>



        {/* Contact Section */}
        <SectionWrapper delay={0.05} id="contact">
          <Contact />
        </SectionWrapper>

        {/* Footer */}

      </article>

      {/* Floating Scroll To Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 rounded-full neon-border text-white z-40 group"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:text-neon-cyan transition-colors"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </ThemeProvider>
  );
};

export default Home;