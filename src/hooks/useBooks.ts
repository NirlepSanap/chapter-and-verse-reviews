
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type Book = Tables<'books'>;

export const useBooks = (limit?: number) => {
  return useQuery({
    queryKey: ['books', limit],
    queryFn: async () => {
      let query = supabase
        .from('books')
        .select('*')
        .order('average_rating', { ascending: false });
      
      if (limit) {
        query = query.limit(limit);
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching books:', error);
        throw error;
      }
      
      return data || [];
    },
  });
};

export const useBookById = (id: string) => {
  return useQuery({
    queryKey: ['book', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching book:', error);
        throw error;
      }
      
      return data;
    },
    enabled: !!id,
  });
};
