import React, { createContext, useState } from "react";
import { arrGetAllExceptID, generateID } from "../../utils";

const { REACT_APP_lCS_TODOLIST_KEY } = process.env;

export const TodoListContext = createContext();

export const TodoListContextProvider = (props) => {
	const [todoList, setTodoList] = useState(
		JSON.parse(localStorage.getItem(REACT_APP_lCS_TODOLIST_KEY)) || []
	);

	const addTodo = (title) => {
		const taskID = generateID();
		const newTodoList = [...todoList, taskID];
		localStorage.setItem(
			taskID,
			JSON.stringify({ title, complete: false })
		);
		localStorage.setItem(
			REACT_APP_lCS_TODOLIST_KEY,
			JSON.stringify(newTodoList)
		);
		setTodoList(newTodoList);
	};

	const removeTodo = (id) => {
		localStorage.removeItem(id);
		const newTodoList = arrGetAllExceptID(todoList, id);
		localStorage.setItem(
			REACT_APP_lCS_TODOLIST_KEY,
			JSON.stringify(newTodoList)
		);
		setTodoList(newTodoList);
	};

	const toggleTodo = (id) => {
		const target = JSON.parse(localStorage.getItem(id));
		const newTodoList = [...todoList];
		localStorage.setItem(
			id,
			JSON.stringify({ ...target, complete: !target.complete })
		);
		setTodoList(newTodoList);
	};

	return (
		<TodoListContext.Provider
			value={{ todoList, addTodo, removeTodo, toggleTodo }}>
			{props.children}
		</TodoListContext.Provider>
	);
};
