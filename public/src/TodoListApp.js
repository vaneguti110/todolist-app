import react from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

//instructions for Es6 class properties
//pull the state out of the constructor 
//convert all 4 event handlers to class properties (arrow functions)
//delete the contructor completely
//start with new class properties and end with methods


export default class TodoListApp extends React.component {
	state = {
		options: [],
		selectedOption: undefined
	};
	//delete the constructor
	// constructor(props) {
	// 	super(props);
	// 	this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
	// 	this.handlePick = this.handlePick.bind(this);
	// 	this.handleAddOption = this.handleAddOption.bind(this);
	// 	this.handleDeleteOption = this.handleDeleteOption.bind(this);
	// 	//comment this since it's called state before to do it as es6 
	// 	// this.state = {
	// 	// options: []
	// 	// //options: props.options omit for the exercise saving localstorage count
	// 	// //options: []	
	// 	// };
	// }
	//expression above long 5 lines of code
	handleDeleteOptions = () => {
	/*	this.setState(() => {
			return {
			options: []
			},
		});*/
	//this is the same as 
		this.setState(() =>({options: []}));
	/*
		this.setState(() =>({
			options: []
		}));
	*/
	};

	//Create a new event handle in IndecisionApp that clears selectedOption state
	handleClearSelectedOption = () => {
		this.setState(() => ({selectedOption: undefined}));
	};

    ////removing individual options
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));

	};
	//arrow function is shorter than the expression above
	//const num = () => {}//function body this will be undefined
	//const num = () => ({}) //return an object 

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.app.options.length);
		const option =  this.state.app.options[randomNum];
		//alert(option);
		//use setState to set selectedOption
		this.setState = (() => ({
			selectedOption: option
		}));
	};
	handleAddOption = (option) => {
		//if there is a empty string show
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This otion already exists';
		}//else clause short version
		this.setState((prevState) => ({options: prevState.options.concat(option)}));
		//comment long version
		/*this.setState((prevState) => {
			return{
			//concat to add two array 
			options: prevState.options.concat(option)
			}; 			
		});*/
	};
//lifecycle method use in classes not in stateless, 
componentDidMount() = {
	try {
		const json = localStorage.getItem('options');
		const options = JSON.parse(json);
		//if statement are options show
		if(options) {
		this.setState(() => ({option}));
		}
	} catch (e) {
	//Do nothing at all
    }
}
//another lifecycle method component did update is when you change something in the live server or add something
	componentDidUpdate(prevProps, prevState) = {
	//if statement when value diffrent than 0 update
		if (prevState.options.length !== this.state.optionslength) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options',json);
			//console.log('saving data');
		}
	}
//another liefcycle method componentwillunmount it shows before goes away, rarely used
	componentWillUnmount() = {
		console.log('componentWillUnmount');
	}

	render() {
		const title = 'TodoList';
		const subtitle = 'Put your life in the hands of a computer';
		
		return (
			<div>
				//to use attribute we call props in react 
				<Header title={title} subtitle={subtitle} />
				<div className = "container">
					<Action 
						hasOptions = {this.state.options.length > 0}
						handlePick = {this.handlePick}>
					/>
					<div className = "widget">
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOption}>
						/>
						<AddOption
							handleAddOption={this.handleAddOption}> 
						/>					
					</div>
				</div>
				
				<OptionModal
					selectedOption = {this.state.selectedOption}
					handleClearSelectedOption = {this.handleClearSelectedOption}
				/>
			</div>

		);

	}
}