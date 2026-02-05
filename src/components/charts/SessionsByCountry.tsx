"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface CountryData {
  country: string;
  percentage: number;
  flag: string;           // ← path starting with /
}

const data: CountryData[] = [
  {
    country: "United States",
    percentage: 85,
    flag: "/flags/usa.png",     // ← correct path
  },
  {
    country: "Japan",
    percentage: 70,
    flag: "/flags/japan.png",
  },
  {
    country: "Indonesia",
    percentage: 45,
    flag: "/flags/ind.png",
  },
  {
    country: "South Korea",
    percentage: 38,
    flag: "/flags/kor.png",
  },
];

export function SessionsByCountry() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={200}>  {/* <-- Added minWidth and minHeight to fix dimension errors */}
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 120, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.5} />

          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(value: number) => `${value}%`}
            stroke="#888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            type="category"
            dataKey="country"
            width={130}
            stroke="#888"
            fontSize={13}
            axisLine={false}
            tickLine={false}
            tick={({
              x,
              y,
              payload,
            }: {
              x: string | number;  // Allows string or number
              y: string | number;  // Allows string or number
              payload: { value: string };
            }) => {
              const countryData = data.find((d) => d.country === payload.value);

              // Handle x and y as potentially strings for SVG safety
              const numericX = typeof x === 'number' ? x : parseFloat(x as string) || 0;
              const numericY = typeof y === 'number' ? y : parseFloat(y as string) || 0;

              return (
                <g transform={`translate(${numericX},${numericY})`}>
                  {/* Flag image */}
                  <image
                    href={countryData?.flag}
                    x={-100}
                    y={-9}
                    width={24}
                    height={18}
                    preserveAspectRatio="xMidYMid slice"
                  />

                  {/* Country name */}
                  <text
                    x={-70}
                    y={0}
                    dy={5}
                    textAnchor="start"
                    fill="#ddd"
                    fontSize={13}
                  >
                    {payload.value}
                  </text>
                </g>
              );
            }}
          />
          <Tooltip
            cursor={{ fill: "rgba(150, 96, 251, 0.08)" }}
            contentStyle={{
              backgroundColor: "#1f1f1f",
              border: "1px solid #444",
              borderRadius: "6px",
              color: "#fff",
            }}
            formatter={(value?: number) => [`${value ?? 0}%`, "Sessions"]}
          />

          <Bar
            dataKey="percentage"
            fill="#9660FB"
            radius={[4, 4, 4, 4]}
            barSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}