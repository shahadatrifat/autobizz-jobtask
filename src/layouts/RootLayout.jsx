import { getAuthToken } from '../api/auth';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authenticate = async () => {
      try {
        let token = localStorage.getItem('authToken');
        const tokenExpiry = localStorage.getItem('tokenExpiry');

        // Check if token exists and is not expired
        if (!token || (tokenExpiry && Date.now() > Number(tokenExpiry))) {
          console.log('Getting new token...');
          token = await getAuthToken();
          localStorage.setItem('authToken', token);
          localStorage.setItem('tokenExpiry', Date.now() + 7200 * 1000); 
        }

        setIsAuthenticated(true);
      } catch (error) {
        console.error('Authentication failed:', error);
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">
          Authentication failed. Please refresh the page.
        </div>
      </div>
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;