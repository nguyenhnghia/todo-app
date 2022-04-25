import React, { useContext } from "react";
import { TodoListContext } from "../../context/todo-list-context";
import { TodoTask } from "../todo-task/TodoTask";

import "./style/TodoList.scss";

export const TodoList = () => {
	const { todoList } = useContext(TodoListContext);

	const todoListRendered =
		todoList.length > 0 ? (
			todoList.map((todoID) => {
				const { title, complete } = JSON.parse(
					localStorage.getItem(todoID)
				);
				return (
					<div className="list_item" key={todoID}>
						<TodoTask
							todoID={todoID}
							title={title}
							complete={complete}
						/>
					</div>
				);
			})
		) : (
			<div className="list-empty">Let's add some thing to do</div>
		);

	return <div className="todo-list">{todoListRendered}</div>;
};
