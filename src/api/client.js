import axios from 'axios';

const API_BASE_URL = 'https://autobizz-425913.uc.r.appspot.com';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to every request automatically
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['X-AUTOBIZZ-TOKEN'] = token;
  }
  return config;
});

export default apiClient;