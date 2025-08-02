const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive B2B travel technology solutions designed to scale your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Software Solutions */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-600 font-bold text-2xl">SW</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Software Solutions</h2>
              <p className="text-gray-600 mb-6">
                Enterprise-grade software platforms built for the modern travel industry.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• White-label booking engines</li>
                <li>• Custom API integrations</li>
                <li>• Backend travel dashboards</li>
                <li>• Mobile-responsive platforms</li>
                <li>• Real-time inventory management</li>
                <li>• Multi-currency support</li>
              </ul>
            </div>

            {/* Wholesale Travel Brokerage */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-teal-600 font-bold text-2xl">WB</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Travel Brokerage</h2>
              <p className="text-gray-600 mb-6">
                Access to global inventory with competitive wholesale pricing.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Global hotel inventory</li>
                <li>• Airline partnerships</li>
                <li>• Competitive wholesale rates</li>
                <li>• Real-time availability</li>
                <li>• Instant booking confirmation</li>
                <li>• 24/7 support</li>
              </ul>
            </div>

            {/* B2B Travel Technology */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 font-bold text-2xl">B2B</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">B2B Travel Technology</h2>
              <p className="text-gray-600 mb-6">
                Advanced tools to automate and enhance your travel operations.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Process automation</li>
                <li>• Business intelligence</li>
                <li>• Performance analytics</li>
                <li>• Integration support</li>
                <li>• Scalable infrastructure</li>
                <li>• Custom development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our solutions can help transform your travel business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Request Demo
            </a>
            <a 
              href="/partner-portal"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg font-semibold rounded-lg transition-all duration-200"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

