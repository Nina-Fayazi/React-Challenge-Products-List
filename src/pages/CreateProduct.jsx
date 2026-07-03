import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreateProduct({ onCreate }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, price: parseFloat(price) || 0, description });
    navigate('/products'); 
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#eee', padding: '5px', marginBottom: '15px', fontSize: '12px' }}>
        <strong>URL:</strong> http://localhost/products/new
      </div>

      <h2>New product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        <label>
          Name <br />
          <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%' }} />
        </label>
        
        <label>
          Price <br />
          <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} required style={{ width: '100%' }} />
        </label>
        
        <label>
          Description <br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} required style={{ width: '100%', height: '60px' }} />
        </label>
        
        <div style={{ marginTop: '10px' }}>
          <button type="submit" style={{ padding: '5px 15px', marginRight: '10px' }}>Create</button>
          <Link to="/products" style={{ fontSize: '14px' }}>Go back</Link>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;