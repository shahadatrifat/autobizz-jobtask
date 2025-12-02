import apiClient from './client';

export const getSalesData = async (filters = {}) => {
  const params = {
    startDate: filters.startDate || '2025-01-01',
    endDate: filters.endDate || '2025-01-31',
    priceMin: filters.priceMin || '',
    email: filters.email || '',
    phone: filters.phone || '',
    sortBy: filters.sortBy || 'date',
    sortOrder: filters.sortOrder || 'asc',
    after: filters.after || '',
    before: filters.before || '',
  };

  const response = await apiClient.get('/sales', { params });
  return response.data;
};