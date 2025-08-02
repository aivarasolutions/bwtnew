import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Enterprise Travel Technology That 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"> Scales Your Business</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Big World Enterprises LLC delivers white-label booking platforms, wholesale travel inventory, 
              and B2B solutions for the modern travel industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-lg font-semibold rounded-lg transition-all duration-200"
              >
                Partner With Us →
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 text-lg font-semibold rounded-lg transition-all duration-200"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Travel Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Bookings Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Travel Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From software development to wholesale brokerage, we provide the complete technology stack 
              your travel business needs to succeed in today's competitive market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">SW</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Software Solutions</h3>
              <p className="text-gray-600 mb-4">
                White-label booking engines, API integrations, and backend travel dashboards built for scale.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">WB</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wholesale Travel Brokerage</h3>
              <p className="text-gray-600 mb-4">
                Global hotel & airfare inventory access for agencies and resellers with competitive pricing.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold">B2B</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">B2B Travel Technology</h3>
              <p className="text-gray-600 mb-4">
                Tools to scale, automate, and enhance travel operations for modern businesses.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Join the future of travel technology with Big World Enterprises LLC. 
            Let's discuss how we can help scale your business with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Get Started Today →
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 text-lg font-semibold rounded-lg transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

