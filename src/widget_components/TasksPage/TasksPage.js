import React from 'react';
import { isMobileDevice } from '../../helper/helper';
import { useStyles } from '../../styles/Style';
import { TasksPageUI } from '../../ui_components/TasksPageUI';

export const TasksPage = (props) => {
    const classes = useStyles();

    const isMobileDeviceBoolean = isMobileDevice();
    
    return (
        <TasksPageUI classes={classes} allAppComponentsWithPageTitle={props.allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={props.tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={props.dictWithListsForTasksFilterSel} changeTask={props.changeTask} deleteTask={props.deleteTask} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history} isMobileDeviceBoolean={isMobileDeviceBoolean}></TasksPageUI>
    )
};
