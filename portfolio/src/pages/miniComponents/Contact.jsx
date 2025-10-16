import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
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

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 15,
        delay: i * 0.1 
      },
    }),
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const mailtoLink = `mailto:purusottamreddy321@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${senderName}\n\nMessage: ${message}`)}`;
    window.open(mailtoLink, '_blank');

    toast.success("Opening your mail client to send the message!");
    setSenderName("");
    setSubject("");
    setMessage("");
    setLoading(false);
  };

  return (
    <motion.div 
      className="w-full glass-card neon-border p-10 rounded-3xl shadow-neon-purple text-white overflow-x-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="relative mb-12"
        variants={titleVariants}
      >
        <motion.h1 
          className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] tracking-[15px] mx-auto w-fit font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          CONTACT
        </motion.h1>
      </motion.div>

      <motion.form 
        onSubmit={handleMessage} 
        className="flex flex-col gap-7 p-4 sm:p-6 md:p-8 glass-card rounded-2xl  relative z-10"
        variants={containerVariants}
      >
        <motion.div 
          className="flex flex-col gap-2 px-1.5"
          custom={0}
          variants={formItemVariants}
        >
          <Label className="text-xl font-medium text-gray-200">Your Name</Label>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your Name"
              className="glass-card border-neon-purple/30 py-6 px-5 text-white placeholder:text-gray-400 focus:border-neon-purple focus:ring-neon-purple/30 transition-all"
              required
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-2 px-1.5"
          custom={1}
          variants={formItemVariants}
        >
          <Label className="text-xl font-medium text-gray-200">Subject</Label>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="glass-card border-neon-purple/30 py-6 px-5 text-white placeholder:text-gray-400 focus:border-neon-purple focus:ring-neon-purple/30 transition-all"
              required
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-2 px-1.5"
          custom={2}
          variants={formItemVariants}
        >
          <Label className="text-xl font-medium text-gray-200">Message</Label>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full min-h-[120px] rounded-md glass-card border-neon-purple/30 py-3 px-5 text-white placeholder:text-gray-400 focus:border-neon-purple focus:ring-neon-purple/30 transition-all resize-y"
              required
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-end mt-4"
          custom={3}
          variants={formItemVariants}
        >
          {!loading ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit"
                className="cyber-button w-full sm:w-52 bg-gradient-to-r from-neon-purple to-neon-cyan hover:from-neon-pink hover:to-neon-purple text-white font-semibold tracking-wider py-6 rounded-full shadow-neon-purple transition-all duration-300"
              >
                SEND MESSAGE
              </Button>
            </motion.div>
          ) : (
            <motion.button
              disabled
              className="cyber-button w-full sm:w-52 bg-slate-700 text-gray-400 font-medium rounded-full py-6 shadow-inner transition-all duration-300"
            >
              Sending...
            </motion.button>
          )}
        </motion.div>
      </motion.form>

      <motion.div 
        className="mt-8 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.p
          animate={{ 
            opacity: [0.7, 1, 0.7] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity 
          }}
        >
          I'll get back to you as soon as possible!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
