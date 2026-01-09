import React from 'react';
import { motion } from 'framer-motion';
import { PILLARS } from '../constants';

const Pillars: React.FC = () => {
  return (
    <section id="approach" className="min-h-screen py-20 flex flex-col justify-center bg-stone-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-20">
          <h3 className="text-sm text-emerald-800 font-bold uppercase tracking-widest mb-4">Our Approach</h3>
          <h2 className="text-4xl md:text-5xl text-stone-900 font-medium">Not a vendor. <br />A strategic partner.</h2>
        </div>

        {/* 
          Layout Logic:
          - 'flex flex-wrap justify-center': Ensures the last item centers itself if it's on a new row.
          - 'gap-8': Consistent spacing.
        */}
        <div className="flex flex-wrap justify-center gap-8">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              /* 
                 Width Calculation:
                 - Mobile: 100% width
                 - Tablet (md): 50% width minus half the gap (gap-8 = 2rem, so 1rem).
                 - Desktop (lg): 33.33% width minus 2/3 of the gap (approx 1.34rem).
              */
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-white rounded-[2rem] border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 group flex flex-col"
            >
              {/* Card Image Area - Added gradient for color */}
              <div className="h-48 bg-gradient-to-br from-emerald-50/40 via-stone-50 to-stone-100 flex items-center justify-center relative p-8">
                  
                  {/* Main Icon Visualization - Added emerald tint */}
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm shadow-emerald-900/5 border border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <pillar.icon className="w-10 h-10 text-emerald-800" />
                  </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl text-stone-900 mb-3 font-bold tracking-tight">{pillar.title}</h3>
                <p className="text-stone-500 mb-8 leading-relaxed text-sm flex-grow">{pillar.description}</p>
                
                {/* List Items */}
                <div className="space-y-3 pt-6 border-t border-stone-100">
                   {pillar.items.map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-sm font-medium text-stone-700">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;