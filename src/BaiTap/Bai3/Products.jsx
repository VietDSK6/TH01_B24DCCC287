import React from "react";

const ProductList = ({ products, onAddToCart }) => {
	return (
		<div className="product-section">
			<h3>Sản phẩm</h3>
			<div className="product-list">
				{products.map((product) => (
					<div key={product.id} className="product-item">
						<span>
							{product.name} - {product.price}đ
						</span>
						<button onClick={() => onAddToCart(product)}>
							Thêm vào giỏ
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList;