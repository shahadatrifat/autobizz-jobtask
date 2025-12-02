import { useState } from 'react';
import { useSales } from '../hooks/useSales';

function Dashboard() {
  const [filters, setFilters] = useState({
    startDate: '2025-01-01',
    endDate: '2025-01-31',
    priceMin: '',
    email: '',
    phone: '',
    sortBy: 'date',
    sortOrder: 'asc',
    after: '',
    before: '',
  });

  const { data, isLoading, error } = useSales(filters);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading sales data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">
          Error loading data: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Sales Dashboard</h1>
        
        {/* Testing: Show data is loaded */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4"> Sales Data Loaded!</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
               Total Sales Records: <span className="font-bold">{data?.results?.Sales?.length}</span>
            </p>
            <p className="text-gray-700">
               Total Sales Days: <span className="font-bold">{data?.results?.TotalSales?.length}</span>
            </p>
          </div>
        </div>

        {/* We'll add components here next */}
        <div className="mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">🔍 Filters - Coming Next</h3>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">📈 Chart - Coming Next</h3>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">📋 Table - Coming Next</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;