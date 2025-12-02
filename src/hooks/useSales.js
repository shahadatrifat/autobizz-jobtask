import { getSalesData } from '../api/sales';
import { useQuery } from '@tanstack/react-query';

export const useSales = (filters) => {
  return useQuery({
    queryKey: ['sales', filters],
    queryFn: () => getSalesData(filters),
    staleTime: 5 * 60 * 1000, 
    enabled: !!localStorage.getItem('authToken'), 
  });
};