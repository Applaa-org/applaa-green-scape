import { Link } from '@tanstack/react-router';
import { Leaf, Twitter, Facebook, Instagram } from 'lucide-react';
import { MadeWithApplaa } from './made-with-applaa';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                Green Scape
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              Creating beautiful and sustainable outdoor spaces across the UK.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-green-700"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-700"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-700"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/services" className="text-base text-gray-500 hover:text-gray-900">Services</Link></li>
              <li><Link to="/portfolio" className="text-base text-gray-500 hover:text-gray-900">Portfolio</Link></li>
              <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-base text-gray-500">
              <li>123 Garden Lane</li>
              <li>London, UK</li>
              <li>01234 567890</li>
              <li>hello@greenscape.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Green Scape. All rights reserved.</p>
          <MadeWithApplaa />
        </div>
      </div>
    </footer>
  );
}