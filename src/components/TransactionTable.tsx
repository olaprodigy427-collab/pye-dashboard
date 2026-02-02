// src/components/TransactionTable.tsx
export function TransactionTable() {
  const transactions = [
    {
      product: "TSLA",
      company: "Tesla, Inc.",
      amount: "$30,021.23",
      date: "Dec 13, 2023",
      status: "Processing",
      statusColor: "text-yellow-400",
      executedBy: "olivia@riyye.com",
      executedName: "Olivia Riyye",
    },
    {
      product: "MTCH",
      company: "Match Group, Inc.",
      amount: "$10,045.00",
      date: "Dec 13, 2023",
      status: "Success",
      statusColor: "text-green-400",
      executedBy: "phoenix@baker.com",
      executedName: "Phoenix Baker",
    },
    {
      product: "DDOG",
      company: "Datadog Inc.",
      amount: "$40,132.16",
      date: "Dec 13, 2023",
      status: "Success",
      statusColor: "text-green-400",
      executedBy: "lana@steiner.com",
      executedName: "Lana Steiner",
    },
    {
      product: "ARKG",
      company: "ARK Genomic Revolution ETF",
      amount: "$22,665.12",
      date: "Dec 28, 2023",
      status: "Declined",
      statusColor: "text-red-400",
      executedBy: "demi@wilkinson.com",
      executedName: "Demi Wilkinson",
    },
    // ── Additional rows ────────────────────────────────────────────────
    {
      product: "NVDA",
      company: "NVIDIA Corporation",
      amount: "$18,450.75",
      date: "Jan 05, 2024",
      status: "Success",
      statusColor: "text-green-400",
      executedBy: "james@lee.com",
      executedName: "James Lee",
    },
    {
      product: "AAPL",
      company: "Apple Inc.",
      amount: "$27,890.40",
      date: "Jan 12, 2024",
      status: "Processing",
      statusColor: "text-yellow-400",
      executedBy: "sophia@martin.com",
      executedName: "Sophia Martin",
    },
    {
      product: "GOOGL",
      company: "Alphabet Inc.",
      amount: "$15,320.88",
      date: "Jan 19, 2024",
      status: "Success",
      statusColor: "text-green-400",
      executedBy: "ethan@kim.com",
      executedName: "Ethan Kim",
    },
    {
      product: "MSFT",
      company: "Microsoft Corporation",
      amount: "$33,210.55",
      date: "Jan 25, 2024",
      status: "Declined",
      statusColor: "text-red-400",
      executedBy: "noah@patel.com",
      executedName: "Noah Patel",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-900/80 text-gray-300 uppercase tracking-wider text-xs">
          <tr>
            <th className="px-6 py-4 font-medium">Product Name</th>
            <th className="px-6 py-4 font-medium">Order amount</th>
            <th className="px-6 py-4 font-medium">Date</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Executed by</th>
            <th className="px-6 py-4 w-24"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-800/70">
          {transactions.map((tx, i) => (
            <tr
              key={i}
              className="hover:bg-gray-800/40 transition-colors"
            >
              <td className="px-6 py-4 font-medium text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-700/50 flex items-center justify-center text-xs font-bold text-primary">
                    {tx.product.slice(0, 2)}
                  </div>
                  <div>
                    <div>{tx.product}</div>
                    <div className="text-xs text-gray-500">{tx.company}</div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 font-medium text-white">
                {tx.amount}
              </td>

              <td className="px-6 py-4 text-gray-300">
                {tx.date}
              </td>

              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${tx.statusColor} bg-gray-800/60`}>
                  • {tx.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-300">
                    {tx.executedName.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="text-gray-300">
                    {tx.executedName}
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 text-right">
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}