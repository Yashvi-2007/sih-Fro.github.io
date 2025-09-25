// import React from 'react';
// import { Users, Building, Shield, Settings, ArrowRight, CheckCircle, Star, Globe, TrendingUp, Lock } from 'lucide-react';
// import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';

// const GeneralDashboardPage = () => {
//   const dashboards = [
//     {
//       id: 'ngo',
//       title: 'NGO Dashboard',
//       subtitle: 'For Conservation Organizations',
//       description: 'Manage your conservation projects, track carbon credits, and connect with buyers.',
//       icon: <Users className="w-8 h-8" />,
//       color: 'from-green-500 to-emerald-600',
//       bgColor: 'bg-green-50',
//       borderColor: 'border-green-200',
//       features: [
//         'Project Management',
//         'Carbon Credit Issuance',
//         'Impact Tracking',
//         'Buyer Network Access',
//         'MRV Reporting',
//         'Revenue Analytics'
//       ],
//       access: 'Verified NGOs',
//       role: 'Project Sellers',
//       requirements: [
//         'Valid NGO Registration',
//         'Environmental Certification',
//         'MRV Compliance',
//         'Project Documentation'
//       ]
//     },
//     {
//       id: 'company',
//       title: 'Company Dashboard',
//       subtitle: 'For Corporate Buyers',
//       description: 'Purchase carbon credits, track your sustainability goals, and report on ESG metrics.',
//       icon: <Building className="w-8 h-8" />,
//       color: 'from-blue-500 to-cyan-600',
//       bgColor: 'bg-blue-50',
//       borderColor: 'border-blue-200',
//       features: [
//         'Credit Marketplace',
//         'Portfolio Management',
//         'ESG Reporting',
//         'Impact Analytics',
//         'Compliance Tracking',
//         'Sustainability Goals'
//       ],
//       access: 'Corporate Entities',
//       role: 'Credit Buyers',
//       requirements: [
//         'Business Registration',
//         'Corporate Verification',
//         'Sustainability Commitment',
//         'Financial Compliance'
//       ]
//     },
//     {
//       id: 'regulatory',
//       title: 'Regulatory Dashboard',
//       subtitle: 'For Government Bodies',
//       description: 'Monitor carbon markets, verify projects, and ensure regulatory compliance.',
//       icon: <Shield className="w-8 h-8" />,
//       color: 'from-purple-500 to-pink-600',
//       bgColor: 'bg-purple-50',
//       borderColor: 'border-purple-200',
//       features: [
//         'Market Oversight',
//         'Project Verification',
//         'Compliance Monitoring',
//         'Audit Trails',
//         'Regulatory Reports',
//         'Policy Implementation'
//       ],
//       access: 'Government Agencies',
//       role: 'Market Regulators',
//       requirements: [
//         'Official Authorization',
//         'Regulatory Mandate',
//         'Compliance Certification',
//         'Audit Capabilities',
//         'Policy Implementation'
//       ]
//     },
//     {
//       id: 'admin',
//       title: 'Admin Dashboard',
//       subtitle: 'For Platform Administrators',
//       description: 'Manage the entire platform, oversee transactions, and ensure system integrity.',
//       icon: <Settings className="w-8 h-8" />,
//       color: 'from-orange-500 to-red-600',
//       bgColor: 'bg-orange-50',
//       borderColor: 'border-orange-200',
//       features: [
//         'Platform Management',
//         'User Administration',
//         'Transaction Oversight',
//         'System Monitoring',
//         'Security Management',
//         'Analytics & Reports'
//       ],
//       access: 'Platform Administrators',
//       role: 'System Managers',
//       requirements: [
//         'Admin Authorization',
//         'Security Clearance',
//         'Technical Expertise',
//         'Platform Access'
//       ]
//     }
//   ];

//   const stats = [
//     { label: 'Active Users', value: '2,500+', icon: <Users className="w-5 h-5" /> },
//     { label: 'Projects Listed', value: '150+', icon: <Globe className="w-5 h-5" /> },
//     { label: 'Credits Traded', value: '1.2M+', icon: <TrendingUp className="w-5 h-5" /> },
//     { label: 'Countries', value: '25+', icon: <Globe className="w-5 h-5" /> }
//   ];

//   const handleRequestAccess = () => {
//     // Redirect to signup page
//     window.location.href = '/signup';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
//       <ParticlesBackground />
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-slate-200">
//         <div className="container mx-auto px-6 py-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-slate-800">Platform </span>
//               <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                 Dashboards
//               </span>
//             </h1>
//             <p className="text-xl text-slate-600 leading-relaxed">
//               Access specialized dashboards designed for different stakeholders in the blue carbon ecosystem. 
//               Each dashboard provides tailored tools and insights for your specific role and responsibilities.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-12">
//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-300">
//               <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
//                 <div className="text-green-600">
//                   {stat.icon}
//                 </div>
//               </div>
//               <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
//               <div className="text-sm text-slate-600">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Dashboard Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//           {dashboards.map((dashboard) => (
//             <div
//               key={dashboard.id}
//               className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-green-400"
//             >
//               <div className="relative p-8">
//                 {/* Header */}
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className={`p-4 rounded-2xl ${dashboard.bgColor} ${dashboard.borderColor} border transition-colors duration-300 group-hover:border-green-300`}>
//                     <div className={`bg-gradient-to-r ${dashboard.color} bg-clip-text text-transparent`}>
//                       {dashboard.icon}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold text-slate-800 mb-2">{dashboard.title}</h3>
//                     <p className="text-lg font-semibold text-slate-600 mb-2">{dashboard.subtitle}</p>
//                     <p className="text-slate-600 leading-relaxed">{dashboard.description}</p>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Features</h4>
//                   <div className="grid grid-cols-2 gap-2">
//                     {dashboard.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
//                         <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Access Info */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   <div className="p-4 bg-slate-50 rounded-xl transition-colors duration-300 hover:bg-slate-100">
//                     <div className="text-sm text-slate-500 mb-1">Access Level</div>
//                     <div className="font-semibold text-slate-800">{dashboard.access}</div>
//                   </div>
//                   <div className="p-4 bg-slate-50 rounded-xl transition-colors duration-300 hover:bg-slate-100">
//                     <div className="text-sm text-slate-500 mb-1">Primary Role</div>
//                     <div className="font-semibold text-slate-800">{dashboard.role}</div>
//                   </div>
//                 </div>

//                 {/* Requirements */}
//                 <div className="mb-6">
//                   <h4 className="text-lg font-semibold text-slate-800 mb-3">Access Requirements</h4>
//                   <div className="space-y-2">
//                     {dashboard.requirements.map((requirement, reqIndex) => (
//                       <div key={reqIndex} className="flex items-center gap-2 text-sm text-slate-600">
//                         <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
//                         <span>{requirement}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <button 
//                   onClick={handleRequestAccess}
//                   className="w-full group/btn relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-green-700 hover:to-emerald-700"
//                 >
//                   <Lock className="w-5 h-5" />
//                   <span>Request Access</span>
//                   <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* How It Works */}
//         <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-16">
//           <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">How Dashboard Access Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-green-600">1</span>
//               </div>
//               <h3 className="text-xl font-semibold text-slate-800 mb-2">Apply for Access</h3>
//               <p className="text-slate-600">Submit your application with required documentation and credentials.</p>
//             </div>
//             <div className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-blue-600">2</span>
//               </div>
//               <h3 className="text-xl font-semibold text-slate-800 mb-2">Verification Process</h3>
//               <p className="text-slate-600">Our team reviews your application and verifies your credentials.</p>
//             </div>
//             <div className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-2xl font-bold text-purple-600">3</span>
//               </div>
//               <h3 className="text-xl font-semibold text-slate-800 mb-2">Dashboard Access</h3>
//               <p className="text-slate-600">Get approved and access your specialized dashboard with full features.</p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Get Started?</h2>
//           <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
//             Join the blue carbon revolution and access the tools you need to make a real impact on ocean conservation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               onClick={handleRequestAccess}
//               className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full font-semibold transition-all duration-300 hover:from-green-700 hover:to-emerald-800"
//             >
//               <span>Apply for Access</span>
//               <ArrowRight className="w-5 h-5" />
//             </button>
//             <button className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 text-white rounded-full font-semibold transition-all duration-300 hover:bg-slate-700">
//               <span>Learn More</span>
//               <Globe className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralDashboardPage;



import React from 'react';
import { Users, Building, Shield, Settings, ArrowRight, CheckCircle, Star, Globe, TrendingUp, Lock } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';

const GeneralDashboardPage = () => {
  const dashboards = [
    {
      id: 'ngo',
      title: 'NGO Dashboard',
      subtitle: 'For Conservation Organizations',
      description: 'Manage your conservation projects, track carbon credits, and connect with buyers.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-sky-500 to-indigo-600',
      bgColor: 'bg-sky-900/20',
      borderColor: 'border-sky-700',
      features: [
        'Project Management',
        'Carbon Credit Issuance',
        'Impact Tracking',
        'Buyer Network Access',
        'MRV Reporting',
        'Revenue Analytics'
      ],
      access: 'Verified NGOs',
      role: 'Project Sellers',
      requirements: [
        'Valid NGO Registration',
        'Environmental Certification',
        'MRV Compliance',
        'Project Documentation'
      ]
    },
    {
      id: 'company',
      title: 'Company Dashboard',
      subtitle: 'For Corporate Buyers',
      description: 'Purchase carbon credits, track your sustainability goals, and report on ESG metrics.',
      icon: <Building className="w-8 h-8" />,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-700',
      features: [
        'Credit Marketplace',
        'Portfolio Management',
        'ESG Reporting',
        'Impact Analytics',
        'Compliance Tracking',
        'Sustainability Goals'
      ],
      access: 'Corporate Entities',
      role: 'Credit Buyers',
      requirements: [
        'Business Registration',
        'Corporate Verification',
        'Sustainability Commitment',
        'Financial Compliance'
      ]
    },
    {
      id: 'regulatory',
      title: 'Regulatory Dashboard',
      subtitle: 'For Government Bodies',
      description: 'Monitor carbon markets, verify projects, and ensure regulatory compliance.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-900/20',
      borderColor: 'border-indigo-700',
      features: [
        'Market Oversight',
        'Project Verification',
        'Compliance Monitoring',
        'Audit Trails',
        'Regulatory Reports',
        'Policy Implementation'
      ],
      access: 'Government Agencies',
      role: 'Market Regulators',
      requirements: [
        'Official Authorization',
        'Regulatory Mandate',
        'Compliance Certification',
        'Audit Capabilities',
        'Policy Implementation'
      ]
    },
    {
      id: 'admin',
      title: 'Admin Dashboard',
      subtitle: 'For Platform Administrators',
      description: 'Manage the entire platform, oversee transactions, and ensure system integrity.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'bg-sky-900/20',
      borderColor: 'border-sky-700',
      features: [
        'Platform Management',
        'User Administration',
        'Transaction Oversight',
        'System Monitoring',
        'Security Management',
        'Analytics & Reports'
      ],
      access: 'Platform Administrators',
      role: 'System Managers',
      requirements: [
        'Admin Authorization',
        'Security Clearance',
        'Technical Expertise',
        'Platform Access'
      ]
    }
  ];

  const stats = [
    { label: 'Active Users', value: '2,500+', icon: <Users className="w-5 h-5" /> },
    { label: 'Projects Listed', value: '150+', icon: <Globe className="w-5 h-5" /> },
    { label: 'Credits Traded', value: '1.2M+', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Countries', value: '25+', icon: <Globe className="w-5 h-5" /> }
  ];

  const handleRequestAccess = () => {
    // Redirect to signup page
    window.location.href = '/signup';
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ParticlesBackground />
      {/* Header */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-200">Platform </span>
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Dashboards
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Access specialized dashboards designed for different stakeholders in the blue carbon ecosystem. 
              Each dashboard provides tailored tools and insights for your specific role and responsibilities.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-sky-600 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-900/30 rounded-xl mb-4">
                <div className="text-sky-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {dashboards.map((dashboard) => (
            <div
              key={dashboard.id}
              className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-sky-500"
            >
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${dashboard.bgColor} ${dashboard.borderColor} border transition-colors duration-300 hover:border-sky-500`}>
                    <div className={`bg-gradient-to-r ${dashboard.color} bg-clip-text text-transparent`}>
                      {dashboard.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{dashboard.title}</h3>
                    <p className="text-lg font-semibold text-sky-300 mb-2">{dashboard.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{dashboard.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {dashboard.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Access Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-800/50 rounded-xl transition-colors duration-300 hover:bg-gray-800">
                    <div className="text-sm text-gray-400 mb-1">Access Level</div>
                    <div className="font-semibold text-white">{dashboard.access}</div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-xl transition-colors duration-300 hover:bg-gray-800">
                    <div className="text-sm text-gray-400 mb-1">Primary Role</div>
                    <div className="font-semibold text-white">{dashboard.role}</div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Access Requirements</h4>
                  <div className="space-y-2">
                    {dashboard.requirements.map((requirement, reqIndex) => (
                      <div key={reqIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <Star className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  onClick={handleRequestAccess}
                  className="w-full group/btn relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-sky-600 to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 hover:from-sky-700 hover:to-indigo-800"
                >
                  <Lock className="w-5 h-5" />
                  <span>Request Access</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">How Dashboard Access Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-sky-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply for Access</h3>
              <p className="text-gray-400">Submit your application with required documentation and credentials.</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Verification Process</h3>
              <p className="text-gray-400">Our team reviews your application and verifies your credentials.</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Dashboard Access</h3>
              <p className="text-gray-400">Get approved and access your specialized dashboard with full features.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the blue carbon revolution and access the tools you need to make a real impact on ocean conservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleRequestAccess}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-600 to-indigo-700 text-white rounded-full font-semibold transition-all duration-300 hover:from-sky-700 hover:to-indigo-800"
            >
              <span>Apply for Access</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-700">
              <span>Learn More</span>
              <Globe className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDashboardPage;