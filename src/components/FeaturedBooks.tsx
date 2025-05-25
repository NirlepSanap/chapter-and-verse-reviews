
import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      id: '1',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      rating: 4.5,
      reviewCount: 2847,
      genre: 'Thriller',
      description: 'A woman refuses to speak after allegedly murdering her husband. A psychotherapist becomes obsessed with treating her.'
    },
    {
      id: '2',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop',
      rating: 4.8,
      reviewCount: 1923,
      genre: 'Sci-Fi',
      description: 'A lone astronaut must save humanity using science, humor, and a lot of determination.'
    },
    {
      id: '3',
      title: 'The Seven Moons of Maali Almeida',
      author: 'Shehan Karunatilaka',
      coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      rating: 4.2,
      reviewCount: 756,
      genre: 'Fantasy',
      description: 'A photographer wakes up dead and must solve his own murder while navigating the afterlife.'
    },
    {
      id: '4',
      title: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin',
      coverUrl: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop',
      rating: 4.6,
      reviewCount: 3241,
      genre: 'Fiction',
      description: 'A novel about friendship, art, and the video game industry that spans decades.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Books</h2>
          <p className="text-lg text-gray-600">Discover the most talked-about books this month</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
