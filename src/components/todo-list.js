import React from "react";

import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {

	const elements = todos.map((todo) => {

		const { id, ...todoProps } = todo;

		return (
			<li key={id} className="list-group-item">
				{/*<TodoListItem*/}
					{/*label={todo.label}*/}
					{/*important={todo.important}*/}
				{/*/>*/}

				<TodoListItem { ...todoProps } />
			</li>
		);
	});

	return (
		<ul className="list-group todo-list">
			{ elements }
		</ul>
	);
};

export default TodoList;
