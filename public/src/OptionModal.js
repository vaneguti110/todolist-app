import React from 'react';
import Modal from 'react-modal';

//stateless function  arrow function
//onequestClose means when you have a pop out message you can use the escape function or click outside of the pop out and it will close  
const OptionModal = (props) => {
	<Modal
		isOpen={true}
		onRequestClose={props.handleClearSelectedOption}
		ContentLabel="Selected Option"
		closeTimeOutMS={200}
		className="modal">

		<h3 className="modal__title">Selected Option</h3>
		//first shows context of h3, then && is the dinamic text in this case test when you look in the browser
		{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
		<button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
	</Modal>

};

export default OptionModal;


//Pass that into OptionModal
//Call it on button click
