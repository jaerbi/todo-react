import React from "react";

import './search-panel.css';

const SearchPanel = () => {
	const searchText = 'Type here to search';
	const searchStyle = {
		outline: 'none',
		padding: '8px 12px',
		color: '#333'
	};
	return (
		<div className="d-flex">
			<input
				className="search-input"
				style={searchStyle}
				type="text"
				placeholder={searchText}/>
		</div>
		
	);
};

export default SearchPanel;