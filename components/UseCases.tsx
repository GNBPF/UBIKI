import React from 'react';
import { motion } from 'framer-motion';
import { USE_CASES } from '../constants';

const UseCases: React.FC = () => {
  return (
    <div id="impact" className="bg-stone-50">
      {USE_CASES.map((useCase) => (
        <section key={useCase.id} className="h-screen sticky top-0 flex items-center overflow-hidden">
          {/* Background Image - Full Color */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-black/40 z-10" /> {/* Slightly lighter overlay to let color through */}
             <img 
               src={useCase.image} 
               alt={useCase.title} 
               className="w-full h-full object-cover"
             />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="max-w-4xl"
            >
              <span className="inline-block px-3 py-1 mb-6 border border-white/40 text-xs uppercase tracking-widest text-white rounded-full bg-white/10 backdrop-blur-md">
                Sector: {useCase.title}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-sm">
                "{useCase.statement}"
              </h2>
              <div className="inline-flex flex-col border-l-2 border-emerald-400 pl-6">
                <span className="text-sm text-white/80 uppercase tracking-widest mb-1">Key Outcome</span>
                <span className="text-2xl md:text-3xl text-white font-mono font-medium">{useCase.metric}</span>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default UseCases;