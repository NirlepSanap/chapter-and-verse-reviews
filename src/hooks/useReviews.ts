
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Review = Tables<'reviews'> & {
  profiles: {
    username: string;
    first_name: string | null;
    last_name: string | null;
    avatar_url: string | null;
  } | null;
  books: {
    title: string;
  } | null;
};

export const useReviews = (bookId?: string, limit?: number) => {
  return useQuery({
    queryKey: ['reviews', bookId, limit],
    queryFn: async () => {
      let query = supabase
        .from('reviews')
        .select(`
          *,
          profiles (
            username,
            first_name,
            last_name,
            avatar_url
          ),
          books (
            title
          )
        `)
        .order('created_at', { ascending: false });
      
      if (bookId) {
        query = query.eq('book_id', bookId);
      }
      
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching reviews:', error);
        throw error;
      }
      
      return data || [];
    },
  });
};
