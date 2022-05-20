import React from 'react';
import { useSelector } from 'react-redux';
import { allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { isMobileDevice, replaceBrieflyValueToDetailValueOfTheTaskSign, replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys } from '../../helper/helper';
import { getAppSwitchesDeviceOnTheNetworkSelector } from '../../store/AppSwitches/Selectors';
import { useStyles } from '../../styles/Style';
import { TaskInTasksListUI } from '../../ui_components/TaskInTasksListUI';

export const TaskInTasksList = (props) => {
    const classes = useStyles();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const isMobileDeviceBoolean = isMobileDevice();

    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);
    
    return (
        <TaskInTasksListUI classes={classes} item={replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys(props.item)} characterToAutocompleteEmptyTaskSign={characterToAutocompleteEmptyTaskSign}  changeTask={props.changeTask} deleteTask={props.deleteTask} openTheTask={props.openTheTask} addTheTaskInListWithTasksForToday={props.addTheTaskInListWithTasksForToday} deleteTheTaskFromListWithTasksForToday={props.deleteTheTaskFromListWithTasksForToday} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history} replaceBrieflyValueToDetailValueOfTheTaskSign={replaceBrieflyValueToDetailValueOfTheTaskSign} allSignsForTasksFilter={allSignsForTasksFilter} isMobileDeviceBoolean={isMobileDeviceBoolean} userUID={userUID} deviceOnTheNetworkSel={deviceOnTheNetworkSel}></TaskInTasksListUI>
    )
};
