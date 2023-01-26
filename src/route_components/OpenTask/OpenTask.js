import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { changeTaskSignValue, getLocalDateAndTime, replaceBrieflyValueToDetailValueOfTheTaskSign, replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys } from '../../helper/helper';
import { getAppSwitchesDeviceOnTheNetworkSelector } from '../../store/AppSwitches/Selectors';
import { closeTaskAction } from '../../store/Tasks/Action';
import { getTasksListOpenTaskSelector, getTasksListTasksKindOfDictByUserUIDSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { OpenTaskUI } from '../../ui_components/OpenTaskUI';

export const OpenTask = (props) => {
    const classes = useStyles();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const dispatch = useDispatch();

    const tasksListOpenTaskIDSel = useSelector(getTasksListOpenTaskSelector);
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));
    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);

    const tasksListOpenTaskSel = tasksKindOfDictByUserUIDSel[tasksListOpenTaskIDSel] || false;

    const [someTaskIsOpen, setSomeTaskIsOpen] = useState(false);

    const closeTheTask = () => {
        dispatch({
            type: closeTaskAction.type,
        });
    };

    useEffect(() => {
        let isObjectEmpty = true;

        // eslint-disable-next-line no-unused-vars
        for (let _ in tasksListOpenTaskSel) {
            isObjectEmpty = false;
            break;
        }

        if (isObjectEmpty) {
            setSomeTaskIsOpen(false);
        } else {
            setSomeTaskIsOpen(true);
        }
    }, [tasksListOpenTaskSel]);
    
    return (
        <OpenTaskUI classes={classes} closeTheTask={closeTheTask} tasksListOpenTaskSel={replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys(tasksListOpenTaskSel)} someTaskIsOpen={someTaskIsOpen} changeTask={props.changeTask} deleteTask={props.deleteTask} characterToAutocompleteEmptyTaskSign={characterToAutocompleteEmptyTaskSign} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history} replaceBrieflyValueToDetailValueOfTheTaskSign={replaceBrieflyValueToDetailValueOfTheTaskSign} allSignsForTasksFilter={allSignsForTasksFilter} userUID={userUID} deviceOnTheNetworkSel={deviceOnTheNetworkSel} changeTaskSignValue={changeTaskSignValue} getLocalDateAndTime={getLocalDateAndTime}></OpenTaskUI>
    )
};
