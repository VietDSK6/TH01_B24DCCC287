import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onAddTodo, onDeleteTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleAddTodo = () => {
		if (inputValue.trim() !== "") {
			onAddTodo(inputValue);
			setInputValue("");
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleAddTodo();
		}
	};

	return (
		<div className="exercise">
			<h2>Bài 1: To-do List</h2>

			<div className="todo-input">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Nhập công việc"
					onKeyPress={handleKeyPress}
				/>
				<button onClick={handleAddTodo}>Thêm</button>
			</div>

			<ul className="todo-list">
				{todos.map((todo, index) => (
					<TodoItem
						key={index}
						todo={todo}
						index={index}
						onDelete={onDeleteTodo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;