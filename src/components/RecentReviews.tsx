
import React from 'react';
import ReviewCard from './ReviewCard';

const RecentReviews = () => {
  const recentReviews = [
    {
      id: '1',
      user: 'Sarah Chen',
      rating: 5,
      content: 'Absolutely captivating from start to finish! The psychological depth of the characters kept me guessing until the very end. Michaelides has crafted a masterpiece that will stay with me for a long time.',
      date: '2 days ago',
      likes: 12,
      bookTitle: 'The Silent Patient'
    },
    {
      id: '2',
      user: 'Michael Rodriguez',
      rating: 4,
      content: 'Andy Weir does it again! The scientific accuracy combined with humor makes this a delightful read. While some parts felt a bit technical, the overall story is engaging and thought-provoking.',
      date: '1 week ago',
      likes: 8,
      bookTitle: 'Project Hail Mary'
    },
    {
      id: '3',
      user: 'Emma Thompson',
      rating: 5,
      content: 'A beautiful exploration of friendship and creativity in the digital age. Zevin masterfully weaves together themes of love, loss, and the power of games to connect us across time and space.',
      date: '2 weeks ago',
      likes: 15,
      bookTitle: 'Tomorrow, and Tomorrow, and Tomorrow'
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Reviews</h2>
          <p className="text-lg text-gray-600">See what our community is saying</p>
        </div>
        
        <div className="space-y-6">
          {recentReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;
