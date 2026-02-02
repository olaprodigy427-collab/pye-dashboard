// src/components/layout/Sidebar.tsx
"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  DollarSign,
  BarChart3,
  Users,
  Package,
  Truck,
  Puzzle,
  ChevronDown,
  ArrowUpRight,
  Moon,
} from "lucide-react";

// Define the same type here (or import from a shared file)
type MenuItem =
  | "dashboard"
  | "sales"
  | "analytics-products"
  | "analytics-store"
  | "analytics-visitors"
  | "enrich"
  | "shipment"
  | "integration";

interface SidebarProps {
  activeMenu: MenuItem;
  onMenuChange: (menu: MenuItem) => void;   // ← this matches exactly
}

export function Sidebar({ activeMenu, onMenuChange }: SidebarProps) {
  const [analyticsOpen, setAnalyticsOpen] = useState(true);

  return (
    <aside className="w-64 bg-section border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-xl font-semibold">Apexify</span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        <button
          onClick={() => onMenuChange("dashboard")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
            activeMenu === "dashboard" ? "bg-primary/10 text-primary" : "hover:bg-gray-800"
          }`}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => onMenuChange("sales")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
            activeMenu === "sales" ? "bg-primary/10 text-primary" : "hover:bg-gray-800"
          }`}
        >
          <DollarSign size={20} />
          <span>Sales</span>
        </button>

        {/* Analytics dropdown */}
        <div className="space-y-1">
          <button
            onClick={() => setAnalyticsOpen(!analyticsOpen)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-gray-800 transition-colors ${
              analyticsOpen ? "text-primary" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <BarChart3 size={20} />
              <span>Analytics</span>
            </div>
            <ChevronDown size={16} className={analyticsOpen ? "rotate-180" : ""} />
          </button>

          {analyticsOpen && (
            <div className="pl-10 space-y-1">
              <button
                onClick={() => onMenuChange("analytics-products")}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 text-sm transition-colors ${
                  activeMenu === "analytics-products" ? "text-primary bg-primary/5" : ""
                }`}
              >
                Product
              </button>
              <button
                onClick={() => onMenuChange("analytics-store")}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 text-sm transition-colors ${
                  activeMenu === "analytics-store" ? "text-primary bg-primary/5" : ""
                }`}
              >
                Store
              </button>
              <button
                onClick={() => onMenuChange("analytics-visitors")}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 text-sm transition-colors ${
                  activeMenu === "analytics-visitors" ? "text-primary bg-primary/5" : ""
                }`}
              >
                Visitor
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => onMenuChange("enrich")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
            activeMenu === "enrich" ? "bg-primary/10 text-primary" : "hover:bg-gray-800"
          }`}
        >
          <Users size={20} />
          <span>Enrich</span>
        </button>

        <button
          onClick={() => onMenuChange("shipment")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
            activeMenu === "shipment" ? "bg-primary/10 text-primary" : "hover:bg-gray-800"
          }`}
        >
          <Package size={20} />
          <span>Shipment</span>
        </button>

        <button
          onClick={() => onMenuChange("integration")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
            activeMenu === "integration" ? "bg-primary/10 text-primary" : "hover:bg-gray-800"
          }`}
        >
          <Puzzle size={20} />
          <span>Integration</span>
        </button>
      </nav>

      {/* Upgrade card */}
      <div className="p-4 mx-4 mb-4 border border-gray-700 rounded-lg bg-gray-900/50">
        <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-3">
          <ArrowUpRight className="text-primary" size={20} />
        </div>
        <p className="text-sm mb-1">Get detailed analytics to help you</p>
        <button className="text-primary text-sm font-medium hover:underline">
          Upgrade to Pro →
        </button>
      </div>

      {/* Dark mode toggle */}
      <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Moon size={18} />
          <span>Dark Mode</span>
        </div>
        <div className="w-10 h-5 bg-gray-700 rounded-full relative cursor-pointer">
          <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transition-all" />
        </div>
      </div>
    </aside>
  );
}