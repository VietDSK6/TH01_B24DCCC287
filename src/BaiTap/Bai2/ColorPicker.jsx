import React from "react";
import ColorBox from "./ColorBox";

const ColorPicker = ({ selectedColor, onColorChange }) => {
	const colors = [
		{ key: "red", label: "Đỏ" },
		{ key: "green", label: "Xanh" },
		{ key: "yellow", label: "Vàng" },
	];

	return (
		<div className="exercise">
			<h2>Bài 2: Color Picker</h2>

			<div className="color-buttons">
				{colors.map((color) => (
					<button
						key={color.key}
						onClick={() => onColorChange(color.key)}>
						{color.label}
					</button>
				))}
			</div>

			<ColorBox color={selectedColor} />
		</div>
	);
};

export default ColorPicker;