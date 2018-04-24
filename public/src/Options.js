import React from 'react';
//past this option since later you see mention Option in the file
import Option from './Option';

//stateless component options
const Options = (props) => (
	<div>
		<div className = "widget-header">
			<h3 className = "widget-header-title">Your Options</h3>
			<button className = "button button--link" onClick={props.handleDeleteOptions}>RemoveAll</button>
		</div>
		{props.options.length === 0 && <p className="widget-message">Please add an option to get started!</p>}
		{	
			props.options.map((option, index) => (
				<Option 
					key= {option} 
					optionText={option} 
					count={count + 1} 	
					handleDeleteOption={props.handleDeleteOption}
				/>
			))
		}
	</div>	
);
export default Options;