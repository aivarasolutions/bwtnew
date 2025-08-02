import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BW</span>
              </div>
              <div>
                <span className="font-bold">Big World Enterprises</span>
                <span className="text-sm text-gray-400 block">LLC</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Enterprise travel technology solutions for the modern B2B travel industry. 
              Connecting the world through innovative platforms and wholesale brokerage.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/partner-portal" className="text-gray-400 hover:text-white">Partner Portal</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Software Solutions</li>
              <li>Wholesale Travel Brokerage</li>
              <li>B2B Travel Technology</li>
              <li>API Integration</li>
              <li>White-label Platforms</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>info@bigworldenterprises.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Global Operations Center</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Big World Enterprises LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

