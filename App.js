import React, {useState , useEffect} from "react";
import "./App.js";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };
    const deleteProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <div className="App">
            <h1>Product Management</h1>
            <AddProduct addProduct={addProduct} />
            <ProductList products={products} deleteProduct={deleteProduct} />
        </div>
    );
}
export default App;
