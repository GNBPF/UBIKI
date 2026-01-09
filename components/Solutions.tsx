import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onOpenModal: () => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onOpenModal }) => {
  return (
    <section id="technology" className="min-h-screen py-12 md:py-16 lg:py-12 flex flex-col justify-center bg-stone-50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-8 md:mb-12 lg:mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-4 tracking-tight">
            Powered by <br/>
            <span className="text-stone-400">Solwaste Technology.</span>
          </h2>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
            We integrate the world's most advanced OTC/OWC systems into your facility. 
            Silent, odorless, and engineered for premium infrastructure.
          </p>
        </div>

        {/* Abstract Teaser Display */}
        <div className="relative w-full aspect-[16/7] md:aspect-[21/8] bg-stone-900 rounded-sm overflow-hidden flex items-center justify-center group">
          
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
            alt="Engineering Detail" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[1.5s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-stone-900" />
          
          {/* Content Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative z-10 text-center p-8"
          >
             <h3 className="text-3xl md:text-5xl font-light text-white mb-6">
               The Science of Reduction.
             </h3>
             <p className="text-stone-400 max-w-lg mx-auto mb-10">
               From 50kg to 2000kg+ daily capacity. We select and install the precise Solwaste configuration for your campus.
             </p>
             
             <button 
               onClick={onOpenModal}
               className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 text-sm uppercase tracking-widest font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
             >
               Explore Capabilities <ArrowRight className="w-4 h-4" />
             </button>
          </motion.div>
        </div>

        {/* Categories (No Specs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-12 lg:mt-8 border-t border-stone-200 pt-8 lg:pt-6">
           <div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Decentralized</h4>
              <p className="text-stone-500 text-sm">Compact units for cafeterias & pantries.</p>
           </div>
           <div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Centralized</h4>
              <p className="text-stone-500 text-sm">Large-scale facility processing hubs.</p>
           </div>
           <div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Custom Industrial</h4>
              <p className="text-stone-500 text-sm">Automated flows for heavy volume.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;