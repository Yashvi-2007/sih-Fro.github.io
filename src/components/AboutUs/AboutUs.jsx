// import React from 'react';
// import { Globe, Shield, Activity, BarChart3, Target, Users, Leaf } from 'lucide-react';




// const About = () => {
//   const features = [
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Global Network",
//       description: "Worldwide ocean restoration projects",
//       stat: "50+ Countries"
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Verified Credits",
//       description: "Blockchain-backed carbon verification",
//       stat: "100% Transparency"
//     },
//     {
//       icon: <Activity className="w-6 h-6" />,
//       title: "Real-time Monitoring",
//       description: "Satellite and drone verification",
//       stat: "24/7 Tracking"
//     },
//     {
//       icon: <BarChart3 className="w-6 h-6" />,
//       title: "Data Insights",
//       description: "Optimize your carbon offset strategy",
//       stat: "AI Powered"
//     }
//   ];

//   const stats = [
//     { value: "250+", label: "Clients", icon: <Users className="w-4 h-4" /> },
//     { value: "400+", label: "Projects", icon: <Target className="w-4 h-4" /> },
//     { value: "1M+", label: "CO₂ Offset", icon: <Leaf className="w-4 h-4" /> }
//   ];

//   return (
//     <section className="relative py-16 bg-black overflow-hidden min-h-screen flex items-center">
//       {/* Background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center rounded-full bg-green-950/50 px-4 py-2 text-sm text-green-400 mb-6 border border-green-800/30">
//             <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
//             PIONEERING BLUE CARBON
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Revolutionizing Ocean Conservation Through{' '}
//             <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
//               Technology
//             </span>
//           </h2>
          
//           <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//             Carbonverse connects global restoration projects with real businesses through 
//             transparent, verifiable blue carbon credits.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 flex items-center gap-4"
//             >
//               <div className="p-2 bg-green-500/10 rounded-lg">
//                 {React.cloneElement(stat.icon, { className: "w-4 h-4 text-green-400" })}
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-white">{stat.value}</div>
//                 <div className="text-sm text-gray-400">{stat.label}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group bg-gradient-to-b from-gray-900/20 to-black/40 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-green-400/50 transition-all duration-300"
//             >
//               <div className="mb-4 p-3 bg-green-500/10 rounded-lg inline-flex group-hover:scale-110 transition-transform duration-300">
//                 {React.cloneElement(feature.icon, { className: "w-6 h-6 text-green-400" })}
//               </div>
              
//               <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400 text-sm mb-3">
//                 {feature.description}
//               </p>
//               <div className="text-green-400 text-xs font-medium">
//                 {feature.stat}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20">
//             Join Our Mission
//           </button>
//           <p className="text-gray-400 text-sm mt-4">
//             Trusted by leading sustainable organizations worldwide
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-grid-pattern {
//           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(74 222 128 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
//         }
        
//         .min-h-screen {
//           min-height: 100vh;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { Globe, Shield, Activity, BarChart3, Target, Users, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Worldwide ocean restoration projects",
      stat: "50+ Countries"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Credits",
      description: "Blockchain-backed carbon verification",
      stat: "100% Transparency"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Satellite and drone verification",
      stat: "24/7 Tracking"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Insights",
      description: "Optimize your carbon offset strategy",
      stat: "AI Powered"
    }
  ];

  const stats = [
    { value: "250+", label: "Clients", icon: <Users className="w-4 h-4" /> },
    { value: "400+", label: "Projects", icon: <Target className="w-4 h-4" /> },
    { value: "1M+", label: "CO₂ Offset", icon: <Leaf className="w-4 h-4" /> }
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-blue-950/50 px-4 py-2 text-sm text-blue-400 mb-6 border border-blue-800/30">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            PIONEERING BLUE CARBON
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionizing Ocean Conservation Through{' '}
            <span className="bg-white bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Why Carbonverse ? Carbonverse connects global restoration projects with real businesses through 
            transparent, verifiable blue carbon credits.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 flex items-center gap-4"
            >
              <div className="p-2 bg-blue-500/10 rounded-lg">
                {React.cloneElement(stat.icon, { className: "w-4 h-4 text-blue-400" })}
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-800/20 to-gray-900/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-blue-500/10 rounded-lg inline-flex group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(feature.icon, { className: "w-6 h-6 text-blue-400" })}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">
                {feature.description}
              </p>
              <div className="text-blue-400 text-xs font-medium">
                {feature.stat}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Join Our Mission
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Trusted by leading sustainable organizations worldwide
          </p>
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

export default About;