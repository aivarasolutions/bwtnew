const PartnerPortal = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Partner Portal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Access your account, manage bookings, and explore our comprehensive API documentation
          </p>
        </div>
      </section>

      {/* Portal Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Existing Partners */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Existing Partners</h2>
              <p className="text-gray-600 mb-8">
                Access your partner dashboard to manage bookings, view analytics, and download reports.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-semibold transition-colors duration-200"
                >
                  Sign In to Dashboard
                </button>
                
                <div className="text-center">
                  <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </div>
            
            {/* New Partners */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Become a Partner</h2>
              <p className="text-gray-600 mb-8">
                Join our network of travel professionals and gain access to wholesale pricing and advanced tools.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Access to wholesale hotel & flight inventory</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">White-label booking platform</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">API access and documentation</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">24/7 technical support</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Dedicated account management</span>
                </div>
                
                <a 
                  href="/contact"
                  className="block w-full text-center bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 font-semibold transition-colors duration-200"
                >
                  Request Partnership
                </a>
                
                <p className="text-sm text-gray-500 text-center">
                  Partnership applications are reviewed within 2-3 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">API Documentation</h2>
            <p className="text-xl text-gray-600">
              Comprehensive guides and references for integrating with our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-4">
                Quick start guide to begin integrating with our APIs
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                View Guide →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">API Reference</h3>
              <p className="text-gray-600 mb-4">
                Complete reference documentation for all endpoints
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                View Reference →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Code Examples</h3>
              <p className="text-gray-600 mb-4">
                Sample code and SDKs for popular programming languages
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                View Examples →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnerPortal

