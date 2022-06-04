import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { isMobileDevice, replaceBrieflyValueToDetailValueOfTheTaskSign, replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys } from '../../helper/helper';
import { getAppSwitchesDeviceOnTheNetworkSelector } from '../../store/AppSwitches/Selectors';
import { changeTaskSignValueWithThunkAction, deleteExtraSignOfTaskFilteringWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListTasksKindOfDictByUserUIDSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TaskInTasksListUI } from '../../ui_components/TaskInTasksListUI';

export const TaskInTasksList = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const isMobileDeviceBoolean = isMobileDevice();

    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));
    
    const changeTaskSignValue = (userUID, taskUTCInMilliseconds, editTaskSign, editTaskSignValue) => {
        const thisTaskWillBeEdited = tasksKindOfDictByUserUIDSel[taskUTCInMilliseconds];

        let deleteTaskSignIsFind = false;
        
        for (let specificTaskId in tasksKindOfDictByUserUIDSel) {
            if (tasksKindOfDictByUserUIDSel[specificTaskId][editTaskSign]) {
                if (+specificTaskId === taskUTCInMilliseconds) {
                    continue;
                } else if (+specificTaskId !== taskUTCInMilliseconds) {
                    if (tasksKindOfDictByUserUIDSel[specificTaskId][editTaskSign] === thisTaskWillBeEdited[editTaskSign]) {
                        deleteTaskSignIsFind = true;
                        break;
                    } else if (tasksKindOfDictByUserUIDSel[specificTaskId][editTaskSign] !== thisTaskWillBeEdited[editTaskSign]) {
                        continue;
                    }
                }
            }
        }

        if (!deleteTaskSignIsFind) {
            dispatch(deleteExtraSignOfTaskFilteringWithThunkAction(userUID, editTaskSign, thisTaskWillBeEdited[editTaskSign]));
        }

        dispatch(changeTaskSignValueWithThunkAction(userUID, taskUTCInMilliseconds, editTaskSign, editTaskSignValue))
    };
    
    return (
        <TaskInTasksListUI classes={classes} item={replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys(props.item)} characterToAutocompleteEmptyTaskSign={characterToAutocompleteEmptyTaskSign}  changeTask={props.changeTask} deleteTask={props.deleteTask} openTheTask={props.openTheTask} addTheTaskInListWithTasksForToday={props.addTheTaskInListWithTasksForToday} deleteTheTaskFromListWithTasksForToday={props.deleteTheTaskFromListWithTasksForToday} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history} replaceBrieflyValueToDetailValueOfTheTaskSign={replaceBrieflyValueToDetailValueOfTheTaskSign} allSignsForTasksFilter={allSignsForTasksFilter} isMobileDeviceBoolean={isMobileDeviceBoolean} userUID={userUID} deviceOnTheNetworkSel={deviceOnTheNetworkSel} changeTaskSignValue={changeTaskSignValue}></TaskInTasksListUI>
    )
};
