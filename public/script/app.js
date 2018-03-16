'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template = React.createElement(
	'p',
	null,
	'This is JSX from app.js'
);
var appRoot = document.getElementById('app');

var ToDoListApp = function (_React$component) {
	_inherits(ToDoListApp, _React$component);

	function ToDoListApp(props) {
		_classCallCheck(this, ToDoListApp);

		var _this = _possibleConstructorReturn(this, (ToDoListApp.__proto__ || Object.getPrototypeOf(ToDoListApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(ToDoListApp, [{
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randomNum = Math.floor(Math.random() * this.state.app.options.length);
			var option = this.state.app.options[randomNum];
			alert(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			//if there is a empty string show
			if (!option) {
				return 'Enter valid value to add item';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'This option already exists';
			} //else clause
			this.setState(function (prevState) {
				return {
					//concat to add two array 
					options: prevState.options.concat(option)
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'ToDoListApp';
			var subtitle = 'Put your things to do in the hands of a computer';

			return React.createElement(
				'div',
				null,
				'//to use attribute we call props in react',
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.legth > 0,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions
				}),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption
				})
			);
		}
	}]);

	return ToDoListApp;
}(React.component);

var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			//it will show in console header attribute indecision.
			//console.log(this.props);
			return (
				//return <p>This is from Header</p>;
				React.createElement(
					'div',
					null,
					React.createElement(
						'h1',
						null,
						this.props.title
					),
					'//',
					React.createElement(
						'h1',
						null,
						'To Do List App'
					),
					'//',
					React.createElement(
						'h2',
						null,
						'Put your things to do in the hands of a computer'
					),
					React.createElement(
						'h2',
						null,
						this.props.subtitle
					)
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component2) {
	_inherits(Action, _React$Component2);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.props.handlePick,
						disabled: !this.props.hasOptions
					},
					'What should I do?'
				)
			);
		}
	}]);

	return Action;
}(React.Component);

//Challenge
//Options -> Options component here


var Options = function (_React$component2) {
	_inherits(Options, _React$component2);

	function Options(props) {
		_classCallCheck(this, Options);

		var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
		//we need to call super to get the values previous


		_this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
		return _this4;
	}

	_createClass(Options, [{
		key: 'handleRemoveAll',
		value: function handleRemoveAll() {
			//when we call the console.log below we get an error that is null since we lost the props in order to get it we need to declare a const at the beginning of the script and call it
			console.log(this.props.options);
			//alert('handleRemoveAll');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.props.handleDeleteOptions },
					'RemoveAll'
				),
				'//array that is why we use length //',
				this.props.options.length,
				'//map',
				this.props.options.map(function (option) {
					return React.createElement(
						Option,
						{ key: option, optionText: option },
						' '
					);
				})
			);
		}
	}]);

	return Options;
}(React.component);

//AddOption -> AddOption component here 


var AddOption = function (_React$Component3) {
	_inherits(AddOption, _React$Component3);

	//when using this far down we need to make a constructor
	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this5.handleAddOption = _this5.handleAddOption.bind(_this5);
		return _this5;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			//prevent the default refresh browser
			e.preventDefault();
			//add trim at the end to prevent enter space in the form
			var option = e.target.elements.option.value.trim;
			var error = this.props.handleAddOption(option);
			this.setState(function () {
				return { error: error };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.state.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				),
				'//AddOption component here //Options:',
				this.props.optionText,
				'//note ',
				React.createElement(Option, null),
				' = ',
				React.createElement(Option, null),
				', we need to add this so be inject inside. after options nest component //',
				React.createElement(Option, null)
			);
		}
	}]);

	return AddOption;
}(React.Component);

// nesting indecision app


ReactDOM.render(React.createElement(ToDoListApp, null), document.getElementById('app'));
