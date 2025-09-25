// import React, { useState, useEffect } from 'react';
// import { Shield, TrendingUp, CheckCircle, Clock, ExternalLink, ArrowRight, Eye, Activity } from 'lucide-react';

// const Transaction = () => {
//   const [stats, setStats] = useState({
//     totalVolume: 0,
//     completedTransactions: 0,
//     verificationRate: 0
//   });

//   const [transactions, setTransactions] = useState([
//     {
//       id: 'TX-2024-001',
//       timestamp: '2 min ago',
//       status: 'Verified',
//       statusColor: 'bg-green-500/20 text-green-500',
//       statusDot: 'bg-green-500',
//       buyer: 'EcoTech Solutions',
//       ngoPartner: 'Mangrove Guardians',
//       project: 'Mangrove Restoration - Kerala',
//       mrvId: 'MRV-KL-2024-001',
//       carbonCredits: '15,000',
//       transactionValue: '₹4.27L',
//       pricePerCredit: '₹28.50'
//     },
//     {
//       id: 'TX-2024-002',
//       timestamp: '15 min ago',
//       status: 'Processing',
//       statusColor: 'bg-orange-500/20 text-orange-500',
//       statusDot: 'bg-orange-500',
//       buyer: 'Reliance Green',
//       ngoPartner: 'Ocean Conservation BD',
//       project: 'Coastal Protection - Cox\'s Bazar',
//       mrvId: 'MRV-BD-2024-007',
//       carbonCredits: '8,500',
//       transactionValue: '₹2.72L',
//       pricePerCredit: '₹32.00'
//     }
//   ]);

//   // Animate stats on component mount
//   useEffect(() => {
//     const animateStats = () => {
//       const targets = {
//         totalVolume: 2.4,
//         completedTransactions: 156,
//         verificationRate: 100
//       };

//       const duration = 2000;
//       const steps = 60;
//       const increment = duration / steps;

//       let current = { totalVolume: 0, completedTransactions: 0, verificationRate: 0 };

//       const timer = setInterval(() => {
//         current.totalVolume += targets.totalVolume / steps;
//         current.completedTransactions += targets.completedTransactions / steps;
//         current.verificationRate += targets.verificationRate / steps;

//         if (current.totalVolume >= targets.totalVolume) {
//           current.totalVolume = targets.totalVolume;
//           current.completedTransactions = targets.completedTransactions;
//           current.verificationRate = targets.verificationRate;
//           clearInterval(timer);
//         }

//         setStats({
//           totalVolume: Math.floor(current.totalVolume * 10) / 10,
//           completedTransactions: Math.floor(current.completedTransactions),
//           verificationRate: Math.floor(current.verificationRate)
//         });
//       }, increment);
//     };

//     animateStats();
//   }, []);

//   return (
//     <section className="relative py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
//         <div className="absolute inset-0 bg-grid-gray-800/[0.05]"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           {/* Full Transparency Badge */}
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-900/30 border border-green-700/30 mb-4">
//             <Shield className="w-3.5 h-3.5 text-green-400" />
//             <span className="text-green-400 font-medium text-xs">Full Transparency</span>
//           </div>

//           {/* Main Title */}
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             <span className="text-white">Public </span>
//             <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//               Transparency Dashboard
//             </span>
//           </h2>
          
//           <p className="text-gray-400 text-sm max-w-2xl mx-auto">
//             Complete visibility into carbon credit transactions, verifications, and NGO activities.
//           </p>
//         </div>

//         {/* Summary Statistics - Compact Layout */}
//         <div className="grid grid-cols-3 gap-4 mb-10">
//           {/* Total Transaction Volume */}
//           <div className="group relative">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
//             <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
//               <div className="text-center">
//                 <div className="text-xl font-bold text-green-400 mb-1">₹{stats.totalVolume} Cr</div>
//                 <div className="text-xs text-gray-300 font-medium">Transaction Volume</div>
//                 <div className="text-green-500 text-[10px] mt-1">This Month</div>
//               </div>
//             </div>
//           </div>

//           {/* Completed Transactions */}
//           <div className="group relative">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
//             <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
//               <div className="text-center">
//                 <div className="text-xl font-bold text-green-400 mb-1">{stats.completedTransactions}</div>
//                 <div className="text-xs text-gray-300 font-medium">Transactions</div>
//                 <div className="text-green-500 text-[10px] mt-1">Last 30 Days</div>
//               </div>
//             </div>
//           </div>

//           {/* Verification Rate */}
//           <div className="group relative">
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
//             <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
//               <div className="text-center">
//                 <div className="text-xl font-bold text-purple-400 mb-1">{stats.verificationRate}%</div>
//                 <div className="text-xs text-gray-300 font-medium">Verification Rate</div>
//                 <div className="text-purple-400 text-[10px] mt-1">MRV Certified</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Transaction List */}
//         <div className="space-y-3 mb-10">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
//             <div className="flex items-center gap-1 text-gray-400">
//               <Activity className="w-3.5 h-3.5" />
//               <span className="text-xs">Live Updates</span>
//             </div>
//           </div>

//           {transactions.map((transaction, index) => (
//             <div
//               key={transaction.id}
//               className="group relative bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg shadow-sm"
//             >
//               <div className="p-4">
//                 <div className="flex items-start justify-between mb-3">
//                   {/* Status and Timestamp */}
//                   <div className="flex items-center gap-2">
//                     <div className={`w-2 h-2 rounded-full ${transaction.statusDot}`}></div>
//                     <span className="text-xs text-gray-400">{transaction.timestamp}</span>
//                     <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${transaction.statusColor}`}>
//                       {transaction.status === 'Verified' && <CheckCircle className="w-2.5 h-2.5" />}
//                       {transaction.status === 'Processing' && <Clock className="w-2.5 h-2.5" />}
//                       {transaction.status}
//                     </span>
//                   </div>
                  
//                   {/* Transaction ID */}
//                   <div className="text-xs text-gray-500 font-mono">{transaction.id}</div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {/* Left Column - Transaction Details */}
//                   <div className="space-y-2">
//                     <div>
//                       <div className="text-xs text-gray-400 mb-0.5">Buyer</div>
//                       <div className="text-sm font-semibold text-white">{transaction.buyer}</div>
//                     </div>
                    
//                     <div>
//                       <div className="text-xs text-gray-400 mb-0.5">NGO Partner</div>
//                       <div className="text-sm font-semibold text-white">{transaction.ngoPartner}</div>
//                     </div>
                    
//                     <div>
//                       <div className="text-xs text-gray-400 mb-0.5">Project</div>
//                       <div className="text-sm font-semibold text-white">{transaction.project}</div>
//                     </div>
//                   </div>

//                   {/* Right Column - Financial Details */}
//                   <div className="space-y-2">
//                     <div className="grid grid-cols-2 gap-2">
//                       <div className="text-center p-2 bg-gray-700/50 rounded-lg">
//                         <div className="text-sm font-bold text-green-400 mb-0.5">{transaction.carbonCredits}</div>
//                         <div className="text-[10px] text-gray-400">Credits</div>
//                       </div>
//                       <div className="text-center p-2 bg-gray-700/50 rounded-lg">
//                         <div className="text-sm font-bold text-white mb-0.5">{transaction.transactionValue}</div>
//                         <div className="text-[10px] text-gray-400">Value</div>
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-between items-center text-xs">
//                       <span className="text-gray-400">Price/Credit:</span>
//                       <span className="font-semibold text-white">{transaction.pricePerCredit}</span>
//                     </div>
                    
//                     <div className="flex justify-between items-center text-xs">
//                       <span className="text-gray-400">MRV ID:</span>
//                       <span className="font-mono text-purple-400">{transaction.mrvId}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons - Compact */}
//         <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
//           <button className="group relative inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg border border-gray-700">
//             <Eye className="w-4 h-4" />
//             <span>View Audit Trail</span>
//             <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
//           </button>
          
//           <button className="group relative inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 hover:scale-105">
//             <TrendingUp className="w-4 h-4" />
//             <span>Start Trading</span>
//             <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-grid-gray-800\/\[0\.05\] {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(31 41 55 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Transaction;



import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, CheckCircle, Clock, ExternalLink, ArrowRight, Eye, Activity } from 'lucide-react';

const Transaction = () => {
  const [stats, setStats] = useState({
    totalVolume: 0,
    completedTransactions: 0,
    verificationRate: 0
  });

  const [transactions, setTransactions] = useState([
    {
      id: 'TX-2024-001',
      timestamp: '2 min ago',
      status: 'Verified',
      statusColor: 'bg-blue-500/20 text-blue-500',
      statusDot: 'bg-blue-500',
      buyer: 'EcoTech Solutions',
      ngoPartner: 'Mangrove Guardians',
      project: 'Mangrove Restoration - Kerala',
      mrvId: 'MRV-KL-2024-001',
      carbonCredits: '15,000',
      transactionValue: '₹4.27L',
      pricePerCredit: '₹28.50'
    },
    {
      id: 'TX-2024-002',
      timestamp: '15 min ago',
      status: 'Processing',
      statusColor: 'bg-amber-500/20 text-amber-500',
      statusDot: 'bg-amber-500',
      buyer: 'Reliance Green',
      ngoPartner: 'Ocean Conservation BD',
      project: 'Coastal Protection - Cox\'s Bazar',
      mrvId: 'MRV-BD-2024-007',
      carbonCredits: '8,500',
      transactionValue: '₹2.72L',
      pricePerCredit: '₹32.00'
    }
  ]);

  // Animate stats on component mount
  useEffect(() => {
    const animateStats = () => {
      const targets = {
        totalVolume: 2.4,
        completedTransactions: 156,
        verificationRate: 100
      };

      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let current = { totalVolume: 0, completedTransactions: 0, verificationRate: 0 };

      const timer = setInterval(() => {
        current.totalVolume += targets.totalVolume / steps;
        current.completedTransactions += targets.completedTransactions / steps;
        current.verificationRate += targets.verificationRate / steps;

        if (current.totalVolume >= targets.totalVolume) {
          current.totalVolume = targets.totalVolume;
          current.completedTransactions = targets.completedTransactions;
          current.verificationRate = targets.verificationRate;
          clearInterval(timer);
        }

        setStats({
          totalVolume: Math.floor(current.totalVolume * 10) / 10,
          completedTransactions: Math.floor(current.completedTransactions),
          verificationRate: Math.floor(current.verificationRate)
        });
      }, increment);
    };

    animateStats();
  }, []);

  return (
    <section className="relative py-12 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-gray-800/[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          {/* Full Transparency Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/30 border border-blue-700/30 mb-4">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 font-medium text-xs">Full Transparency</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-white">Public </span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Transparency Dashboard
            </span>
          </h2>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Complete visibility into carbon credit transactions, verifications, and NGO activities.
          </p>
        </div>

        {/* Summary Statistics - Compact Layout */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {/* Total Transaction Volume */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400 mb-1">₹{stats.totalVolume} Cr</div>
                <div className="text-xs text-gray-300 font-medium">Transaction Volume</div>
                <div className="text-blue-500 text-[10px] mt-1">This Month</div>
              </div>
            </div>
          </div>

          {/* Completed Transactions */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400 mb-1">{stats.completedTransactions}</div>
                <div className="text-xs text-gray-300 font-medium">Transactions</div>
                <div className="text-blue-500 text-[10px] mt-1">Last 30 Days</div>
              </div>
            </div>
          </div>

          {/* Verification Rate */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-indigo-400 mb-1">{stats.verificationRate}%</div>
                <div className="text-xs text-gray-300 font-medium">Verification Rate</div>
                <div className="text-indigo-400 text-[10px] mt-1">MRV Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
            <div className="flex items-center gap-1 text-gray-400">
              <Activity className="w-3.5 h-3.5" />
              <span className="text-xs">Live Updates</span>
            </div>
          </div>

          {transactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className="group relative bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg shadow-sm"
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  {/* Status and Timestamp */}
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${transaction.statusDot}`}></div>
                    <span className="text-xs text-gray-400">{transaction.timestamp}</span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${transaction.statusColor}`}>
                      {transaction.status === 'Verified' && <CheckCircle className="w-2.5 h-2.5" />}
                      {transaction.status === 'Processing' && <Clock className="w-2.5 h-2.5" />}
                      {transaction.status}
                    </span>
                  </div>
                  
                  {/* Transaction ID */}
                  <div className="text-xs text-gray-500 font-mono">{transaction.id}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column - Transaction Details */}
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Buyer</div>
                      <div className="text-sm font-semibold text-white">{transaction.buyer}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">NGO Partner</div>
                      <div className="text-sm font-semibold text-white">{transaction.ngoPartner}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Project</div>
                      <div className="text-sm font-semibold text-white">{transaction.project}</div>
                    </div>
                  </div>

                  {/* Right Column - Financial Details */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-center p-2 bg-gray-700/50 rounded-lg">
                        <div className="text-sm font-bold text-blue-400 mb-0.5">{transaction.carbonCredits}</div>
                        <div className="text-[10px] text-gray-400">Credits</div>
                      </div>
                      <div className="text-center p-2 bg-gray-700/50 rounded-lg">
                        <div className="text-sm font-bold text-white mb-0.5">{transaction.transactionValue}</div>
                        <div className="text-[10px] text-gray-400">Value</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Price/Credit:</span>
                      <span className="font-semibold text-white">{transaction.pricePerCredit}</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">MRV ID:</span>
                      <span className="font-mono text-indigo-400">{transaction.mrvId}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Compact */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button className="group relative inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg border border-gray-700">
            <Eye className="w-4 h-4" />
            <span>View Audit Trail</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
          
          <button className="group relative inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105">
            <TrendingUp className="w-4 h-4" />
            <span>Start Trading</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-gray-800\/\[0\.05\] {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(59 130 246 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default Transaction;