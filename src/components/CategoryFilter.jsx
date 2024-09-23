import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryFilter = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://world.openfoodfacts.org/categories.json');
      setCategories(response.data.tags);
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <select onChange={handleChange} className=" p-2 rounded-md w-full mb-4 bg-orange-600 border text-orange-300 border-orange-300 outline-none box-shadow">
      <option value="" className='bg-orange-600'>Select Category</option>
      {categories.map(category => (
        <option key={category.id} value={category.name} className='bg-orange-600 text-orange-300'>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
