
import React from 'react';
import BookCard from './BookCard';
import { useBooks } from '@/hooks/useBooks';
import { Skeleton } from '@/components/ui/skeleton';

const FeaturedBooks = () => {
  const { data: books, isLoading, error } = useBooks(4);

  if (error) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Books</h2>
            <p className="text-red-600">Error loading books. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Books</h2>
          <p className="text-lg text-gray-600">Discover the most talked-about books this month</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
            : books?.map((book) => (
                <BookCard 
                  key={book.id} 
                  book={{
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    coverUrl: book.cover_url || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
                    rating: book.average_rating || 0,
                    reviewCount: book.review_count || 0,
                    genre: book.genre,
                    description: book.description || ''
                  }} 
                />
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
