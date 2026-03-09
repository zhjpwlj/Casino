import React from 'react';
import { motion } from 'motion/react';
import { Coins, Club, Diamond, Spade, Heart, CircleDot, Dices, Target, Star, Gem, Crown, Zap, Dog, Shield, Swords } from 'lucide-react';
import { useGame } from '../context/GameContext';

interface CasinoProps {
  onSelectGame: (game: string) => void;
}

interface Game {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  disabled?: boolean;
}

export const Casino: React.FC<CasinoProps> = ({ onSelectGame }) => {
  const { coins } = useGame();

  const games: Game[] = [
    {
      id: 'slots',
      name: 'Slots',
      description: 'Classic 3-reel slots. Hit the jackpot!',
      icon: <Coins className="w-12 h-12 text-yellow-400" />,
      color: 'from-yellow-600 to-orange-900',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'blackjack',
      name: 'Blackjack',
      description: 'Beat the dealer. Aim for 21.',
      icon: <Spade className="w-12 h-12 text-white" />,
      color: 'from-green-800 to-green-950',
      image: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop'
    },
    {
      id: 'pachinko',
      name: 'Pachinko',
      description: 'Traditional Japanese pinball game.',
      icon: <CircleDot className="w-12 h-12 text-pink-500" />,
      color: 'from-pink-600 to-purple-900',
      image: 'https://images.unsplash.com/photo-1595821262070-13f59b66280d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'roulette',
      name: 'Roulette',
      description: 'The wheel of destiny. Red or black?',
      icon: <Diamond className="w-12 h-12 text-red-500" />,
      color: 'from-red-800 to-red-950',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'poker',
      name: 'Poker',
      description: 'Strategy and luck. Make the best hand.',
      icon: <Club className="w-12 h-12 text-blue-400" />,
      color: 'from-blue-800 to-blue-950',
      image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop',
    },
    {
      id: 'baccarat',
      name: 'Baccarat',
      description: 'Player or Banker. The ultimate choice.',
      icon: <Crown className="w-12 h-12 text-yellow-500" />,
      color: 'from-yellow-800 to-red-900',
      image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'craps',
      name: 'Craps',
      description: 'Trust the roll of the dice.',
      icon: <Dices className="w-12 h-12 text-white" />,
      color: 'from-gray-700 to-gray-900',
      image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'sicbo',
      name: 'Sic Bo',
      description: 'Ancient Asian dice game with 3 dice.',
      icon: <Dices className="w-12 h-12 text-red-400" />,
      color: 'from-red-700 to-orange-900',
      image: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'keno',
      name: 'Keno',
      description: 'Pick your numbers and win big.',
      icon: <Target className="w-12 h-12 text-green-400" />,
      color: 'from-green-700 to-teal-900',
      image: 'https://images.unsplash.com/photo-1626015573450-48e0c8b74825?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'videopoker',
      name: 'Video Poker',
      description: 'Poker vs the machine. Get a Royal Flush!',
      icon: <Heart className="w-12 h-12 text-pink-400" />,
      color: 'from-purple-800 to-pink-900',
      image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2073&auto=format&fit=crop',
    },
    {
      id: 'bingo',
      name: 'Bingo',
      description: 'Classic bingo fun.',
      icon: <CircleDot className="w-12 h-12 text-blue-300" />,
      color: 'from-blue-600 to-cyan-900',
      image: 'https://images.unsplash.com/photo-1595821262070-13f59b66280d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'plinko',
      name: 'Plinko',
      description: 'Drop the ball and watch it bounce.',
      icon: <Star className="w-12 h-12 text-yellow-300" />,
      color: 'from-yellow-500 to-orange-800',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'mines',
      name: 'Mines',
      description: 'Avoid the mines, find the gems.',
      icon: <Gem className="w-12 h-12 text-cyan-400" />,
      color: 'from-cyan-700 to-blue-900',
      image: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop',
    },
    {
      id: 'wheel',
      name: 'Wheel of Fortune',
      description: 'Spin the wheel for massive prizes.',
      icon: <Zap className="w-12 h-12 text-purple-400" />,
      color: 'from-purple-700 to-indigo-900',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 'dragon-tiger',
      name: 'Dragon Tiger',
      description: 'Simple high-card game. Dragon or Tiger?',
      icon: <Zap className="w-12 h-12 text-red-500" />,
      color: 'from-red-600 to-orange-900',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'red-dog',
      name: 'Red Dog',
      description: 'Bet on the spread between two cards.',
      icon: <Dog className="w-12 h-12 text-blue-400" />,
      color: 'from-blue-600 to-indigo-900',
      image: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600">
          Casino Floor
        </h2>
        <p className="text-gray-400">Feeling lucky today?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <motion.button
            key={game.id}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => !game.disabled && onSelectGame(game.id)}
            disabled={game.disabled}
            className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${game.color} p-1 text-left shadow-xl transition-all ${game.disabled ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:shadow-2xl hover:shadow-white/10'}`}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                {game.icon}
              </div>
            </div>

            <div className="px-4 pb-6 space-y-2 relative z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white group-hover:text-yellow-200 transition-colors">
                  {game.name}
                </h3>
                {game.disabled && (
                  <span className="text-xs font-bold bg-black/50 px-2 py-1 rounded text-gray-400 border border-white/10">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {game.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
