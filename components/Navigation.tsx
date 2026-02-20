'use client';

import { Menu, User } from 'iconoir-react';

interface NavigationProps {
  balance: {
    usd: string;
    eth: string;
  };
  activeTab: 'play' | 'wins';
}

export default function Navigation({ balance, activeTab }: NavigationProps) {
  return (
    <nav className="bg-[#1A1A1A] border-b border-[#2A2A2A]">
      <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-1 w-6 h-6">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <span className="text-white text-2xl font-bold">Wega</span>
        </div>

        {/* Center: Tabs */}
        <div className="flex items-center gap-8">
          <button
            className={`text-base font-semibold pb-1 transition-colors relative ${
              activeTab === 'play'
                ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#FF8C42]'
                : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            Play
          </button>
          <button
            className={`text-base font-semibold pb-1 transition-colors ${
              activeTab === 'wins' ? 'text-white' : 'text-[#A0A0A0] hover:text-white'
            }`}
          >
            Wins
          </button>
        </div>

        {/* Right: Balance + Avatar */}
        <div className="flex items-center gap-4">
          <div className="bg-[#2A2A2A] px-4 py-2 rounded-lg">
            <span className="text-white font-semibold">
              {balance.usd} ({balance.eth})
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
