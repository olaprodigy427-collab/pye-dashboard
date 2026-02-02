// src/app/page.tsx
"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCards } from "@/components/StatsCard";
import { SalesEstimationChart } from "@/components/charts/SalesEstimationChart";
import { SessionsByCountry } from "@/components/charts/SessionsByCountry";
import { TransactionTable } from "@/components/TransactionTable";
import { SalesOverview } from "@/components/sales/SalesOverview";

// Define the menu type once (shared between page and sidebar)
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

  // Header tabs state (only used when dashboard is active)
  const [activeTab, setActiveTab] = useState<"overview" | "notifications" | "trade-history">("overview");

  // Shared transaction data
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
      amount: 10045.00,
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

  // Derived notifications
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
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* ── Show different content based on sidebar selection ── */}
          {activeMenu === "dashboard" && (
            <>
              {/* Header tabs (only visible in dashboard) */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div className="flex space-x-8 border-b border-gray-800">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`
                      pb-3 px-1 font-medium transition-colors
                      ${activeTab === "overview" ? "text-primary border-b-2 border-primary" : "text-gray-400 hover:text-gray-300"}
                    `}
                  >
                    Overview
                  </button>

                  <button
                    onClick={() => setActiveTab("notifications")}
                    className={`
                      pb-3 px-1 font-medium transition-colors relative
                      ${activeTab === "notifications" ? "text-primary border-b-2 border-primary" : "text-gray-400 hover:text-gray-300"}
                    `}
                  >
                    Notifications
                    {notifications.some((n) => !n.read) && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab("trade-history")}
                    className={`
                      pb-3 px-1 font-medium transition-colors
                      ${activeTab === "trade-history" ? "text-primary border-b-2 border-primary" : "text-gray-400 hover:text-gray-300"}
                    `}
                  >
                    Trade History
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-gray-900 rounded-lg text-sm flex items-center gap-2">
                    <span>28 Aug - 15 Dec, 2024</span>
                  </div>
                  <button className="px-4 py-2 bg-gray-900 rounded-lg text-sm hover:bg-gray-800">
                    Filter
                  </button>
                  <button className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                    Share
                  </button>
                </div>
              </div>

              {/* Dashboard content */}
              {activeTab === "overview" && (
                <>
                  <StatsCards />

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-section border border-gray-800 rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Analytic</h3>
                      <SalesEstimationChart />
                    </div>

                    <div className="bg-section border border-gray-800 rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Session by Country</h3>
                      <SessionsByCountry />
                    </div>
                  </div>

                  <div className="bg-section border border-gray-800 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
                      <h3 className="text-lg font-medium text-white">Transaction History</h3>
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                          Download
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors">
                          Re-Issue
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                          ⋯
                        </button>
                      </div>
                    </div>
                    <TransactionTable />
                  </div>
                </>
              )}

              {activeTab === "notifications" && (
                <div className="bg-section border border-gray-800 rounded-lg divide-y divide-gray-800">
                  {notifications.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">No notifications yet</div>
                  ) : (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`p-5 flex items-start gap-4 hover:bg-gray-800/40 transition-colors ${
                          !notif.read ? "bg-primary/5" : ""
                        }`}
                      >
                        <div
                          className={`w-2 h-2 mt-2 rounded-full shrink-0 ${
                            notif.read ? "bg-gray-600" : "bg-primary"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-gray-200">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                        <button className="text-xs text-gray-400 hover:text-white">Mark as read</button>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "trade-history" && (
                <div className="bg-section border border-gray-800 rounded-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h3 className="text-lg font-medium text-white">Trade History</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-900/70">
                        <tr>
                          <th className="px-6 py-4 text-left font-medium">Product</th>
                          <th className="px-6 py-4 text-left font-medium">Amount</th>
                          <th className="px-6 py-4 text-left font-medium">Date</th>
                          <th className="px-6 py-4 text-left font-medium">Status</th>
                          <th className="px-6 py-4 text-left font-medium">Trader</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {transactionData.map((tx) => (
                          <tr key={tx.id} className="hover:bg-gray-800/40">
                            <td className="px-6 py-4 font-medium text-white">{tx.product}</td>
                            <td className="px-6 py-4 text-gray-300">
                              ${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </td>
                            <td className="px-6 py-4 text-gray-400">{tx.date}</td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-block px-2.5 py-1 rounded-full text-xs ${
                                  tx.status === "Success"
                                    ? "bg-green-500/20 text-green-400"
                                    : tx.status === "Processing"
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-red-500/20 text-red-400"
                                }`}
                              >
                                {tx.status}
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

          {/* Sales content */}
          {activeMenu === "sales" && (
            <SalesOverview transactions={transactionData} />
          )}

          {/* Placeholder for other sidebar sections */}
          {activeMenu !== "dashboard" && activeMenu !== "sales" && (
            <div className="bg-section border border-gray-800 rounded-xl p-12 text-center text-gray-400">
              <h2 className="text-2xl font-semibold mb-4">
                {activeMenu === "analytics-products" ? "Products" :
                 activeMenu === "analytics-store" ? "Store" :
                 activeMenu === "analytics-visitors" ? "Visitors" :
                 activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}
              </h2>
              <p>Coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}