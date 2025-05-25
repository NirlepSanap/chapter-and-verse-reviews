
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Discover Your Next
                <span className="text-amber-600 block">Great Read</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of book lovers sharing reviews, discovering new authors, 
                and building their perfect reading lists.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Browse Reviews
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-amber-600" />
                <span>10,000+ Books</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
                <span>50,000+ Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop"
                  alt="Book cover"
                  className="w-full h-40 object-cover rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform"
                />
                <img
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop"
                  alt="Book cover"
                  className="w-full h-32 object-cover rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-transform"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200&h=300&fit=crop"
                  alt="Book cover"
                  className="w-full h-32 object-cover rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform"
                />
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop"
                  alt="Book cover"
                  className="w-full h-40 object-cover rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
