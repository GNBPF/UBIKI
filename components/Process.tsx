import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="min-h-screen py-20 flex flex-col justify-center bg-stone-100 text-stone-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
            <h2 className="text-4xl font-medium mb-4">The Ubiki Protocol</h2>
            <p className="text-stone-500">From audit to optimization.</p>
        </div>

        <div className="relative">
            {/* Connecting Line (Desktop) */}
            {/* Moved from top-1/2 to top-6 (1.5rem / 24px) to align perfectly with the center of the 48px (h-12) circles */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-stone-300 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {PROCESS_STEPS.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="relative z-10 flex flex-col items-center text-center group"
                    >
                        {/* Number Circle */}
                        <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm font-mono font-bold text-stone-400 mb-8 group-hover:border-emerald-600 group-hover:text-emerald-700 transition-colors duration-300 shadow-sm z-10">
                            0{step.id}
                        </div>
                        
                        {/* Content */}
                        <div className="px-2">
                          <h3 className="text-lg font-bold mb-3 text-stone-900">{step.title}</h3>
                          <p className="text-sm text-stone-500 leading-relaxed">
                              {step.description}
                          </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;