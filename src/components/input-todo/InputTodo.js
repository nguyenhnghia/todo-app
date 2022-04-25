import React, { useContext, useRef, useState } from "react";
import { TodoListContext } from "../../context/todo-list-context";

import { ReactComponent as AddIcon } from "./assets/add-circle-line.svg";

import "./style/InputTodo.scss";

export const InputTodo = () => {
	const { addTodo } = useContext(TodoListContext);
	const [value, setValue] = useState("");
	const inputRef = useRef(null);

	const handleChange = (event) => setValue(event.target.value);

	const handleAdd = () => {
		if (value !== "") {
			addTodo(value);
			setValue("");
		}
		inputRef.current.focus();
	};

	const handleAddByEnter = (event) => {
		if (value !== "" && event.key === "Enter") {
			addTodo(value);
			setValue("");
		}
	};

	return (
		<div className="input-todo">
			<input
				ref={inputRef}
				type="text"
				placeholder="input to do"
				autoFocus
				value={value}
				onChange={handleChange}
				onKeyDown={handleAddByEnter}
			/>
			<button className="add-button" onClick={handleAdd}>
				<AddIcon />
			</button>
		</div>
	);
};
