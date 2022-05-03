import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { changeTask, deleteTask, deleteTheTaskFromListWithTasksForToday, openTheTask, sortTasksBySign, tasksFiltering } from '../../helper/helper';
import { offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeDictWithListsForTasksFilterWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListDictWithListsForTasksFilterSelector, getTasksListReverseDirectionForTasksSortinBySignSelector, getTasksListTasksKindOfDictByUserUIDSelector, getTasksListTasksKindOfListByUserUIDSelector, getTasksListTasksSignForTasksSortingSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksForTodayUI } from '../../ui_components/TasksForTodayUI';
import { TaskInTasksList } from '../TaskInTasksList/TaskInTasksList';

export const TasksForToday = () => {
    const classes = useStyles();

    const history = useNavigate();

    const dispatch = useDispatch();

    const tasksKindOfListByUserUIDSel = useSelector(getTasksListTasksKindOfListByUserUIDSelector('userUID'));
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector('userUID'));
    const dictWithListsForTasksFilterSel = useSelector(getTasksListDictWithListsForTasksFilterSelector);
    const tasksSignForTasksSortingSel = useSelector(getTasksListTasksSignForTasksSortingSelector);
    const reverseDirectionForTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTasksSortinBySignSelector);

    // const changeTask = (taskObject) => {
    //     dispatch({
    //         type: editableTaskObjectAction.type,
    //         payload: taskObject,
    //     });

    //     history(allAppComponentsWithPageTitle.edittask.path);
    // };

    // const deleteTask = (taskID) => {
    //     const thisTaskWillBeDeleted = tasksKindOfDictByUserUIDSel[taskID];

    //     for (let deleteTaskSign in thisTaskWillBeDeleted) {
    //         let deleteTaskSignIsFind = false;
    //         for (let specificTaskId in tasksKindOfDictByUserUIDSel) {
    //             if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign]) {
    //                 if (+specificTaskId === taskID) {
    //                     continue;
    //                 } else if (+specificTaskId !== taskID) {
    //                     if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign] === thisTaskWillBeDeleted[deleteTaskSign]) {
    //                         deleteTaskSignIsFind = true;
    //                         break;
    //                     } else if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign] !== thisTaskWillBeDeleted[deleteTaskSign]) {
    //                         continue;
    //                     }
    //                 }
    //             }
    //         }

    //         if (!deleteTaskSignIsFind) {
    //             dispatch(deleteExtraSignOfTaskFilteringWithThunkAction(deleteTaskSign, thisTaskWillBeDeleted[deleteTaskSign]));
    //         }
    //     }

    //     deleteTaskWithThunkAction(taskID);
    // };

    // const sortTasksBySign = (itemA, itemB) => {
    //     let propertyA;
    //     let propertyB;

    //     if (tasksSignForTasksSortingSel === allSignsForTasksFilter.taskCreateAt.variable || !tasksSignForTasksSortingSel) {
    //         propertyA = +itemA.taskID;
    //         propertyB = +itemB.taskID;
    //     } else {
    //         propertyA = itemA[tasksSignForTasksSortingSel];
    //         propertyB = itemB[tasksSignForTasksSortingSel];
    //     }

    //     let tasksSortingDirectionSwitch = 1;
    //     if (reverseDirectionForTasksSortinBySignSel) {
    //         tasksSortingDirectionSwitch = -1;
    //     }

    //     if (propertyA > propertyB) {
    //         return 1 * tasksSortingDirectionSwitch
    //     } else if (propertyA < propertyB) {
    //         return -1 * tasksSortingDirectionSwitch
    //     } else {
    //         return 0
    //     }
    // };

    // const openTheTask = (item) => {
    //     dispatch({
    //         type: openTaskAction.type,
    //         payload: item,
    //     });
    // };

    // const deleteTheTaskFromListWithTasksForToday = (taskID) => {
    //     dispatch(deleteTheTaskFromListWithTasksForTodayWithThunkAction(taskID));
    // };

    const tasksListTasksKindOfListByIdSelForProps = tasksKindOfListByUserUIDSel
    .filter((item) => {
        return (
            item[allSignsForTasksFilter.taskForToday.variable]
        )
    })
    .filter((item) => {
        return (
            tasksFiltering(item, dictWithListsForTasksFilterSel, allSignsForTasksFilter)
            // dictWithListsForTasksFilterSel
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable][item.taskID]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable][item.taskCreateAt]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable][item.taskCategory]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable][item.taskName]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable][item.subtaskName]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable][item.taskControl]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable][item.taskDeadline]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable][item.taskDuration]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable][item.taskImportance]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable][item.taskPriority]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable][item.taskStatus]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable][item.taskUrgency]
            // && 
            // dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable][item.taskComment]
        )
    })
    .sort((itemA, itemB) => sortTasksBySign(itemA, itemB, tasksSignForTasksSortingSel, reverseDirectionForTasksSortinBySignSel))
    .map((item) => (
        <TaskInTasksList key={item.taskID} item={item} changeTask={changeTask} deleteTask={deleteTask} openTheTask={openTheTask} deleteTheTaskFromListWithTasksForToday={deleteTheTaskFromListWithTasksForToday} dispatch={dispatch} tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} history={history}></TaskInTasksList>
    ));

    useLayoutEffect(() => {
        dispatch(onTrackingChangeValueInTasksListWithThunkAction('userUID'));

        return () => {
            dispatch(offTrackingChangeValueInTasksListWithThunkAction('userUID'));
        }
    }, [dispatch]);

    useLayoutEffect(() => {
        dispatch(onTrackingChangeDictWithListsForTasksFilterWithThunkAction('userUID'));

        return () => {
            dispatch(onTrackingChangeDictWithListsForTasksFilterWithThunkAction('userUID'));
        }
    }, [dispatch]);
    
    return (
        <TasksForTodayUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={dictWithListsForTasksFilterSel} changeTask={changeTask} deleteTask={deleteTask} dispatch={dispatch} tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} history={history}></TasksForTodayUI>
    )
};
