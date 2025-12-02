import { useState } from 'react';
import { useSales } from '../hooks/useSales';
import Filters from '../components/Filters';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

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
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Sales Dashboard</h1>
        
        {/* Filters */}
        <Filters filters={filters} setFilters={setFilters} />

        {/* Stats */}
        <Card>
          <CardHeader>
            <CardTitle> Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Sales Records</p>
                <p className="text-2xl font-bold text-blue-600">
                  {data?.results?.Sales?.length || 0}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Sales Days</p>
                <p className="text-2xl font-bold text-green-600">
                  {data?.results?.TotalSales?.length || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <SalesChart data={data} />

        {/* Table */}
        <SalesTable data={data} filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
}

export default Dashboard;