import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-stone-900/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative w-full max-w-lg bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8 overflow-hidden"
          >
              {/* Decorative background blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />

              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer"
              >
                  <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Request Capabilities Deck</h3>
                <p className="text-stone-500 text-sm">Leave your details. Our strategy team will guide you through the technical specifications tailored to your volume.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">Name</label>
                      <input type="text" className="w-full bg-white/60 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all" placeholder="Enter your full name" />
                  </div>
                  <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-white/60 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all" placeholder="+91 00000 00000" />
                  </div>
                  <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-stone-500 mb-2">Message</label>
                      <textarea rows={3} className="w-full bg-white/60 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all resize-none" placeholder="Brief details about your facility..."></textarea>
                  </div>
                  
                  <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-emerald-800 transition-colors shadow-lg mt-2 cursor-pointer">
                      Get a Call
                  </button>
              </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;