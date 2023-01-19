import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isStrictSearchAction, valueInInputForTasksLookupAction } from '../../store/Tasks/Action';
import { getTasksListIsStrictSearchSelector, getTasksListValueInInputForTasksLookupSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksSearchUI } from '../../ui_components/TasksSearchUI';

export const TasksSearch = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [isTasksSearchSetingsVisibility, setIsTasksSearchSetingsVisibility] = useState(false);

    const valueInInputForTasksLookupSel = useSelector(getTasksListValueInInputForTasksLookupSelector);
    const isStrictSearchSel = useSelector(getTasksListIsStrictSearchSelector);

    const onSaveValueForTasksLookupFromInput = (event) => {
        dispatch({
            type: valueInInputForTasksLookupAction.type,
            payload: event.target.value,
        })
    };

    const changeTasksSearchMode = () => {
        console.log('111')

        dispatch({
            type: isStrictSearchAction.type,
            payload: !isStrictSearchSel,
        });
    };

    const toggleTasksSearchSetingsVisibility = () => {
        setIsTasksSearchSetingsVisibility(!isTasksSearchSetingsVisibility);
    };

    return (
        <TasksSearchUI classes={classes}  onSaveValueForTasksLookupFromInput={onSaveValueForTasksLookupFromInput} changeTasksSearchMode={changeTasksSearchMode} valueInInputForTasksLookupSel={valueInInputForTasksLookupSel} isTasksSearchSetingsVisibility={isTasksSearchSetingsVisibility} toggleTasksSearchSetingsVisibility={toggleTasksSearchSetingsVisibility} isStrictSearchSel={isStrictSearchSel}></TasksSearchUI>
    )
};
