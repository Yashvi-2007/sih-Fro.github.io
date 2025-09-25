// import React, { useState } from 'react';
// import { Leaf, MapPin, TrendingUp, Users, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

// const Projects = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

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
//       statusColor: 'bg-green-500/20 text-green-500',
//       icon: <Leaf className="w-4 h-4" />,
//       gradient: 'from-emerald-500 to-teal-600',
//       image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
//       status: 'Planning',
//       statusColor: 'bg-yellow-500/20 text-yellow-500',
//       icon: <Calendar className="w-4 h-4" />,
//       gradient: 'from-blue-500 to-cyan-600',
//       image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
//       statusColor: 'bg-blue-500/20 text-blue-500',
//       icon: <Users className="w-4 h-4" />,
//       gradient: 'from-purple-500 to-pink-600',
//       image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
//       status: 'Expanding',
//       statusColor: 'bg-purple-500/20 text-purple-500',
//       icon: <TrendingUp className="w-4 h-4" />,
//       gradient: 'from-green-500 to-emerald-600',
//       image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     }
//   ];

//   return (
//     <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent"></div>
//         <div className="absolute inset-0 bg-grid-gray-800/[0.05]"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-12 md:mb-16">
//           {/* Active Projects Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 border border-green-700/30 mb-6">
//             <Leaf className="w-4 h-4 text-green-400" />
//             <span className="text-green-400 font-medium text-sm">Active Projects</span>
//           </div>

//           {/* Main Title */}
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             <span className="text-white">Featured </span>
//             <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//               Conservation Projects
//             </span>
//           </h2>
          
//           <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
//             Real projects from verified NGOs across Asia making measurable impact on ocean restoration.
//           </p>
//         </div>

//         {/* Projects Grid - Responsive layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               className="group relative"
//               onMouseEnter={() => setHoveredCard(project.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Hover Glow Effect */}
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
              
//               {/* Card */}
//               <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10 shadow-sm h-full flex flex-col">
//                 {/* Project Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
//                   {/* Status Badge */}
//                   <div className="absolute top-4 right-4">
//                     <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${project.statusColor} backdrop-blur-sm`}>
//                       {project.icon}
//                       {project.status}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Card Content */}
//                 <div className="p-5 md:p-6 flex-1 flex flex-col">
//                   {/* Project Title */}
//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>

//                   {/* Organization & Location */}
//                   <div className="space-y-2 mb-4">
//                     <div className="flex items-center gap-2 text-gray-300">
//                       <Users className="w-4 h-4" />
//                       <span className="text-sm font-medium">{project.organization}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-400">
//                       <MapPin className="w-4 h-4" />
//                       <span className="text-sm">{project.location}</span>
//                     </div>
//                   </div>

//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
//                     <div className="text-center p-3 bg-gray-700/50 rounded-lg backdrop-blur-sm">
//                       <div className="text-xs text-gray-400 mb-1">Area</div>
//                       <div className="text-sm font-semibold text-white">{project.area}</div>
//                     </div>
//                     <div className="text-center p-3 bg-gray-700/50 rounded-lg backdrop-blur-sm">
//                       <div className="text-xs text-gray-400 mb-1">CO₂/Year</div>
//                       <div className="text-sm font-semibold text-white">{project.co2Year}</div>
//                     </div>
//                   </div>

//                   {/* Progress Bar */}
//                   <div className="mb-4">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-sm text-gray-400">Progress</span>
//                       <span className="text-sm font-semibold text-white">{project.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <div 
//                         className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${project.progress}%` }}
//                       ></div>
//                     </div>
//                   </div>

//                   {/* Credits Available */}
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-sm text-gray-400">Credits Available</span>
//                     <span className="text-lg font-bold text-green-400">{project.credits}</span>
//                   </div>

//                   {/* Learn More Button - Pushed to bottom */}
//                   <div className="mt-auto">
//                     <button className="w-full group/btn relative inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-[1.02]">
//                       <span>Learn More</span>
//                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg border border-gray-700">
//             <span>View All Projects</span>
//             <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
//           </button>
          
//           <button className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 hover:scale-105">
//             <span>Start Your Project</span>
//             <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

// export default Projects;


import React, { useState } from 'react';
import { Leaf, MapPin, TrendingUp, Users, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Mangrove Restoration',
      organization: 'OMCAR Foundation',
      location: 'Velivayal, Tamil Nadu , India',
      area: '125 hectares',
      co2Year: '2,250 tons/year',
      progress: 78,
      credits: '15,000',
      status: 'Active',
      statusColor: 'bg-blue-500/20 text-blue-500',
      icon: <Leaf className="w-4 h-4" />,
      gradient: 'from-blue-500 to-indigo-600',
      image: 'https://th.bing.com/th/id/R.7d2765a26d5cc9fab368e090ae2bdffa?rik=L5TLEB%2fd0Jx3ww&riu=http%3a%2f%2fwww.wur.nl%2fupload%2f41b32f4c-70e1-48da-b9cd-db64aa2487b2_Young-mangroves-testing-the-ground---Wetlands-International.jpg&ehk=SQxe9RZ0htQ9jeb%2blFMem4qrdtsKP%2f6rZlUD15nsGfg%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      id: 2,
      title: 'Coastal Wetland Protection',
      organization: 'Vanshakti',
      location: 'Mumbai, Maharashtra , India',
      area: '89 hectares',
      co2Year: '1,875 tons/year',
      progress: 92,
      credits: '12,500',
      status: 'Planning',
      statusColor: 'bg-amber-500/20 text-amber-500',
      icon: <Calendar className="w-4 h-4" />,
      gradient: 'from-indigo-500 to-sky-600',
      image: 'https://www.vanashakti.org/storage/albums/wetlands-conservation-1700737940708.jpg'
    },
    {
      id: 3,
      title: 'Seagrass Meadow Restoration',
      organization: 'TREE Foundation',
      location: 'Chennai, Tamil Nadu , India',
      area: '67 hectares',
      co2Year: '1,335 tons/year',
      progress: 65,
      credits: '8,900',
      status: 'Monitoring',
      statusColor: 'bg-sky-500/20 text-sky-500',
      icon: <Users className="w-4 h-4" />,
      gradient: 'from-sky-500 to-blue-600',
      image: 'https://www.vibrahotels.com/blog/wp-content/uploads/2019/02/Apadrina-metre-posidonia-Formentera.jpg'
    },
    {
      id: 4,
      title: 'Mangrove Nursery Development',
      organization: 'Ammachi Labs Research Center',
      location: 'Vallikavu, Kerala , India',
      area: '156 hectares',
      co2Year: '2,805 tons/year',
      progress: 88,
      credits: '18,700',
      status: 'Expanding',
      statusColor: 'bg-indigo-500/20 text-indigo-500',
      icon: <TrendingUp className="w-4 h-4" />,
      gradient: 'from-indigo-600 to-sky-600',
      image: 'https://img.freepik.com/premium-photo/mangrove-saplings-cultivation-serene-aquatic-nursery_501731-15210.jpg'
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-gray-800/[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Active Projects Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/30 mb-6">
            <Leaf className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Active Projects</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Conservation Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Real projects from verified NGOs across Asia making measurable impact on ocean restoration.
          </p>
        </div>

        {/* Projects Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur-sm"></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 shadow-sm h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${project.statusColor} backdrop-blur-sm`}>
                      {project.icon}
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  {/* Project Title */}
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
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-700/50 rounded-lg backdrop-blur-sm">
                      <div className="text-xs text-gray-400 mb-1">Area</div>
                      <div className="text-sm font-semibold text-white">{project.area}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-700/50 rounded-lg backdrop-blur-sm">
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

                  {/* Credits Available */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400">Credits Available</span>
                    <span className="text-lg font-bold text-blue-400">{project.credits}</span>
                  </div>

                  {/* Learn More Button - Pushed to bottom */}
                  <div className="mt-auto">
                    <button className="w-full group/btn relative inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 text-white rounded-full font-semibold transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg border border-gray-700">
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 hover:scale-105">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

export default Projects;