import React from 'react';
import { characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { useStyles } from '../../styles/Style';
import { TaskInTasksListUI } from '../../ui_components/TaskInTasksListUI';

export const TaskInTasksList = (props) => {
    const classes = useStyles();
    
    return (
        <TaskInTasksListUI classes={classes} item={props.item} characterToAutocompleteEmptyTaskSign={characterToAutocompleteEmptyTaskSign}  changeTask={props.changeTask} deleteTask={props.deleteTask} openTheTask={props.openTheTask} addTheTaskInListWithTasksForToday={props.addTheTaskInListWithTasksForToday} deleteTheTaskFromListWithTasksForToday={props.deleteTheTaskFromListWithTasksForToday} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history}></TaskInTasksListUI>
    )
};
