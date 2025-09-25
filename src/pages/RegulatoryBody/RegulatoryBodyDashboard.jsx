// import React, { useState, useEffect, useRef } from 'react';
// import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart, Tooltip, Legend } from 'recharts';
// import { Users, Leaf, DollarSign, MapPin, TrendingUp, Upload, FileText, Eye, Medal, Calendar, CheckCircle, Clock, AlertCircle, Download, Filter, Search, Bell, Settings, Globe, Zap, Target, Award, Activity, BarChart3, Camera, Trash2, Edit3, Plus, Star, Bookmark, Share2, RefreshCw, Mail, Phone, Map, Shield, Gavel, Scale, ClipboardList, FileCheck, AlertTriangle, Lock, Unlock, ZoomIn, ZoomOut, DownloadCloud, UploadCloud, Cpu, Database, Network, FileSearch, Calculator, Percent, BarChart2, PieChart as PieChartIcon } from 'lucide-react';
// import TransactionRegulatoryBody from './TransactionRegulatoryBody';
// import { ChevronDown, LogOut } from 'lucide-react';

// const RegulatoryBodyDashboard = () => {
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [selectedNGO, setSelectedNGO] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [notifications, setNotifications] = useState(8);
//   const [realTimeData, setRealTimeData] = useState(124560);
//   const [verificationQueue, setVerificationQueue] = useState(12);
//   const [complianceRate, setComplianceRate] = useState(94.2);
//   const [riskLevel, setRiskLevel] = useState('Low');
//   const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
//   const [chartScale, setChartScale] = useState(1);
//   const [auditMode, setAuditMode] = useState(false);
//   const [selectedRegion, setSelectedRegion] = useState('Global');
//   const chartRef = useRef(null);

//   // Real-time data updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRealTimeData(prev => prev + Math.floor(Math.random() * 5));
//       setVerificationQueue(prev => Math.max(0, prev + (Math.random() > 0.7 ? 1 : 0)));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Enhanced sample data for regulatory perspective
//   const systemOverviewData = [
//     { metric: 'Total Projects', value: 156, change: '+8%', trend: 'up', target: 200 },
//     { metric: 'Verified Credits', value: 124560, change: '+2.3%', trend: 'up', target: 150000 },
//     { metric: 'Compliance Rate', value: '94.2%', change: '+1.5%', trend: 'up', target: '95%' },
//     { metric: 'Pending Audits', value: 23, change: '-3', trend: 'down', target: 10 },
//     { metric: 'Risk Level', value: 'Low', change: 'Stable', trend: 'neutral', target: 'Low' },
//     { metric: 'Avg Verification Time', value: '4.2d', change: '-0.8d', trend: 'down', target: '3d' }
//   ];

//   const complianceTrendData = [
//     { month: 'Jan', compliance: 89.2, violations: 4, audits: 8 },
//     { month: 'Feb', compliance: 91.5, violations: 3, audits: 12 },
//     { month: 'Mar', compliance: 92.8, violations: 2, audits: 10 },
//     { month: 'Apr', compliance: 93.6, violations: 3, audits: 15 },
//     { month: 'May', compliance: 94.2, violations: 1, audits: 11 },
//     { month: 'Jun', compliance: 95.1, violations: 1, audits: 9 }
//   ];

//   const riskAssessmentData = [
//     { category: 'Methodology Compliance', score: 92, threshold: 85, status: 'Low Risk' },
//     { category: 'Data Accuracy', score: 88, threshold: 90, status: 'Medium Risk' },
//     { category: 'MRV Compliance', score: 95, threshold: 85, status: 'Low Risk' },
//     { category: 'Financial Reporting', score: 82, threshold: 80, status: 'Medium Risk' },
//     { category: 'Environmental Impact', score: 96, threshold: 85, status: 'Low Risk' },
//     { category: 'Community Engagement', score: 78, threshold: 75, status: 'High Risk' }
//   ];

//   const regionalComplianceData = [
//     { region: 'Asia-Pacific', projects: 45, compliance: 96.2, credits: 45000, risk: 'Low' },
//     { region: 'Europe', projects: 38, compliance: 95.8, credits: 38000, risk: 'Low' },
//     { region: 'North America', projects: 28, compliance: 93.5, credits: 29000, risk: 'Medium' },
//     { region: 'South America', projects: 22, compliance: 91.2, credits: 18000, risk: 'Medium' },
//     { region: 'Africa', projects: 15, compliance: 89.7, credits: 12500, risk: 'High' },
//     { region: 'Oceania', projects: 8, compliance: 97.1, credits: 8200, risk: 'Low' }
//   ];

//   const verificationQueueData = [
//     { id: 'VRF-001', project: 'Mangrove Restoration - Indonesia', ngo: 'EcoGuardians', submitted: '2h ago', type: 'Initial', priority: 'High', status: 'Pending' },
//     { id: 'VRF-002', project: 'Seagrass Conservation - Mediterranean', ngo: 'BlueLife', submitted: '4h ago', type: 'Quarterly', priority: 'Medium', status: 'In Review' },
//     { id: 'VRF-003', project: 'Coastal Wetland - Australia', ngo: 'OceanProtect', submitted: '1d ago', type: 'Annual', priority: 'Low', status: 'Pending' },
//     { id: 'VRF-004', project: 'Kelp Forest - California', ngo: 'MarineGrowth', submitted: '1d ago', type: 'Initial', priority: 'High', status: 'In Review' },
//     { id: 'VRF-005', project: 'Mangrove Conservation - Bangladesh', ngo: 'GreenShore', submitted: '2d ago', type: 'Quarterly', priority: 'Medium', status: 'Pending' }
//   ];

//   const auditFindingsData = [
//     { id: 'AUD-2024-001', project: 'Mangrove Restoration - Bay of Bengal', finding: 'Data inconsistency in MRV reports', severity: 'High', status: 'Open', dueDate: '2024-07-15' },
//     { id: 'AUD-2024-002', project: 'Seagrass Conservation - Greece', finding: 'Incomplete community engagement records', severity: 'Medium', status: 'In Progress', dueDate: '2024-07-20' },
//     { id: 'AUD-2024-003', project: 'Coastal Wetland - Queensland', finding: 'Minor methodology deviation', severity: 'Low', status: 'Resolved', dueDate: '2024-06-30' },
//     { id: 'AUD-2024-004', project: 'Kelp Forest - Pacific', finding: 'Equipment calibration records missing', severity: 'Medium', status: 'Open', dueDate: '2024-07-10' }
//   ];

//   const ngoPerformanceData = [
//     { name: 'EcoGuardians', projects: 12, compliance: 98.2, credits: 25000, risk: 'Low', rating: 4.9 },
//     { name: 'BlueLife', projects: 8, compliance: 95.7, credits: 18000, risk: 'Low', rating: 4.7 },
//     { name: 'OceanProtect', projects: 15, compliance: 92.3, credits: 32000, risk: 'Medium', rating: 4.5 },
//     { name: 'MarineGrowth', projects: 6, compliance: 89.8, credits: 12500, risk: 'Medium', rating: 4.2 },
//     { name: 'GreenShore', projects: 10, compliance: 96.5, credits: 22000, risk: 'Low', rating: 4.8 }
//   ];

//   const methodologyComplianceData = [
//     { methodology: 'VM0033', projects: 45, compliance: 96.8, credits: 52000 },
//     { methodology: 'VM0042', projects: 38, compliance: 94.2, credits: 41000 },
//     { methodology: 'AR-ACM003', projects: 28, compliance: 91.5, credits: 29000 },
//     { methodology: 'VM0007', projects: 22, compliance: 89.7, credits: 18000 },
//     { methodology: 'AR-AMS0003', projects: 15, compliance: 97.1, credits: 15500 }
//   ];

//   // Enhanced handlers
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const handleFilter = (status) => {
//     setFilterStatus(status);
//   };

//   const handleProjectSelect = (project) => {
//     setSelectedProject(project);
//   };

//   const handleNGOSelect = (ngo) => {
//     setSelectedNGO(ngo);
//   };

//   const handleExport = async (type = 'full') => {
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setIsLoading(false);
//     alert(`${type === 'full' ? 'Full' : 'Filtered'} data exported successfully!`);
//   };

//   const handleVerificationAction = (id, action) => {
//     setVerificationQueue(prev => Math.max(0, prev - 1));
//     alert(`Verification ${id} ${action}`);
//   };

//   const handleAuditModeToggle = () => {
//     setAuditMode(!auditMode);
//   };

//   const handleChartZoom = (direction) => {
//     setChartScale(prev => Math.max(0.5, Math.min(2, prev + (direction === 'in' ? 0.1 : -0.1))));
//   };

//   // Custom Components
//   const StatCard = ({ icon: Icon, title, value, change, color = 'text-blue-400', trend, subtitle, onClick }) => (
//     <div 
//       onClick={onClick}
//       className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
//     >
//       <div className="flex items-center justify-between mb-4">
//         <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-600/30 group-hover:from-blue-600/20 group-hover:to-blue-500/10 transition-all duration-300`}>
//           <Icon className={`h-6 w-6 ${color}`} />
//         </div>
//         {notifications > 0 && title.includes('Pending') && (
//           <div className="relative">
//             <Bell className="h-5 w-5 text-yellow-400 animate-pulse cursor-pointer" onClick={() => setNotifications(0)} />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               {notifications}
//             </span>
//           </div>
//         )}
//       </div>
//       <div>
//         <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
//         <p className="text-white text-3xl font-bold mb-2">{value}</p>
//         {subtitle && <p className="text-gray-500 text-xs mb-2">{subtitle}</p>}
//         <div className="flex items-center justify-between">
//           {change && (
//             <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-yellow-400'}`}>
//               <TrendingUp className={`h-4 w-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
//               <span className="text-sm font-medium">{change}</span>
//             </div>
//           )}
//           <div className="text-right">
//             <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
//               <div className={`h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-1000`} 
//                    style={{ width: `${Math.random() * 100}%` }}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const TabButton = ({ name, isActive, onClick, hasNotification, count }) => (
//     <button
//       onClick={onClick}
//       className={`relative px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
//         isActive
//           ? 'text-blue-400 border-blue-400 bg-gray-800/30'
//           : 'text-gray-400 border-transparent hover:text-gray-300 hover:bg-gray-800/20'
//       }`}
//     >
//       {name}
//       {hasNotification && (
//         <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//           {count || '!'}
//         </span>
//       )}
//     </button>
//   );

//   const ProgressBar = ({ progress, color = 'bg-blue-400', height = 'h-2' }) => (
//     <div className={`w-full bg-gray-700 rounded-full ${height}`}>
//       <div className={`${color} ${height} rounded-full transition-all duration-1000 relative overflow-hidden`} 
//            style={{ width: `${progress}%` }}>
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
//       </div>
//     </div>
//   );

//   const StatusBadge = ({ status, size = 'normal' }) => {
//     const statusStyles = {
//       'Low Risk': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
//       'Medium Risk': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
//       'High Risk': 'bg-red-500/20 text-red-400 border-red-500/30',
//       'Pending': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
//       'In Review': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
//       'Approved': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
//       'Rejected': 'bg-red-500/20 text-red-400 border-red-500/30',
//       'Open': 'bg-red-500/20 text-red-400 border-red-500/30',
//       'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
//       'Resolved': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
//     };

//     const sizeStyles = size === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';

//     return (
//       <span className={`${sizeStyles} rounded-full font-medium border ${statusStyles[status] || statusStyles.Pending} backdrop-blur-sm`}>
//         {status}
//       </span>
//     );
//   };

//   const RiskIndicator = ({ level }) => {
//     const colors = {
//       'Low': 'bg-emerald-400',
//       'Medium': 'bg-yellow-400',
//       'High': 'bg-red-400'
//     };
    
//     return (
//       <div className="flex items-center space-x-2">
//         <div className={`w-3 h-3 rounded-full ${colors[level]}`}></div>
//         <span className="text-sm">{level} Risk</span>
//       </div>
//     );
//   };

//   // Tab Render Functions
//   const renderOverview = () => (
//     <div className="space-y-8">
//       {/* System Health Dashboard */}
//       <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-xl font-bold text-white">Regulatory System Health</h3>
//           <div className="flex items-center space-x-2">
//             <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
//             <span className="text-emerald-400 text-sm">All Systems Operational</span>
//             <RefreshCw className="h-4 w-4 text-blue-400 animate-spin" />
//           </div>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {systemOverviewData.map((item, index) => (
//             <div key={index} className="bg-gray-800/30 rounded-lg p-4 text-center">
//               <p className="text-gray-400 text-sm mb-1">{item.metric}</p>
//               <p className="text-white text-xl font-bold mb-1">{item.value}</p>
//               <div className={`text-xs ${item.trend === 'up' ? 'text-emerald-400' : item.trend === 'down' ? 'text-red-400' : 'text-yellow-400'}`}>
//                 {item.change}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Compliance & Risk Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Compliance Trend */}
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center space-x-2">
//               <TrendingUp className="h-5 w-5 text-blue-400" />
//               <h3 className="text-lg font-semibold text-white">Compliance Trend</h3>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button onClick={() => handleChartZoom('out')} className="p-1 hover:bg-gray-700 rounded">
//                 <ZoomOut className="h-4 w-4" />
//               </button>
//               <button onClick={() => handleChartZoom('in')} className="p-1 hover:bg-gray-700 rounded">
//                 <ZoomIn className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <ComposedChart data={complianceTrendData} style={{ transform: `scale(${chartScale})` }}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//               <XAxis dataKey="month" stroke="#9CA3AF" />
//               <YAxis stroke="#9CA3AF" />
//               <Bar dataKey="violations" fill="#ef4444" opacity={0.8} />
//               <Bar dataKey="audits" fill="#f59e0b" opacity={0.6} />
//               <Line type="monotone" dataKey="compliance" stroke="#3b82f6" strokeWidth={3} />
//             </ComposedChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Risk Assessment Radar */}
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center space-x-2 mb-6">
//             <Shield className="h-5 w-5 text-blue-400" />
//             <h3 className="text-lg font-semibold text-white">Risk Assessment</h3>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <RadarChart data={riskAssessmentData}>
//               <PolarGrid stroke="#374151" />
//               <PolarAngleAxis dataKey="category" tick={{ fontSize: 10, fill: '#9CA3AF' }} />
//               <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
//               <Radar name="Score" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} strokeWidth={2} />
//               <Radar name="Threshold" dataKey="threshold" stroke="#ef4444" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
//             </RadarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Regional Compliance Map */}
//       <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-2">
//             <Globe className="h-5 w-5 text-blue-400" />
//             <h3 className="text-lg font-semibold text-white">Regional Compliance Overview</h3>
//           </div>
//           <select 
//             value={selectedRegion}
//             onChange={(e) => setSelectedRegion(e.target.value)}
//             className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white"
//           >
//             <option value="Global">Global</option>
//             <option value="Asia-Pacific">Asia-Pacific</option>
//             <option value="Europe">Europe</option>
//             <option value="North America">North America</option>
//             <option value="South America">South America</option>
//             <option value="Africa">Africa</option>
//             <option value="Oceania">Oceania</option>
//           </select>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {regionalComplianceData.map((region, index) => (
//             <div key={index} className="bg-gray-700/30 rounded-lg p-4">
//               <div className="flex justify-between items-start mb-3">
//                 <h4 className="text-white font-semibold">{region.region}</h4>
//                 <RiskIndicator level={region.risk} />
//               </div>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-400 text-sm">Projects:</span>
//                   <span className="text-white">{region.projects}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-400 text-sm">Compliance:</span>
//                   <span className="text-emerald-400">{region.compliance}%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-400 text-sm">Credits:</span>
//                   <span className="text-white">{region.credits.toLocaleString()}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Real-time Monitoring */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center space-x-2 mb-6">
//             <Activity className="h-5 w-5 text-blue-400" />
//             <h3 className="text-lg font-semibold text-white">Live Verification Queue</h3>
//           </div>
//           <div className="space-y-4">
//             {verificationQueueData.slice(0, 4).map((item, index) => (
//               <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
//                 <div>
//                   <p className="text-white text-sm font-medium">{item.id}</p>
//                   <p className="text-gray-400 text-xs">{item.project}</p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <StatusBadge status={item.status} size="small" />
//                   <button className="text-gray-400 hover:text-blue-400">
//                     <Eye className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center space-x-2 mb-6">
//             <AlertTriangle className="h-5 w-5 text-yellow-400" />
//             <h3 className="text-lg font-semibold text-white">Recent Audit Findings</h3>
//           </div>
//           <div className="space-y-4">
//             {auditFindingsData.map((item, index) => (
//               <div key={index} className="p-3 bg-gray-700/30 rounded-lg">
//                 <div className="flex justify-between items-start mb-2">
//                   <span className="text-white text-sm font-medium">{item.id}</span>
//                   <StatusBadge status={item.status} size="small" />
//                 </div>
//                 <p className="text-gray-300 text-xs mb-2">{item.finding}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-400 text-xs">Due: {item.dueDate}</span>
//                   <span className={`text-xs ${
//                     item.severity === 'High' ? 'text-red-400' : 
//                     item.severity === 'Medium' ? 'text-yellow-400' : 'text-green-400'
//                   }`}>
//                     {item.severity}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderVerification = () => (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-white">Verification Management</h2>
//           <p className="text-gray-400">Review and approve carbon credit verification requests</p>
//         </div>
//         <div className="flex space-x-4">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//             <Filter className="h-4 w-4" />
//             <span>Filter Queue</span>
//           </button>
//           <button 
//             onClick={handleAuditModeToggle}
//             className={`${auditMode ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'} text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2`}
//           >
//             {auditMode ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
//             <span>Audit Mode: {auditMode ? 'ON' : 'OFF'}</span>
//           </button>
//         </div>
//       </div>

//       {/* Verification Queue */}
//       <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-lg font-semibold text-white">Verification Queue ({verificationQueue})</h3>
//           <div className="flex space-x-2">
//             <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm">
//               Sort by Priority
//             </button>
//             <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
//               Bulk Actions
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-700">
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">ID</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Project</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">NGO</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Submitted</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Type</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Priority</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
//                 <th className="text-center py-3 px-4 text-gray-300 font-medium">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {verificationQueueData.map((item, index) => (
//                 <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
//                   <td className="py-4 px-4">
//                     <span className="text-blue-400 font-mono">{item.id}</span>
//                   </td>
//                   <td className="py-4 px-4">
//                     <p className="text-white font-medium">{item.project}</p>
//                   </td>
//                   <td className="py-4 px-4 text-gray-300">{item.ngo}</td>
//                   <td className="py-4 px-4 text-gray-300">{item.submitted}</td>
//                   <td className="py-4 px-4">
//                     <span className="bg-gray-600/50 text-gray-300 px-2 py-1 rounded text-xs">{item.type}</span>
//                   </td>
//                   <td className="py-4 px-4">
//                     <span className={`px-2 py-1 rounded text-xs ${
//                       item.priority === 'High' ? 'bg-red-500/20 text-red-400' :
//                       item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
//                       'bg-green-500/20 text-green-400'
//                     }`}>
//                       {item.priority}
//                     </span>
//                   </td>
//                   <td className="py-4 px-4">
//                     <StatusBadge status={item.status} size="small" />
//                   </td>
//                   <td className="py-4 px-4">
//                     <div className="flex justify-center space-x-2">
//                       <button 
//                         onClick={() => handleVerificationAction(item.id, 'review')}
//                         className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
//                       >
//                         <FileSearch className="h-4 w-4" />
//                       </button>
//                       <button 
//                         onClick={() => handleVerificationAction(item.id, 'approve')}
//                         className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
//                       >
//                         <CheckCircle className="h-4 w-4" />
//                       </button>
//                       <button 
//                         onClick={() => handleVerificationAction(item.id, 'reject')}
//                         className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
//                       >
//                         <AlertCircle className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Verification Analytics */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <h4 className="text-white font-semibold mb-4">Verification Performance</h4>
//           <div className="space-y-4">
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="text-gray-400 text-sm">Approval Rate</span>
//                 <span className="text-emerald-400 text-sm">92.3%</span>
//               </div>
//               <ProgressBar progress={92.3} color="bg-emerald-400" />
//             </div>
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="text-gray-400 text-sm">Average Processing Time</span>
//                 <span className="text-blue-400 text-sm">4.2 days</span>
//               </div>
//               <ProgressBar progress={70} color="bg-blue-400" />
//             </div>
//             <div>
//               <div className="flex justify-between mb-1">
//                 <span className="text-gray-400 text-sm">Rejection Rate</span>
//                 <span className="text-red-400 text-sm">7.7%</span>
//               </div>
//               <ProgressBar progress={7.7} color="bg-red-400" />
//             </div>
//           </div>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <h4 className="text-white font-semibold mb-4">Methodology Compliance</h4>
//           <ResponsiveContainer width="100%" height={200}>
//             <BarChart data={methodologyComplianceData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//               <XAxis dataKey="methodology" stroke="#9CA3AF" />
//               <YAxis stroke="#9CA3AF" />
//               <Bar dataKey="compliance" fill="#3b82f6" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
//           <div className="space-y-3">
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition-colors">
//               Schedule Batch Verification
//             </button>
//             <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm transition-colors">
//               Generate Compliance Report
//             </button>
//             <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm transition-colors">
//               Update Verification Guidelines
//             </button>
//             <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg text-sm transition-colors">
//               View Audit Trail
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Additional tab render functions would follow the same pattern...
//   // Due to length constraints, I'll show the structure for the remaining tabs

//   const renderCompliance = () => (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-white">Compliance Monitoring</h2>
//           <p className="text-gray-400">Track regulatory compliance across all projects and NGOs</p>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//           <DownloadCloud className="h-4 w-4" />
//           <span>Export Compliance Report</span>
//         </button>
//       </div>
//       {/* Compliance content would go here */}
//     </div>
//   );

//   const renderNGOPerformance = () => (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-white">NGO Performance Dashboard</h2>
//           <p className="text-gray-400">Monitor and evaluate NGO performance metrics</p>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//           <BarChart2 className="h-4 w-4" />
//           <span>Performance Analytics</span>
//         </button>
//       </div>
//       {/* NGO Performance content would go here */}
//     </div>
//   );

//   const renderAudit = () => (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-white">Audit & Investigations</h2>
//           <p className="text-gray-400">Manage audits, investigations, and compliance enforcement</p>
//         </div>
//         <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//           <Gavel className="h-4 w-4" />
//           <span>Initiate Investigation</span>
//         </button>
//       </div>
//       {/* Audit content would go here */}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-8">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Regulatory Body Dashboard
//           </h1>
//           <p className="text-gray-400 mt-2">Blue Carbon MRV System - Monitoring & Compliance Center</p>
//         </div>
        
//         <div className="flex items-center space-x-4">
//           {/* Search Bar */}
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <input
//               type="text"
//               placeholder="Search projects, NGOs, reports..."
//               value={searchTerm}
//               onChange={(e) => handleSearch(e.target.value)}
//               className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 w-64"
//             />
//           </div>
          
//           {/* Notifications */}
//           <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
//             <Bell className="h-5 w-5" />
//             {notifications > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                 {notifications}
//               </span>
//             )}
//           </button>
          
//           {/* Settings */}
//           <button className="p-2 text-gray-400 hover:text-white transition-colors">
//             <Settings className="h-5 w-5" />
//           </button>
          
//           {/* User Profile */}
//           {/* User Profile with Dropdown */}
// <div className="relative group">
//   {/* Profile Trigger */}
//   <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-2 cursor-pointer">
//     <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
//       <Shield className="h-4 w-4" />
//     </div>
//     <div className="hidden md:block">
//       <p className="text-sm font-medium">Regulatory Officer</p>
//       <p className="text-xs text-gray-400">Blue Carbon Authority</p>
//     </div>
//     <ChevronDown className="h-4 w-4 text-gray-400" />
//   </div>

//   {/* Dropdown Menu */}
//   <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//     <div className="p-2">
//       <div className="px-3 py-2 border-b border-gray-700">
//         <p className="text-sm font-medium">Regulatory Officer</p>
//         <p className="text-xs text-gray-400">Blue Carbon Authority</p>
//       </div>
//       <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-700 rounded-md transition-colors">
//         Audit Projects
//       </button>
//       <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-700 rounded-md transition-colors">
//         Reports
//       </button>
      
//       {/* Logout Button */}
//       <button 
//         onClick={() => window.location.href = '/login'}
//         className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-600 hover:text-white rounded-md transition-colors mt-1"
//       >
//         Logout
//       </button>
//     </div>
//   </div>
// </div>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <StatCard 
//           icon={Shield} 
//           title="System Compliance" 
//           value="94.2%" 
//           change="+1.5% this month" 
//           trend="up"
//           color="text-blue-400"
//         />
//         <StatCard 
//           icon={FileCheck} 
//           title="Pending Verifications" 
//           value={verificationQueue} 
//           change="-3 this week" 
//           trend="down"
//           color="text-yellow-400"
//         />
//         <StatCard 
//           icon={Scale} 
//           title="Active Audits" 
//           value="23" 
//           change="+2 ongoing" 
//           trend="up"
//           color="text-red-400"
//         />
//         <StatCard 
//           icon={TrendingUp} 
//           title="Total Credits" 
//           value={realTimeData.toLocaleString()} 
//           change="+2.3% growth" 
//           trend="up"
//           color="text-emerald-400"
//         />
//       </div>

//       {/* Navigation Tabs */}
//       <div className="border-b border-gray-700 mb-8">
//         <div className="flex flex-wrap space-x-4">
//           <TabButton name="Overview" isActive={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
//           <TabButton name="Verification" isActive={activeTab === 'Verification'} onClick={() => setActiveTab('Verification')} hasNotification count={verificationQueue} />
//           <TabButton name="Compliance" isActive={activeTab === 'Compliance'} onClick={() => setActiveTab('Compliance')} />
//           <TabButton name="NGO Performance" isActive={activeTab === 'NGO Performance'} onClick={() => setActiveTab('NGO Performance')} />
//           <TabButton name="Audit" isActive={activeTab === 'Audit'} onClick={() => setActiveTab('Audit')} hasNotification count={3} />
//           <TabButton name="Transactions" isActive={activeTab === 'Transactions'} onClick={() => setActiveTab('Transactions')} />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="mb-8">
//         {activeTab === 'Overview' && renderOverview()}
//         {activeTab === 'Verification' && renderVerification()}
//         {activeTab === 'Compliance' && renderCompliance()}
//         {activeTab === 'NGO Performance' && renderNGOPerformance()}
//         {activeTab === 'Audit' && renderAudit()}
//         {activeTab === 'Transactions' && <TransactionRegulatoryBody />}
//       </div>

//       {/* Footer */}
//       <div className="border-t border-gray-700 pt-8 mt-8">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <div className="flex items-center space-x-2">
//             <Shield className="h-5 w-5 text-blue-400" />
//             <span className="text-gray-400">Blue Carbon Regulatory Authority v2.1</span>
//           </div>
//           <div className="flex space-x-6">
//             <span className="text-gray-400 text-sm">© 2024 Blue Carbon MRV System</span>
//             <span className="text-gray-400 text-sm">Compliance Guidelines</span>
//             <span className="text-gray-400 text-sm">Regulatory Framework</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegulatoryBodyDashboard;



import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart, Tooltip, Legend } from 'recharts';
import { Users, Leaf, DollarSign, MapPin, TrendingUp, Upload, FileText, Eye, Medal, Calendar, CheckCircle, Clock, AlertCircle, Download, Filter, Search, Bell, Settings, Globe, Zap, Target, Award, Activity, BarChart3, Camera, Trash2, Edit3, Plus, Star, Bookmark, Share2, RefreshCw, Mail, Phone, Map, Shield, Gavel, Scale, ClipboardList, FileCheck, AlertTriangle, Lock, Unlock, ZoomIn, ZoomOut, DownloadCloud, UploadCloud, Cpu, Database, Network, FileSearch, Calculator, Percent, BarChart2, PieChart as PieChartIcon } from 'lucide-react';
import TransactionRegulatoryBody from './TransactionRegulatoryBody';
import { ChevronDown, LogOut } from 'lucide-react';

const RegulatoryBodyDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedNGO, setSelectedNGO] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState(8);
  const [realTimeData, setRealTimeData] = useState(124560);
  const [verificationQueue, setVerificationQueue] = useState(12);
  const [complianceRate, setComplianceRate] = useState(94.2);
  const [riskLevel, setRiskLevel] = useState('Low');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [chartScale, setChartScale] = useState(1);
  const [auditMode, setAuditMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Global');
  const chartRef = useRef(null);

  // Real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => prev + Math.floor(Math.random() * 5));
      setVerificationQueue(prev => Math.max(0, prev + (Math.random() > 0.7 ? 1 : 0)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced sample data for regulatory perspective
  const systemOverviewData = [
    { metric: 'Total Projects', value: 156, change: '+8%', trend: 'up', target: 200 },
    { metric: 'Verified Credits', value: 124560, change: '+2.3%', trend: 'up', target: 150000 },
    { metric: 'Compliance Rate', value: '94.2%', change: '+1.5%', trend: 'up', target: '95%' },
    { metric: 'Pending Audits', value: 23, change: '-3', trend: 'down', target: 10 },
    { metric: 'Risk Level', value: 'Low', change: 'Stable', trend: 'neutral', target: 'Low' },
    { metric: 'Avg Verification Time', value: '4.2d', change: '-0.8d', trend: 'down', target: '3d' }
  ];

  const complianceTrendData = [
    { month: 'Jan', compliance: 89.2, violations: 4, audits: 8 },
    { month: 'Feb', compliance: 91.5, violations: 3, audits: 12 },
    { month: 'Mar', compliance: 92.8, violations: 2, audits: 10 },
    { month: 'Apr', compliance: 93.6, violations: 3, audits: 15 },
    { month: 'May', compliance: 94.2, violations: 1, audits: 11 },
    { month: 'Jun', compliance: 95.1, violations: 1, audits: 9 }
  ];

  const riskAssessmentData = [
    { category: 'Methodology Compliance', score: 92, threshold: 85, status: 'Low Risk' },
    { category: 'Data Accuracy', score: 88, threshold: 90, status: 'Medium Risk' },
    { category: 'MRV Compliance', score: 95, threshold: 85, status: 'Low Risk' },
    { category: 'Financial Reporting', score: 82, threshold: 80, status: 'Medium Risk' },
    { category: 'Environmental Impact', score: 96, threshold: 85, status: 'Low Risk' },
    { category: 'Community Engagement', score: 78, threshold: 75, status: 'High Risk' }
  ];

  const regionalComplianceData = [
    { region: 'Asia-Pacific', projects: 45, compliance: 96.2, credits: 45000, risk: 'Low' },
    { region: 'Europe', projects: 38, compliance: 95.8, credits: 38000, risk: 'Low' },
    { region: 'North America', projects: 28, compliance: 93.5, credits: 29000, risk: 'Medium' },
    { region: 'South America', projects: 22, compliance: 91.2, credits: 18000, risk: 'Medium' },
    { region: 'Africa', projects: 15, compliance: 89.7, credits: 12500, risk: 'High' },
    { region: 'Oceania', projects: 8, compliance: 97.1, credits: 8200, risk: 'Low' }
  ];

  const verificationQueueData = [
    { id: 'VRF-001', project: 'Mangrove Restoration - Indonesia', ngo: 'EcoGuardians', submitted: '2h ago', type: 'Initial', priority: 'High', status: 'Pending' },
    { id: 'VRF-002', project: 'Seagrass Conservation - Mediterranean', ngo: 'BlueLife', submitted: '4h ago', type: 'Quarterly', priority: 'Medium', status: 'In Review' },
    { id: 'VRF-003', project: 'Coastal Wetland - Australia', ngo: 'OceanProtect', submitted: '1d ago', type: 'Annual', priority: 'Low', status: 'Pending' },
    { id: 'VRF-004', project: 'Kelp Forest - California', ngo: 'MarineGrowth', submitted: '1d ago', type: 'Initial', priority: 'High', status: 'In Review' },
    { id: 'VRF-005', project: 'Mangrove Conservation - Bangladesh', ngo: 'GreenShore', submitted: '2d ago', type: 'Quarterly', priority: 'Medium', status: 'Pending' }
  ];

  const auditFindingsData = [
    { id: 'AUD-2024-001', project: 'Mangrove Restoration - Bay of Bengal', finding: 'Data inconsistency in MRV reports', severity: 'High', status: 'Open', dueDate: '2024-07-15' },
    { id: 'AUD-2024-002', project: 'Seagrass Conservation - Greece', finding: 'Incomplete community engagement records', severity: 'Medium', status: 'In Progress', dueDate: '2024-07-20' },
    { id: 'AUD-2024-003', project: 'Coastal Wetland - Queensland', finding: 'Minor methodology deviation', severity: 'Low', status: 'Resolved', dueDate: '2024-06-30' },
    { id: 'AUD-2024-004', project: 'Kelp Forest - Pacific', finding: 'Equipment calibration records missing', severity: 'Medium', status: 'Open', dueDate: '2024-07-10' }
  ];

  const ngoPerformanceData = [
    { name: 'EcoGuardians', projects: 12, compliance: 98.2, credits: 25000, risk: 'Low', rating: 4.9 },
    { name: 'BlueLife', projects: 8, compliance: 95.7, credits: 18000, risk: 'Low', rating: 4.7 },
    { name: 'OceanProtect', projects: 15, compliance: 92.3, credits: 32000, risk: 'Medium', rating: 4.5 },
    { name: 'MarineGrowth', projects: 6, compliance: 89.8, credits: 12500, risk: 'Medium', rating: 4.2 },
    { name: 'GreenShore', projects: 10, compliance: 96.5, credits: 22000, risk: 'Low', rating: 4.8 }
  ];

  const methodologyComplianceData = [
    { methodology: 'VM0033', projects: 45, compliance: 96.8, credits: 52000 },
    { methodology: 'VM0042', projects: 38, compliance: 94.2, credits: 41000 },
    { methodology: 'AR-ACM003', projects: 28, compliance: 91.5, credits: 29000 },
    { methodology: 'VM0007', projects: 22, compliance: 89.7, credits: 18000 },
    { methodology: 'AR-AMS0003', projects: 15, compliance: 97.1, credits: 15500 }
  ];

  // Enhanced handlers
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleNGOSelect = (ngo) => {
    setSelectedNGO(ngo);
  };

  const handleExport = async (type = 'full') => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert(`${type === 'full' ? 'Full' : 'Filtered'} data exported successfully!`);
  };

  const handleVerificationAction = (id, action) => {
    setVerificationQueue(prev => Math.max(0, prev - 1));
    alert(`Verification ${id} ${action}`);
  };

  const handleAuditModeToggle = () => {
    setAuditMode(!auditMode);
  };

  const handleChartZoom = (direction) => {
    setChartScale(prev => Math.max(0.5, Math.min(2, prev + (direction === 'in' ? 0.1 : -0.1))));
  };

  // Custom Components
  const StatCard = ({ icon: Icon, title, value, change, color = 'text-sky-400', trend, subtitle, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-700/30 group-hover:from-sky-600/20 group-hover:to-sky-500/10 transition-all duration-300`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        {notifications > 0 && title.includes('Pending') && (
          <div className="relative">
            <Bell className="h-5 w-5 text-yellow-400 animate-pulse cursor-pointer" onClick={() => setNotifications(0)} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notifications}
            </span>
          </div>
        )}
      </div>
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
        <p className="text-white text-3xl font-bold mb-2">{value}</p>
        {subtitle && <p className="text-gray-500 text-xs mb-2">{subtitle}</p>}
        <div className="flex items-center justify-between">
          {change && (
            <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-sky-400' : trend === 'down' ? 'text-red-400' : 'text-yellow-400'}`}>
              <TrendingUp className={`h-4 w-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
              <span className="text-sm font-medium">{change}</span>
            </div>
          )}
          <div className="text-right">
            <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-sky-400 to-sky-500 transition-all duration-1000`} 
                   style={{ width: `${Math.random() * 100}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TabButton = ({ name, isActive, onClick, hasNotification, count }) => (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
        isActive
          ? 'text-sky-400 border-sky-400 bg-gray-900/30'
          : 'text-gray-400 border-transparent hover:text-gray-300 hover:bg-gray-900/20'
      }`}
    >
      {name}
      {hasNotification && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count || '!'}
        </span>
      )}
    </button>
  );

  const ProgressBar = ({ progress, color = 'bg-sky-400', height = 'h-2' }) => (
    <div className={`w-full bg-gray-800 rounded-full ${height}`}>
      <div className={`${color} ${height} rounded-full transition-all duration-1000 relative overflow-hidden`} 
           style={{ width: `${progress}%` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>
    </div>
  );

  const StatusBadge = ({ status, size = 'normal' }) => {
    const statusStyles = {
      'Low Risk': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      'Medium Risk': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'High Risk': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Pending': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      'In Review': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Approved': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      'Rejected': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Open': 'bg-red-500/20 text-red-400 border-red-500/30',
      'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Resolved': 'bg-sky-500/20 text-sky-400 border-sky-500/30'
    };

    const sizeStyles = size === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';

    return (
      <span className={`${sizeStyles} rounded-full font-medium border ${statusStyles[status] || statusStyles.Pending} backdrop-blur-sm`}>
        {status}
      </span>
    );
  };

  const RiskIndicator = ({ level }) => {
    const colors = {
      'Low': 'bg-sky-400',
      'Medium': 'bg-yellow-400',
      'High': 'bg-red-400'
    };
    
    return (
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${colors[level]}`}></div>
        <span className="text-sm">{level} Risk</span>
      </div>
    );
  };

  // Tab Render Functions
  const renderOverview = () => (
    <div className="space-y-8">
      {/* System Health Dashboard */}
      <div className="bg-gradient-to-r from-sky-600/20 to-indigo-600/20 rounded-xl p-6 border border-sky-500/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Regulatory System Health</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <span className="text-sky-400 text-sm">All Systems Operational</span>
            <RefreshCw className="h-4 w-4 text-sky-400 animate-spin" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {systemOverviewData.map((item, index) => (
            <div key={index} className="bg-black/30 rounded-lg p-4 text-center">
              <p className="text-gray-400 text-sm mb-1">{item.metric}</p>
              <p className="text-white text-xl font-bold mb-1">{item.value}</p>
              <div className={`text-xs ${item.trend === 'up' ? 'text-sky-400' : item.trend === 'down' ? 'text-red-400' : 'text-yellow-400'}`}>
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance & Risk Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Compliance Trend */}
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold text-white">Compliance Trend</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => handleChartZoom('out')} className="p-1 hover:bg-gray-800 rounded">
                <ZoomOut className="h-4 w-4" />
              </button>
              <button onClick={() => handleChartZoom('in')} className="p-1 hover:bg-gray-800 rounded">
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={complianceTrendData} style={{ transform: `scale(${chartScale})` }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Bar dataKey="violations" fill="#ef4444" opacity={0.8} />
              <Bar dataKey="audits" fill="#f59e0b" opacity={0.6} />
              <Line type="monotone" dataKey="compliance" stroke="#0ea5e9" strokeWidth={3} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Assessment Radar */}
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-5 w-5 text-sky-400" />
            <h3 className="text-lg font-semibold text-white">Risk Assessment</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={riskAssessmentData}>
              <PolarGrid stroke="#1e293b" />
              <PolarAngleAxis dataKey="category" tick={{ fontSize: 10, fill: '#94a3b8' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
              <Radar name="Score" dataKey="score" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} strokeWidth={2} />
              <Radar name="Threshold" dataKey="threshold" stroke="#ef4444" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regional Compliance Map */}
      <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-sky-400" />
            <h3 className="text-lg font-semibold text-white">Regional Compliance Overview</h3>
          </div>
          <select 
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white"
          >
            <option value="Global">Global</option>
            <option value="Asia-Pacific">Asia-Pacific</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regionalComplianceData.map((region, index) => (
            <div key={index} className="bg-gray-900/30 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-white font-semibold">{region.region}</h4>
                <RiskIndicator level={region.risk} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Projects:</span>
                  <span className="text-white">{region.projects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Compliance:</span>
                  <span className="text-sky-400">{region.compliance}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">Credits:</span>
                  <span className="text-white">{region.credits.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="h-5 w-5 text-sky-400" />
            <h3 className="text-lg font-semibold text-white">Live Verification Queue</h3>
          </div>
          <div className="space-y-4">
            {verificationQueueData.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">{item.id}</p>
                  <p className="text-gray-400 text-xs">{item.project}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <StatusBadge status={item.status} size="small" />
                  <button className="text-gray-400 hover:text-sky-400">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Recent Audit Findings</h3>
          </div>
          <div className="space-y-4">
            {auditFindingsData.map((item, index) => (
              <div key={index} className="p-3 bg-gray-900/30 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-white text-sm font-medium">{item.id}</span>
                  <StatusBadge status={item.status} size="small" />
                </div>
                <p className="text-gray-300 text-xs mb-2">{item.finding}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Due: {item.dueDate}</span>
                  <span className={`text-xs ${
                    item.severity === 'High' ? 'text-red-400' : 
                    item.severity === 'Medium' ? 'text-yellow-400' : 'text-sky-400'
                  }`}>
                    {item.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderVerification = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Verification Management</h2>
          <p className="text-gray-400">Review and approve carbon credit verification requests</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter Queue</span>
          </button>
          <button 
            onClick={handleAuditModeToggle}
            className={`${auditMode ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-700'} text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2`}
          >
            {auditMode ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
            <span>Audit Mode: {auditMode ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

      {/* Verification Queue */}
      <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">Verification Queue ({verificationQueue})</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm">
              Sort by Priority
            </button>
            <button className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm">
              Bulk Actions
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-300 font-medium">ID</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Project</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">NGO</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Submitted</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Type</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Priority</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                <th className="text-center py-3 px-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {verificationQueueData.map((item, index) => (
                <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                  <td className="py-4 px-4">
                    <span className="text-sky-400 font-mono">{item.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-white font-medium">{item.project}</p>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{item.ngo}</td>
                  <td className="py-4 px-4 text-gray-300">{item.submitted}</td>
                  <td className="py-4 px-4">
                    <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">{item.type}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                      item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-sky-500/20 text-sky-400'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge status={item.status} size="small" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center space-x-2">
                      <button 
                        onClick={() => handleVerificationAction(item.id, 'review')}
                        className="p-2 bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors"
                      >
                        <FileSearch className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleVerificationAction(item.id, 'approve')}
                        className="p-2 bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleVerificationAction(item.id, 'reject')}
                        className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                      >
                        <AlertCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Verification Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4">Verification Performance</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-400 text-sm">Approval Rate</span>
                <span className="text-sky-400 text-sm">92.3%</span>
              </div>
              <ProgressBar progress={92.3} color="bg-sky-400" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-400 text-sm">Average Processing Time</span>
                <span className="text-blue-400 text-sm">4.2 days</span>
              </div>
              <ProgressBar progress={70} color="bg-blue-400" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-400 text-sm">Rejection Rate</span>
                <span className="text-red-400 text-sm">7.7%</span>
              </div>
              <ProgressBar progress={7.7} color="bg-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4">Methodology Compliance</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={methodologyComplianceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="methodology" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Bar dataKey="compliance" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
          <div className="space-y-3">
            <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg text-sm transition-colors">
              Schedule Batch Verification
            </button>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm transition-colors">
              Generate Compliance Report
            </button>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm transition-colors">
              Update Verification Guidelines
            </button>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm transition-colors">
              View Audit Trail
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Additional tab render functions would follow the same pattern...
  // Due to length constraints, I'll show the structure for the remaining tabs

  const renderCompliance = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Compliance Monitoring</h2>
          <p className="text-gray-400">Track regulatory compliance across all projects and NGOs</p>
        </div>
        <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
          <DownloadCloud className="h-4 w-4" />
          <span>Export Compliance Report</span>
        </button>
      </div>
      {/* Compliance content would go here */}
    </div>
  );

  const renderNGOPerformance = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">NGO Performance Dashboard</h2>
          <p className="text-gray-400">Monitor and evaluate NGO performance metrics</p>
        </div>
        <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
          <BarChart2 className="h-4 w-4" />
          <span>Performance Analytics</span>
        </button>
      </div>
      {/* NGO Performance content would go here */}
    </div>
  );

  const renderAudit = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Audit & Investigations</h2>
          <p className="text-gray-400">Manage audits, investigations, and compliance enforcement</p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
          <Gavel className="h-4 w-4" />
          <span>Initiate Investigation</span>
        </button>
      </div>
      {/* Audit content would go here */}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Regulatory Body Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Blue Carbon MRV System - Monitoring & Compliance Center</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search projects, NGOs, reports..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-2 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 w-64"
            />
          </div>
          
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          
          {/* Settings */}
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          
          {/* User Profile */}
          {/* User Profile with Dropdown */}
          <div className="relative group">
            {/* Profile Trigger */}
            <div className="flex items-center space-x-3 bg-black/50 rounded-lg p-2 cursor-pointer">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Regulatory Officer</p>
                <p className="text-xs text-gray-400">Blue Carbon Authority</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <div className="px-3 py-2 border-b border-gray-800">
                  <p className="text-sm font-medium">Regulatory Officer</p>
                  <p className="text-xs text-gray-400">Blue Carbon Authority</p>
                </div>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors">
                  Audit Projects
                </button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors">
                  Reports
                </button>
                
                {/* Logout Button */}
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-600 hover:text-white rounded-md transition-colors mt-1"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={Shield} 
          title="System Compliance" 
          value="94.2%" 
          change="+1.5% this month" 
          trend="up"
          color="text-sky-400"
        />
        <StatCard 
          icon={FileCheck} 
          title="Pending Verifications" 
          value={verificationQueue} 
          change="-3 this week" 
          trend="down"
          color="text-yellow-400"
        />
        <StatCard 
          icon={Scale} 
          title="Active Audits" 
          value="23" 
          change="+2 ongoing" 
          trend="up"
          color="text-red-400"
        />
        <StatCard 
          icon={TrendingUp} 
          title="Total Credits" 
          value={realTimeData.toLocaleString()} 
          change="+2.3% growth" 
          trend="up"
          color="text-sky-400"
        />
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-800 mb-8">
        <div className="flex flex-wrap space-x-4">
          <TabButton name="Overview" isActive={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <TabButton name="Verification" isActive={activeTab === 'Verification'} onClick={() => setActiveTab('Verification')} hasNotification count={verificationQueue} />
          <TabButton name="Compliance" isActive={activeTab === 'Compliance'} onClick={() => setActiveTab('Compliance')} />
          <TabButton name="NGO Performance" isActive={activeTab === 'NGO Performance'} onClick={() => setActiveTab('NGO Performance')} />
          <TabButton name="Audit" isActive={activeTab === 'Audit'} onClick={() => setActiveTab('Audit')} hasNotification count={3} />
          <TabButton name="Transactions" isActive={activeTab === 'Transactions'} onClick={() => setActiveTab('Transactions')} />
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        {activeTab === 'Overview' && renderOverview()}
        {activeTab === 'Verification' && renderVerification()}
        {activeTab === 'Compliance' && renderCompliance()}
        {activeTab === 'NGO Performance' && renderNGOPerformance()}
        {activeTab === 'Audit' && renderAudit()}
        {activeTab === 'Transactions' && <TransactionRegulatoryBody />}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-sky-400" />
            <span className="text-gray-400">Blue Carbon Regulatory Authority v2.1</span>
          </div>
          <div className="flex space-x-6">
            <span className="text-gray-400 text-sm">© 2024 Blue Carbon MRV System</span>
            <span className="text-gray-400 text-sm">Compliance Guidelines</span>
            <span className="text-gray-400 text-sm">Regulatory Framework</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryBodyDashboard;