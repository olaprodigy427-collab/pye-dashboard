// src/components/layout/Header.tsx
"use client";

import { Bell, Search, Settings } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#0a0a0a] border-b border-gray-800 px-6 lg:px-8 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Left - Title */}
        <h1 className="text-xl font-bold text-white">Dashboard</h1>

        {/* Right - Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg min-w-[300px]">
            <Search size={18} className="text-gray-500" />
            <input
              type="search"
              placeholder="Type here to start searching..."
              className="bg-transparent text-sm focus:outline-none text-gray-300 placeholder-gray-600 w-full"
            />
            <kbd className="px-2 py-0.5 text-xs text-gray-500 bg-gray-900 border border-gray-700 rounded">
              ⌘/
            </kbd>
          </div>

          {/* Notifications */}
          <button className="p-2.5 hover:bg-[#1a1a1a] border border-transparent hover:border-gray-800 rounded-lg transition-all relative">
            <Bell size={20} className="text-gray-400" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          </button>

          {/* Settings */}
          <button className="p-2.5 hover:bg-[#1a1a1a] border border-transparent hover:border-gray-800 rounded-lg transition-all">
            <Settings size={20} className="text-gray-400" />
          </button>

          {/* User Avatar */}
          <button className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-semibold text-sm hover:opacity-90 transition-opacity ring-2 ring-purple-500/20">
            U
          </button>
        </div>
      </div>
    </header>
  );
}
