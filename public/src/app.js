class ToDoListApp extends React.component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
		options: []	
		};
	}
	handleDeleteOptions() {
		this.setState(() => {
			return {
			options: []
			},
		});
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.app.options.length);
		const option =  this.state.app.options[randomNum];
		alert(option);
	}
	handleAddOption (option) {
		//if there is a empty string show
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}//else clause
		this.setState((prevState) => {
			return{
			//concat to add two array 
			options: prevState.options.concat(option)
			}; 			
		});
	}
	render() {
		const title = 'ToDoListApp';
		const subtitle = 'Put your things to do in the hands of a computer';
		
		return (
			<div>
				//to use attribute we call props in react 
				<Header title={title} subtitle={subtitle}/>
				<Action 
					hasOptions = {this.state.options.legth > 0}
					handlePick = {this.handlePick}
				/>
				<Options 
					options = {this.state.options}
					handleDeleteOptions = {this.handleDeleteOptions}
				/>
				<AddOption 
				handleAddOption = {this.handleAddOption} 
				/>
			</div>

		);

	}
}

class Header extends React.Component {
	render(){
		//it will show in console header attribute indecision.
		//console.log(this.props);
		return (	
		//return <p>This is from Header</p>;
			<div>	
				<h1>{this.props.title}</h1>
				//<h1>To Do List App</h1>
				//<h2>Put your things to do in the hands of a computer</h2>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}
class Action extends React.Component {
	
	render(){
		return (
			<div>
				<button onClick={this.props.handlePick}
				disabled={!this.props.hasOptions}
				>
				What should I do?
				</button>
			</div>
		);
	}
}



//Challenge
//Options -> Options component here
class Options extends React.component {
	constructor(props) {
	//we need to call super to get the values previous
	super(props);
	this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll () {
		//when we call the console.log below we get an error that is null since we lost the props in order to get it we need to declare a const at the beginning of the script and call it
		console.log(this.props.options);
		//alert('handleRemoveAll');
	}
	render() {
		return (
			<div>
			<button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
			//array that is why we use length
			//{this.props.options.length}
			//map
			{this.props.options.map((option) => <Option key= {option} optionText={option}> </>)}
			</div>
		);
	}
}



//AddOption -> AddOption component here 
class AddOption extends React.Component {
//when using this far down we need to make a constructor
	constructor(props) {
	super(props);
	this.handleAddOption = this.handleAddOption.bind(this);
	}
	
	handleAddOption(e){
		//prevent the default refresh browser
		e.preventDefault();
		//add trim at the end to prevent enter space in the form
		const option = e.target.elements.option.value.trim;
		const error = this.props.handleAddOption(option);
		this.setState(() => {
			return: { error };
		});
	}
	render() {
		return (
			<div>
			{this.state.error && <p>{this.state.error}</p>}
			<form onSubmit = {this.state.handleAddOption}> 
				<input type="text"name="option"/>
				<button>Add Option</button>
			</form>
			//AddOption component here
			//Options:{this.props.optionText}
			//note <Option></Option> = <Option />, we need to add this so be inject inside. after options nest component
			//<Option />
			</div>
		);	
	}
}


// nesting indecision app
ReactDOM. render(<ToDoListApp />, document.getElementById('app'));
