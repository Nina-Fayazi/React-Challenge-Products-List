import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ShowProduct({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div style={{ padding: '20px' }}>Product not found!</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#eee', padding: '5px', marginBottom: '15px', fontSize: '12px' }}>
        <strong>URL:</strong> http://localhost/products/show/{id}
      </div>

      <h2>{product.name}</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      
      <br />
      <Link to="/products">Back</Link> | <Link to={`/products/edit/${product.id}`}>Edit</Link>
    </div>
  );
}

export default ShowProduct;