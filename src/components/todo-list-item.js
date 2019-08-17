import React from 'react';

import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {

	const colorImp = {
		color: important ? 'crimson' : 'black',
		fontWeight: important ? 'bold' : 'normal',
	};
	return (
		<div className="todo-list-item">
			<span
				className="todo-list-item-label"
				style={colorImp}
			>{ label }</span>
			<button type="button" className="btn btn-outline-danger btn-sm float-right">
				<i className="fa fa-trash-o"/>
			</button>
			<button type="button" className="btn btn-outline-success btn-sm float-right">
				<i className="fa fa-exclamation"/>
			</button>
		</div>
	);
};

export default TodoListItem;