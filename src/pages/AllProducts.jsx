import React from 'react';
import { Link } from 'react-router-dom';

const AllProducts = ({ products, onDelete }) => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#eee', padding: '5px', marginBottom: '15px', fontSize: '12px' }}>
        <strong>URL:</strong> http://localhost/products
      </div>

      <h2>Products</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <Link to={`/products/show/${product.id}`}>Show</Link> | {' '}
                <Link to={`/products/edit/${product.id}`}>Edit</Link> | {' '}
                <button onClick={() => onDelete(product.id)} style={{ color: 'red', cursor: 'pointer', border: 'none', background: 'none', padding: 0, font: 'inherit', textDecoration: 'underline' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/products/new" style={{ fontSize: '16px', fontWeight: 'bold' }}>Add product</Link>
    </div>
  );
}

export default AllProducts;