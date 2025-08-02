const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Big World Enterprises LLC</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A registered technology company specializing in B2B travel solutions, connecting the world 
            through innovative platforms and wholesale brokerage services.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Big World Enterprises LLC was founded with a clear mission: to democratize access to 
                enterprise-grade travel technology. We believe that every travel business, regardless of size, 
                should have access to the same powerful tools and global inventory that drive the industry's leaders.
              </p>
              <p className="text-gray-600 mb-6">
                Since our founding, we've been committed to breaking down the traditional barriers that have 
                limited innovation in the travel industry. Our white-label platforms, wholesale brokerage services, 
                and B2B technology solutions empower our partners to compete at the highest level while maintaining 
                their unique brand identity.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">✓</span>
                <span className="font-medium">Big World Enterprises LLC is a registered business entity</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Overview</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-900">Founded:</span>
                  <span className="text-gray-600 ml-2">2020</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Headquarters:</span>
                  <span className="text-gray-600 ml-2">Global Operations Center</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Specialization:</span>
                  <span className="text-gray-600 ml-2">B2B Travel Technology</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Services:</span>
                  <span className="text-gray-600 ml-2">Software, Wholesale, Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">I</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously push the boundaries of travel technology to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 font-bold text-xl">P</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">
                We believe in building long-term relationships based on trust, transparency, and mutual success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">G</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Our solutions connect businesses worldwide, breaking down barriers in the travel industry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">E</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards in everything we do, from code quality to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

