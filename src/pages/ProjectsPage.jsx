// import React, { useState, useEffect } from 'react';
// import { Search, Filter, MapPin, Calendar, TrendingUp, Users, Leaf, ArrowRight, ExternalLink, Star, Eye, Heart, Share, Clock, DollarSign } from 'lucide-react';
// import Navbar from '../components/Navbar/Navbar';

// const ProjectsPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('all');
//   const [sortBy, setSortBy] = useState('newest');
//   const [viewMode, setViewMode] = useState('grid');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [favorites, setFavorites] = useState(new Set());
//   const [visibleProjects, setVisibleProjects] = useState(6);
//   const [isLoading, setIsLoading] = useState(false);

//   const projects = [
//     {
//       id: 1,
//       title: 'Mangrove Restoration - Vembanad Lake',
//       organization: 'Mangrove Guardians Trust',
//       location: 'Kerala, India',
//       area: '125 hectares',
//       co2Year: '2,250 tons/year',
//       progress: 78,
//       credits: '15,000',
//       status: 'Active',
//       statusColor: 'bg-green-100 text-green-800',
//       icon: <Leaf className="w-5 h-5" />,
//       gradient: 'from-emerald-500 to-teal-600',
//       image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       category: 'Mangrove',
//       rating: 4.8,
//       investors: 45,
//       startDate: '2024-01-15',
//       endDate: '2024-12-31',
//       description: 'Comprehensive mangrove restoration project focusing on coastal protection and carbon sequestration in the Vembanad Lake ecosystem.',
//       impact: 'Expected to sequester 2,250 tons of CO₂ annually while protecting coastal communities from storm surges.',
//       funding: '₹45,00,000',
//       funded: '78%',
//       daysLeft: 45,
//       minInvestment: '₹5,000'
//     },
//     {
//       id: 2,
//       title: 'Coastal Wetland Protection',
//       organization: 'Ocean Conservation Bangladesh',
//       location: 'Cox\'s Bazar, Bangladesh',
//       area: '89 hectares',
//       co2Year: '1,875 tons/year',
//       progress: 92,
//       credits: '12,500',
//       status: 'Expanding',
//       statusColor: 'bg-blue-100 text-blue-800',
//       icon: <TrendingUp className="w-5 h-5" />,
//       gradient: 'from-blue-500 to-cyan-600',
//       image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       category: 'Wetland',
//       rating: 4.6,
//       investors: 32,
//       startDate: '2023-11-20',
//       endDate: '2024-11-20',
//       description: 'Protecting and restoring coastal wetlands to enhance biodiversity and carbon storage capacity.',
//       impact: 'Protecting critical habitat for migratory birds while sequestering significant amounts of carbon.',
//       funding: '₹32,00,000',
//       funded: '92%',
//       daysLeft: 12,
//       minInvestment: '₹10,000'
//     },
//     {
//       id: 3,
//       title: 'Seagrass Meadow Restoration',
//       organization: 'Tamil Nadu Marine Foundation',
//       location: 'Pichavaram, India',
//       area: '67 hectares',
//       co2Year: '1,335 tons/year',
//       progress: 65,
//       credits: '8,900',
//       status: 'Monitoring',
//       statusColor: 'bg-purple-100 text-purple-800',
//       icon: <Users className="w-5 h-5" />,
//       gradient: 'from-purple-500 to-pink-600',
//       image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       category: 'Seagrass',
//       rating: 4.7,
//       investors: 28,
//       startDate: '2024-02-01',
//       endDate: '2025-01-31',
//       description: 'Restoring seagrass meadows to improve marine ecosystem health and carbon sequestration.',
//       impact: 'Enhancing marine biodiversity while providing natural carbon storage solutions.',
//       funding: '₹28,50,000',
//       funded: '65%',
//       daysLeft: 87,
//       minInvestment: '₹7,500'
//     },
//     {
//       id: 4,
//       title: 'Mangrove Nursery Development',
//       organization: 'Sri Lanka Coastal Trust',
//       location: 'Negombo Lagoon, Sri Lanka',
//       area: '156 hectares',
//       co2Year: '2,805 tons/year',
//       progress: 88,
//       credits: '18,700',
//       status: 'Active',
//       statusColor: 'bg-green-100 text-green-800',
//       icon: <Leaf className="w-5 h-5" />,
//       gradient: 'from-green-500 to-emerald-600',
//       image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       category: 'Mangrove',
//       rating: 4.9,
//       investors: 67,
//       startDate: '2023-09-10',
//       endDate: '2024-09-10',
//       description: 'Developing mangrove nurseries to support large-scale restoration efforts across Sri Lankan coastlines.',
//       impact: 'Creating sustainable mangrove ecosystems that provide both environmental and economic benefits.',
//       funding: '₹67,00,000',
//       funded: '88%',
//       daysLeft: 23,
//       minInvestment: '₹15,000'
//     },
//     {
//       id: 5,
//       title: 'Coral-Seagrass Ecosystem Restoration',
//       organization: 'Maldives Blue Initiative',
//       location: 'North Malé Atoll, Maldives',
//       area: '203 hectares',
//       co2Year: '3,675 tons/year',
//       progress: 56,
//       credits: '24,500',
//       status: 'Active',
//       statusColor: 'bg-green-100 text-green-800',
//       icon: <TrendingUp className="w-5 h-5" />,
//       gradient: 'from-teal-500 to-cyan-600',
//       image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       category: 'Coral',
//       rating: 4.5,
//       investors: 41,
//       startDate: '2024-03-15',
//       endDate: '2025-03-15',
//       description: 'Comprehensive restoration of coral-seagrass ecosystems to enhance marine carbon storage.',
//       impact: 'Protecting coral reefs while maximizing carbon sequestration through integrated ecosystem management.',
//       funding: '₹82,00,000',
//       funded: '56%',
//       daysLeft: 120,
//       minInvestment: '₹12,000'
//     },
//     {
//       id: 6,
//       title: 'Salt Marsh Rehabilitation',
//       organization: 'Goa Estuarine Conservancy',
//       location: 'Mandovi Estuary, India',
//       area: '78 hectares',
//       co2Year: '1,470 tons/year',
//       progress: 34,
//       credits: '9,800',
//       status: 'Planning',
//       statusColor: 'bg-orange-100 text-orange-800',
//       icon: <Calendar className="w-5 h-5" />,
//       gradient: 'from-orange-500 to-red-600',
//       image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       category: 'Salt Marsh',
//       rating: 4.3,
//       investors: 19,
//       startDate: '2024-06-01',
//       endDate: '2025-05-31',
//       description: 'Rehabilitating salt marsh ecosystems to restore natural carbon sequestration processes.',
//       impact: 'Restoring critical estuarine ecosystems that provide both carbon storage and flood protection.',
//       funding: '₹25,00,000',
//       funded: '34%',
//       daysLeft: 150,
//       minInvestment: '₹8,000'
//     }
//   ];

//   const categories = ['all', 'Mangrove', 'Wetland', 'Seagrass', 'Coral', 'Salt Marsh'];
//   const sortOptions = [
//     { value: 'newest', label: 'Newest First' },
//     { value: 'oldest', label: 'Oldest First' },
//     { value: 'progress', label: 'Progress' },
//     { value: 'rating', label: 'Rating' },
//     { value: 'funding', label: 'Funding' },
//     { value: 'ending', label: 'Ending Soon' }
//   ];

//   const filteredProjects = projects.filter(project => {
//     const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          project.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          project.location.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
//     return matchesSearch && matchesFilter;
//   });

//   const sortedProjects = [...filteredProjects].sort((a, b) => {
//     switch (sortBy) {
//       case 'newest':
//         return new Date(b.startDate) - new Date(a.startDate);
//       case 'oldest':
//         return new Date(a.startDate) - new Date(b.startDate);
//       case 'progress':
//         return b.progress - a.progress;
//       case 'rating':
//         return b.rating - a.rating;
//       case 'funding':
//         return parseFloat(b.funded) - parseFloat(a.funded);
//       case 'ending':
//         return a.daysLeft - b.daysLeft;
//       default:
//         return 0;
//     }
//   });

//   const displayedProjects = sortedProjects.slice(0, visibleProjects);

//   const handleProjectClick = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   const handleInvestClick = (projectId) => {
//     // Redirect to signup page for investment
//     window.location.href = '/signup';
//   };

//   const toggleFavorite = (projectId, e) => {
//     e.stopPropagation();
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(projectId)) {
//       newFavorites.delete(projectId);
//     } else {
//       newFavorites.add(projectId);
//     }
//     setFavorites(newFavorites);
//   };

//   const shareProject = (project, e) => {
//     e.stopPropagation();
//     if (navigator.share) {
//       navigator.share({
//         title: project.title,
//         text: project.description,
//         url: `${window.location.origin}/projects/${project.id}`,
//       })
//       .catch((error) => console.log('Error sharing', error));
//     } else {
//       // Fallback for browsers that don't support Web Share API
//       navigator.clipboard.writeText(`${window.location.origin}/projects/${project.id}`);
//       alert('Project link copied to clipboard!');
//     }
//   };

//   const loadMoreProjects = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setVisibleProjects(prev => prev + 3);
//       setIsLoading(false);
//     }, 800);
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
//       <Navbar />
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-slate-200">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold text-slate-800">Conservation Projects</h1>
//               <p className="text-slate-600 mt-1">Discover and support ocean restoration initiatives</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-slate-500 hover:text-slate-700'}`}
//               >
//                 <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
//                   <div className="bg-current rounded-sm"></div>
//                   <div className="bg-current rounded-sm"></div>
//                   <div className="bg-current rounded-sm"></div>
//                   <div className="bg-current rounded-sm"></div>
//                 </div>
//               </button>
//               <button 
//                 onClick={() => setViewMode('list')}
//                 className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-slate-500 hover:text-slate-700'}`}
//               >
//                 <div className="w-4 h-4 flex flex-col gap-0.5">
//                   <div className="bg-current h-1 rounded-sm"></div>
//                   <div className="bg-current h-1 rounded-sm"></div>
//                   <div className="bg-current h-1 rounded-sm"></div>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters and Search */}
//       <div className="container mx-auto px-6 py-8">
//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search projects, organizations, or locations..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
//                 />
//               </div>
//             </div>

//             {/* Category Filter */}
//             <div className="flex gap-2 flex-wrap">
//               {categories.map(category => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedFilter(category)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
//                     selectedFilter === category
//                       ? 'bg-green-100 text-green-700 border border-green-200'
//                       : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
//                   }`}
//                 >
//                   {category === 'all' ? 'All Projects' : category}
//                 </button>
//               ))}
//             </div>

//             {/* Sort */}
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
//             >
//               {sortOptions.map(option => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Projects Grid/List */}
//         <div className={`grid gap-6 ${
//           viewMode === 'grid' 
//             ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
//             : 'grid-cols-1'
//         }`}>
//           {displayedProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-green-400"
//             >
//               <div className="relative">
//                 {/* Project Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
//                   {/* Status Badge */}
//                   <div className="absolute top-4 right-4">
//                     <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
//                       {project.icon}
//                       {project.status}
//                     </span>
//                   </div>

//                   {/* Rating */}
//                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-500 fill-current" />
//                     <span className="text-xs font-semibold text-slate-800">{project.rating}</span>
//                   </div>

//                   {/* Favorite Button */}
//                   <button 
//                     onClick={(e) => toggleFavorite(project.id, e)}
//                     className="absolute top-14 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 transition-colors duration-300 hover:text-red-500"
//                   >
//                     <Heart 
//                       className={`w-4 h-4 ${favorites.has(project.id) ? 'text-red-500 fill-current' : 'text-slate-600'}`} 
//                     />
//                   </button>

//                   {/* Share Button */}
//                   <button 
//                     onClick={(e) => shareProject(project, e)}
//                     className="absolute top-24 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 transition-colors duration-300 hover:text-green-600"
//                   >
//                     <Share className="w-4 h-4 text-slate-600" />
//                   </button>

//                   {/* Days Left */}
//                   <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
//                     <Clock className="w-3 h-3 text-slate-600" />
//                     <span className="text-xs font-semibold text-slate-800">{project.daysLeft} days left</span>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
//                     {project.title}
//                   </h3>

//                   {/* Organization & Location */}
//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center gap-2 text-slate-600">
//                       <Users className="w-4 h-4" />
//                       <span className="text-sm font-medium">{project.organization}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-slate-500">
//                       <MapPin className="w-4 h-4" />
//                       <span className="text-sm">{project.location}</span>
//                     </div>
//                   </div>

//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="text-center p-3 bg-slate-50 rounded-lg transition-colors duration-300 hover:bg-slate-100">
//                       <div className="text-xs text-slate-500 mb-1">Area</div>
//                       <div className="text-sm font-semibold text-slate-800">{project.area}</div>
//                     </div>
//                     <div className="text-center p-3 bg-slate-50 rounded-lg transition-colors duration-300 hover:bg-slate-100">
//                       <div className="text-xs text-slate-500 mb-1">CO₂/Year</div>
//                       <div className="text-sm font-semibold text-slate-800">{project.co2Year}</div>
//                     </div>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="mb-4">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-sm text-slate-600">Progress</span>
//                       <span className="text-sm font-semibold text-slate-800">{project.progress}%</span>
//                     </div>
//                     <div className="w-full bg-slate-200 rounded-full h-2">
//                       <div 
//                         className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${project.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>

//                   {/* Funding Info */}
//                   <div className="flex justify-between items-center mb-4">
//                     <div>
//                       <div className="text-sm text-slate-500">Funding Progress</div>
//                       <div className="text-lg font-bold text-green-600">{project.funded}</div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-sm text-slate-500">Total Funding</div>
//                       <div className="text-lg font-bold text-slate-800">{project.funding}</div>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={() => handleProjectClick(project)}
//                       className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium transition-all duration-300 hover:bg-slate-200"
//                     >
//                       <Eye className="w-4 h-4" />
//                       View Details
//                     </button>
//                     <button 
//                       onClick={() => handleInvestClick(project.id)}
//                       className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium transition-all duration-300 hover:from-green-700 hover:to-emerald-700"
//                     >
//                       Invest
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleProjects < sortedProjects.length && (
//           <div className="text-center mt-12">
//             <button 
//               onClick={loadMoreProjects}
//               disabled={isLoading}
//               className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold transition-all duration-300 hover:bg-slate-50 hover:border-green-400 hover:text-green-600 disabled:opacity-50"
//             >
//               {isLoading ? 'Loading...' : 'Load More Projects'}
//               {!isLoading && <ArrowRight className="w-5 h-5" />}
//             </button>
//           </div>
//         )}

//         {/* Start Your Own Project Button */}
//         <div className="text-center mt-12">
//           <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold transition-all duration-300 hover:from-green-700 hover:to-emerald-700">
//             <span>WANT TO START YOUR OWN PROJECT?</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Project Detail Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-start justify-between mb-6">
//                 <h2 className="text-3xl font-bold text-slate-800">{selectedProject.title}</h2>
//                 <button 
//                   onClick={handleCloseModal}
//                   className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 <div>
//                   <img 
//                     src={selectedProject.image} 
//                     alt={selectedProject.title}
//                     className="w-full h-64 object-cover rounded-xl mb-6"
//                   />
                  
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="text-lg font-semibold text-slate-800 mb-2">Description</h3>
//                       <p className="text-slate-600">{selectedProject.description}</p>
//                     </div>
                    
//                     <div>
//                       <h3 className="text-lg font-semibold text-slate-800 mb-2">Expected Impact</h3>
//                       <p className="text-slate-600">{selectedProject.impact}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="bg-slate-50 rounded-xl p-6">
//                     <h3 className="text-lg font-semibold text-slate-800 mb-4">Project Details</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Organization:</span>
//                         <span className="font-semibold">{selectedProject.organization}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Location:</span>
//                         <span className="font-semibold">{selectedProject.location}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Area:</span>
//                         <span className="font-semibold">{selectedProject.area}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">CO₂/Year:</span>
//                         <span className="font-semibold">{selectedProject.co2Year}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Rating:</span>
//                         <div className="flex items-center gap-1">
//                           <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                           <span className="font-semibold">{selectedProject.rating}</span>
//                         </div>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Start Date:</span>
//                         <span className="font-semibold">{formatDate(selectedProject.startDate)}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">End Date:</span>
//                         <span className="font-semibold">{formatDate(selectedProject.endDate)}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-green-50 rounded-xl p-6">
//                     <h3 className="text-lg font-semibold text-slate-800 mb-4">Investment Details</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Total Funding:</span>
//                         <span className="font-semibold text-green-600">{selectedProject.funding}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Funded:</span>
//                         <span className="font-semibold text-green-600">{selectedProject.funded}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Investors:</span>
//                         <span className="font-semibold">{selectedProject.investors}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Minimum Investment:</span>
//                         <span className="font-semibold">{selectedProject.minInvestment}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-slate-600">Days Left:</span>
//                         <span className="font-semibold">{selectedProject.daysLeft} days</span>
//                       </div>
//                     </div>
//                   </div>

//                   <button 
//                     onClick={() => handleInvestClick(selectedProject.id)}
//                     className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-green-700 hover:to-emerald-700"
//                   >
//                     <span>Invest in this Project</span>
//                     <ArrowRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectsPage;



import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, TrendingUp, Users, Leaf, ArrowRight, ExternalLink, Star, Eye, Heart, Share, Clock, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Mangrove Restoration - Vembanad Lake',
      organization: 'Mangrove Guardians Trust',
      location: 'Kerala, India',
      area: '125 hectares',
      co2Year: '2,250 tons/year',
      progress: 78,
      credits: '15,000',
      status: 'Active',
      statusColor: 'bg-blue-100 text-blue-800',
      icon: <Leaf className="w-5 h-5" />,
      gradient: 'from-blue-500 to-indigo-600',
      image: 'https://tse1.mm.bing.net/th/id/OIP.XQ_ZEQKSHl1Z4R4upNTZNgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
      category: 'Mangrove',
      rating: 4.8,
      investors: 45,
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      description: 'Comprehensive mangrove restoration project focusing on coastal protection and carbon sequestration in the Vembanad Lake ecosystem.',
      impact: 'Expected to sequester 2,250 tons of CO₂ annually while protecting coastal communities from storm surges.',
      funding: '₹45,00,000',
      funded: '78%',
      daysLeft: 45,
      minInvestment: '₹5,000'
    },
    {
      id: 2,
      title: 'Coastal Wetland Protection',
      organization: 'Ocean Conservation Bangladesh',
      location: 'Cox\'s Bazar, Bangladesh',
      area: '89 hectares',
      co2Year: '1,875 tons/year',
      progress: 92,
      credits: '12,500',
      status: 'Expanding',
      statusColor: 'bg-indigo-100 text-indigo-800',
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: 'from-indigo-500 to-sky-600',
      image: 'https://th.bing.com/th/id/OIP.B-miEPne2Wat64siunBgKQHaE9?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      category: 'Wetland',
      rating: 4.6,
      investors: 32,
      startDate: '2023-11-20',
      endDate: '2024-11-20',
      description: 'Protecting and restoring coastal wetlands to enhance biodiversity and carbon storage capacity.',
      impact: 'Protecting critical habitat for migratory birds while sequestering significant amounts of carbon.',
      funding: '₹32,00,000',
      funded: '92%',
      daysLeft: 12,
      minInvestment: '₹10,000'
    },
    {
      id: 3,
      title: 'Seagrass Meadow Restoration',
      organization: 'Tamil Nadu Marine Foundation',
      location: 'Pichavaram, India',
      area: '67 hectares',
      co2Year: '1,335 tons/year',
      progress: 65,
      credits: '8,900',
      status: 'Monitoring',
      statusColor: 'bg-purple-100 text-purple-800',
      icon: <Users className="w-5 h-5" />,
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://tse1.mm.bing.net/th/id/OIP.pU1y9pKnjYDZxlWTShBRlgHaEc?w=500&h=300&rs=1&pid=ImgDetMain&o=7&rm=3',
      category: 'Seagrass',
      rating: 4.7,
      investors: 28,
      startDate: '2024-02-01',
      endDate: '2025-01-31',
      description: 'Restoring seagrass meadows to improve marine ecosystem health and carbon sequestration.',
      impact: 'Enhancing marine biodiversity while providing natural carbon storage solutions.',
      funding: '₹28,50,000',
      funded: '65%',
      daysLeft: 87,
      minInvestment: '₹7,500'
    },
    {
      id: 4,
      title: 'Mangrove Nursery Development',
      organization: 'Sri Lanka Coastal Trust',
      location: 'Negombo Lagoon, Sri Lanka',
      area: '156 hectares',
      co2Year: '2,805 tons/year',
      progress: 88,
      credits: '18,700',
      status: 'Active',
      statusColor: 'bg-blue-100 text-blue-800',
      icon: <Leaf className="w-5 h-5" />,
      gradient: 'from-blue-500 to-indigo-600',
      image: 'https://cdn.antaranews.com/cache/800x533/2021/02/02/IMG-20210201-WA0012.jpg',
      category: 'Mangrove',
      rating: 4.9,
      investors: 67,
      startDate: '2023-09-10',
      endDate: '2024-09-10',
      description: 'Developing mangrove nurseries to support large-scale restoration efforts across Sri Lankan coastlines.',
      impact: 'Creating sustainable mangrove ecosystems that provide both environmental and economic benefits.',
      funding: '₹67,00,000',
      funded: '88%',
      daysLeft: 23,
      minInvestment: '₹15,000'
    },
    {
      id: 5,
      title: 'Coral-Seagrass Ecosystem Restoration',
      organization: 'Maldives Blue Initiative',
      location: 'North Malé Atoll, Maldives',
      area: '203 hectares',
      co2Year: '3,675 tons/year',
      progress: 56,
      credits: '24,500',
      status: 'Active',
      statusColor: 'bg-blue-100 text-blue-800',
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: 'from-sky-500 to-cyan-600',
      image: 'https://images.prismic.io/ocean-agency-cms/eff7160a-e2ec-4eae-8e4e-0ab237e7d480_2000+seagrass+category.jpg?auto=compress,format',
      category: 'Coral',
      rating: 4.5,
      investors: 41,
      startDate: '2024-03-15',
      endDate: '2025-03-15',
      description: 'Comprehensive restoration of coral-seagrass ecosystems to enhance marine carbon storage.',
      impact: 'Protecting coral reefs while maximizing carbon sequestration through integrated ecosystem management.',
      funding: '₹82,00,000',
      funded: '56%',
      daysLeft: 120,
      minInvestment: '₹12,000'
    },
    {
      id: 6,
      title: 'Salt Marsh Rehabilitation',
      organization: 'Goa Estuarine Conservancy',
      location: 'Mandovi Estuary, India',
      area: '78 hectares',
      co2Year: '1,470 tons/year',
      progress: 34,
      credits: '9,800',
      status: 'Planning',
      statusColor: 'bg-amber-100 text-amber-800',
      icon: <Calendar className="w-5 h-5" />,
      gradient: 'from-orange-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Salt Marsh',
      rating: 4.3,
      investors: 19,
      startDate: '2024-06-01',
      endDate: '2025-05-31',
      description: 'Rehabilitating salt marsh ecosystems to restore natural carbon sequestration processes.',
      impact: 'Restoring critical estuarine ecosystems that provide both carbon storage and flood protection.',
      funding: '₹25,00,000',
      funded: '34%',
      daysLeft: 150,
      minInvestment: '₹8,000'
    }
  ];

  const categories = ['all', 'Mangrove', 'Wetland', 'Seagrass', 'Coral', 'Salt Marsh'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'progress', label: 'Progress' },
    { value: 'rating', label: 'Rating' },
    { value: 'funding', label: 'Funding' },
    { value: 'ending', label: 'Ending Soon' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.startDate) - new Date(a.startDate);
      case 'oldest':
        return new Date(a.startDate) - new Date(b.startDate);
      case 'progress':
        return b.progress - a.progress;
      case 'rating':
        return b.rating - a.rating;
      case 'funding':
        return parseFloat(b.funded) - parseFloat(a.funded);
      case 'ending':
        return a.daysLeft - b.daysLeft;
      default:
        return 0;
    }
  });

  const displayedProjects = sortedProjects.slice(0, visibleProjects);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleInvestClick = (projectId) => {
    // Redirect to signup page for investment
    window.location.href = '/signup';
  };

  const toggleFavorite = (projectId, e) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(projectId)) {
      newFavorites.delete(projectId);
    } else {
      newFavorites.add(projectId);
    }
    setFavorites(newFavorites);
  };

  const shareProject = (project, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: `${window.location.origin}/projects/${project.id}`,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${window.location.origin}/projects/${project.id}`);
      alert('Project link copied to clipboard!');
    }
  };

  const loadMoreProjects = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => prev + 3);
      setIsLoading(false);
    }, 800);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Header */}
      <div className="bg-gray-900 shadow-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Conservation Projects</h1>
              <p className="text-gray-300 mt-1">Discover and support ocean restoration initiatives</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-900/50 text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-900/50 text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <div className="w-4 h-4 flex flex-col gap-0.5">
                  <div className="bg-current h-1 rounded-sm"></div>
                  <div className="bg-current h-1 rounded-sm"></div>
                  <div className="bg-current h-1 rounded-sm"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-6 py-8">
        <div className="bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-800 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, organizations, or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    selectedFilter === category
                      ? 'bg-blue-900/50 text-blue-400 border border-blue-700'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-white"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-blue-500"
            >
              <div className="relative">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                      {project.icon}
                      {project.status}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-white">{project.rating}</span>
                  </div>

                  {/* Favorite Button */}
                  <button 
                    onClick={(e) => toggleFavorite(project.id, e)}
                    className="absolute top-14 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 transition-colors duration-300 hover:text-red-500"
                  >
                    <Heart 
                      className={`w-4 h-4 ${favorites.has(project.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
                    />
                  </button>

                  {/* Share Button */}
                  <button 
                    onClick={(e) => shareProject(project, e)}
                    className="absolute top-24 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 transition-colors duration-300 hover:text-blue-400"
                  >
                    <Share className="w-4 h-4 text-gray-400" />
                  </button>

                  {/* Days Left */}
                  <div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs font-semibold text-white">{project.daysLeft} days left</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Organization & Location */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-800 rounded-lg transition-colors duration-300 hover:bg-gray-700">
                      <div className="text-xs text-gray-400 mb-1">Area</div>
                      <div className="text-sm font-semibold text-white">{project.area}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded-lg transition-colors duration-300 hover:bg-gray-700">
                      <div className="text-xs text-gray-400 mb-1">CO₂/Year</div>
                      <div className="text-sm font-semibold text-white">{project.co2Year}</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm font-semibold text-white">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Funding Info */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-400">Funding Progress</div>
                      <div className="text-lg font-bold text-blue-400">{project.funded}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Total Funding</div>
                      <div className="text-lg font-bold text-white">{project.funding}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleProjectClick(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-gray-300 rounded-xl font-medium transition-all duration-300 hover:bg-gray-700"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button 
                      onClick={() => handleInvestClick(project.id)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Invest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < sortedProjects.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreProjects}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 border border-gray-800 text-gray-300 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 hover:border-blue-500 hover:text-blue-400 disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Load More Projects'}
              {!isLoading && <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        )}

        {/* Start Your Own Project Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
            <span>WANT TO START YOUR OWN PROJECT?</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <button 
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                      <p className="text-gray-300">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expected Impact</h3>
                      <p className="text-gray-300">{selectedProject.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Organization:</span>
                        <span className="font-semibold text-white">{selectedProject.organization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location:</span>
                        <span className="font-semibold text-white">{selectedProject.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Area:</span>
                        <span className="font-semibold text-white">{selectedProject.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">CO₂/Year:</span>
                        <span className="font-semibold text-white">{selectedProject.co2Year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-white">{selectedProject.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Start Date:</span>
                        <span className="font-semibold text-white">{formatDate(selectedProject.startDate)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">End Date:</span>
                        <span className="font-semibold text-white">{formatDate(selectedProject.endDate)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Investment Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Funding:</span>
                        <span className="font-semibold text-blue-400">{selectedProject.funding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Funded:</span>
                        <span className="font-semibold text-blue-400">{selectedProject.funded}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investors:</span>
                        <span className="font-semibold text-white">{selectedProject.investors}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Minimum Investment:</span>
                        <span className="font-semibold text-white">{selectedProject.minInvestment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Days Left:</span>
                        <span className="font-semibold text-white">{selectedProject.daysLeft} days</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleInvestClick(selectedProject.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
                  >
                    <span>Invest in this Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;