// AllProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/accessorie');
      setData(response.data);
      // Apply filters when data is fetched
      applyFilters(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const applyFilters = (dataToFilter) => {
    let filtered = dataToFilter;

    // Apply search filter
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(item => {
        const itemName = item['Accessorie Name'].toLowerCase();
        return itemName.includes(searchTerm.toLowerCase());
      });
    }

    // Apply type filter
    if (selectedFilter !== 'All') {
      filtered = filtered.filter(item => item['Accessory Type'] === selectedFilter);
    }

    setFilteredData(filtered);
  };

  const handleSearch = () => {
    // Fetch data again and apply filters
    fetchData();
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    applyFilters(data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/accessorie/${id}`);
      fetchData();
    } catch (error) {
      console.error(`Error deleting product with id ${id}:`, error);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="filter-bar">
        {/* Add your filter dropdown here */}
        {/* For example, you can use a select element */}
        <select value={selectedFilter} onChange={handleFilterChange}>
          <option value="All">All</option>
          {/* Add other filter options based on your data */}
        </select>
      </div>
      <div className="product-items">
        {filteredData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item['Accessorie Name']}
            pic={item['Accessorie pic']}
            description={item['Accessorie description']}
            price={item['Price']}
            onDelete={handleDelete}
            onUpdateSuccess={fetchData}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
