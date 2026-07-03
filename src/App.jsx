import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import AllProducts from './pages/AllProducts';
import ShowProduct from './pages/ShowProduct';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=5')
      .then(res => {
        
        const mappedData = res.data.map(item => ({
          id: item.id,
          name: item.title,
          price: item.price,
          description: item.description
        }));
        setProducts(mappedData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  
  const handleDelete = (id) => {
    // شبیه‌سازی ارسال POST به مسیر مشخص شده در وایرفریم
    console.log(`Submitting POST request with id to 'products/destroy' for ID: ${id}`);
    setProducts(products.filter(p => p.id !== id));
  };

  
  const handleCreate = (newProduct) => {
    console.log("Submitting form to 'products/create'", newProduct);
    const id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    setProducts([...products, { id, ...newProduct }]);
  };

 
  const handleUpdate = (id, updatedProduct) => {
    console.log(`Submitting form to 'products/update/${id}'`, updatedProduct);
    setProducts(products.map(p => p.id === parseInt(id) ? { id: parseInt(id), ...updatedProduct } : p));
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading products...</div>;

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/products" />} />
        
        
        <Route path="/products" element={<AllProducts products={products} onDelete={handleDelete} />} />
        <Route path="/products/show/:id" element={<ShowProduct products={products} />} />
        <Route path="/products/new" element={<CreateProduct onCreate={handleCreate} />} />
        <Route path="/products/edit/:id" element={<EditProduct products={products} onUpdate={handleUpdate} />} />
      </Routes>
    </Router>
  );
}

export default App;