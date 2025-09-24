import React from "react";

const Cart = ({ cartItems, totalAmount }) => {
	return (
		<div className="cart-section">
			<h3>Giỏ hàng</h3>
			{cartItems.length === 0 ? (
				<p>Giỏ hàng trống</p>
			) : (
				<div>
					<ul className="cart-list">
						{cartItems.map((item, index) => (
							<li key={index} className="cart-item">
								{item.name} - {item.price}đ
							</li>
						))}
					</ul>
					<div className="total-amount">
						<strong>Tổng tiền: {totalAmount}đ</strong>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;