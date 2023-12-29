// ProductDetail.js
import React, { useState, useEffect } from 'react';

const ProductDetail = ({ match }) => {
  const { id } = match.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle error state if needed
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Title: {product.title}</p>
      <p>Completed: {product.completed ? 'Yes' : 'No'}</p>
      {/* Display other product details */}
    </div>
  );
};

export default ProductDetail;
