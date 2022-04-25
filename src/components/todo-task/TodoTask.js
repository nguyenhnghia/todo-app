import React, { useContext } from "react";
import { TodoListContext } from "../../context/todo-list-context/TodoListContextProvider";

import { ReactComponent as CloseIcon } from "./assets/close-line.svg";

import "./style/TodoTask.scss";

export const TodoTask = ({
	todoID = "",
	title = "unknown task",
	complete = false,
}) => {
	const { removeTodo, toggleTodo } = useContext(TodoListContext);
	return (
		<div className={`todo-task${complete ? " completed" : ""}`}>
			<span
				className="todo-task_title"
				onClick={() => toggleTodo(todoID)}>
				{title}
				{complete ? " (completed)" : ""}
			</span>
			<span
				className="todo-task_remove"
				onClick={() => removeTodo(todoID)}>
				<CloseIcon />
			</span>
		</div>
	);
};
