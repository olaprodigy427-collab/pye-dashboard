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
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

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
  onMenuChange: (menu: MenuItem) => void;
}

export function Sidebar({ activeMenu, onMenuChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(true);

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-lg font-semibold text-white">Apexify</span>
        </div>

        {/* Close button - mobile only */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {/* Dashboard */}
        <button
          onClick={() => {
            onMenuChange("dashboard");
            setIsOpen(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeMenu === "dashboard"
              ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50"
              : "text-gray-300 hover:bg-gray-800"
          }`}
        >
          <LayoutDashboard size={20} />
          <span className="font-medium">Dashboard</span>
        </button>

        {/* Sales */}
        <button
          onClick={() => {
            onMenuChange("sales");
            setIsOpen(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeMenu === "sales"
              ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50"
              : "text-gray-300 hover:bg-gray-800"
          }`}
        >
          <DollarSign size={20} />
          <span className="font-medium">Sales</span>
        </button>

        {/* Analytics dropdown */}
        <div className="space-y-1">
          <button
            onClick={() => setAnalyticsOpen(!analyticsOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              activeMenu.startsWith("analytics")
                ? "text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center gap-3">
              <BarChart3 size={20} />
              <span className="font-medium">Analytics</span>
            </div>
            <ChevronRight
              size={16}
              className={`transition-transform ${analyticsOpen ? "rotate-90" : ""}`}
            />
          </button>

          {/* Analytics submenu */}
          {analyticsOpen && (
            <div className="pl-11 space-y-1 py-1">
              <button
                onClick={() => {
                  onMenuChange("analytics-products");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                  activeMenu === "analytics-products"
                    ? "bg-gray-800 text-white font-medium"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                Product
              </button>
              <button
                onClick={() => {
                  onMenuChange("analytics-store");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                  activeMenu === "analytics-store"
                    ? "bg-gray-800 text-white font-medium"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                Store
              </button>
              <button
                onClick={() => {
                  onMenuChange("analytics-visitors");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm ${
                  activeMenu === "analytics-visitors"
                    ? "bg-gray-800 text-white font-medium"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                Visitor
              </button>
            </div>
          )}
        </div>

        {/* Enrich */}
        <button
          onClick={() => {
            onMenuChange("enrich");
            setIsOpen(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeMenu === "enrich"
              ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50"
              : "text-gray-300 hover:bg-gray-800"
          }`}
        >
          <Users size={20} />
          <span className="font-medium">Enrich</span>
        </button>

        {/* Shipment */}
        <button
          onClick={() => {
            onMenuChange("shipment");
            setIsOpen(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeMenu === "shipment"
              ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50"
              : "text-gray-300 hover:bg-gray-800"
          }`}
        >
          <Package size={20} />
          <span className="font-medium">Shipment</span>
        </button>

        {/* Integration */}
        <button
          onClick={() => {
            onMenuChange("integration");
            setIsOpen(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
            activeMenu === "integration"
              ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50"
              : "text-gray-300 hover:bg-gray-800"
          }`}
        >
          <Puzzle size={20} />
          <span className="font-medium">Integration</span>
        </button>
      </nav>

      {/* Upgrade card */}
      <div className="p-4 mx-4 mb-6 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-3">
          <ArrowUpRight className="text-white" size={20} />
        </div>
        <p className="text-sm text-gray-300 mb-2">
          Get detailed analytics to help your grow your site
        </p>
        <button className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors">
          Upgrade Now →
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-gray-300">🌙</div>
          <span className="text-sm text-gray-300">Dark Mode</span>
        </div>
        <div className="w-11 h-6 bg-purple-600 rounded-full relative cursor-pointer shadow-inner">
          <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-all shadow-md" />
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar - always visible on lg+ */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-black border-r border-gray-800 flex-col overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <aside
          className={`absolute inset-y-0 left-0 w-64 bg-black border-r border-gray-800 flex flex-col transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {sidebarContent}
        </aside>
      </div>

      {/* Hamburger button - mobile only */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-40 p-2 rounded-lg bg-gray-900/90 hover:bg-gray-800 border border-gray-700 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={20} className="text-gray-300" />
      </button>
    </>
  );
}

