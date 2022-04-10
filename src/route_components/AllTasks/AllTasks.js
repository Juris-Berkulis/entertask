import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListTasksKindOfListByUserUID } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { AllTasksUI } from '../../ui_components/AllTasksUI';

export const AllTasks = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const tasksListTasksKindOfListByIdSel = useSelector(getTasksListTasksKindOfListByUserUID('userUID'));

    const tasksListTasksKindOfListByIdSelForProps = tasksListTasksKindOfListByIdSel.reverse().map((item) => (
        <li key={item.taskCreateAt}>{item.taskName}</li>
    ));

    useLayoutEffect(() => {
        dispatch(onTrackingChangeValueInTasksListWithThunkAction('userUID'));

        return () => {
            dispatch(offTrackingChangeValueInTasksListWithThunkAction('userUID'));
        }
    }, [dispatch]);

    return (
        <AllTasksUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps}></AllTasksUI>
    )
};
