import React from "react";

const ColorBox = ({ color }) => {
	const colorMap = {
		red: "#FF0000",
		green: "#008000",
		yellow: "#FFFF00",
	};

	return (
		<div
			className="color-box"
			style={{ backgroundColor: colorMap[color] }}></div>
	);
};

export default ColorBox;