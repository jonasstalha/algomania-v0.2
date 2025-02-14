import React from 'react';

const Billing = () => {
  // Sample invoice data
  const invoices = [
    { id: '#INV-0001', customerId: 'CUS-001', status: 'Paid', date: 'Mar 1, 2024', amount: '$50.00' },
    { id: '#INV-0002', customerId: 'CUS-002', status: 'Paid', date: 'Feb 28, 2024', amount: '$75.00' },
    { id: '#INV-0003', customerId: 'CUS-001', status: 'Paid', date: 'Feb 25, 2024', amount: '$120.00' },
    { id: '#INV-0004', customerId: 'CUS-003', status: 'Pending', date: 'Feb 20, 2024', amount: '$95.00' },
    { id: '#INV-0005', customerId: 'CUS-002', status: 'Failed', date: 'Feb 15, 2024', amount: '$60.00' },
  ];

  return (
    <div className="p-6 bg-gray-50">
      {/* Summary Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Monthly Spend Card */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-sm text-gray-500 mb-1">Your monthly spend</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              Expires: <span className="font-medium">03/03/2025</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>

        {/* Payment Method Card */}
        <div className="bg-white border rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="w-10 h-7 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                VISA
              </div>
              <div>
                <p className="text-sm text-gray-900">Visa ...5563</p>
                <p className="text-sm text-gray-500">Primary</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="text-blue-600 text-sm font-medium">EDIT</button>
              <button className="text-blue-600 text-sm font-medium">REMOVE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices Section */}
      <div className="border rounded-lg p-4 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Invoices</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for invoices"
                className="pl-8 pr-4 py-2 border rounded-lg text-sm w-64"
              />
              <svg
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <button className="border px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7m0 0V4m0 10h16m0 0V4m0 10v7" />
              </svg>
              Filter
            </button>
            <button className="border px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              Sort
            </button>
            <button className="border px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Export
            </button>
          </div>
        </div>

        {/* Invoices Table */}
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 pl-4 pr-6">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Invoice #</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Customer ID</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Date</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Amount</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 pl-4 pr-6">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="py-3 px-6 text-sm">{invoice.id}</td>
                <td className="py-3 px-6 text-sm">{invoice.customerId}</td>
                <td className="py-3 px-6">
                  <span 
                    className={`px-2 py-1 text-xs rounded-full ${
                      invoice.status === 'Paid' 
                        ? 'bg-green-100 text-green-800'
                        : invoice.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-sm">{invoice.date}</td>
                <td className="py-3 px-6 text-sm">{invoice.amount}</td>
                <td className="py-3 px-6">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="4" r="2" />
                      <circle cx="12" cy="20" r="2" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;
