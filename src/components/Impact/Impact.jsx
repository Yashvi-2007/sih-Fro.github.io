// import React, { useState, useEffect } from 'react';
// import { Leaf, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';

// const Impact = () => {
//   const [counts, setCounts] = useState({
//     co2: 0,
//     projects: 0,
//     credits: 0,
//     ngos: 0
//   });

//   // Animated counter effect
//   useEffect(() => {
//     const targets = {
//       co2: 45700,
//       projects: 247,
//       credits: 1200000,
//       ngos: 89
//     };

//     const duration = 2000;
//     const steps = 60;
//     const increment = duration / steps;

//     const timers = [];
    
//     Object.keys(targets).forEach(key => {
//       let current = 0;
//       const target = targets[key];
//       const step = target / steps;
      
//       const timer = setInterval(() => {
//         current += step;
//         if (current >= target) {
//           current = target;
//           clearInterval(timer);
//         }
//         setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
//       }, increment);
      
//       timers.push(timer);
//     });

//     return () => timers.forEach(timer => clearInterval(timer));
//   }, []);

//   const formatNumber = (num) => {
//     if (num >= 1000000) {
//       return (num / 1000000).toFixed(1) + 'M';
//     }
//     if (num >= 1000) {
//       return (num / 1000).toFixed(1) + 'K';
//     }
//     return num.toLocaleString();
//   };

//   const statsCards = [
//     {
//       icon: <Leaf className="w-5 h-5" />,
//       value: formatNumber(counts.co2),
//       label: "CO₂ Absorbed",
//       change: "+34% this month",
//       color: "from-emerald-500 to-green-600"
//     },
//     {
//       icon: <Award className="w-5 h-5" />,
//       value: counts.projects,
//       label: "Active Projects",
//       change: "+19% this month",
//       color: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: <TrendingUp className="w-5 h-5" />,
//       value: formatNumber(counts.credits),
//       label: "Carbon Credits",
//       change: "+32% this month",
//       color: "from-teal-500 to-green-600"
//     },
//     {
//       icon: <Users className="w-5 h-5" />,
//       value: counts.ngos,
//       label: "Verified NGOs",
//       change: "+39% this month",
//       color: "from-green-600 to-teal-600"
//     }
//   ];

//   const certifications = [
//     "Blockchain Verified",
//     "Global Standards",
//     "MRV Certified",
//     "Transparent Reporting"
//   ];

//   return (
//     <section className="relative py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden min-h-screen flex items-center">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Live Tracker Badge */}
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-800/30">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
//             </span>
//             <span className="text-emerald-400 font-medium text-sm">Live Impact Tracker</span>
//           </div>
//         </div>

//         {/* Main Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Real-time{' '}
//             <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
//               Ocean Impact
//             </span>
//           </h2>
          
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             Measurable environmental impact across Asia's coastal regions through verified carbon credits.
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {statsCards.map((stat, index) => (
//             <div
//               key={index}
//               className="group bg-gradient-to-b from-gray-800/20 to-gray-900/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30 hover:border-emerald-500/30 transition-all duration-300"
//             >
//               {/* Icon */}
//               <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
//                 {React.cloneElement(stat.icon, { className: "w-5 h-5 text-white" })}
//               </div>
              
//               {/* Value */}
//               <div className="text-2xl font-bold text-white mb-1 font-mono">
//                 {stat.value}
//               </div>
              
//               {/* Label */}
//               <div className="text-gray-400 text-sm mb-2">
//                 {stat.label}
//               </div>
              
//               {/* Change indicator */}
//               <div className="flex items-center text-emerald-400 text-xs font-semibold">
//                 <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//                 {stat.change}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Certifications */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//           {certifications.map((cert, index) => (
//             <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
//               <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
//               <span>{cert}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
//             View Impact Report
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-grid-pattern {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(16 185 129 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
//         }
        
//         .min-h-screen {
//           min-height: 100vh;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Impact;


import React, { useState, useEffect } from 'react';
import { Leaf, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';

const Impact = () => {
  const [counts, setCounts] = useState({
    co2: 0,
    projects: 0,
    credits: 0,
    ngos: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targets = {
      co2: 45700,
      projects: 247,
      credits: 1200000,
      ngos: 89
    };

    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const timers = [];
    
    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key];
      const step = target / steps;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, increment);
      
      timers.push(timer);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const statsCards = [
    {
      icon: <Leaf className="w-5 h-5" />,
      value: formatNumber(counts.co2),
      label: "CO₂ Absorbed",
      change: "+34% this month",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Award className="w-5 h-5" />,
      value: counts.projects,
      label: "Active Projects",
      change: "+19% this month",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      value: formatNumber(counts.credits),
      label: "Carbon Credits",
      change: "+32% this month",
      color: "from-sky-500 to-indigo-600"
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: counts.ngos,
      label: "Verified NGOs",
      change: "+39% this month",
      color: "from-indigo-600 to-sky-600"
    }
  ];

  const certifications = [
    "Blockchain Verified",
    "Global Standards",
    "MRV Certified",
    "Transparent Reporting"
  ];

  return (
    <section className="relative py-16 bg-black overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Live Tracker Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-800/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            <span className="text-blue-400 font-medium text-sm">Live Impact Tracker</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real-time{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ocean Impact
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            Measurable environmental impact across Asia's coastal regions through verified carbon credits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-800/20 to-gray-900/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                {React.cloneElement(stat.icon, { className: "w-5 h-5 text-white" })}
              </div>
              
              {/* Value */}
              <div className="text-2xl font-bold text-white mb-1 font-mono">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-gray-400 text-sm mb-2">
                {stat.label}
              </div>
              
              {/* Change indicator */}
              <div className="flex items-center text-blue-400 text-xs font-semibold">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>{cert}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            View Impact Report
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(59 130 246 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        .min-h-screen {
          min-height: 100vh;
        }
      `}</style>
    </section>
  );
};

export default Impact;