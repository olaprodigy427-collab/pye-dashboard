"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000000, target: 3800000 },
  { month: "Feb", revenue: 5200000, target: 4200000 },
  { month: "Mar", revenue: 4800000, target: 4600000 },
  { month: "Apr", revenue: 6100000, target: 5000000 },
  { month: "May", revenue: 5800000, target: 5400000 },
  { month: "Jun", revenue: 7200000, target: 5800000 },
  { month: "Jul", revenue: 6800000, target: 6200000 },
  { month: "Aug", revenue: 8500000, target: 6600000 },
  { month: "Sep", revenue: 7800000, target: 7000000 },
  { month: "Oct", revenue: 9200000, target: 7400000 },
  { month: "Nov", revenue: 8800000, target: 7800000 },
  { month: "Dec", revenue: 10500000, target: 8200000 },
];

export function SalesEstimationChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9660FB" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9660FB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#4ADE80" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.6} />

          <XAxis dataKey="month" stroke="#888" fontSize={12} />
          <YAxis
            stroke="#888"
            fontSize={12}
            tickFormatter={(value: number) =>
              `$${(value / 1_000_000).toFixed(1)}M`
            }
          />

          <Tooltip
            formatter={(value?: number) => [
              `$${(value ?? 0).toLocaleString()}`,
              "",
            ]}
          />

          <Legend />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#9660FB"
            fill="url(#colorRevenue)"
            name="Revenue"
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#4ADE80"
            strokeDasharray="5 5"
            fill="url(#colorTarget)"
            name="Target"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
