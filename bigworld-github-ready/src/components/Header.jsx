import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BW</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Big World Enterprises</span>
              <span className="text-sm text-gray-500 block">LLC</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link to="/partner-portal" className="text-gray-700 hover:text-blue-600 font-medium">Partner Portal</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
          </nav>
          
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

