import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FaPython, FaJava, FaHtml5, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaDatabase, FaChartBar, FaFileExcel } from "react-icons/fa";
import { SiTensorflow, SiKeras, SiOpencv, SiNumpy, SiPandas, SiStreamlit, SiDjango, SiC, SiMongodb, SiExpress } from "react-icons/si";

const marqueeAnimation = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 18,
        ease: "linear"
      }
    }
  }
};

const Skills = () => {
  // Skills data from resume
  const skills = [
    { id: "1", title: "Python", proficiency: 95, icon: <FaPython className="text-blue-400" /> },
    { id: "2", title: "Java", proficiency: 85, icon: <FaJava className="text-orange-500" /> },
    { id: "3", title: "C", proficiency: 80, icon: <SiC className="text-blue-600" /> },
    { id: "4", title: "SQL", proficiency: 85, icon: <FaDatabase className="text-green-400" /> },
    { id: "5", title: "HTML/CSS", proficiency: 90, icon: <FaHtml5 className="text-orange-600" /> },
    { id: "6", title: "JavaScript", proficiency: 90, icon: <FaJs className="text-yellow-400" /> },
    { id: "7", title: "React", proficiency: 88, icon: <FaReact className="text-cyan-400" /> },
    { id: "8", title: "Node.js", proficiency: 85, icon: <FaNodeJs className="text-green-500" /> },
    { id: "9", title: "Express.js", proficiency: 85, icon: <SiExpress className="text-gray-300" /> },
    { id: "10", title: "MongoDB", proficiency: 80, icon: <SiMongodb className="text-green-600" /> },
    { id: "11", title: "Django", proficiency: 82, icon: <SiDjango className="text-green-700" /> },
    { id: "12", title: "TensorFlow", proficiency: 80, icon: <SiTensorflow className="text-orange-500" /> },
    { id: "13", title: "Keras", proficiency: 78, icon: <SiKeras className="text-red-500" /> },
    { id: "14", title: "PowerBI", proficiency: 95, icon: <FaChartBar className="text-yellow-500" /> },
    // { id: "15", title: "Supabase", proficiency: 75, icon: <FaDatabase className="text-green-400" /> },
  ];

  const tools = [
    { id: "13", title: "Git", icon: <FaGit className="text-orange-600" /> },
    { id: "14", title: "GitHub", icon: <FaGithub className="text-gray-200" /> },
    { id: "15", title: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
    { id: "16", title: "Pandas", icon: <SiPandas className="text-purple-400" /> },
    { id: "17", title: "Matplotlib", icon: <FaChartBar className="text-blue-500" /> },
    // { id: "18", title: "Seaborn", icon: <FaChartBar className="text-teal-400" /> },
    { id: "19", title: "Excel", icon: <FaFileExcel className="text-green-600" /> },
    { id: "20", title: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
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

  // Split skills into two columns
  const leftSkills = skills.filter((_, i) => i % 2 === 0);
  const rightSkills = skills.filter((_, i) => i % 2 === 1);

  // Marquee: duplicate logos for seamless loop
  const allLogos = [...skills, ...tools, ...skills, ...tools];

  return (
    <motion.div 
      className="w-full flex flex-col gap-10 glass-card neon-border p-10 rounded-3xl shadow-neon-purple text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Title */}
      <motion.div className="relative" variants={titleVariants}>
        <motion.h1 
          className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] tracking-[15px] mx-auto w-fit font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          SKILLS
        </motion.h1>
        
      </motion.div>

      {/* Logos Reel Marquee */}
      <div
        className="relative w-full overflow-hidden mb-8"
        style={{ height: "6rem" }}
      >
        <motion.div
          className="flex gap-10 items-center"
          style={{ width: "max-content", minWidth: "100%" }}
          {...marqueeAnimation}
        >
          {allLogos.map((tool, idx) => (
            <div
              key={tool.id + idx}
              className="w-20 h-20 rounded-full glass-card flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform"
            >
              <span className="text-4xl">{tool.icon}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Two-column Skills Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {[leftSkills, rightSkills].map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-6">
            {column.map((skill, idx) => (
              <div key={skill.id}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-200 font-semibold">{skill.title}</span>
                  <span className="text-neon-cyan font-mono text-sm font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-4 bg-gray-800/60 rounded-full overflow-hidden border border-neon-purple/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-full shadow-neon-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.05, type: "spring" }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="glass-card p-4 rounded-xl border border-neon-purple/30">
          <h3 className="text-neon-cyan font-bold mb-2">Programming</h3>
          <p className="text-gray-300">Python, Java, C,  JavaScript, SQL</p>
        </div>
        <div className="glass-card p-4 rounded-xl border border-neon-purple/30">
          <h3 className="text-neon-cyan font-bold mb-2">Web Development</h3>
          <p className="text-gray-300">HTML, CSS, React, Node.js, Express.js, Django, MongoDB, Supabase</p>
        </div>
        <div className="glass-card p-4 rounded-xl border border-neon-purple/30">
          <h3 className="text-neon-cyan font-bold mb-2">AI & ML</h3>
          <p className="text-gray-300">TensorFlow, Keras, Scikit-learn, OpenCV, CNN</p>
        </div>
      </div>
       <div className="glass-card p-4 rounded-xl border border-neon-purple/30">
          <h3 className="text-neon-cyan font-bold mb-2">Data Analysis</h3>
          <p className="text-gray-300">Excel, PowerBI, Numpy, Pandas, Matplotlib, Seaborn</p>
        </div>

      {/* Footer */}
      <motion.div
        className="w-full flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="px-6 py-3 glass-card neon-border rounded-full text-sm text-gray-200 flex items-center gap-2 shadow-neon-purple"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles size={14} className="text-neon-cyan" />
          <span>Continuously improving and adding new skills</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Skills;