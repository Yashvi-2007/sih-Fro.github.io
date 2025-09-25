// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart, Tooltip, Legend } from 'recharts';
// import { Settings, Users, Shield, AlertTriangle, CheckCircle, Clock, TrendingUp, Download, Filter, Search, Bell, Globe, Zap, Target, Award, Activity, BarChart3, Camera, Star, Bookmark, Share2, RefreshCw, Mail, Phone, Map, DollarSign, Leaf, MapPin, Calendar, Plus, Minus, Eye, Edit3, Trash2, Lock, Unlock, Database, Server, Cpu, HardDrive, Network, ShieldCheck, UserCheck, UserX, FileText, Archive, DownloadCloud, UploadCloud, Key, Wifi, WifiOff, CpuIcon, MemoryStick, DatabaseBackup, BellRing, MessageSquare, MailWarning, AlertCircle, ChevronDown, ExternalLink, QrCode, Sparkles, Crown, GitBranch, GitCommit, GitPullRequest, Workflow } from 'lucide-react';


// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [systemHealth, setSystemHealth] = useState(95);
//   const [activeUsers, setActiveUsers] = useState(0);
//   const [pendingApprovals, setPendingApprovals] = useState(0);
//   const [systemAlerts, setSystemAlerts] = useState(0);
//   const [realTimeData, setRealTimeData] = useState({
//     transactions: 1247,
//     credits: 45230,
//     projects: 12,
//     revenue: 127850
//   });

//   // Real-time system monitoring
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSystemHealth(prev => Math.max(80, Math.min(100, prev + (Math.random() * 4 - 2))));
//       setActiveUsers(prev => Math.max(0, prev + Math.floor(Math.random() * 10 - 5)));
//       setPendingApprovals(prev => Math.max(0, prev + Math.floor(Math.random() * 3 - 1)));
//       setSystemAlerts(prev => Math.max(0, prev + Math.floor(Math.random() * 2)));
      
//       setRealTimeData(prev => ({
//         transactions: prev.transactions + Math.floor(Math.random() * 10),
//         credits: prev.credits + Math.floor(Math.random() * 50),
//         projects: prev.projects,
//         revenue: prev.revenue + Math.floor(Math.random() * 1000)
//       }));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Sample data
//   const systemMetrics = [
//     { time: '00:00', cpu: 45, memory: 60, storage: 75, network: 85 },
//     { time: '04:00', cpu: 38, memory: 55, storage: 72, network: 82 },
//     { time: '08:00', cpu: 65, memory: 70, storage: 68, network: 88 },
//     { time: '12:00', cpu: 72, memory: 75, storage: 65, network: 92 },
//     { time: '16:00', cpu: 68, memory: 72, storage: 62, network: 85 },
//     { time: '20:00', cpu: 55, memory: 65, storage: 70, network: 78 }
//   ];

//   const userActivity = [
//     { user: 'Carbon Buyer Pro', action: 'Purchased 500 credits', time: '2 min ago', ip: '192.168.1.45', status: 'success' },
//     { user: 'NGO Manager', action: 'Submitted MRV data', time: '5 min ago', ip: '203.0.113.12', status: 'pending' },
//     { user: 'System Admin', action: 'Updated user permissions', time: '15 min ago', ip: '10.0.0.1', status: 'success' },
//     { user: 'Verifier Team', action: 'Approved project #234', time: '1 hour ago', ip: '198.51.100.23', status: 'success' },
//     { user: 'API Client', action: 'Bulk credit purchase', time: '2 hours ago', ip: '172.16.0.45', status: 'warning' }
//   ];

//   const platformStats = {
//     totalUsers: 1247,
//     activeSessions: 89,
//     newRegistrations: 23,
//     pendingVerifications: 12,
//     systemUptime: '99.95%',
//     apiRequests: '245K',
//     dataProcessed: '15.2TB',
//     errorRate: '0.02%'
//   };

//   const recentProjects = [
//     { id: 'PRJ-001', name: 'Mangrove Restoration', owner: 'Ocean Conservancy', status: 'Active', credits: 12500, revenue: 565000, created: '2023-06-15', lastUpdate: '2 days ago' },
//     { id: 'PRJ-002', name: 'Seagrass Conservation', owner: 'Marine Life Org', status: 'Pending', credits: 8900, revenue: 380920, created: '2023-08-01', lastUpdate: '1 week ago' },
//     { id: 'PRJ-003', name: 'Coastal Wetland', owner: 'Eco Solutions', status: 'Active', credits: 15600, revenue: 687960, created: '2024-01-15', lastUpdate: '3 days ago' },
//     { id: 'PRJ-004', name: 'Kelp Forest', owner: 'Blue Carbon Inc', status: 'Draft', credits: 6800, revenue: 299200, created: '2023-04-20', lastUpdate: '5 days ago' }
//   ];

//   const financialData = [
//     { month: 'Jan', revenue: 45000, expenses: 35000, profit: 10000, transactions: 45 },
//     { month: 'Feb', revenue: 55000, expenses: 40000, profit: 15000, transactions: 52 },
//     { month: 'Mar', revenue: 65000, expenses: 45000, profit: 20000, transactions: 61 },
//     { month: 'Apr', revenue: 75000, expenses: 50000, profit: 25000, transactions: 68 },
//     { month: 'May', revenue: 95000, expenses: 65000, profit: 30000, transactions: 79 },
//     { month: 'Jun', revenue: 127850, expenses: 85000, profit: 42850, transactions: 92 }
//   ];

//   const systemAlertsData = [
//     { id: 1, severity: 'High', message: 'Database connection latency increased', time: '5 min ago', component: 'Database', status: 'Active' },
//     { id: 2, severity: 'Medium', message: 'API rate limit approaching', time: '15 min ago', component: 'API Gateway', status: 'Monitoring' },
//     { id: 3, severity: 'Low', message: 'Backup process completed', time: '2 hours ago', component: 'Storage', status: 'Resolved' },
//     { id: 4, severity: 'High', message: 'Unauthorized access attempt', time: '3 hours ago', component: 'Security', status: 'Investigating' }
//   ];

//   const StatCard = ({ icon: Icon, title, value, change, color = 'text-emerald-400', trend, subtitle, onClick }) => (
//     <div 
//       onClick={onClick}
//       className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
//     >
//       <div className="flex items-center justify-between mb-4">
//         <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-600/30 group-hover:from-${color.split('-')[1]}-600/20 group-hover:to-${color.split('-')[1]}-500/10 transition-all duration-300`}>
//           <Icon className={`h-6 w-6 ${color}`} />
//         </div>
//         {trend && (
//           <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
//             <TrendingUp className={`h-4 w-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
//             <span className="text-sm font-medium">{change}</span>
//           </div>
//         )}
//       </div>
//       <div>
//         <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
//         <p className="text-white text-3xl font-bold mb-2">{value}</p>
//         {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
//       </div>
//     </div>
//   );

//   const TabButton = ({ name, isActive, onClick, hasNotification }) => (
//     <button
//       onClick={onClick}
//       className={`relative px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
//         isActive
//           ? 'text-emerald-400 border-emerald-400 bg-gray-800/30'
//           : 'text-gray-400 border-transparent hover:text-gray-300 hover:bg-gray-800/20'
//       }`}
//     >
//       {name}
//       {hasNotification && (
//         <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">!</span>
//       )}
//     </button>
//   );

//   const StatusBadge = ({ status, size = 'normal' }) => {
//     const statusStyles = {
//       'Active': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
//       'Pending': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
//       'Draft': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
//       'High': 'bg-red-500/20 text-red-400 border-red-500/30',
//       'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
//       'Low': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
//       'success': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
//       'warning': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
//       'Monitoring': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
//       'Resolved': 'bg-green-500/20 text-green-400 border-green-500/30',
//       'Investigating': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
//     };

//     const sizeStyles = size === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';

//     return (
//       <span className={`${sizeStyles} rounded-full font-medium border ${statusStyles[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'} backdrop-blur-sm`}>
//         {status}
//       </span>
//     );
//   };

//   const renderOverview = () => (
//     <div className="space-y-8">
//       {/* System Health Dashboard */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-xl p-6 border border-emerald-500/30">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-xl font-bold text-white">System Health</h3>
//             <div className="flex items-center space-x-2">
//               <div className={`w-2 h-2 rounded-full animate-pulse ${
//                 systemHealth > 90 ? 'bg-emerald-400' : 
//                 systemHealth > 70 ? 'bg-yellow-400' : 'bg-red-400'
//               }`}></div>
//               <span className="text-emerald-400 text-sm">Live</span>
//             </div>
//           </div>
//           <div className="text-center">
//             <div className="relative inline-block">
//               <svg className="w-32 h-32 transform -rotate-90">
//                 <circle cx="64" cy="64" r="54" stroke="#374151" strokeWidth="8" fill="none" />
//                 <circle 
//                   cx="64" 
//                   cy="64" 
//                   r="54" 
//                   stroke={systemHealth > 90 ? '#10b981' : systemHealth > 70 ? '#f59e0b' : '#ef4444'} 
//                   strokeWidth="8" 
//                   fill="none" 
//                   strokeLinecap="round"
//                   strokeDasharray="339.292" 
//                   strokeDashoffset={339.292 * (1 - systemHealth / 100)}
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-3xl font-bold text-white">{systemHealth}%</span>
//               </div>
//             </div>
//             <p className="text-gray-300 mt-2">Overall System Status</p>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
//           <h3 className="text-xl font-bold text-white mb-4">Active Sessions</h3>
//           <p className="text-3xl font-bold text-blue-400 mb-2">{activeUsers}</p>
//           <p className="text-gray-300">Current Users Online</p>
//           <div className="mt-4 flex space-x-2">
//             <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
//             <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
//             <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
//           <h3 className="text-xl font-bold text-white mb-4">Pending Approvals</h3>
//           <p className="text-3xl font-bold text-purple-400 mb-2">{pendingApprovals}</p>
//           <p className="text-gray-300">Require Attention</p>
//           <button className="mt-4 text-purple-400 hover:text-purple-300 text-sm flex items-center space-x-1">
//             <Eye className="h-4 w-4" />
//             <span>Review Now</span>
//           </button>
//         </div>

//         <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl p-6 border border-red-500/30">
//           <h3 className="text-xl font-bold text-white mb-4">System Alerts</h3>
//           <p className="text-3xl font-bold text-red-400 mb-2">{systemAlerts}</p>
//           <p className="text-gray-300">Active Warnings</p>
//           <button className="mt-4 text-red-400 hover:text-red-300 text-sm flex items-center space-x-1">
//             <AlertTriangle className="h-4 w-4" />
//             <span>View Details</span>
//           </button>
//         </div>
//       </div>

//       {/* Real-time Metrics */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-white">System Performance</h3>
//             <div className="flex items-center space-x-2">
//               <Server className="h-5 w-5 text-emerald-400" />
//               <span className="text-emerald-400 text-sm">Live Metrics</span>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <ComposedChart data={systemMetrics}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
//               <XAxis dataKey="time" stroke="#9CA3AF" />
//               <YAxis stroke="#9CA3AF" />
//               <Tooltip />
//               <Area type="monotone" dataKey="cpu" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
//               <Area type="monotone" dataKey="memory" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
//               <Area type="monotone" dataKey="storage" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
//               <Line type="monotone" dataKey="network" stroke="#f59e0b" strokeWidth={2} />
//             </ComposedChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <h3 className="text-lg font-semibold text-white mb-6">Platform Statistics</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {Object.entries(platformStats).map(([key, value], index) => (
//               <div key={key} className="bg-gray-700/30 rounded-lg p-4">
//                 <p className="text-gray-400 text-sm mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
//                 <p className="text-white font-semibold text-lg">{value}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity & Alerts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <h3 className="text-lg font-semibold text-white mb-6">Recent User Activity</h3>
//           <div className="space-y-4">
//             {userActivity.map((activity, index) => (
//               <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
//                 <div className="flex items-center space-x-3">
//                   <div className={`w-3 h-3 rounded-full ${
//                     activity.status === 'success' ? 'bg-emerald-400' :
//                     activity.status === 'warning' ? 'bg-yellow-400' : 'bg-gray-400'
//                   }`}></div>
//                   <div>
//                     <p className="text-white text-sm font-medium">{activity.user}</p>
//                     <p className="text-gray-400 text-xs">{activity.action} • {activity.ip}</p>
//                   </div>
//                 </div>
//                 <span className="text-gray-500 text-xs">{activity.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-white">System Alerts</h3>
//             <button className="text-red-400 hover:text-red-300 text-sm flex items-center space-x-1">
//               <AlertTriangle className="h-4 w-4" />
//               <span>View All</span>
//             </button>
//           </div>
//           <div className="space-y-4">
//             {systemAlertsData.map((alert) => (
//               <div key={alert.id} className="p-3 bg-gray-700/30 rounded-lg border-l-4 border-red-500/50">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className="flex items-center space-x-2">
//                     <StatusBadge status={alert.severity} size="small" />
//                     <span className="text-white text-sm font-medium">{alert.component}</span>
//                   </div>
//                   <StatusBadge status={alert.status} size="small" />
//                 </div>
//                 <p className="text-gray-300 text-sm mb-2">{alert.message}</p>
//                 <div className="flex items-center justify-between text-xs text-gray-500">
//                   <span>{alert.time}</span>
//                   <button className="text-blue-400 hover:text-blue-300">Investigate</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderUsers = () => (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-white">User Management</h2>
//         <div className="flex space-x-4">
//           <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//             <Plus className="h-4 w-4" />
//             <span>Add User</span>
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//             <Download className="h-4 w-4" />
//             <span>Export Users</span>
//           </button>
//         </div>
//       </div>

//       {/* User Statistics */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <StatCard 
//           icon={Users} 
//           title="Total Users" 
//           value="1,247" 
//           change="+23 this week" 
//           trend="up"
//           color="text-blue-400"
//         />
//         <StatCard 
//           icon={UserCheck} 
//           title="Active Now" 
//           value={activeUsers.toString()} 
//           change="Live updating" 
//           color="text-emerald-400"
//         />
//         <StatCard 
//           icon={ShieldCheck} 
//           title="Verified" 
//           value="1,089" 
//           change="87% verified" 
//           color="text-green-400"
//         />
//         <StatCard 
//           icon={UserX} 
//           title="Suspended" 
//           value="15" 
//           change="-2 this month" 
//           trend="down"
//           color="text-red-400"
//         />
//       </div>

//       {/* User Table */}
//       <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-lg font-semibold text-white">All Users</h3>
//           <div className="flex space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 placeholder="Search users..."
//                 className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
//               />
//             </div>
//             <select className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-400">
//               <option>All Roles</option>
//               <option>Admin</option>
//               <option>NGO</option>
//               <option>Buyer</option>
//               <option>Verifier</option>
//             </select>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-700">
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">User</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Role</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Last Active</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Projects</th>
//                 <th className="text-center py-3 px-4 text-gray-300 font-medium">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 { name: 'Sarah Chen', email: 'sarah@ngo.org', role: 'NGO Admin', status: 'Active', lastActive: '2 min ago', projects: 3 },
//                 { name: 'Mike Rodriguez', email: 'mike@carbonbuyer.com', role: 'Premium Buyer', status: 'Active', lastActive: '15 min ago', projects: 0 },
//                 { name: 'Dr. Emma Davis', email: 'emma@verification.org', role: 'Verifier', status: 'Active', lastActive: '1 hour ago', projects: 12 },
//                 { name: 'Alex Thompson', email: 'alex@bluecarbon.com', role: 'System Admin', status: 'Active', lastActive: '2 hours ago', projects: 0 },
//                 { name: 'Lisa Wang', email: 'lisa@environment.org', role: 'NGO Member', status: 'Inactive', lastActive: '3 days ago', projects: 2 }
//               ].map((user, index) => (
//                 <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
//                   <td className="py-4 px-4">
//                     <div>
//                       <p className="text-white font-medium">{user.name}</p>
//                       <p className="text-gray-500 text-sm">{user.email}</p>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4">
//                     <StatusBadge status={user.role} size="small" />
//                   </td>
//                   <td className="py-4 px-4">
//                     <div className="flex items-center space-x-2">
//                       <div className={`w-2 h-2 rounded-full ${
//                         user.status === 'Active' ? 'bg-emerald-400' : 'bg-gray-400'
//                       }`}></div>
//                       <span className="text-gray-300">{user.status}</span>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-gray-300">{user.lastActive}</td>
//                   <td className="py-4 px-4 text-gray-300">{user.projects}</td>
//                   <td className="py-4 px-4 text-center">
//                     <div className="flex justify-center space-x-2">
//                       <button className="text-gray-400 hover:text-emerald-400 transition-colors">
//                         <Eye className="h-4 w-4" />
//                       </button>
//                       <button className="text-gray-400 hover:text-blue-400 transition-colors">
//                         <Edit3 className="h-4 w-4" />
//                       </button>
//                       <button className="text-gray-400 hover:text-red-400 transition-colors">
//                         <Trash2 className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderProjects = () => (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-white">Project Management</h2>
//         <div className="flex space-x-4">
//           <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//             <Plus className="h-4 w-4" />
//             <span>New Project</span>
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//             <Download className="h-4 w-4" />
//             <span>Export Data</span>
//           </button>
//         </div>
//       </div>

//       {/* Project Statistics */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <StatCard 
//           icon={Leaf} 
//           title="Total Projects" 
//           value="12" 
//           change="+2 this month" 
//           trend="up"
//           color="text-emerald-400"
//         />
//         <StatCard 
//           icon={CheckCircle} 
//           title="Active" 
//           value="8" 
//           change="67% active" 
//           color="text-green-400"
//         />
//         <StatCard 
//           icon={Clock} 
//           title="Pending Review" 
//           value="3" 
//           change="Require attention" 
//           color="text-yellow-400"
//         />
//         <StatCard 
//           icon={Archive} 
//           title="Archived" 
//           value="1" 
//           change="No change" 
//           color="text-gray-400"
//         />
//       </div>

//       {/* Projects Table */}
//       <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-lg font-semibold text-white">All Projects</h3>
//           <div className="flex space-x-4">
//             <select className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-400">
//               <option>All Status</option>
//               <option>Active</option>
//               <option>Pending</option>
//               <option>Draft</option>
//             </select>
//             <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
//               Filter
//             </button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-700">
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Project ID</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Project Name</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Owner</th>
//                 <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
//                 <th className="text-right py-3 px-4 text-gray-300 font-medium">Credits</th>
//                 <th className="text-right py-3 px-4 text-gray-300 font-medium">Revenue</th>
//                 <th className="text-center py-3 px-4 text-gray-300 font-medium">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {recentProjects.map((project) => (
//                 <tr key={project.id} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
//                   <td className="py-4 px-4">
//                     <p className="text-blue-400 font-mono font-medium">{project.id}</p>
//                   </td>
//                   <td className="py-4 px-4">
//                     <p className="text-white font-medium">{project.name}</p>
//                     <p className="text-gray-500 text-xs">Updated {project.lastUpdate}</p>
//                   </td>
//                   <td className="py-4 px-4 text-gray-300">{project.owner}</td>
//                   <td className="py-4 px-4">
//                     <StatusBadge status={project.status} size="small" />
//                   </td>
//                   <td className="py-4 px-4 text-right text-emerald-400 font-semibold">
//                     {project.credits.toLocaleString()}
//                   </td>
//                   <td className="py-4 px-4 text-right text-white font-semibold">
//                     ${project.revenue.toLocaleString()}
//                   </td>
//                   <td className="py-4 px-4 text-center">
//                     <div className="flex justify-center space-x-2">
//                       <button className="text-gray-400 hover:text-emerald-400 transition-colors">
//                         <Eye className="h-4 w-4" />
//                       </button>
//                       <button className="text-gray-400 hover:text-blue-400 transition-colors">
//                         <Edit3 className="h-4 w-4" />
//                       </button>
//                       <button className="text-gray-400 hover:text-yellow-400 transition-colors">
//                         <Shield className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSystem = () => (
//     <div className="space-y-8">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-white">System Administration</h2>
//         <div className="flex space-x-4">
//           <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//             <Server className="h-4 w-4" />
//             <span>System Backup</span>
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
//             <Settings className="h-4 w-4" />
//             <span>System Settings</span>
//           </button>
//         </div>
//       </div>

//       {/* System Health Dashboard */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center space-x-3 mb-4">
//             <Cpu className="h-8 w-8 text-blue-400" />
//             <div>
//               <h3 className="text-lg font-semibold text-white">CPU Usage</h3>
//               <p className="text-blue-400">Current: 65%</p>
//             </div>
//           </div>
//           <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
//             <div className="bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
//           </div>
//           <p className="text-gray-400 text-sm">Peak: 72% • Average: 58%</p>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center space-x-3 mb-4">
//             <MemoryStick className="h-8 w-8 text-purple-400" />
//             <div>
//               <h3 className="text-lg font-semibold text-white">Memory</h3>
//               <p className="text-purple-400">7.2GB / 16GB</p>
//             </div>
//           </div>
//           <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
//             <div className="bg-purple-400 h-2 rounded-full" style={{ width: '45%' }}></div>
//           </div>
//           <p className="text-gray-400 text-sm">45% used • 8.8GB available</p>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <div className="flex items-center space-x-3 mb-4">
//             <HardDrive className="h-8 w-8 text-emerald-400" />
//             <div>
//               <h3 className="text-lg font-semibold text-white">Storage</h3>
//               <p className="text-emerald-400">1.2TB / 2TB</p>
//             </div>
//           </div>
//           <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
//             <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '60%' }}></div>
//           </div>
//           <p className="text-gray-400 text-sm">60% used • 800GB available</p>
//         </div>
//       </div>

//       {/* System Controls */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <h3 className="text-lg font-semibold text-white mb-6">System Controls</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-center">
//               <DatabaseBackup className="h-8 w-8 text-blue-400 mx-auto mb-2" />
//               <span className="text-white text-sm">Backup Now</span>
//             </button>
//             <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-center">
//               <RefreshCw className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
//               <span className="text-white text-sm">Clear Cache</span>
//             </button>
//             <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-center">
//               <ShieldCheck className="h-8 w-8 text-green-400 mx-auto mb-2" />
//               <span className="text-white text-sm">Security Scan</span>
//             </button>
//             <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors text-center">
//               <BellRing className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
//               <span className="text-white text-sm">Test Alerts</span>
//             </button>
//           </div>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
//           <h3 className="text-lg font-semibold text-white mb-6">API Management</h3>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
//               <div>
//                 <p className="text-white font-medium">REST API</p>
//                 <p className="text-gray-400 text-sm">api.bluecarbon.com/v1</p>
//               </div>
//               <StatusBadge status="Active" size="small" />
//             </div>
//             <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
//               <div>
//                 <p className="text-white font-medium">WebSocket</p>
//                 <p className="text-gray-400 text-sm">ws.bluecarbon.com</p>
//               </div>
//               <StatusBadge status="Active" size="small" />
//             </div>
//             <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
//               <div>
//                 <p className="text-white font-medium">Webhook Service</p>
//                 <p className="text-gray-400 text-sm">webhooks.bluecarbon.com</p>
//               </div>
//               <StatusBadge status="Maintenance" size="small" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-8">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
//             Admin Dashboard
//           </h1>
//           <p className="text-gray-400 mt-2">Blue Carbon MRV System Administration</p>
//         </div>
        
//         <div className="flex items-center space-x-4">
//           {/* System Status */}
//           <div className="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-2">
//             <div className={`w-3 h-3 rounded-full animate-pulse ${
//               systemHealth > 90 ? 'bg-emerald-400' : 
//               systemHealth > 70 ? 'bg-yellow-400' : 'bg-red-400'
//             }`}></div>
//             <span className="text-sm text-gray-300">System: {systemHealth}%</span>
//           </div>
          
//           {/* Notifications */}
//           <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
//             <Bell className="h-5 w-5" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//               3
//             </span>
//           </button>
          
//           {/* Admin Profile */}
//           {/* User Profile with Dropdown */}
// <div className="relative group">
//   {/* Profile Trigger */}
//   <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-2 cursor-pointer">
//     <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
//       <Crown className="h-4 w-4" />
//     </div>
//     <div className="hidden md:block">
//       <p className="text-sm font-medium">System Administrator</p>
//       <p className="text-xs text-gray-400">Super User</p>
//     </div>
//     <ChevronDown className="h-4 w-4 text-gray-400" />
//   </div>

//   {/* Dropdown Menu */}
//   <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//     <div className="p-2">
//       <div className="px-3 py-2 border-b border-gray-700">
//         <p className="text-sm font-medium">System Administrator</p>
//         <p className="text-xs text-gray-400">Super User</p>
//       </div>
//       <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-700 rounded-md transition-colors">
//         System Settings
//       </button>
//       <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-700 rounded-md transition-colors">
//         Database Management
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
//           icon={Database} 
//           title="Total Transactions" 
//           value={realTimeData.transactions.toLocaleString()} 
//           change="+124 today" 
//           trend="up"
//           color="text-blue-400"
//         />
//         <StatCard 
//           icon={Leaf} 
//           title="Carbon Credits" 
//           value={realTimeData.credits.toLocaleString()} 
//           change="+1.2K this week" 
//           trend="up"
//           color="text-emerald-400"
//         />
//         <StatCard 
//           icon={DollarSign} 
//           title="Total Revenue" 
//           value={`$${realTimeData.revenue.toLocaleString()}`} 
//           change="+12.5% growth" 
//           trend="up"
//           color="text-green-400"
//         />
//         <StatCard 
//           icon={Server} 
//           title="System Uptime" 
//           value="99.95%" 
//           change="45 days running" 
//           color="text-purple-400"
//         />
//       </div>

//       {/* Navigation Tabs */}
//       <div className="border-b border-gray-700 mb-8">
//         <div className="flex flex-wrap space-x-4">
//           <TabButton name="Overview" isActive={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
//           <TabButton name="Users" isActive={activeTab === 'Users'} onClick={() => setActiveTab('Users')} />
//           <TabButton name="Projects" isActive={activeTab === 'Projects'} onClick={() => setActiveTab('Projects')} />
//           <TabButton name="System" isActive={activeTab === 'System'} onClick={() => setActiveTab('System')} hasNotification />
//           <TabButton name="Analytics" isActive={activeTab === 'Analytics'} onClick={() => setActiveTab('Analytics')} />
//           <TabButton name="Settings" isActive={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="mb-8">
//         {activeTab === 'Overview' && renderOverview()}
//         {activeTab === 'Users' && renderUsers()}
//         {activeTab === 'Projects' && renderProjects()}
//         {activeTab === 'System' && renderSystem()}
//         {activeTab === 'Analytics' && (
//           <div className="text-center py-16">
//             <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>
//             <p className="text-gray-400">Advanced analytics features coming soon</p>
//           </div>
//         )}
//         {activeTab === 'Settings' && (
//           <div className="text-center py-16">
//             <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">System Settings</h3>
//             <p className="text-gray-400">Configuration panel under development</p>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="border-t border-gray-700 pt-8 mt-8">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <div className="flex items-center space-x-2">
//             <ShieldCheck className="h-5 w-5 text-emerald-400" />
//             <span className="text-gray-400">System Secured • Last updated: Just now</span>
//           </div>
//           <div className="flex space-x-6">
//             <span className="text-gray-400 text-sm">© 2024 Blue Carbon MRV System</span>
//             <span className="text-gray-400 text-sm">v2.4.1</span>
//             <span className="text-gray-400 text-sm">Admin Portal</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart, Tooltip, Legend } from 'recharts';
import { Settings, Users, Shield, AlertTriangle, CheckCircle, Clock, TrendingUp, Download, Filter, Search, Bell, Globe, Zap, Target, Award, Activity, BarChart3, Camera, Star, Bookmark, Share2, RefreshCw, Mail, Phone, Map, DollarSign, Leaf, MapPin, Calendar, Plus, Minus, Eye, Edit3, Trash2, Lock, Unlock, Database, Server, Cpu, HardDrive, Network, ShieldCheck, UserCheck, UserX, FileText, Archive, DownloadCloud, UploadCloud, Key, Wifi, WifiOff, CpuIcon, MemoryStick, DatabaseBackup, BellRing, MessageSquare, MailWarning, AlertCircle, ChevronDown, ExternalLink, QrCode, Sparkles, Crown, GitBranch, GitCommit, GitPullRequest, Workflow } from 'lucide-react';


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [systemHealth, setSystemHealth] = useState(95);
  const [activeUsers, setActiveUsers] = useState(0);
  const [pendingApprovals, setPendingApprovals] = useState(0);
  const [systemAlerts, setSystemAlerts] = useState(0);
  const [realTimeData, setRealTimeData] = useState({
    transactions: 1247,
    credits: 45230,
    projects: 12,
    revenue: 127850
  });

  // Real-time system monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemHealth(prev => Math.max(80, Math.min(100, prev + (Math.random() * 4 - 2))));
      setActiveUsers(prev => Math.max(0, prev + Math.floor(Math.random() * 10 - 5)));
      setPendingApprovals(prev => Math.max(0, prev + Math.floor(Math.random() * 3 - 1)));
      setSystemAlerts(prev => Math.max(0, prev + Math.floor(Math.random() * 2)));
      
      setRealTimeData(prev => ({
        transactions: prev.transactions + Math.floor(Math.random() * 10),
        credits: prev.credits + Math.floor(Math.random() * 50),
        projects: prev.projects,
        revenue: prev.revenue + Math.floor(Math.random() * 1000)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Sample data
  const systemMetrics = [
    { time: '00:00', cpu: 45, memory: 60, storage: 75, network: 85 },
    { time: '04:00', cpu: 38, memory: 55, storage: 72, network: 82 },
    { time: '08:00', cpu: 65, memory: 70, storage: 68, network: 88 },
    { time: '12:00', cpu: 72, memory: 75, storage: 65, network: 92 },
    { time: '16:00', cpu: 68, memory: 72, storage: 62, network: 85 },
    { time: '20:00', cpu: 55, memory: 65, storage: 70, network: 78 }
  ];

  const userActivity = [
    { user: 'Carbon Buyer Pro', action: 'Purchased 500 credits', time: '2 min ago', ip: '192.168.1.45', status: 'success' },
    { user: 'NGO Manager', action: 'Submitted MRV data', time: '5 min ago', ip: '203.0.113.12', status: 'pending' },
    { user: 'System Admin', action: 'Updated user permissions', time: '15 min ago', ip: '10.0.0.1', status: 'success' },
    { user: 'Verifier Team', action: 'Approved project #234', time: '1 hour ago', ip: '198.51.100.23', status: 'success' },
    { user: 'API Client', action: 'Bulk credit purchase', time: '2 hours ago', ip: '172.16.0.45', status: 'warning' }
  ];

  const platformStats = {
    totalUsers: 1247,
    activeSessions: 89,
    newRegistrations: 23,
    pendingVerifications: 12,
    systemUptime: '99.95%',
    apiRequests: '245K',
    dataProcessed: '15.2TB',
    errorRate: '0.02%'
  };

  const recentProjects = [
    { id: 'PRJ-001', name: 'Mangrove Restoration', owner: 'Ocean Conservancy', status: 'Active', credits: 12500, revenue: 565000, created: '2023-06-15', lastUpdate: '2 days ago' },
    { id: 'PRJ-002', name: 'Seagrass Conservation', owner: 'Marine Life Org', status: 'Pending', credits: 8900, revenue: 380920, created: '2023-08-01', lastUpdate: '1 week ago' },
    { id: 'PRJ-003', name: 'Coastal Wetland', owner: 'Eco Solutions', status: 'Active', credits: 15600, revenue: 687960, created: '2024-01-15', lastUpdate: '3 days ago' },
    { id: 'PRJ-004', name: 'Kelp Forest', owner: 'Blue Carbon Inc', status: 'Draft', credits: 6800, revenue: 299200, created: '2023-04-20', lastUpdate: '5 days ago' }
  ];

  const financialData = [
    { month: 'Jan', revenue: 45000, expenses: 35000, profit: 10000, transactions: 45 },
    { month: 'Feb', revenue: 55000, expenses: 40000, profit: 15000, transactions: 52 },
    { month: 'Mar', revenue: 65000, expenses: 45000, profit: 20000, transactions: 61 },
    { month: 'Apr', revenue: 75000, expenses: 50000, profit: 25000, transactions: 68 },
    { month: 'May', revenue: 95000, expenses: 65000, profit: 30000, transactions: 79 },
    { month: 'Jun', revenue: 127850, expenses: 85000, profit: 42850, transactions: 92 }
  ];

  const systemAlertsData = [
    { id: 1, severity: 'High', message: 'Database connection latency increased', time: '5 min ago', component: 'Database', status: 'Active' },
    { id: 2, severity: 'Medium', message: 'API rate limit approaching', time: '15 min ago', component: 'API Gateway', status: 'Monitoring' },
    { id: 3, severity: 'Low', message: 'Backup process completed', time: '2 hours ago', component: 'Storage', status: 'Resolved' },
    { id: 4, severity: 'High', message: 'Unauthorized access attempt', time: '3 hours ago', component: 'Security', status: 'Investigating' }
  ];

  const StatCard = ({ icon: Icon, title, value, change, color = 'text-sky-400', trend, subtitle, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-700/30 group-hover:from-sky-600/20 group-hover:to-sky-500/10 transition-all duration-300`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-sky-400' : 'text-red-400'}`}>
            <TrendingUp className={`h-4 w-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
            <span className="text-sm font-medium">{change}</span>
          </div>
        )}
      </div>
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
        <p className="text-white text-3xl font-bold mb-2">{value}</p>
        {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
      </div>
    </div>
  );

  const TabButton = ({ name, isActive, onClick, hasNotification }) => (
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
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">!</span>
      )}
    </button>
  );

  const StatusBadge = ({ status, size = 'normal' }) => {
    const statusStyles = {
      'Active': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      'Pending': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Draft': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      'High': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Low': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'success': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      'warning': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Monitoring': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Resolved': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Investigating': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
    };

    const sizeStyles = size === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';

    return (
      <span className={`${sizeStyles} rounded-full font-medium border ${statusStyles[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'} backdrop-blur-sm`}>
        {status}
      </span>
    );
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* System Health Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-sky-600/20 to-indigo-600/20 rounded-xl p-6 border border-sky-500/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">System Health</h3>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                systemHealth > 90 ? 'bg-sky-400' : 
                systemHealth > 70 ? 'bg-yellow-400' : 'bg-red-400'
              }`}></div>
              <span className="text-sky-400 text-sm">Live</span>
            </div>
          </div>
          <div className="text-center">
            <div className="relative inline-block">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="54" stroke="#1e293b" strokeWidth="8" fill="none" />
                <circle 
                  cx="64" 
                  cy="64" 
                  r="54" 
                  stroke={systemHealth > 90 ? '#0ea5e9' : systemHealth > 70 ? '#f59e0b' : '#ef4444'} 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="339.292" 
                  strokeDashoffset={339.292 * (1 - systemHealth / 100)}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{systemHealth}%</span>
              </div>
            </div>
            <p className="text-gray-300 mt-2">Overall System Status</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Active Sessions</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">{activeUsers}</p>
          <p className="text-gray-300">Current Users Online</p>
          <div className="mt-4 flex space-x-2">
            <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl p-6 border border-indigo-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Pending Approvals</h3>
          <p className="text-3xl font-bold text-indigo-400 mb-2">{pendingApprovals}</p>
          <p className="text-gray-300">Require Attention</p>
          <button className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>Review Now</span>
          </button>
        </div>

        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl p-6 border border-red-500/30">
          <h3 className="text-xl font-bold text-white mb-4">System Alerts</h3>
          <p className="text-3xl font-bold text-red-400 mb-2">{systemAlerts}</p>
          <p className="text-gray-300">Active Warnings</p>
          <button className="mt-4 text-red-400 hover:text-red-300 text-sm flex items-center space-x-1">
            <AlertTriangle className="h-4 w-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">System Performance</h3>
            <div className="flex items-center space-x-2">
              <Server className="h-5 w-5 text-sky-400" />
              <span className="text-sky-400 text-sm">Live Metrics</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={systemMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Area type="monotone" dataKey="cpu" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} />
              <Area type="monotone" dataKey="memory" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
              <Area type="monotone" dataKey="storage" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
              <Line type="monotone" dataKey="network" stroke="#f59e0b" strokeWidth={2} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Platform Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(platformStats).map(([key, value], index) => (
              <div key={key} className="bg-gray-900/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="text-white font-semibold text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Recent User Activity</h3>
          <div className="space-y-4">
            {userActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'success' ? 'bg-sky-400' :
                    activity.status === 'warning' ? 'bg-yellow-400' : 'bg-gray-400'
                  }`}></div>
                  <div>
                    <p className="text-white text-sm font-medium">{activity.user}</p>
                    <p className="text-gray-400 text-xs">{activity.action} • {activity.ip}</p>
                  </div>
                </div>
                <span className="text-gray-500 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">System Alerts</h3>
            <button className="text-red-400 hover:text-red-300 text-sm flex items-center space-x-1">
              <AlertTriangle className="h-4 w-4" />
              <span>View All</span>
            </button>
          </div>
          <div className="space-y-4">
            {systemAlertsData.map((alert) => (
              <div key={alert.id} className="p-3 bg-gray-900/30 rounded-lg border-l-4 border-red-500/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <StatusBadge status={alert.severity} size="small" />
                    <span className="text-white text-sm font-medium">{alert.component}</span>
                  </div>
                  <StatusBadge status={alert.status} size="small" />
                </div>
                <p className="text-gray-300 text-sm mb-2">{alert.message}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{alert.time}</span>
                  <button className="text-blue-400 hover:text-blue-300">Investigate</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">User Management</h2>
        <div className="flex space-x-4">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add User</span>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Users</span>
          </button>
        </div>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard 
          icon={Users} 
          title="Total Users" 
          value="1,247" 
          change="+23 this week" 
          trend="up"
          color="text-blue-400"
        />
        <StatCard 
          icon={UserCheck} 
          title="Active Now" 
          value={activeUsers.toString()} 
          change="Live updating" 
          color="text-sky-400"
        />
        <StatCard 
          icon={ShieldCheck} 
          title="Verified" 
          value="1,089" 
          change="87% verified" 
          color="text-green-400"
        />
        <StatCard 
          icon={UserX} 
          title="Suspended" 
          value="15" 
          change="-2 this month" 
          trend="down"
          color="text-red-400"
        />
      </div>

      {/* User Table */}
      <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">All Users</h3>
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 bg-black border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-400"
              />
            </div>
            <select className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-sky-400">
              <option>All Roles</option>
              <option>Admin</option>
              <option>NGO</option>
              <option>Buyer</option>
              <option>Verifier</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-300 font-medium">User</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Role</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Last Active</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Projects</th>
                <th className="text-center py-3 px-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sarah Chen', email: 'sarah@ngo.org', role: 'NGO Admin', status: 'Active', lastActive: '2 min ago', projects: 3 },
                { name: 'Mike Rodriguez', email: 'mike@carbonbuyer.com', role: 'Premium Buyer', status: 'Active', lastActive: '15 min ago', projects: 0 },
                { name: 'Dr. Emma Davis', email: 'emma@verification.org', role: 'Verifier', status: 'Active', lastActive: '1 hour ago', projects: 12 },
                { name: 'Alex Thompson', email: 'alex@bluecarbon.com', role: 'System Admin', status: 'Active', lastActive: '2 hours ago', projects: 0 },
                { name: 'Lisa Wang', email: 'lisa@environment.org', role: 'NGO Member', status: 'Inactive', lastActive: '3 days ago', projects: 2 }
              ].map((user, index) => (
                <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge status={user.role} size="small" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        user.status === 'Active' ? 'bg-sky-400' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-gray-300">{user.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{user.lastActive}</td>
                  <td className="py-4 px-4 text-gray-300">{user.projects}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="text-gray-400 hover:text-sky-400 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-400 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Project Management</h2>
        <div className="flex space-x-4">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard 
          icon={Leaf} 
          title="Total Projects" 
          value="12" 
          change="+2 this month" 
          trend="up"
          color="text-sky-400"
        />
        <StatCard 
          icon={CheckCircle} 
          title="Active" 
          value="8" 
          change="67% active" 
          color="text-green-400"
        />
        <StatCard 
          icon={Clock} 
          title="Pending Review" 
          value="3" 
          change="Require attention" 
          color="text-yellow-400"
        />
        <StatCard 
          icon={Archive} 
          title="Archived" 
          value="1" 
          change="No change" 
          color="text-gray-400"
        />
      </div>

      {/* Projects Table */}
      <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">All Projects</h3>
          <div className="flex space-x-4">
            <select className="px-4 py-2 bg-black border border-gray-800 rounded-lg text-white focus:outline-none focus:border-sky-400">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Draft</option>
            </select>
            <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Project ID</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Project Name</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Owner</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                <th className="text-right py-3 px-4 text-gray-300 font-medium">Credits</th>
                <th className="text-right py-3 px-4 text-gray-300 font-medium">Revenue</th>
                <th className="text-center py-3 px-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project) => (
                <tr key={project.id} className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors">
                  <td className="py-4 px-4">
                    <p className="text-sky-400 font-mono font-medium">{project.id}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-white font-medium">{project.name}</p>
                    <p className="text-gray-500 text-xs">Updated {project.lastUpdate}</p>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{project.owner}</td>
                  <td className="py-4 px-4">
                    <StatusBadge status={project.status} size="small" />
                  </td>
                  <td className="py-4 px-4 text-right text-sky-400 font-semibold">
                    {project.credits.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-white font-semibold">
                    ${project.revenue.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="text-gray-400 hover:text-sky-400 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                        <Shield className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSystem = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">System Administration</h2>
        <div className="flex space-x-4">
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <Server className="h-4 w-4" />
            <span>System Backup</span>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>System Settings</span>
          </button>
        </div>
      </div>

      {/* System Health Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Cpu className="h-8 w-8 text-blue-400" />
            <div>
              <h3 className="text-lg font-semibold text-white">CPU Usage</h3>
              <p className="text-blue-400">Current: 65%</p>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-gray-400 text-sm">Peak: 72% • Average: 58%</p>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MemoryStick className="h-8 w-8 text-indigo-400" />
            <div>
              <h3 className="text-lg font-semibold text-white">Memory</h3>
              <p className="text-indigo-400">7.2GB / 16GB</p>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <p className="text-gray-400 text-sm">45% used • 8.8GB available</p>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <HardDrive className="h-8 w-8 text-sky-400" />
            <div>
              <h3 className="text-lg font-semibold text-white">Storage</h3>
              <p className="text-sky-400">1.2TB / 2TB</p>
            </div>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
            <div className="bg-sky-400 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <p className="text-gray-400 text-sm">60% used • 800GB available</p>
        </div>
      </div>

      {/* System Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">System Controls</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gray-900/50 hover:bg-gray-800 rounded-lg transition-colors text-center">
              <DatabaseBackup className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <span className="text-white text-sm">Backup Now</span>
            </button>
            <button className="p-4 bg-gray-900/50 hover:bg-gray-800 rounded-lg transition-colors text-center">
              <RefreshCw className="h-8 w-8 text-sky-400 mx-auto mb-2" />
              <span className="text-white text-sm">Clear Cache</span>
            </button>
            <button className="p-4 bg-gray-900/50 hover:bg-gray-800 rounded-lg transition-colors text-center">
              <ShieldCheck className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <span className="text-white text-sm">Security Scan</span>
            </button>
            <button className="p-4 bg-gray-900/50 hover:bg-gray-800 rounded-lg transition-colors text-center">
              <BellRing className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <span className="text-white text-sm">Test Alerts</span>
            </button>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">API Management</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-900/30 rounded-lg">
              <div>
                <p className="text-white font-medium">REST API</p>
                <p className="text-gray-400 text-sm">api.bluecarbon.com/v1</p>
              </div>
              <StatusBadge status="Active" size="small" />
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900/30 rounded-lg">
              <div>
                <p className="text-white font-medium">WebSocket</p>
                <p className="text-gray-400 text-sm">ws.bluecarbon.com</p>
              </div>
              <StatusBadge status="Active" size="small" />
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900/30 rounded-lg">
              <div>
                <p className="text-white font-medium">Webhook Service</p>
                <p className="text-gray-400 text-sm">webhooks.bluecarbon.com</p>
              </div>
              <StatusBadge status="Maintenance" size="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Blue Carbon MRV System Administration</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* System Status */}
          <div className="flex items-center space-x-2 bg-black/50 rounded-lg p-2">
            <div className={`w-3 h-3 rounded-full animate-pulse ${
              systemHealth > 90 ? 'bg-sky-400' : 
              systemHealth > 70 ? 'bg-yellow-400' : 'bg-red-400'
            }`}></div>
            <span className="text-sm text-gray-300">System: {systemHealth}%</span>
          </div>
          
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* Admin Profile */}
          {/* User Profile with Dropdown */}
          <div className="relative group">
            {/* Profile Trigger */}
            <div className="flex items-center space-x-3 bg-black/50 rounded-lg p-2 cursor-pointer">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <Crown className="h-4 w-4" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">System Administrator</p>
                <p className="text-xs text-gray-400">Super User</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-black border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <div className="px-3 py-2 border-b border-gray-800">
                  <p className="text-sm font-medium">System Administrator</p>
                  <p className="text-xs text-gray-400">Super User</p>
                </div>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors">
                  System Settings
                </button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-900 rounded-md transition-colors">
                  Database Management
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
          icon={Database} 
          title="Total Transactions" 
          value={realTimeData.transactions.toLocaleString()} 
          change="+124 today" 
          trend="up"
          color="text-blue-400"
        />
        <StatCard 
          icon={Leaf} 
          title="Carbon Credits" 
          value={realTimeData.credits.toLocaleString()} 
          change="+1.2K this week" 
          trend="up"
          color="text-sky-400"
        />
        <StatCard 
          icon={DollarSign} 
          title="Total Revenue" 
          value={`$${realTimeData.revenue.toLocaleString()}`} 
          change="+12.5% growth" 
          trend="up"
          color="text-green-400"
        />
        <StatCard 
          icon={Server} 
          title="System Uptime" 
          value="99.95%" 
          change="45 days running" 
          color="text-indigo-400"
        />
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-800 mb-8">
        <div className="flex flex-wrap space-x-4">
          <TabButton name="Overview" isActive={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
          <TabButton name="Users" isActive={activeTab === 'Users'} onClick={() => setActiveTab('Users')} />
          <TabButton name="Projects" isActive={activeTab === 'Projects'} onClick={() => setActiveTab('Projects')} />
          <TabButton name="System" isActive={activeTab === 'System'} onClick={() => setActiveTab('System')} hasNotification />
          <TabButton name="Analytics" isActive={activeTab === 'Analytics'} onClick={() => setActiveTab('Analytics')} />
          <TabButton name="Settings" isActive={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        {activeTab === 'Overview' && renderOverview()}
        {activeTab === 'Users' && renderUsers()}
        {activeTab === 'Projects' && renderProjects()}
        {activeTab === 'System' && renderSystem()}
        {activeTab === 'Analytics' && (
          <div className="text-center py-16">
            <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h3>
            <p className="text-gray-400">Advanced analytics features coming soon</p>
          </div>
        )}
        {activeTab === 'Settings' && (
          <div className="text-center py-16">
            <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">System Settings</h3>
            <p className="text-gray-400">Configuration panel under development</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-sky-400" />
            <span className="text-gray-400">System Secured • Last updated: Just now</span>
          </div>
          <div className="flex space-x-6">
            <span className="text-gray-400 text-sm">© 2024 Blue Carbon MRV System</span>
            <span className="text-gray-400 text-sm">v2.4.1</span>
            <span className="text-gray-400 text-sm">Admin Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;