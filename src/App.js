import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/product-list/components/ProductList";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Cart from "./features/cart/Cart";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-detail" element={<ProductDetailPage />} />
        </Routes>
    );
}

export default App;
