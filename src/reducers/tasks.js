import {ADD_TASK, REMOVE_TASK, СOMPLETE_TASK} from '../constans';
import { load } from 'redux-localstorage-simple';

let TASKS = load({namespace:'todo-list'});

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length){
	TASKS = {
		tasks: []
	}
}

// const TASKS = [{

// 	id: 1,
// 	text: 'Learn React.js',
// 	isCompleted:true,
// },
// {

// 	id: 2,
// 	text: 'Learn React Router',
// 	isCompleted:false,
// },
// {

// 	id: 3,
// 	text: 'Learn React Redux',
// 	isCompleted:false,
// },
// {

// 	id: 4,
// 	text: 'Wash dishes',
// 	isCompleted:false,
// },
// {

// 	id: 5,
// 	text: 'Make a bed',
// 	isCompleted:true,
// }];

const tasks =(state = TASKS.tasks, { id,text,isCompleted, type }) => {
	switch(type) {
		case ADD_TASK:
			return [
				...state, {
					id,
					text,
					isCompleted,
				}];
		case REMOVE_TASK:
			return [...state].filter(task=>task.id !== id);
		case СOMPLETE_TASK:
			return [...state].map(task=>{
				if(task.id === id){
				task.isCompleted =!task.isCompleted;
			}
			return task;
		})
			default:
				return state;
	}

}
export default tasks;