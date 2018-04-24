import React from 'react';


//stateless component header
const Header = (props) => (
	<div className = 'container'>
		<div className= 'header'>	
			<h1 className='header__title'>{props.title}</h1>
			{props.subtitle} && <h2 className='header__subtitle'>{props.subtitle}</h2>
		</div>
	</div>	
);

//default prop this is used if we take out the title in render from indecisionapp class
Header.defaultProps = {
	title: 'TodoList',
};

export default Header;