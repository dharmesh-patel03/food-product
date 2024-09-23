import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
      setProduct(response.data.product);
    };

    fetchProductDetails();
  }, [barcode]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <img src={product.image_url} alt={product.product_name} className="h-64 w-full object-cover mb-4" />
      <h2 className="text-3xl font-bold">{product.product_name}</h2>
      <p className="text-lg">Ingredients: {product.ingredients_text}</p>
      <p className="text-lg">Nutrition Grade: {product.nutrition_grades}</p>
      <p className="text-lg">Nutritional Values: {product.nutriments.energy} kJ</p>
    </div>
  );
};

export default ProductDetail;
