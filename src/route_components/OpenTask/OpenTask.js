import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { closeTaskAction } from '../../store/Tasks/Action';
import { getTasksListOpenTaskSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { OpenTaskUI } from '../../ui_components/OpenTaskUI';

export const OpenTask = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const tasksListOpenTaskSel = useSelector(getTasksListOpenTaskSelector);

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
        <OpenTaskUI classes={classes} closeTheTask={closeTheTask} tasksListOpenTaskSel={tasksListOpenTaskSel} someTaskIsOpen={someTaskIsOpen} changeTask={props.changeTask} deleteTask={props.deleteTask} characterToAutocompleteEmptyTaskSign={characterToAutocompleteEmptyTaskSign} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history}></OpenTaskUI>
    )
};
