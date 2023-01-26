import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allSignsForTasksFilter } from '../../data/consts';
import { isMobileDevice } from '../../helper/helper';
import { isFocusOnInputForTasksLookupAction, isStrictSearchAction, signForInputForTasksLookupAction, valueInInputForTasksLookupAction } from '../../store/Tasks/Action';
import { getTasksListIsStrictSearchSelector, getTasksListSignForInputForTasksLookupSelector, getTasksListValueInInputForTasksLookupSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksSearchUI } from '../../ui_components/TasksSearchUI';

export const TasksSearch = (props) => {
    const classes = useStyles();

    const isMobileDeviceBoolean = isMobileDevice();

    const dispatch = useDispatch();

    const inputRef = useRef(null);

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

    const closeTasksSearchSetings = () => {
        setIsTasksSearchSetingsVisibility(false);
    };

    const putFocusOnSearchInputField = () => {
        inputRef.current.focus();
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
            <p className={`${classes.tasksSearch__settingItem} ${signForInputForTasksLookupSel === false && classes.tasksSearch__settingItem_active}`} onClick={() => {
                setTaskSignsForTasksFilteringByInputField();
                closeTasksSearchSetings();
            }} key={value}>{value}</p>
        );

        return list
    };

    const tasksSignsListForTasksFilteringByInputField = pushItemToList(
        setListWithTaskSignsForTasksFilteringByInputField(allSignsForTasksFilter).sort((a, b) => a.showForInputFilter - b.showForInputFilter).map((taskSign) => (
            <p className={`${classes.tasksSearch__settingItem} ${signForInputForTasksLookupSel === taskSign.variable && classes.tasksSearch__settingItem_active}`} onClick={() => {
                setTaskSignsForTasksFilteringByInputField(taskSign.variable);
                closeTasksSearchSetings();
            }} key={taskSign.variable}>{taskSign.decodingIntoRusShort}</p>
        ))
    );

    const focusIsOnInputForTasksLookup = useCallback(() => {
        dispatch({
            type: isFocusOnInputForTasksLookupAction.type,
            payload: true,
        });
    }, [dispatch]);

    const focusIsNotOnInputForTasksLookup = useCallback(() => {
        dispatch({
            type: isFocusOnInputForTasksLookupAction.type,
            payload: false,
        });
    }, [dispatch]);

    useEffect(() => {
        focusIsNotOnInputForTasksLookup();
    }, [focusIsNotOnInputForTasksLookup]);

    return (
        <TasksSearchUI classes={classes} onSaveValueForTasksLookupFromInput={onSaveValueForTasksLookupFromInput} changeTasksSearchMode={changeTasksSearchMode} valueInInputForTasksLookupSel={valueInInputForTasksLookupSel} isTasksSearchSetingsVisibility={isTasksSearchSetingsVisibility} toggleTasksSearchSetingsVisibility={toggleTasksSearchSetingsVisibility} isStrictSearchSel={isStrictSearchSel} isMobileDeviceBoolean={isMobileDeviceBoolean} tasksSignsListForTasksFilteringByInputField={tasksSignsListForTasksFilteringByInputField} signForInputForTasksLookupSel={signForInputForTasksLookupSel} allSignsForTasksFilter={allSignsForTasksFilter} focusIsOnInputForTasksLookup={focusIsOnInputForTasksLookup} focusIsNotOnInputForTasksLookup={focusIsNotOnInputForTasksLookup} inputRef={inputRef} putFocusOnSearchInputField={putFocusOnSearchInputField} closeTasksSearchSetings={closeTasksSearchSetings}></TasksSearchUI>
    )
};
