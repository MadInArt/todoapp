import React from 'react';
import PropTypes from 'prop-types';
import './todo-input.css';


const ToDoInput = ({value, onChange, onKeyPress, onClick}) => (

	<div className='todo-input-wrapper'>
		<i className="fas fa-plus"
			onClick={onClick}
		/>
		<input
			className='todo-input'
			placeholder='Add new task'
			value={value}
			onChange={onChange}
			onKeyPress={onKeyPress}/>
	</div>
);

ToDoInput.propTypes ={
	onChange: PropTypes.func,
	value: PropTypes.string,
	onKeyPress:PropTypes.func,
	onClick:PropTypes.func,
}

ToDoInput.defaultTypes ={
	onChange:() => {},
	value:'',
	onKeyPress:()=>{},
	onClick: () => {},
}

export default ToDoInput;