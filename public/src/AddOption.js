import React from 'react';


//AddOption -> AddOption component here 
export default class AddOption extends React.Component {
	//Es6 class transform properties 
	state = {
		error: undefined
	}; 
	//when using this far down we need to make a constructor
	// constructor(props) {
	// 	super(props);
	// 	this.handleAddOption = this.handleAddOption.bind(this);
	// 	//comment this since it's called state before to do it from es6 to class method
	// 	// this.state = {
	// 	// 	error: undefined
	// 	// };
	// }
	
	handleAddOption = (e) => {
		//prevent the default refresh browser
		e.preventDefault();
		//console.log('testing');
		//add trim at the end to prevent enter space in the form
		const option = e.target.elements.option.value.trim;
		const error = this.props.handleAddOption(option);
		
		this.setState(() => ({error}));
		
		if (!error) {
		e.target.elements.value = ''; //input when introducing data gets clear empty
		}
		/*this.setState(() => {
			return {error};
		});*/
		//if (option) {
		//	this.props.handleAddOption(option);
		//}
	};
	render() {
		return (
			<div>
				{this.state.error} && <p className = "add-option-error">{this.state.error}</p>
				<form className = "add-option" onSubmit={this.handleAddOption}> 
					<input className = "add-option__input" type="text"name="option"/>
					<button className = "button">Add Option</button>
				</form>
			//AddOption component here
			//Options:{this.props.optionText}
			//note <Option></Option> = <Option />, we need to add this so be inject insde after options nest component
			//<Option />
			</div>
		);	
	}
}

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));





