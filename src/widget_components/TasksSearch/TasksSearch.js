import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allSignsForTasksFilter } from '../../data/consts';
import { isMobileDevice } from '../../helper/helper';
import { isStrictSearchAction, signForInputForTasksLookupAction, valueInInputForTasksLookupAction } from '../../store/Tasks/Action';
import { getTasksListIsStrictSearchSelector, getTasksListSignForInputForTasksLookupSelector, getTasksListValueInInputForTasksLookupSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksSearchUI } from '../../ui_components/TasksSearchUI';

export const TasksSearch = (props) => {
    const classes = useStyles();

    const isMobileDeviceBoolean = isMobileDevice();

    const dispatch = useDispatch();

    const [isTasksSearchSetingsVisibility, setIsTasksSearchSetingsVisibility] = useState(false);

    const valueInInputForTasksLookupSel = useSelector(getTasksListValueInInputForTasksLookupSelector);
    const isStrictSearchSel = useSelector(getTasksListIsStrictSearchSelector);
    const signForInputForTasksLookupSel = useSelector(getTasksListSignForInputForTasksLookupSelector);

    const onSaveValueForTasksLookupFromInput = (event) => {
        dispatch({
            type: valueInInputForTasksLookupAction.type,
            payload: event.target.value,
        })
    };

    const changeTasksSearchMode = () => {
        dispatch({
            type: isStrictSearchAction.type,
            payload: !isStrictSearchSel,
        });
    };

    const toggleTasksSearchSetingsVisibility = () => {
        setIsTasksSearchSetingsVisibility(!isTasksSearchSetingsVisibility);
    };

    const setTaskSignsForTasksFilteringByInputField = (taskSign=false) => {
        dispatch({
            type: signForInputForTasksLookupAction.type,
            payload: taskSign,
        });
    };

    const setListWithTaskSignsForTasksFilteringByInputField = (obj) => {
        const list = [];

        for (let key in obj) {
            if (obj[key].showForInputFilter) {
                list.push(obj[key])
            }
        }

        return list
    };

    const pushItemToList = (list) => {
        const value = 'Все поля';

        list.push(
            <p className={classes.tasksSearch__settingItem} onClick={() => setTaskSignsForTasksFilteringByInputField()} key={value}>{value}</p>
        );

        return list
    };

    const tasksSignsListForTasksFilteringByInputField = pushItemToList(
        setListWithTaskSignsForTasksFilteringByInputField(allSignsForTasksFilter).map((taskSign) => (
            <p className={classes.tasksSearch__settingItem} onClick={() => setTaskSignsForTasksFilteringByInputField(taskSign.variable)} key={taskSign.variable}>{taskSign.decodingIntoRusShort}</p>
        ))
    );

    return (
        <TasksSearchUI classes={classes}  onSaveValueForTasksLookupFromInput={onSaveValueForTasksLookupFromInput} changeTasksSearchMode={changeTasksSearchMode} valueInInputForTasksLookupSel={valueInInputForTasksLookupSel} isTasksSearchSetingsVisibility={isTasksSearchSetingsVisibility} toggleTasksSearchSetingsVisibility={toggleTasksSearchSetingsVisibility} isStrictSearchSel={isStrictSearchSel} isMobileDeviceBoolean={isMobileDeviceBoolean} tasksSignsListForTasksFilteringByInputField={tasksSignsListForTasksFilteringByInputField} signForInputForTasksLookupSel={signForInputForTasksLookupSel} allSignsForTasksFilter={allSignsForTasksFilter}></TasksSearchUI>
    )
};
