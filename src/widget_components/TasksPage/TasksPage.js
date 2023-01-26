import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { deleteTheTaskFromListWithTasksForToday, isMobileDevice } from '../../helper/helper';
import { getAppSwitchesDeviceOnTheNetworkSelector } from '../../store/AppSwitches/Selectors';
import { getTasksListValueInInputForTasksLookupSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksPageUI } from '../../ui_components/TasksPageUI';

export const TasksPage = (props) => {
    const classes = useStyles();

    const isMobileDeviceBoolean = isMobileDevice();

    const location = useLocation();

    const dispatch = useDispatch();

    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);
    const valueInInputForTasksLookupSel = useSelector(getTasksListValueInInputForTasksLookupSelector);

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const deleteAllTaskFromListWithTasksForToday = () => {
        for (let i=0; i < props.tasksListTasksKindOfListByIdSelForProps.length; i++) {
            deleteTheTaskFromListWithTasksForToday(userUID, props.tasksListTasksKindOfListByIdSelForProps[i].props.item.taskID, dispatch, deviceOnTheNetworkSel)
        }
    };
    
    return (
        <TasksPageUI classes={classes} allAppComponentsWithPageTitle={props.allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={props.tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={props.dictWithListsForTasksFilterSel} changeTask={props.changeTask} deleteTask={props.deleteTask} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history} isMobileDeviceBoolean={isMobileDeviceBoolean} location={location} deleteAllTaskFromListWithTasksForToday={deleteAllTaskFromListWithTasksForToday} valueInInputForTasksLookupSel={valueInInputForTasksLookupSel}></TasksPageUI>
    )
};
