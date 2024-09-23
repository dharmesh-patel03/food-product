import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const url = searchQuery
        ? `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchQuery}&json=true`
        : `https://world.openfoodfacts.org/search.json?page_size=20&category=${selectedCategory}`;
      const response = await axios.get(url);
      setProducts(response.data.products);
      setLoading(false);
    };

    fetchProducts();
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto p-4 bg-orange-600">
      <h1 className="text-3xl font-bold text-center mb-4">Food Product Explorer</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;
