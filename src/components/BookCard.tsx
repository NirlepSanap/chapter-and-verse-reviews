
import React from 'react';
import { Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    coverUrl: string;
    rating: number;
    reviewCount: number;
    genre: string;
    description: string;
  };
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {book.genre}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {renderStars(book.rating)}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {book.rating.toFixed(1)}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Users className="h-4 w-4 mr-1" />
            <span>{book.reviewCount} reviews</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-3">
            {book.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
