import React from "react";

const TodoItem = ({ todo, onDelete, index }) => {
	return (
		<li>
			{todo}
			<button onClick={() => onDelete(index)}>Xóa</button>
		</li>
	);
};

export default TodoItem;