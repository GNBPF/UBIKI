import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="p-4 md:p-6 bg-white">
      <footer className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex flex-col justify-between group bg-stone-900 text-white">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1470290449668-02dd93d9420a?q=80&w=2670&auto=format&fit=crop" 
            alt="Ubiki Infrastructure" 
            className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]" 
          />
        </div>

        {/* Content Top */}
        <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row justify-between items-start">
          <div className="mb-12 md:mb-0">
             <img 
               src="/logo.png" 
               alt="Ubiki Logo" 
               className="mb-6 h-12 md:h-16 w-auto"
             />
             <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
               Ready to design your <br />
               <span className="text-emerald-500">waste infrastructure?</span>
             </h2>
          </div>
          
          <div className="flex flex-col gap-6 text-right">
             <a href="#contact" className="group/btn flex items-center gap-4 text-white text-xl md:text-2xl font-light hover:text-emerald-400 transition-colors">
               Schedule Audit <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
             </a>
             <a href="mailto:strategy@ubiki.com" className="group/btn flex items-center gap-4 text-white text-xl md:text-2xl font-light hover:text-emerald-400 transition-colors">
               strategy@ubiki.com <ArrowUpRight className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
             </a>
          </div>
        </div>

        {/* Content Bottom */}
        <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 mx-8 md:mx-16">
           <div className="text-stone-400 text-xs uppercase tracking-widest space-y-2 mb-8 md:mb-0">
             <p>&copy; {new Date().getFullYear()} Ubiki Waste Solutions.</p>
             <p>Official Affiliate Partner of Solwaste.</p>
           </div>

           <div className="flex gap-6 md:gap-8 flex-wrap">
             {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
               <a key={social} href="#" className="text-sm text-stone-400 hover:text-white transition-colors uppercase tracking-widest">
                 {social}
               </a>
             ))}
           </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;