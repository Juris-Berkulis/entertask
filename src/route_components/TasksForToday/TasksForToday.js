import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { changeTask, deleteTask, deleteTheTaskFromListWithTasksForToday, openTheTask, sortTasksBySign, tasksFiltering } from '../../helper/helper';
import { getAppSwitchesSelectTodayTaskIDSelector } from '../../store/AppSwitches/Selectors';
import { changeTaskSignValueWithThunkAction, offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeDictWithListsForTasksFilterWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction, reverseDirectionForTodayTasksSortinBySignAction, tasksSignForTodayTasksSortingAction } from '../../store/Tasks/Action';
import { getTasksListDictWithListsForTasksFilterSelector, getTasksListReverseDirectionForTodayTasksSortinBySignSelector, getTasksListTasksKindOfDictByUserUIDSelector, getTasksListTasksKindOfListByUserUIDSelector, getTasksListTasksSignForTodayTasksSortingSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksForTodayUI } from '../../ui_components/TasksForTodayUI';
import { TaskInTasksList } from '../TaskInTasksList/TaskInTasksList';

export const TasksForToday = () => {
    const classes = useStyles();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const history = useNavigate();

    const dispatch = useDispatch();

    const selectTodayTaskRef = useRef(null);
    const unselectTodayTaskRef = useRef(null);

    const tasksKindOfListByUserUIDSel = useSelector(getTasksListTasksKindOfListByUserUIDSelector(userUID));
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));
    const dictWithListsForTasksFilterSel = useSelector(getTasksListDictWithListsForTasksFilterSelector);
    const tasksSignForTodayTasksSortingSel = useSelector(getTasksListTasksSignForTodayTasksSortingSelector);
    const reverseDirectionForTodayTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTodayTasksSortinBySignSelector);
    const selectTodayTaskIDSel = useSelector(getAppSwitchesSelectTodayTaskIDSelector);

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
        <TaskInTasksList key={item.taskID} item={item} changeTask={changeTask} deleteTask={deleteTask} openTheTask={openTheTask} deleteTheTaskFromListWithTasksForToday={deleteTheTaskFromListWithTasksForToday} history={history} selectTodayTaskRef={selectTodayTaskRef} unselectTodayTaskRef={unselectTodayTaskRef}></TaskInTasksList>
    ));

    useEffect(() => {
        tasksListTasksKindOfListByIdSelForProps.forEach((renderedTask, index) => {
            dispatch(changeTaskSignValueWithThunkAction(userUID, renderedTask.props.item.taskID, allSignsForTasksFilter.todayTaskNumber.variable, index, false));
        });
    }, [dispatch, tasksListTasksKindOfListByIdSelForProps, tasksSignForTodayTasksSortingSel, userUID]);

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
    
    useEffect(() => {
        const moveTask = (event) => {
            event.preventDefault();

            if (
                tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel] 
                && 
                (
                    (
                        (
                            event.code === 'KeyW' 
                            || 
                            event.code === 'ArrowUp'
                        ) 
                        && 
                        tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel][allSignsForTasksFilter.todayTaskNumber.variable] > 0
                    ) 
                    || 
                    (
                        (
                            event.code === 'KeyS' 
                            || 
                            event.code === 'ArrowDown'
                        ) 
                        && 
                        tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel][allSignsForTasksFilter.todayTaskNumber.variable] < tasksListTasksKindOfListByIdSelForProps.length - 1
                    )
                )
            ) {
                dispatch({
                    type: tasksSignForTodayTasksSortingAction.type,
                    payload: allSignsForTasksFilter.todayTaskNumber.variable,
                });

                dispatch({
                    type: reverseDirectionForTodayTasksSortinBySignAction.type,
                    payload: false,
                });

                if (
                    (
                        event.code === 'KeyW' 
                        || 
                        event.code === 'ArrowUp'
                    ) 
                    && 
                    tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel][allSignsForTasksFilter.todayTaskNumber.variable] > 0
                ) {
                    let previousTaskID = false;
                    for (let renderedTaskIndex in tasksListTasksKindOfListByIdSelForProps) {
                        if (tasksListTasksKindOfListByIdSelForProps[renderedTaskIndex].props.item[allSignsForTasksFilter.taskID.variable] === selectTodayTaskIDSel) {
                            previousTaskID = tasksListTasksKindOfListByIdSelForProps[+renderedTaskIndex-1].props.item[allSignsForTasksFilter.taskID.variable]
                            break;
                        }
                    }
    
                    if (previousTaskID) {
                        dispatch(changeTaskSignValueWithThunkAction(userUID, tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel].taskID, allSignsForTasksFilter.todayTaskNumber.variable, tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel][allSignsForTasksFilter.todayTaskNumber.variable]-1, false));
                        dispatch(changeTaskSignValueWithThunkAction(userUID, tasksKindOfDictByUserUIDSel[previousTaskID].taskID, allSignsForTasksFilter.todayTaskNumber.variable, tasksKindOfDictByUserUIDSel[previousTaskID][allSignsForTasksFilter.todayTaskNumber.variable]+1, false));
                    }
                }
    
                if (
                    (
                        event.code === 'KeyS' 
                        || 
                        event.code === 'ArrowDown'
                    ) 
                    && 
                    tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel][allSignsForTasksFilter.todayTaskNumber.variable] < tasksListTasksKindOfListByIdSelForProps.length - 1
                ) {
                    let nextTaskID = false;
                    for (let renderedTaskIndex in tasksListTasksKindOfListByIdSelForProps) {
                        if (tasksListTasksKindOfListByIdSelForProps[renderedTaskIndex].props.item[allSignsForTasksFilter.taskID.variable] === selectTodayTaskIDSel) {
                            nextTaskID = tasksListTasksKindOfListByIdSelForProps[+renderedTaskIndex+1].props.item[allSignsForTasksFilter.taskID.variable]
                            break;
                        }
                    }
    
                    if (nextTaskID) {
                        dispatch(changeTaskSignValueWithThunkAction(userUID, tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel].taskID, allSignsForTasksFilter.todayTaskNumber.variable, tasksKindOfDictByUserUIDSel[selectTodayTaskIDSel][allSignsForTasksFilter.todayTaskNumber.variable]+1, false));
                        dispatch(changeTaskSignValueWithThunkAction(userUID, tasksKindOfDictByUserUIDSel[nextTaskID].taskID, allSignsForTasksFilter.todayTaskNumber.variable, tasksKindOfDictByUserUIDSel[nextTaskID][allSignsForTasksFilter.todayTaskNumber.variable]-1, false));
                    }
                }

                if (selectTodayTaskRef && selectTodayTaskRef.current) {
                    selectTodayTaskRef.current.scrollIntoView({block: "center", behavior: "smooth"});
                }
            }
        };

        if (window.addEventListener) {
            window.addEventListener('keydown', moveTask);
            return () => window.removeEventListener('keydown', moveTask);
        } else if (window.attachEvent) {
            window.attachEvent('keydown', moveTask);
            return () => window.detachEvent('keydown', moveTask);
        }
    }, [dispatch, tasksKindOfDictByUserUIDSel, selectTodayTaskIDSel, userUID, tasksListTasksKindOfListByIdSelForProps]);

    return (
        <TasksForTodayUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={dictWithListsForTasksFilterSel} changeTask={changeTask} deleteTask={deleteTask} dispatch={dispatch} tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} history={history}></TasksForTodayUI>
    )
};
