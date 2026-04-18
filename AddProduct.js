import React, { useState } from 'react';

function AddProduct({ addProduct }) {
    const [name, setName] = useState('');
    const [price , setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || price.trim() === '') {
            alert('Please enter both name and price');
            return;
        }
        addProduct({ name, price });
        setName('');
        setPrice('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProduct;