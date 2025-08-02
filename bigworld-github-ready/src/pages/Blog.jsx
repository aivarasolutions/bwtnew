const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Industry Insights</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices in B2B travel
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">Featured Article</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
              The Future of B2B Travel Technology: Trends to Watch in 2025
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Explore the emerging technologies and market trends that are reshaping the B2B travel industry, 
              from AI-powered booking engines to blockchain-based payment systems.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Technology</span>
            </div>
            <a 
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
            >
              Read Full Article →
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">All</button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">Technology</button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">Industry</button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium">Case Studies</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>January 10, 2025</span>
                  <span>•</span>
                  <span>Technology</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  API Integration Best Practices for Travel Platforms
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to implement robust API integrations that scale with your travel business.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </a>
              </div>
            </article>
            
            {/* Article 2 */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-500 to-green-500"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>January 5, 2025</span>
                  <span>•</span>
                  <span>Case Study</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How TravelCorp Increased Bookings by 300% with Our Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  A detailed case study on digital transformation in the travel industry.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </a>
              </div>
            </article>
            
            {/* Article 3 */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>December 28, 2024</span>
                  <span>•</span>
                  <span>Industry</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  The Rise of White-Label Solutions in Travel Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Why more travel companies are choosing white-label platforms over custom development.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </a>
              </div>
            </article>
            
            {/* Article 4 */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>December 20, 2024</span>
                  <span>•</span>
                  <span>Technology</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Building Scalable Travel Booking Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Architecture patterns and technologies for high-performance travel platforms.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </a>
              </div>
            </article>
            
            {/* Article 5 */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>December 15, 2024</span>
                  <span>•</span>
                  <span>Industry</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Global Travel Market Trends: What to Expect in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Market analysis and predictions for the global travel industry in the coming year.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </a>
              </div>
            </article>
            
            {/* Article 6 */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>December 10, 2024</span>
                  <span>•</span>
                  <span>Technology</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Implementing Real-Time Inventory Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Technical guide to building real-time inventory systems for travel platforms.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </a>
              </div>
            </article>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-lg border">Previous</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-lg border">2</button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-lg border">3</button>
              <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 rounded-lg border">Next</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, updates, and industry news.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-r-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

