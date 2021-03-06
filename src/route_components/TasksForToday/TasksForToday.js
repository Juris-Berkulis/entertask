import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { changeTask, deleteTask, deleteTheTaskFromListWithTasksForToday, openTheTask, sortTasksBySign, tasksFiltering } from '../../helper/helper';
import { offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeDictWithListsForTasksFilterWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListDictWithListsForTasksFilterSelector, getTasksListReverseDirectionForTodayTasksSortinBySignSelector, getTasksListTasksKindOfDictByUserUIDSelector, getTasksListTasksKindOfListByUserUIDSelector, getTasksListTasksSignForTodayTasksSortingSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksForTodayUI } from '../../ui_components/TasksForTodayUI';
import { TaskInTasksList } from '../TaskInTasksList/TaskInTasksList';

export const TasksForToday = () => {
    const classes = useStyles();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const history = useNavigate();

    const dispatch = useDispatch();

    const tasksKindOfListByUserUIDSel = useSelector(getTasksListTasksKindOfListByUserUIDSelector(userUID));
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));
    const dictWithListsForTasksFilterSel = useSelector(getTasksListDictWithListsForTasksFilterSelector);
    const tasksSignForTodayTasksSortingSel = useSelector(getTasksListTasksSignForTodayTasksSortingSelector);
    const reverseDirectionForTodayTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTodayTasksSortinBySignSelector);

    const tasksListTasksKindOfListByIdSelForProps = tasksKindOfListByUserUIDSel
    .filter((item) => {
        return (
            item[allSignsForTasksFilter.taskForToday.variable]
        )
    })
    .filter((item) => {
        return (
            tasksFiltering(item, dictWithListsForTasksFilterSel, allSignsForTasksFilter)
        )
    })
    .sort((itemA, itemB) => sortTasksBySign(itemA, itemB, tasksSignForTodayTasksSortingSel, reverseDirectionForTodayTasksSortinBySignSel))
    .map((item) => (
        <TaskInTasksList key={item.taskID} item={item} changeTask={changeTask} deleteTask={deleteTask} openTheTask={openTheTask} deleteTheTaskFromListWithTasksForToday={deleteTheTaskFromListWithTasksForToday} dispatch={dispatch} tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} history={history}></TaskInTasksList>
    ));

    useLayoutEffect(() => {
        dispatch(onTrackingChangeValueInTasksListWithThunkAction(userUID));

        return () => {
            dispatch(offTrackingChangeValueInTasksListWithThunkAction(userUID));
        }
    }, [dispatch, userUID]);

    useLayoutEffect(() => {
        dispatch(onTrackingChangeDictWithListsForTasksFilterWithThunkAction(userUID));

        return () => {
            dispatch(onTrackingChangeDictWithListsForTasksFilterWithThunkAction(userUID));
        }
    }, [dispatch, userUID]);
    
    return (
        <TasksForTodayUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={dictWithListsForTasksFilterSel} changeTask={changeTask} deleteTask={deleteTask} dispatch={dispatch} tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} history={history}></TasksForTodayUI>
    )
};
