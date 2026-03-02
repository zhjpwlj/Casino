import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Dice5 } from 'lucide-react';
import { cn } from '../lib/utils';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-[0_0_30px_rgba(255,165,0,0.6)] tracking-tighter">
          夢のカジノ <span className="text-white">&</span> アーケード
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 font-light tracking-[0.3em] uppercase">
          DREAM CASINO & ARCADE
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Casino Card */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('casino')}
          className="group relative h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/50 to-black hover:border-purple-500/50 transition-all shadow-2xl shadow-purple-900/20"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-purple-600 text-white shadow-lg shadow-purple-500/30">
                <Dice5 size={32} />
              </div>
              <span className="text-purple-400 font-mono text-sm tracking-wider">CASINO ZONE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              CASINO
            </h2>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Slots, Blackjack, Roulette, and more. Authentic gambling experience.
            </p>
          </div>
        </motion.button>

        {/* Arcade Card */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('arcade')}
          className="group relative h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-900/50 to-black hover:border-blue-500/50 transition-all shadow-2xl shadow-blue-900/20"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                <Gamepad2 size={32} />
              </div>
              <span className="text-blue-400 font-mono text-sm tracking-wider">ARCADE ZONE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
              ARCADE
            </h2>
            <p className="text-gray-400 text-sm max-w-[200px]">
              15 classic retro games. Snake, Breakout, and more.
            </p>
          </div>
        </motion.button>
      </div>
    </div>
  );
};
