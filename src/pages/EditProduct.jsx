import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EditProduct({ products, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [product]);

  if (!product) return <div style={{ padding: '20px' }}>Product not found!</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, { name, price: parseFloat(price) || 0, description });
    navigate('/products'); // ریدایرکت پس از آپدیت بر اساس استیکی‌نوت وایرفریم
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#eee', padding: '5px', marginBottom: '15px', fontSize: '12px' }}>
        <strong>URL:</strong> http://localhost/products/edit/{id}
      </div>

      <h2>Edit {product.name}</h2>
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
          <button type="submit" style={{ padding: '5px 15px' }}>Update</button>
        </div>
      </form>
      
      <br />
      <Link to={`/products/show/${id}`}>Show</Link> | <Link to="/products">Home</Link>
    </div>
  );
}

export default EditProduct;