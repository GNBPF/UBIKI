import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative h-screen min-h-screen w-full overflow-hidden flex items-center justify-center bg-stone-50">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Lighter, brighter image */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
          alt="Modern Infrastructure" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-white/50 z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center md:text-left flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 leading-[1.05] mb-8 tracking-tight">
            Waste Infrastructure <br />
            <span className="text-stone-400">Strategists.</span>
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="h-[1px] bg-stone-900 mb-8 mx-auto md:mx-0"
          />
          
          <p className="text-lg md:text-xl text-stone-500 max-w-xl font-light leading-relaxed mx-auto md:mx-0">
            We don't just sell machines. We design compliant, closed-loop waste systems for modern enterprises using Solwaste technology.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => {
          const nextSection = document.getElementById('approach');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">Explore Strategy</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent group-hover:from-stone-600 transition-colors"></div>
      </motion.div>
    </div>
  );
};

export default Hero;