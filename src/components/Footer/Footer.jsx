// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   const footerLinks = [
//     {
//       title: 'Company',
//       links: [
//         { label: 'About Us', url: '#' },
//         { label: 'Our Team', url: '#' },
//         { label: 'Careers', url: '#' },
//         { label: 'Press', url: '#' },
//         { label: 'Blog', url: '#' },
//       ],
//     },
//     {
//       title: 'Resources',
//       links: [
//         { label: 'Help Center', url: '#' },
//         { label: 'Documentation', url: '#' },
//         { label: 'API Status', url: '#' },
//         { label: 'Guides', url: '#' },
//         { label: 'Webinars', url: '#' },
//       ],
//     },
//     {
//       title: 'Legal',
//       links: [
//         { label: 'Privacy Policy', url: '#' },
//         { label: 'Terms of Service', url: '#' },
//         { label: 'Cookie Policy', url: '#' },
//         { label: 'GDPR', url: '#' },
//         { label: 'Compliance', url: '#' },
//       ],
//     },
//   ];

//   const socialLinks = [
//     { name: 'Twitter', icon: '𝕏', url: '#' },
//     { name: 'LinkedIn', icon: '💼', url: '#' },
//     { name: 'Facebook', icon: '👍', url: '#' },
//     { name: 'Instagram', icon: '📷', url: '#' },
//     { name: 'GitHub', icon: '💻', url: '#' },
//   ];

//   return (
//     <footer className="bg-black text-white">
//       {/* Top Section */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//             {/* Brand Section */}
//             <div className="lg:col-span-2">
//               <div className="text-3xl font-bold mb-4">
//                 Carbon<span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Verse</span>
//               </div>
//               <p className="text-gray-400 mb-6 max-w-md">
//                 Empowering a sustainable future through innovative carbon credit solutions and environmental stewardship.
//               </p>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.name}
//                     href={social.url}
//                     aria-label={social.name}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <span className="text-sm">{social.icon}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
            
//             {/* Links Sections */}
//             {footerLinks.map((section) => (
//               <div key={section.title} className="mb-6">
//                 <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-cyan-400">
//                   {section.title}
//                 </h3>
//                 <ul className="space-y-2">
//                   {section.links.map((link) => (
//                     <li key={link.label}>
//                       <a 
//                         href={link.url} 
//                         className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm hover:pl-1"
//                       >
//                         {link.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
            
//             {/* Newsletter Section */}
//             <div className="lg:col-span-2">
//               <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-green-400 after:to-cyan-400">
//                 Subscribe to our newsletter
//               </h3>
//               <p className="text-gray-400 mb-4 text-sm">
//                 Get the latest updates on carbon credits, sustainability news, and special offers.
//               </p>
//               <form className="flex flex-col sm:flex-row gap-3">
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   required
//                   className="flex-grow px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500"
//                 />
//                 <button
//                   type="submit"
//                   className="px-5 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-semibold rounded-md flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
//                 >
//                   <span>Subscribe</span>
//                   <span className="text-lg">→</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Bottom Section */}
//       <div className="border-t border-gray-800 py-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-500 text-sm">
//               &copy; {currentYear} CarbonVerse. All rights reserved.
//             </p>
//             <div className="flex items-center space-x-4 text-sm">
//               <a href="#" className="text-gray-500 hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
//               <span className="text-gray-700">•</span>
//               <a href="#" className="text-gray-500 hover:text-green-400 transition-colors duration-300">Terms of Service</a>
//               <span className="text-gray-700">•</span>
//               <a href="#" className="text-gray-500 hover:text-green-400 transition-colors duration-300">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };



// export default Footer;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', url: '#' },
        { label: 'Our Team', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Press', url: '#' },
        { label: 'Blog', url: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', url: '#' },
        { label: 'Documentation', url: '#' },
        { label: 'API Status', url: '#' },
        { label: 'Guides', url: '#' },
        { label: 'Webinars', url: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms of Service', url: '#' },
        { label: 'Cookie Policy', url: '#' },
        { label: 'GDPR', url: '#' },
        { label: 'Compliance', url: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Facebook', icon: '👍', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'GitHub', icon: '💻', url: '#' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold mb-4">
                Carbon<span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Verse</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering a sustainable future through innovative carbon credit solutions and environmental stewardship.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Links Sections */}
            {footerLinks.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-indigo-400">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.url} 
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm hover:pl-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-indigo-400">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Get the latest updates on carbon credits, sustainability news, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Subscribe</span>
                  <span className="text-lg">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} CarbonVerse. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;