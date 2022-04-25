import React from "react";
import { TodoListContextProvider } from "../context/todo-list-context";
import { InputTodo } from "./input-todo";
import { TodoList } from "./todo-list";

import "./App.scss";

export default function App() {
	return (
		<div className="app">
			<div className="app_instruction">
				<h1>To-Do List</h1>
				<p>Enter text into the input field to add items to your list</p>
				<p>Click the "X" to remove the item from your list</p>
				<p>Click the item to mark it as complete</p>
			</div>
			<div className="app_content">
				<TodoListContextProvider>
					<InputTodo />
					<TodoList />
				</TodoListContextProvider>
			</div>
		</div>
	);
}
