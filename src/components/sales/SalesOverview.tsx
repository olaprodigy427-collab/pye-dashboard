// src/components/sales/SalesOverview.tsx
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// This component receives transaction data from parent
interface SalesOverviewProps {
  transactions: Array<{
    product: string;
    company: string;
    amount: number;
    date: string;
    status: string;
  }>;
}

export function SalesOverview({ transactions }: SalesOverviewProps) {
  // Derived calculations from transaction data
  const totalRevenue = transactions.reduce((sum, t) => sum + t.amount, 0);
  const successful = transactions.filter(t => t.status === "Success");
  const totalSuccessful = successful.reduce((sum, t) => sum + t.amount, 0);
  const avgOrderValue = transactions.length ? totalRevenue / transactions.length : 0;
  const conversionRate = transactions.length ? (successful.length / transactions.length) * 100 : 0;

  // Quick stats cards (same style as your StatsCards)
  const salesStats = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      change: "+14.2%",
      trend: "up",
    },
    {
      title: "Successful Sales",
      value: `$${totalSuccessful.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
      change: "+9.8%",
      trend: "up",
    },
    {
      title: "Avg. Order Value",
      value: `$${avgOrderValue.toFixed(2)}`,
      change: "-2.1%",
      trend: "down",
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate.toFixed(1)}%`,
      change: "+3.5%",
      trend: "up",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Sales Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {salesStats.map((stat, i) => (
          <div
            key={i}
            className="
              bg-section border border-gray-800 rounded-2xl p-6
              hover:border-primary/40 transition-all duration-300
            "
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-xl text-primary font-bold">$</span>
              </div>
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>

            <h4 className="text-sm text-gray-400 mb-1">{stat.title}</h4>
            <p className="text-2xl md:text-3xl font-semibold text-white">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-2">Compared to last month</p>
          </div>
        ))}
      </div>

      {/* Recent Sales Table */}
      <div className="bg-section border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">Recent Sales</h3>
          <button className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-900/70">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Product</th>
                <th className="px-6 py-4 text-left font-medium">Amount</th>
                <th className="px-6 py-4 text-left font-medium">Date</th>
                <th className="px-6 py-4 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {transactions.map((tx, i) => (
                <tr key={i} className="hover:bg-gray-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{tx.product}</td>
                  <td className="px-6 py-4 text-gray-300">
                    ${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-gray-400">{tx.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`
                        inline-flex px-2.5 py-1 rounded-full text-xs font-medium
                        ${tx.status === "Success" ? "bg-green-500/20 text-green-400" : ""}
                        ${tx.status === "Processing" ? "bg-yellow-500/20 text-yellow-400" : ""}
                        ${tx.status === "Declined" ? "bg-red-500/20 text-red-400" : ""}
                      `}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sales Chart Placeholder */}
      <div className="bg-section border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-medium mb-4">Sales Trend</h3>
        <div className="h-80 flex items-center justify-center text-gray-500">
          Interactive sales chart (Recharts) coming soon...
        </div>
      </div>
    </div>
  );
}