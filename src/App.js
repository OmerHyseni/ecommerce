import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import { BrowserRouter, Routes, Route } from "react-router"
import ProductsPage from './ProductsPage';
import SelectedProduct from './SelectedProduct';
import CartItemsPage from './CartItemsPage';

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    fetch("/ecommerce/api/products.json").then(res => res.json()).then(data => setProducts(data))
    fetch("/ecommerce/api/categories.json").then(res => res.json()).then(data => setCategories(data))
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems}/>  
        <Routes>
          <Route path='/ecommerce' element={<ProductsPage products={products} />} />
          <Route path='/ecommerce/:id' element={<SelectedProduct setCartItems={setCartItems} cartItems={cartItems} />} />
          <Route path='/ecommerce/cartitems' element={<CartItemsPage totalPrice={totalPrice} setTotalPrice={setTotalPrice} setCartItems={setCartItems} cartItems={cartItems} />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}
