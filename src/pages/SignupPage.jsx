// import React, { useState } from 'react';
// import { Eye, EyeOff, Mail, Lock, User, Phone, Building, MapPin, ArrowRight, Shield, Leaf, AlertCircle, CheckCircle, Calendar } from 'lucide-react';

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     organization: '',
//     role: '',
//     country: '',
//     city: '',
//     termsAccepted: false,
//     newsletter: false
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [currentStep, setCurrentStep] = useState(1);
//   const totalSteps = 3;

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateStep = (step) => {
//     const newErrors = {};

//     if (step === 1) {
//       if (!formData.firstName.trim()) {
//         newErrors.firstName = 'First name is required';
//       }
//       if (!formData.lastName.trim()) {
//         newErrors.lastName = 'Last name is required';
//       }
//       if (!formData.email.trim()) {
//         newErrors.email = 'Email is required';
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = 'Please enter a valid email address';
//       }
//       if (!formData.phone.trim()) {
//         newErrors.phone = 'Phone number is required';
//       } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//         newErrors.phone = 'Please enter a valid 10-digit phone number';
//       }
//     }

//     if (step === 2) {
//       if (!formData.password) {
//         newErrors.password = 'Password is required';
//       } else if (formData.password.length < 8) {
//         newErrors.password = 'Password must be at least 8 characters';
//       } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
//         newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
//       }
//       if (!formData.confirmPassword) {
//         newErrors.confirmPassword = 'Please confirm your password';
//       } else if (formData.password !== formData.confirmPassword) {
//         newErrors.confirmPassword = 'Passwords do not match';
//       }
//     }

//     if (step === 3) {
//       if (!formData.organization.trim()) {
//         newErrors.organization = 'Organization is required';
//       }
//       if (!formData.role.trim()) {
//         newErrors.role = 'Role is required';
//       }
//       if (!formData.country.trim()) {
//         newErrors.country = 'Country is required';
//       }
//       if (!formData.city.trim()) {
//         newErrors.city = 'City is required';
//       }
//       if (!formData.termsAccepted) {
//         newErrors.termsAccepted = 'You must accept the terms and conditions';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(prev => Math.min(prev + 1, totalSteps));
//     }
//   };

//   const handlePrevious = () => {
//     setCurrentStep(prev => Math.max(prev - 1, 1));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateStep(3)) {
//       return;
//     }

//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       alert('Account created successfully! This would redirect to dashboard.');
//     }, 2000);
//   };


//   const getPasswordStrength = (password) => {
//     let strength = 0;
//     if (password.length >= 8) strength++;
//     if (/[a-z]/.test(password)) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/\d/.test(password)) strength++;
//     if (/[^A-Za-z0-9]/.test(password)) strength++;
//     return strength;
//   };

//   const passwordStrength = getPasswordStrength(formData.password);
//   const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
//   const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-3 mb-6">
//             <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
//               <Leaf className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-bold text-slate-800">Carbonverse</span>
//           </div>
//           <h1 className="text-3xl font-bold text-slate-800 mb-2">Create your account</h1>
//           <p className="text-slate-600">Join the ocean conservation movement</p>
//         </div>

//         {/* Progress Bar */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-sm font-medium text-slate-600">Step {currentStep} of {totalSteps}</span>
//             <span className="text-sm font-medium text-slate-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
//           </div>
//           <div className="w-full bg-slate-200 rounded-full h-2">
//             <div 
//               className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
//               style={{ width: `${(currentStep / totalSteps) * 100}%` }}
//             ></div>
//           </div>
//         </div>

//         {/* Signup Form */}
//         <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Step 1: Personal Information */}
//             {currentStep === 1 && (
//               <div className="space-y-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-slate-800 mb-4">Personal Information</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">
//                         First Name *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <User className="h-5 w-5 text-slate-400" />
//                         </div>
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           placeholder="Enter your first name"
//                           className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                             errors.firstName ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                           }`}
//                         />
//                       </div>
//                       {errors.firstName && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                           <AlertCircle className="w-4 h-4" />
//                           {errors.firstName}
//                         </div>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">
//                         Last Name *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <User className="h-5 w-5 text-slate-400" />
//                         </div>
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           placeholder="Enter your last name"
//                           className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                             errors.lastName ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                           }`}
//                         />
//                       </div>
//                       {errors.lastName && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                           <AlertCircle className="w-4 h-4" />
//                           {errors.lastName}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">
//                         Email Address *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Mail className="h-5 w-5 text-slate-400" />
//                         </div>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Enter your email"
//                           className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                             errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                           }`}
//                         />
//                       </div>
//                       {errors.email && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                           <AlertCircle className="w-4 h-4" />
//                           {errors.email}
//                         </div>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">
//                         Phone Number *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Phone className="h-5 w-5 text-slate-400" />
//                         </div>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="Enter your phone number"
//                           className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                             errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                           }`}
//                         />
//                       </div>
//                       {errors.phone && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                           <AlertCircle className="w-4 h-4" />
//                           {errors.phone}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Step 2: Security */}
//             {currentStep === 2 && (
//               <div className="space-y-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-slate-800 mb-4">Security</h2>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">
//                         Password *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Lock className="h-5 w-5 text-slate-400" />
//                         </div>
//                         <input
//                           type={showPassword ? 'text' : 'password'}
//                           name="password"
//                           value={formData.password}
//                           onChange={handleInputChange}
//                           placeholder="Create a strong password"
//                           className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                             errors.password ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                           }`}
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowPassword(!showPassword)}
//                           className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
//                         >
//                           {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                         </button>
//                       </div>
//                       {errors.password && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                           <AlertCircle className="w-4 h-4" />
//                           {errors.password}
//                         </div>
//                       )}
                      
//                       {/* Password Strength Indicator */}
//                       {formData.password && (
//                         <div className="mt-2">
//                           <div className="flex items-center gap-2 mb-1">
//                             <span className="text-sm text-slate-600">Password strength:</span>
//                             <span className={`text-sm font-medium ${
//                               passwordStrength < 2 ? 'text-red-600' :
//                               passwordStrength < 3 ? 'text-orange-600' :
//                               passwordStrength < 4 ? 'text-yellow-600' :
//                               passwordStrength < 5 ? 'text-blue-600' : 'text-green-600'
//                             }`}>
//                               {strengthLabels[Math.min(passwordStrength, 4)]}
//                             </span>
//                           </div>
//                           <div className="flex gap-1">
//                             {[1, 2, 3, 4, 5].map((level) => (
//                               <div
//                                 key={level}
//                                 className={`h-1 flex-1 rounded-full ${
//                                   level <= passwordStrength 
//                                     ? strengthColors[Math.min(passwordStrength - 1, 4)]
//                                     : 'bg-slate-200'
//                                 }`}
//                               ></div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">
//                         Confirm Password *
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Lock className="h-5 w-5 text-slate-400" />
//                         </div>
//                         <input
//                           type={showConfirmPassword ? 'text' : 'password'}
//                           name="confirmPassword"
//                           value={formData.confirmPassword}
//                           onChange={handleInputChange}
//                           placeholder="Confirm your password"
//                           className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                             errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                           }`}
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
//                         >
//                           {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                         </button>
//                       </div>
//                       {errors.confirmPassword && (
//                         <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                           <AlertCircle className="w-4 h-4" />
//                           {errors.confirmPassword}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Step 3: Professional Information */}
//             {currentStep === 3 && (
//               <div className="space-y-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-slate-800 mb-4">Professional Information</h2>
//                   <div className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 mb-2">
//                           Organization *
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <Building className="h-5 w-5 text-slate-400" />
//                           </div>
//                           <input
//                             type="text"
//                             name="organization"
//                             value={formData.organization}
//                             onChange={handleInputChange}
//                             placeholder="Enter your organization"
//                             className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                               errors.organization ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                             }`}
//                           />
//                         </div>
//                         {errors.organization && (
//                           <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                             <AlertCircle className="w-4 h-4" />
//                             {errors.organization}
//                           </div>
//                         )}
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 mb-2">
//                           Role *
//                         </label>
//                         <select
//                           name="role"
//                           value={formData.role}
//                           onChange={handleInputChange}
//                           className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                             errors.role ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                           }`}
//                         >
//                           <option value="">Select your role</option>
//                           <option value="environmental-scientist">Environmental Scientist</option>
//                           <option value="researcher">Researcher</option>
//                           <option value="ngo-member">NGO Member</option>
//                           <option value="investor">Investor</option>
//                           <option value="corporate-sustainability">Corporate Sustainability</option>
//                           <option value="government-official">Government Official</option>
//                           <option value="student">Student</option>
//                           <option value="other">Other</option>
//                         </select>
//                         {errors.role && (
//                           <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                             <AlertCircle className="w-4 h-4" />
//                             {errors.role}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 mb-2">
//                           Country *
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <MapPin className="h-5 w-5 text-slate-400" />
//                           </div>
//                           <select
//                             name="country"
//                             value={formData.country}
//                             onChange={handleInputChange}
//                             className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                               errors.country ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                             }`}
//                           >
//                             <option value="">Select your country</option>
//                             <option value="india">India</option>
//                             <option value="bangladesh">Bangladesh</option>
//                             <option value="sri-lanka">Sri Lanka</option>
//                             <option value="maldives">Maldives</option>
//                             <option value="usa">United States</option>
//                             <option value="uk">United Kingdom</option>
//                             <option value="australia">Australia</option>
//                             <option value="other">Other</option>
//                           </select>
//                         </div>
//                         {errors.country && (
//                           <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                             <AlertCircle className="w-4 h-4" />
//                             {errors.country}
//                           </div>
//                         )}
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium text-slate-700 mb-2">
//                           City *
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <MapPin className="h-5 w-5 text-slate-400" />
//                           </div>
//                           <input
//                             type="text"
//                             name="city"
//                             value={formData.city}
//                             onChange={handleInputChange}
//                             placeholder="Enter your city"
//                             className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
//                               errors.city ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
//                             }`}
//                           />
//                         </div>
//                         {errors.city && (
//                           <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
//                             <AlertCircle className="w-4 h-4" />
//                             {errors.city}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {/* Terms and Newsletter */}
//                     <div className="space-y-4">
//                       <label className="flex items-start">
//                         <input
//                           type="checkbox"
//                           name="termsAccepted"
//                           checked={formData.termsAccepted}
//                           onChange={handleInputChange}
//                           className="w-4 h-4 text-green-600 border-slate-300 rounded focus:ring-green-500 mt-1"
//                         />
//                         <span className="ml-3 text-sm text-slate-600">
//                           I agree to the{' '}
//                           <button type="button" className="text-green-600 hover:text-green-700 font-medium">
//                             Terms and Conditions
//                           </button>
//                           {' '}and{' '}
//                           <button type="button" className="text-green-600 hover:text-green-700 font-medium">
//                             Privacy Policy
//                           </button>
//                           *
//                         </span>
//                       </label>
//                       {errors.termsAccepted && (
//                         <div className="flex items-center gap-2 text-red-600 text-sm">
//                           <AlertCircle className="w-4 h-4" />
//                           {errors.termsAccepted}
//                         </div>
//                       )}

//                       <label className="flex items-start">
//                         <input
//                           type="checkbox"
//                           name="newsletter"
//                           checked={formData.newsletter}
//                           onChange={handleInputChange}
//                           className="w-4 h-4 text-green-600 border-slate-300 rounded focus:ring-green-500 mt-1"
//                         />
//                         <span className="ml-3 text-sm text-slate-600">
//                           I would like to receive updates about new projects and carbon credit opportunities
//                         </span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Navigation Buttons */}
//             <div className="flex items-center justify-between pt-6">
//               <button
//                 type="button"
//                 onClick={handlePrevious}
//                 disabled={currentStep === 1}
//                 className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
//               >
//                 Previous
//               </button>

//               {currentStep < totalSteps ? (
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105"
//                 >
//                   Next
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//                 >
//                   {isLoading ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Creating Account...
//                     </>
//                   ) : (
//                     <>
//                       Create Account
//                       <ArrowRight className="w-4 h-4" />
//                     </>
//                   )}
//                 </button>
//               )}
//             </div>
//           </form>

//           {/* Login Link */}
//           <div className="mt-6 text-center">
//             <p className="text-slate-600">
//               Already have an account?{' '}
//               <button
//                 onClick={() => window.location.href = '/login'}
//                 className="text-green-600 hover:text-green-700 font-medium"
//               >
//                 Sign in here
//               </button>
//             </p>
//           </div>
//         </div>

//         {/* Security Notice */}
//         <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
//           <div className="flex items-start gap-3">
//             <Shield className="w-5 h-5 text-green-600 mt-0.5" />
//             <div>
//               <h3 className="font-semibold text-green-800 mb-1">Your Data is Secure</h3>
//               <p className="text-sm text-green-700">
//                 We use enterprise-grade encryption to protect your information. Your data is never shared with third parties without your consent.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;



import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, Building, MapPin, ArrowRight, Shield, Leaf, AlertCircle, CheckCircle, Calendar } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: '',
    country: '',
    city: '',
    termsAccepted: false,
    newsletter: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (step === 2) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (step === 3) {
      if (!formData.organization.trim()) {
        newErrors.organization = 'Organization is required';
      }
      if (!formData.role.trim()) {
        newErrors.role = 'Role is required';
      }
      if (!formData.country.trim()) {
        newErrors.country = 'Country is required';
      }
      if (!formData.city.trim()) {
        newErrors.city = 'City is required';
      }
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = 'You must accept the terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully! This would redirect to dashboard.');
    }, 2000);
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Carbonverse</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
          <p className="text-gray-300">Join the ocean conservation movement</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-400">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm font-medium text-gray-400">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.firstName ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                          } text-white placeholder-gray-500`}
                        />
                      </div>
                      {errors.firstName && (
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.lastName ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                          } text-white placeholder-gray-500`}
                        />
                      </div>
                      {errors.lastName && (
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                          } text-white placeholder-gray-500`}
                        />
                      </div>
                      {errors.email && (
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.phone ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                          } text-white placeholder-gray-500`}
                        />
                      </div>
                      {errors.phone && (
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Security */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Security</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Create a strong password"
                          className={`w-full pl-10 pr-12 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.password ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                          } text-white placeholder-gray-500`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      {errors.password && (
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.password}
                        </div>
                      )}
                      
                      {/* Password Strength Indicator */}
                      {formData.password && (
                        <div className="mt-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-gray-400">Password strength:</span>
                            <span className={`text-sm font-medium ${
                              passwordStrength < 2 ? 'text-red-400' :
                              passwordStrength < 3 ? 'text-orange-400' :
                              passwordStrength < 4 ? 'text-yellow-400' :
                              passwordStrength < 5 ? 'text-blue-400' : 'text-green-400'
                            }`}>
                              {strengthLabels[Math.min(passwordStrength, 4)]}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`h-1 flex-1 rounded-full ${
                                  level <= passwordStrength 
                                    ? strengthColors[Math.min(passwordStrength - 1, 4)]
                                    : 'bg-gray-700'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your password"
                          className={`w-full pl-10 pr-12 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.confirmPassword ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                          } text-white placeholder-gray-500`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Professional Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-4">Professional Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Organization *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="Enter your organization"
                            className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                              errors.organization ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                            } text-white placeholder-gray-500`}
                          />
                        </div>
                        {errors.organization && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.organization}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Role *
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.role ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                          } text-white`}
                        >
                          <option value="">Select your role</option>
                          <option value="environmental-scientist">Environmental Scientist</option>
                          <option value="researcher">Researcher</option>
                          <option value="ngo-member">NGO Member</option>
                          <option value="investor">Investor</option>
                          <option value="corporate-sustainability">Corporate Sustainability</option>
                          <option value="government-official">Government Official</option>
                          <option value="student">Student</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.role && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.role}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Country *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                              errors.country ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                            } text-white`}
                          >
                            <option value="">Select your country</option>
                            <option value="india">India</option>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="sri-lanka">Sri Lanka</option>
                            <option value="maldives">Maldives</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="australia">Australia</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        {errors.country && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.country}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          City *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Enter your city"
                            className={`w-full pl-10 pr-4 py-3 bg-gray-800 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                              errors.city ? 'border-red-500 bg-red-900/20' : 'border-gray-700 hover:border-gray-600'
                            } text-white placeholder-gray-500`}
                          />
                        </div>
                        {errors.city && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.city}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Terms and Newsletter */}
                    <div className="space-y-4">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="termsAccepted"
                          checked={formData.termsAccepted}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 mt-1"
                        />
                        <span className="ml-3 text-sm text-gray-400">
                          I agree to the{' '}
                          <button type="button" className="text-blue-400 hover:text-blue-300 font-medium">
                            Terms and Conditions
                          </button>
                          {' '}and{' '}
                          <button type="button" className="text-blue-400 hover:text-blue-300 font-medium">
                            Privacy Policy
                          </button>
                          *
                        </span>
                      </label>
                      {errors.termsAccepted && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.termsAccepted}
                        </div>
                      )}

                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 mt-1"
                        />
                        <span className="ml-3 text-sm text-gray-400">
                          I would like to receive updates about new projects and carbon credit opportunities
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800"
              >
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <button
                onClick={() => window.location.href = '/login'}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-800 rounded-xl">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-300 mb-1">Your Data is Secure</h3>
              <p className="text-sm text-blue-200">
                We use enterprise-grade encryption to protect your information. Your data is never shared with third parties without your consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;