import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { addTheTaskInListWithTasksForToday, changeTask, deleteTask, deleteTheTaskFromListWithTasksForToday, openTheTask, sortTasksBySign, tasksFiltering } from '../../helper/helper';
import { offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeDictWithListsForTasksFilterWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListDictWithListsForTasksFilterSelector, getTasksListReverseDirectionForTasksSortinBySignSelector, getTasksListTasksKindOfDictByUserUIDSelector, getTasksListTasksKindOfListByUserUIDSelector, getTasksListTasksSignForTasksSortingSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { AllTasksUI } from '../../ui_components/AllTasksUI';
import { TaskInTasksList } from '../TaskInTasksList/TaskInTasksList';

export const AllTasks = () => {
    const classes = useStyles();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const history = useNavigate();

    const dispatch = useDispatch();

    const tasksKindOfListByUserUIDSel = useSelector(getTasksListTasksKindOfListByUserUIDSelector(userUID));
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));
    const dictWithListsForTasksFilterSel = useSelector(getTasksListDictWithListsForTasksFilterSelector);
    const tasksSignForTasksSortingSel = useSelector(getTasksListTasksSignForTasksSortingSelector);
    const reverseDirectionForTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTasksSortinBySignSelector);

    const tasksListTasksKindOfListByIdSelForProps = tasksKindOfListByUserUIDSel
    .filter((item) => {
        return (
            tasksFiltering(item, dictWithListsForTasksFilterSel, allSignsForTasksFilter)
        )
    })
    .sort((itemA, itemB) => sortTasksBySign(itemA, itemB, tasksSignForTasksSortingSel, reverseDirectionForTasksSortinBySignSel))
    .map((item) => (
        <TaskInTasksList key={item.taskID} item={item} changeTask={changeTask} deleteTask={deleteTask} openTheTask={openTheTask} addTheTaskInListWithTasksForToday={addTheTaskInListWithTasksForToday} deleteTheTaskFromListWithTasksForToday={deleteTheTaskFromListWithTasksForToday} history={history}></TaskInTasksList>
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
        <AllTasksUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={dictWithListsForTasksFilterSel} changeTask={changeTask} deleteTask={deleteTask} dispatch={dispatch} tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} history={history}></AllTasksUI>
    )
};
