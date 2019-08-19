import React, { Component } from 'react';

import TodoList from '../todo-list'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter';

import './app.css';
//
// const todoData = [
// 	{ label: 'Learn React', important: false, id: 1 },
// 	{ label: 'Build first react App', important: true, id: 2 },
// 	{ label: 'Drink coffee', important: false, id: 3 },
// ];

export default class App extends Component {
	
	state = {
		todoData: [
			{ label: 'Learn React', important: false, id: 1 },
			{ label: 'Build first react App', important: true, id: 2 },
			{ label: 'Drink coffee', important: false, id: 3 },
		]
	};
	
	deleteItem = (id) => {
		
		this.setState(({ todoData }) => {
			const index = todoData.findIndex((el) => el.id === id);
			// const arr = [...todoData];
			// arr.splice(index, 1);
			const newArray = [
				...todoData.slice(0, index),
				...todoData.slice(index + 1)
			];
			
			return {
				todoData: newArray
			}
		})
	};
	
	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={ 1 } done={ 3 }/>
				
				<div className="top-panel d-flex">
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>
				<TodoList
					todos={ this.state.todoData }
					onDeleted={ this.deleteItem }
				/>
			</div>
		);
	}
}
//
// const App = () => {
// 	return (
// 		<div className="todo-app">
// 			<AppHeader toDo={ 1 } done={ 3 }/>
//
// 			<div className="top-panel d-flex">
// 				<SearchPanel/>
// 				<ItemStatusFilter/>
// 			</div>
// 			<TodoList
// 				todos={ todoData }
// 				onDeleted={ (id) => console.log(id) }
// 			/>
// 		</div>
// 	);
// };
//
// export default App;
