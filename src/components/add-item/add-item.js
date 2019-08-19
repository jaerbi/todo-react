import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {
	
	render() {
		const { onAddItem } = this.props;
		return (
			<div className="add-item">
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={ () => onAddItem(`TEST TEXT ${Math.floor(Math.random()*1000)}`) }
				>Add Item
				</button>
			</div>
		);
	}
}