import { ADD_TASK, REMOVE_TASK, СOMPLETE_TASK, FILTER_TASK } from '../constans';

export const addTaskOnClick = (id, text, isCompleted) => ({
	type: ADD_TASK,
  id,
  text,
  isCompleted
});


export const addTaskOnPress = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: СOMPLETE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: FILTER_TASK,
  activeFilter,
})