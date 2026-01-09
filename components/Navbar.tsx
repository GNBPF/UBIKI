import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (!target) return;

    // Custom smooth scroll implementation for "premium" feel
    const offset = 100; // Header offset
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Slower, more deliberate duration (1.2s)
    let start: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto relative bg-white/70 backdrop-blur-xl border border-stone-200 shadow-xl transition-all duration-500 ease-in-out overflow-hidden
            ${mobileMenuOpen ? 'rounded-[2rem] w-full max-w-sm' : 'rounded-full w-full max-w-sm md:max-w-4xl'}
          `}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                <span className="text-white font-bold text-xs">U</span>
              </div>
              <span className="text-sm font-bold text-stone-900 tracking-widest uppercase">Ubiki</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="px-4 py-2 text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-all duration-300 font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button 
                onClick={onOpenModal}
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-stone-900 text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-emerald-800 transition-colors duration-300 cursor-pointer"
              >
                Start <ArrowRight className="w-3 h-3" />
              </button>

              <button 
                className="md:hidden text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-stone-200"
              >
                <div className="flex flex-col p-6 gap-2">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-sm uppercase tracking-widest text-stone-600 hover:text-stone-900 hover:bg-stone-100 p-3 rounded-lg transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ))}
                  <button 
                    onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenModal();
                    }}
                    className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-white rounded-lg text-xs uppercase tracking-widest font-bold cursor-pointer"
                  >
                    Consult Strategy
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;