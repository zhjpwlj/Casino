import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Ghost, Rocket, Trophy, Zap, Star, Heart, Skull, Target, Sword, Shield, Crown, Flag, Map, Box } from 'lucide-react';
import { getHighScores } from '../lib/highscore';
import { useGame } from '../context/GameContext';

interface Game {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  disabled?: boolean;
}

interface ArcadeProps {
  onSelectGame: (game: string) => void;
}

export const Arcade: React.FC<ArcadeProps> = ({ onSelectGame }) => {
  const { difficulty, setDifficulty } = useGame();

  const games: Game[] = [
    { id: 'snake', name: 'Snake', icon: <Ghost className="w-8 h-8 text-green-400" />, color: 'from-green-600/20 to-green-900/40 border-green-500/30' },
    { id: 'breakout', name: 'Breakout', icon: <Box className="w-8 h-8 text-blue-400" />, color: 'from-blue-600/20 to-blue-900/40 border-blue-500/30' },
    { id: 'invaders', name: 'Invaders', icon: <Rocket className="w-8 h-8 text-red-400" />, color: 'from-red-600/20 to-red-900/40 border-red-500/30' },
    { id: 'pacman', name: 'Pac-Man', icon: <Zap className="w-8 h-8 text-yellow-400" />, color: 'from-yellow-600/20 to-yellow-900/40 border-yellow-500/30' },
    { id: 'tetris', name: 'Tetris', icon: <Box className="w-8 h-8 text-purple-400" />, color: 'from-purple-600/20 to-purple-900/40 border-purple-500/30' },
    { id: 'pong', name: 'Pong', icon: <Trophy className="w-8 h-8 text-white" />, color: 'from-gray-600/20 to-gray-900/40 border-white/30' },
    { id: 'asteroids', name: 'Asteroids', icon: <Star className="w-8 h-8 text-cyan-400" />, color: 'from-cyan-600/20 to-cyan-900/40 border-cyan-500/30' },
    { id: 'frogger', name: 'Frogger', icon: <Target className="w-8 h-8 text-green-600" />, color: 'from-green-700/20 to-green-950/40 border-green-600/30' },
    { id: 'donkey', name: 'Kong', icon: <Skull className="w-8 h-8 text-orange-400" />, color: 'from-orange-600/20 to-orange-900/40 border-orange-500/30' },
    { id: 'galaga', name: 'Galaga', icon: <Rocket className="w-8 h-8 text-pink-400" />, color: 'from-pink-600/20 to-pink-900/40 border-pink-500/30' },
    { id: 'digdug', name: 'Dig Dug', icon: <Target className="w-8 h-8 text-yellow-600" />, color: 'from-yellow-700/20 to-yellow-950/40 border-yellow-600/30' },
    { id: 'centipede', name: 'Centipede', icon: <Ghost className="w-8 h-8 text-lime-400" />, color: 'from-lime-600/20 to-lime-900/40 border-lime-500/30' },
    { id: 'zelda', name: 'Quest', icon: <Sword className="w-8 h-8 text-green-300" />, color: 'from-green-500/20 to-green-800/40 border-green-400/30' },
    { id: 'mario', name: 'Plumber', icon: <Crown className="w-8 h-8 text-red-600" />, color: 'from-red-700/20 to-red-950/40 border-red-600/30' },
    { id: 'racer', name: 'Racer', icon: <Flag className="w-8 h-8 text-blue-600" />, color: 'from-blue-700/20 to-blue-950/40 border-blue-600/30' },
    { id: 'rpg', name: 'RPG', icon: <Map className="w-8 h-8 text-purple-600" />, color: 'from-purple-700/20 to-purple-950/40 border-purple-600/30' },
  ];

  return (
    <div className="space-y-12 font-display">
      <div className="text-center space-y-4">
        <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tighter uppercase italic">
          Arcade Zone
        </h2>
        <p className="text-zinc-500 font-mono text-sm tracking-[0.3em] uppercase">Insert Coin to Play</p>
        
        <div className="flex justify-center gap-4 mt-6">
          {(['easy', 'medium', 'hard'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficulty(diff)}
              className={`px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${
                difficulty === diff 
                  ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]' 
                  : 'bg-white/5 border-white/10 text-zinc-500 hover:bg-white/10'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {games.map((game) => {
          const scores = getHighScores(game.id);
          const highscore = scores.length > 0 ? scores[0].score : 0;
          return (
            <motion.div
              key={game.id}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Cabinet Frame */}
              <div className="absolute -inset-2 bg-zinc-800 rounded-2xl border border-white/10 shadow-2xl" />
              
              <button
                onClick={() => !game.disabled && onSelectGame(game.id)}
                disabled={game.disabled}
                className={`relative w-full aspect-[4/5] rounded-xl border-2 flex flex-col items-center justify-between p-6 transition-all bg-gradient-to-b ${game.color} ${game.disabled ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:brightness-125'}`}
              >
                {/* Screen Effect */}
                <div className="absolute inset-2 bg-black/40 rounded-lg pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,128,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
                </div>

                <div className="relative z-10 p-6 rounded-2xl bg-black/60 shadow-inner border border-white/5">
                  {game.icon}
                </div>

                <div className="relative z-10 text-center space-y-4">
                  <h3 className="font-black text-xl text-white uppercase tracking-tighter italic">
                    {game.name}
                  </h3>
                  
                  {/* High Scores List */}
                  <div className="bg-black/80 rounded-lg p-3 border border-white/10 space-y-1 min-w-[140px]">
                    <div className="flex items-center justify-between text-[10px] font-black text-yellow-500 uppercase tracking-widest border-b border-white/10 pb-1 mb-1">
                      <span>Top Score</span>
                      <Trophy className="w-3 h-3" />
                    </div>
                    {scores.slice(0, 3).map((s, idx) => (
                      <div key={idx} className="flex justify-between text-[10px] font-mono text-zinc-400">
                        <span>{s.name}</span>
                        <span className="text-white">{s.score}</span>
                      </div>
                    ))}
                    {scores.length === 0 && (
                      <div className="text-[10px] font-mono text-zinc-600 italic">No scores yet</div>
                    )}
                  </div>
                </div>

                {game.disabled && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-xl backdrop-blur-sm z-20">
                    <span className="text-xs font-black text-white bg-red-600 px-4 py-2 rounded-full border-2 border-red-400 uppercase tracking-widest">
                      Offline
                    </span>
                  </div>
                )}
              </button>

              {/* Cabinet Base Accent */}
              <div className="absolute -bottom-2 left-4 right-4 h-1 bg-white/20 rounded-full blur-sm" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
