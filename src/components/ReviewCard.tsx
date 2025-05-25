
import React from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ReviewCardProps {
  review: {
    id: string;
    user: string;
    rating: number;
    content: string;
    date: string;
    likes: number;
    bookTitle: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">{review.user}</h4>
                <p className="text-sm text-gray-600">reviewed "{review.bookTitle}"</p>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            
            <div className="flex items-center mb-3">
              {renderStars(review.rating)}
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <button className="flex items-center space-x-1 hover:text-amber-600 transition-colors">
                <ThumbsUp className="h-4 w-4" />
                <span>{review.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
