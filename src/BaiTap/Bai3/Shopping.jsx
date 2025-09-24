import React, { useState } from "react";
import ProductList from "./Products";
import Cart from "./Cart";

const ShoppingApp = () => {
	const [products] = useState([
		{ id: 1, name: "Sách", price: 10000 },
		{ id: 2, name: "Bút", price: 5000 },
		{ id: 3, name: "Vở", price: 7000 },
		{ id: 4, name: "Túi xách", price: 20000 },
	]);

	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems([...cartItems, product]);
	};

	const calculateTotal = () => {
		return cartItems.reduce((total, item) => total + item.price, 0);
	};

	return (
		<div className="exercise">
			<h2>Bài 3: Giỏ hàng</h2>

			<div className="shopping-container">
				<ProductList products={products} onAddToCart={addToCart} />
				<Cart cartItems={cartItems} totalAmount={calculateTotal()} />
			</div>
		</div>
	);
};

export default ShoppingApp;