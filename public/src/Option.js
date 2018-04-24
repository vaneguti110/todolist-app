import React from 'react';


//stateless functional component option
const Option = (props) => (
	<div className = "option">
		<p>{props.count}. {props.optionText}</p>
		<button className = "button button--link"
			onClick={(e) => {
				props.handleDeleteOption(props.optionText);
			}}
		>
			remove
			</button>
	</div>		
);

export default Option;