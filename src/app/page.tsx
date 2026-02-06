"use client";
// src/app/page.tsx
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCards } from "@/components/StatsCard";
import { SalesEstimationChart } from "@/components/charts/SalesEstimationChart";
import { SessionsByCountry } from "@/components/charts/SessionsByCountry";
import { TransactionTable } from "@/components/TransactionTable";

type MenuItem =
  | "dashboard"
  | "sales"
  | "analytics-products"
  | "analytics-store"
  | "analytics-visitors"
  | "enrich"
  | "shipment"
  | "integration";

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState<MenuItem>("dashboard");
  const [activeTab, setActiveTab] = useState<"overview" | "notifications" | "trade-history">("overview");

  const transactionData = [
    {
      id: 1,
      product: "TSLA",
      company: "Tesla, Inc.",
      amount: 30021.23,
      date: "Dec 13, 2023",
      status: "Processing",
      executedBy: "Olivia Riyye",
      executedEmail: "olivia@riyye.com",
    },
    {
      id: 2,
      product: "MTCH",
      company: "Match Group, Inc.",
      amount: 10045.0,
      date: "Dec 13, 2023",
      status: "Success",
      executedBy: "Phoenix Baker",
      executedEmail: "phoenix@baker.com",
    },
    {
      id: 3,
      product: "DDOG",
      company: "Datadog Inc.",
      amount: 40132.16,
      date: "Dec 13, 2023",
      status: "Success",
      executedBy: "Lana Steiner",
      executedEmail: "lana@steiner.com",
    },
    {
      id: 4,
      product: "ARKG",
      company: "ARK Genomic Revolution ETF",
      amount: 22665.12,
      date: "Dec 28, 2023",
      status: "Declined",
      executedBy: "Demi Wilkinson",
      executedEmail: "demi@wilkinson.com",
    },
  ];

  const notifications = transactionData.map((tx) => ({
    id: tx.id,
    message:
      tx.status === "Success"
        ? `Trade ${tx.product} completed successfully - $${tx.amount.toLocaleString()}`
        : tx.status === "Processing"
        ? `Your order for ${tx.product} is being processed`
        : `Trade ${tx.product} was declined`,
    time: tx.date,
    read: tx.status === "Success",
  }));

  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />

      {/* Main content area - with proper padding for sidebar */}
      <div className="flex-1 lg:ml-64">
        <Header />

        <main className="p-6 lg:p-8 space-y-8">
          {/* Dashboard content */}
          {activeMenu === "dashboard" && (
            <>
              {/* Tabs */}
              <div className="flex items-center justify-between">
                <div className="flex gap-6 border-b border-gray-800">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`pb-4 px-2 text-sm font-medium transition-all ${
                      activeTab === "overview"
                        ? "text-white border-b-2 border-purple-500"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`pb-4 px-2 text-sm font-medium transition-all relative ${
                      activeTab === "notifications"
                        ? "text-white border-b-2 border-purple-500"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    Notifications
                    {notifications.some((n) => !n.read) && (
                      <span className="absolute -top-1 right-0 w-2 h-2 bg-red-500 rounded-full" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("trade-history")}
                    className={`pb-4 px-2 text-sm font-medium transition-all ${
                      activeTab === "trade-history"
                        ? "text-white border-b-2 border-purple-500"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    Trade History
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg text-sm text-gray-300">
                    28 Aug - 15 Dec, 2024
                  </div>
                  <button className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg text-sm text-gray-300 hover:bg-gray-800 transition-colors">
                    Filter
                  </button>
                  <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-500/30">
                    Share
                  </button>
                </div>
              </div>

              {/* Overview Tab */}
              {activeTab === "overview" && (
                <>
                  {/* Stats Cards */}
                  <StatsCards />

                  {/* Charts Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Analytics Chart */}
                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-white">Analytic</h3>
                        <button className="text-gray-400 hover:text-white">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </button>
                      </div>
                      <SalesEstimationChart />
                    </div>

                    {/* Session by Country */}
                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-white">Session by Country</h3>
                        <button className="text-gray-400 hover:text-white">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </button>
                      </div>
                      <SessionsByCountry />
                    </div>
                  </div>

                  {/* Transaction History */}
                  <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
                      <h3 className="text-lg font-semibold text-white">Transaction History</h3>
                      <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-medium text-gray-300 bg-[#0a0a0a] border border-gray-800 hover:bg-gray-900 rounded-lg transition-colors">
                          Download
                        </button>
                        <button className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg transition-all shadow-lg shadow-purple-500/30">
                          Re-Issue
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                          ⋯
                        </button>
                      </div>
                    </div>
                    <TransactionTable />
                  </div>
                </>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl divide-y divide-gray-800">
                  {notifications.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">No notifications yet</div>
                  ) : (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-6 flex items-start gap-4 hover:bg-gray-900/40 transition-colors ${
                          !notif.read ? "bg-purple-500/5" : ""
                        }`}
                      >
                        <div
                          className={`w-2 h-2 mt-2 rounded-full shrink-0 ${
                            notif.read ? "bg-gray-600" : "bg-purple-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-gray-200">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                        <button className="text-xs text-gray-400 hover:text-white">
                          Mark as read
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Trade History Tab */}
              {activeTab === "trade-history" && (
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h3 className="text-lg font-semibold text-white">Trade History</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[#0a0a0a]">
                        <tr>
                          <th className="px-6 py-4 text-left font-medium text-gray-400">Product</th>
                          <th className="px-6 py-4 text-left font-medium text-gray-400">Amount</th>
                          <th className="px-6 py-4 text-left font-medium text-gray-400">Date</th>
                          <th className="px-6 py-4 text-left font-medium text-gray-400">Status</th>
                          <th className="px-6 py-4 text-left font-medium text-gray-400">Trader</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {transactionData.map((tx) => (
                          <tr key={tx.id} className="hover:bg-gray-900/40">
                            <td className="px-6 py-4 font-medium text-white">{tx.product}</td>
                            <td className="px-6 py-4 text-gray-300">
                              ${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </td>
                            <td className="px-6 py-4 text-gray-400">{tx.date}</td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                                  tx.status === "Success"
                                    ? "bg-green-500/20 text-green-400"
                                    : tx.status === "Processing"
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                • {tx.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-300">{tx.executedBy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Other menu sections */}
          {activeMenu !== "dashboard" && (
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-12 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {activeMenu === "sales"
                  ? "Sales"
                  : activeMenu === "analytics-products"
                  ? "Products Analytics"
                  : activeMenu === "analytics-store"
                  ? "Store Analytics"
                  : activeMenu === "analytics-visitors"
                  ? "Visitor Analytics"
                  : activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}
              </h2>
              <p className="text-gray-500">Coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
