import axios from 'axios';

const API_BASE_URL = 'https://autobizz-425913.uc.r.appspot.com';

export const getAuthToken = async () => {
  const response = await axios.post(`${API_BASE_URL}/getAuthorize`, {
    tokenType: 'frontEndTest',
  });
  
  return response.data.token;
};