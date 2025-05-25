
import React from 'react';
import { BookOpen, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">BookReviews</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting book lovers worldwide through honest reviews and meaningful discussions. 
              Discover your next favorite book today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Browse Books</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Top Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Write a Review</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Discussion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reading Lists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book Clubs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BookReviews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
