import React, { useState } from "react";
import "./App.css";
import TodoList from "./BaiTap/Bai1/Todolist";
import ColorPicker from "./BaiTap/Bai2/ColorPicker";
import ShoppingApp from "./BaiTap/Bai3/Shopping";
import PostList from "./BaiTap/Bai4/Postlist";
import QuizApp from "./BaiTap/Bai5/QuestionList";

function App() {
	const [todos, setTodos] = useState([]);
	const [selectedColor, setSelectedColor] = useState("red");

	const addTodo = (todoText) => {
		setTodos([...todos, todoText]);
	};

	const deleteTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	const changeColor = (color) => {
		setSelectedColor(color);
	};

	return (
		<div className="App">
			<TodoList
				todos={todos}
				onAddTodo={addTodo}
				onDeleteTodo={deleteTodo}
			/>

			<ColorPicker
				selectedColor={selectedColor}
				onColorChange={changeColor}
			/>

			<ShoppingApp />

			<PostList />

			<QuizApp />
		</div>
	);
}

export default App;