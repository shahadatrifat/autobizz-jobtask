import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

function Filters({ filters, setFilters }) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleApply = () => {
    setFilters(localFilters);
  };

  const handleReset = () => {
    const defaultFilters = {
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      priceMin: '',
      email: '',
      phone: '',
      sortBy: 'date',
      sortOrder: 'asc',
      after: '',
      before: '',
    };
    setLocalFilters(defaultFilters);
    setFilters(defaultFilters);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>🔍 Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Start Date */}
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={localFilters.startDate}
              onChange={(e) => setLocalFilters({ ...localFilters, startDate: e.target.value })}
            />
          </div>

          {/* End Date */}
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={localFilters.endDate}
              onChange={(e) => setLocalFilters({ ...localFilters, endDate: e.target.value })}
            />
          </div>

          {/* Minimum Price */}
          <div className="space-y-2">
            <Label htmlFor="priceMin">Minimum Price</Label>
            <Input
              id="priceMin"
              type="number"
              placeholder="e.g. 100"
              value={localFilters.priceMin}
              onChange={(e) => setLocalFilters({ ...localFilters, priceMin: e.target.value })}
            />
          </div>

          {/* Customer Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Customer Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g. john@example.com"
              value={localFilters.email}
              onChange={(e) => setLocalFilters({ ...localFilters, email: e.target.value })}
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g. +11111111"
              value={localFilters.phone}
              onChange={(e) => setLocalFilters({ ...localFilters, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Button onClick={handleApply}>
            Apply Filters
          </Button>
          <Button onClick={handleReset} variant="outline">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Filters;