import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { changeTaskSignValue, isMobileDevice, replaceBrieflyValueToDetailValueOfTheTaskSign, replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys } from '../../helper/helper';
import { selectTodayTaskIDAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesDeviceOnTheNetworkSelector, getAppSwitchesSelectTodayTaskIDSelector } from '../../store/AppSwitches/Selectors';
import { getTasksListTasksKindOfDictByUserUIDSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TaskInTasksListUI } from '../../ui_components/TaskInTasksListUI';

export const TaskInTasksList = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const location = useLocation();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const isMobileDeviceBoolean = isMobileDevice();

    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));
    const selectTodayTaskIDSel = useSelector(getAppSwitchesSelectTodayTaskIDSelector);

    const selectTask = (task) => {
        if (location.pathname === allAppComponentsWithPageTitle.tasksfortoday.path) {
            dispatch({
                type: selectTodayTaskIDAction.type,
                payload: task.taskID,
            });
        }
    };
    
    return (
        <TaskInTasksListUI classes={classes} item={replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys(props.item)} characterToAutocompleteEmptyTaskSign={characterToAutocompleteEmptyTaskSign}  changeTask={props.changeTask} deleteTask={props.deleteTask} openTheTask={props.openTheTask} addTheTaskInListWithTasksForToday={props.addTheTaskInListWithTasksForToday} deleteTheTaskFromListWithTasksForToday={props.deleteTheTaskFromListWithTasksForToday} dispatch={dispatch} tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} history={props.history} replaceBrieflyValueToDetailValueOfTheTaskSign={replaceBrieflyValueToDetailValueOfTheTaskSign} allSignsForTasksFilter={allSignsForTasksFilter} isMobileDeviceBoolean={isMobileDeviceBoolean} userUID={userUID} deviceOnTheNetworkSel={deviceOnTheNetworkSel} changeTaskSignValue={changeTaskSignValue} selectTask={selectTask} selectTodayTaskIDSel={selectTodayTaskIDSel} location={location} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle}></TaskInTasksListUI>
    )
};
