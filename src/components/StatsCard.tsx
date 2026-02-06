// src/components/StatsCards.tsx  (or StatsCard.tsx — adjust filename as needed)
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";

const stats = [
  {
    title: "Total Income",
    value: "$348,261",
    change: "+12.95%",
    trend: "up",
  },
  {
    title: "Profit",
    value: "$15,708.98",
    change: "+8.12%",
    trend: "up",
  },
  {
    title: "Total Revenue",
    value: "$7,415,644",
    change: "-5.18%",
    trend: "down",
  },
  {
    title: "Total Conversion",
    value: "10.87%",
    change: "+25.45%",
    trend: "up",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const isFirst = index === 0;

        return (
          <div
            key={index}
            className={`
              relative overflow-hidden
              ${isFirst 
                ? "bg-linear-to-br from-[#3a1f6e] via-[#2a1652] to-[#1a0d38]" 
                : "bg-section"}  {/* ← solid dark bg for others */}
              border border-gray-800/50
              rounded-3xl                {/* large smooth corners */}
              p-6
              transition-all duration-300
              hover:shadow-xl
              hover:shadow-primary/10
              hover:border-primary/30
              group
            `}
          >
            {/* Optional subtle shine overlay on first card */}
            {isFirst && (
              <div className="absolute inset-0 bg-linear-to-t from-transparent via-white/5 to-transparent pointer-events-none opacity-50" />
            )}

            {/* More menu (⋯) */}
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white opacity-70 hover:opacity-100 transition-opacity"
              aria-label="More options"
            >
              <MoreHorizontal size={20} />
            </button>

            {/* Icon circle */}
            <div className="mb-6">
              <div className={`
                w-14 h-14 rounded-2xl
                ${isFirst 
                  ? "bg-linear-to-br from-primary to-[#7c4fff]" 
                  : "bg-gray-800/70"}
                flex items-center justify-center
                shadow-lg ${isFirst ? "shadow-primary/30" : "shadow-black/40"}
              `}>
                {/* You can replace with real icons / images */}
                <span className="text-2xl text-white">
                  {index === 0 ? "💰" : index === 1 ? "📈" : index === 2 ? "💵" : "📊"}
                </span>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-sm text-gray-400 mb-2 font-medium">
              {stat.title}
            </h4>

            {/* Value + change */}
            <div className="flex items-baseline gap-3 mb-1">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </p>

              <div
                className={`
                  flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full
                  ${stat.trend === "up"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"}
                `}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight size={12} />
                ) : (
                  <ArrowDownRight size={12} />
                )}
                {stat.change}
              </div>
            </div>

            {/* Comparison text */}
            <p className="text-xs text-gray-500 mt-3">
              Compared to last month
            </p>
          </div>
        );
      })}
    </div>
  );
}