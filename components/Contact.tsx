import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-20 flex flex-col justify-center bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 tracking-tight">
              Start a Strategy <br />
              <span className="text-stone-400">Conversation.</span>
            </h2>
            <p className="text-xl text-stone-500 font-light mb-12 max-w-md">
              Align your waste management with corporate ESG goals. Let's design the right infrastructure for your site using Solwaste technology.
            </p>
            
            <div className="space-y-6">
               <div className="p-6 border border-stone-200 rounded-sm bg-stone-50">
                 <h4 className="text-stone-900 text-sm uppercase tracking-widest mb-2 font-bold">Headquarters</h4>
                 <p className="text-stone-500">B – 702, Woodland, Lokhandwala complex,<br/>Andheri West, Mumbai, India</p>
               </div>
               <div className="p-6 border border-stone-200 rounded-sm bg-stone-50">
                 <h4 className="text-stone-900 text-sm uppercase tracking-widest mb-2 font-bold">Direct Line</h4>
                 <p className="text-stone-500">+919321314352<br/>strategy@ubiki.com</p>
               </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 md:p-12 border border-stone-200 rounded-lg">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-xs uppercase text-stone-500 tracking-widest font-bold">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400" placeholder="Full Name" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase text-stone-500 tracking-widest font-bold">Organization</label>
                    <input type="text" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400" placeholder="Company Name" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-xs uppercase text-stone-500 tracking-widest font-bold">Waste Volume</label>
                    <select className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors appearance-none bg-stone-50">
                       <option>Select Range (kg/day)</option>
                       <option>50 - 250 kg</option>
                       <option>250 - 1000 kg</option>
                       <option>1000+ kg</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase text-stone-500 tracking-widest font-bold">City</label>
                    <input type="text" className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder-stone-400" placeholder="Location" />
                 </div>
              </div>

              <div className="space-y-2">
                  <label className="text-xs uppercase text-stone-500 tracking-widest font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors resize-none placeholder-stone-400" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-stone-900 hover:bg-emerald-900 text-white py-4 text-sm uppercase tracking-widest font-bold transition-colors mt-8 shadow-lg shadow-stone-900/10"
              >
                Schedule Consultation
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;