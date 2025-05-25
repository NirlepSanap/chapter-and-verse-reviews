
import React from 'react';
import ReviewCard from './ReviewCard';
import { useReviews } from '@/hooks/useReviews';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';

const RecentReviews = () => {
  const { data: reviews, isLoading, error } = useReviews(undefined, 3);

  if (error) {
    return (
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Reviews</h2>
            <p className="text-red-600">Error loading reviews. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Reviews</h2>
          <p className="text-lg text-gray-600">See what our community is saying</p>
        </div>
        
        <div className="space-y-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))
            : reviews?.map((review) => (
                <ReviewCard 
                  key={review.id} 
                  review={{
                    id: review.id,
                    user: review.profiles?.username || 'Anonymous User',
                    rating: review.rating,
                    content: review.content,
                    date: formatDistanceToNow(new Date(review.created_at), { addSuffix: true }),
                    likes: review.likes_count || 0,
                    bookTitle: review.books?.title || 'Unknown Book'
                  }} 
                />
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;
