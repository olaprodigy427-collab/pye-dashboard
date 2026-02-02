// src/components/layout/Header.tsx
"use client"; // if you add interactivity later (e.g. focus effects)

import { Search, Bell, User, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="bg-section border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      {/* Left: Dashboard title */}
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Right side: Search + icons + profile */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="relative w-64 md:w-80"> {/* wider on medium+ screens */}
          <input
            type="search"
            placeholder="Type here to start searching..."
            className="
              w-full 
              bg-gray-900 
              border border-gray-700 
              rounded-lg 
              py-2.5 pl-10 pr-4 
              text-sm 
              text-white 
              placeholder:text-gray-500 
              focus:outline-none 
              focus:border-primary/60 
              focus:ring-1 
              focus:ring-primary/30 
              transition-all
            "
          />
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" 
          />
        </div>

        {/* Notification icon */}
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors relative">
          <Bell size={20} />
          {/* Optional: red dot for unread */}
          {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </button>

        {/* Profile dropdown trigger */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
            {/* You can replace with real avatar later */}
            <User size={18} className="text-gray-300" />
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}