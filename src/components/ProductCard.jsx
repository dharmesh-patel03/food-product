import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-orange-300 p-4 rounded-lg shadow-lg box-shadow">
      <img src={product.image_url} alt={product.product_name} className="h-32 w-full object-cover mb-4" />
      <h2 className="text-xl text-orange-200 font-semibold">{product.product_name}</h2>
      <p className='text-orange-200'>Category: {product.categories_tags?.[0]}</p>
      <p className='text-orange-200'>Nutrition Grade: {product.nutrition_grades}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block rounded-md  px-4 py-2 border border-orange-300 box-shadow text-orange-300">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
