import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution: React.FC = () => {
  return (
    <section className="min-h-screen py-20 flex flex-col justify-center bg-white text-stone-900 border-y border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <h3 className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-8">Current State</h3>
            <h2 className="text-3xl md:text-4xl font-light text-stone-400 mb-6">
              The burden of <br /><span className="text-stone-300 line-through decoration-stone-300 decoration-2">traditional hauling.</span>
            </h2>
            <p className="text-lg text-stone-500 mb-8">
              Rising compliance costs, erratic vendor pickups, and zero visibility into your environmental footprint. A liability on your balance sheet.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-stone-100 py-4 text-stone-400">
                <span>Monthly OpEx</span>
                <span>High / Volatile</span>
              </div>
              <div className="flex justify-between border-b border-stone-100 py-4 text-stone-400">
                <span>Compliance</span>
                <span>Risk Prone</span>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-10%" }}
             transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
             className="relative"
          >
            <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-stone-100 hidden md:block" />
            
            <h3 className="text-sm font-bold tracking-widest text-emerald-800 uppercase mb-8">The Ubiki Standard</h3>
            <h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-6">
              Waste as a <br /><span className="text-emerald-800">measurable resource.</span>
            </h2>
            <p className="text-lg text-stone-700 mb-8">
              On-site processing powered by Solwaste tech that reduces volume by 80% in 24 hours. Transform a cost center into a sustainability milestone.
            </p>
            <div className="space-y-4">
               <div className="flex justify-between border-b border-stone-200 py-4 font-medium">
                <span>Cost Reduction</span>
                <span className="text-emerald-700">~60% Savings</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 py-4 font-medium">
                <span>ESG Impact</span>
                <span className="text-emerald-700">Quantifiable Data</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;