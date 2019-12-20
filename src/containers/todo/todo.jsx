import React from 'react';
import './todo.css';

import { addTaskOnPress,addTaskOnClick, removeTask, completeTask,changeFilter } from '../../actions/actionCreator';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';



class ToDo extends React.Component {
	state = {
		taskText:'',
	}
	handleInputChange = ({target: {value} }) => {
		this.setState({
			taskText:value,
		})
	}

	addTaskOnClick = () => {
		  const { taskText } = this.state;
		  if (taskText.length > 3) {
			const {addTaskOnClick} = this.props;
		addTaskOnClick((new Date()).getTime(), taskText, false);
		
		this.setState({
			taskText:'',
				})
	}}


	addTaskOnPress = ({key}) => {
		  const { taskText } = this.state;

		if (taskText.length > 3 && key === 'Enter') {
			const {addTaskOnPress} = this.props;

		addTaskOnPress((new Date()).getTime(), taskText, false);
		
		this.setState({
			taskText:'',
				})
			}
		}

	filterTask = (tasks,activeFilter) => {
		switch(activeFilter){
			case 'completed':
				return tasks.filter(task => task.isCompleted);
			case 'active':
				return tasks.filter(task => !task.isCompleted);
			default:
			return tasks;
		}
	}
	getActiveTask = tasks => tasks.filter(task =>!task.isCompleted).length;

	render(){

	
	const { taskText} = this.state;
	const { tasks, removeTask, completeTask, filter, changeFilter } = this.props;
	const isTasksExist = tasks && tasks.length > 0;
	const filteredTasks = this.filterTask(tasks, filter);
	const counter = this.getActiveTask(tasks);
		return(
			<div className="todo-wrapper">
				<ToDoInput onClick={this.addTaskOnClick} onKeyPress={this.addTaskOnPress} onChange={this.handleInputChange} value={taskText}/>
				{isTasksExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask}/>}
				{isTasksExist && <Footer changeFilter={changeFilter} amount={counter} activeFilter={filter}/>}
			</div>
			);
	}
}


export default connect(({tasks, filter }) => ({
	tasks,
	filter,
}),{addTaskOnPress,addTaskOnClick, removeTask,completeTask, changeFilter})(ToDo);