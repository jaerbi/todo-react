import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../todo-list'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const todoData = [
	{ label: 'Learn React', important: false, id: 1 },
	{ label: 'Build first react App', important: true, id: 2 },
	{ label: 'Drink coffee', important: false, id: 3},
];


const App = () => {
	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3}/>
			
			<div className="top-panel d-flex">
				<SearchPanel/>
				<ItemStatusFilter />
			</div>
			<TodoList todos={todoData}/>
		</div>
	);
};

export default App;
