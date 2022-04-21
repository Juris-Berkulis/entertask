import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { editableTaskObjectAction } from '../../store/AppSwitches/Action';
import { deleteExtraSignOfTaskFilteringWithThunkAction, deleteTaskWithThunkAction, offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeDictWithListsForTasksFilterWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListDictWithListsForTasksFilterSelector, getTasksListReverseDirectionForTasksSortinBySignSelector, getTasksListTasksKindOfDictByUserUIDSelector, getTasksListTasksKindOfListByUserUIDSelector, getTasksListTasksSignForTasksSortingSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { AllTasksUI } from '../../ui_components/AllTasksUI';

export const AllTasks = () => {
    const classes = useStyles();

    const history = useNavigate();

    const dispatch = useDispatch();

    const tasksKindOfListByUserUIDSel = useSelector(getTasksListTasksKindOfListByUserUIDSelector('userUID'));
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector('userUID'));
    const dictWithListsForTasksFilterSel = useSelector(getTasksListDictWithListsForTasksFilterSelector);
    const tasksSignForTasksSortingSel = useSelector(getTasksListTasksSignForTasksSortingSelector);
    const reverseDirectionForTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTasksSortinBySignSelector);

    const changeTask = (taskObject) => {
        dispatch({
            type: editableTaskObjectAction.type,
            payload: taskObject,
        });

        history(allAppComponentsWithPageTitle.edittask.path);
    };

    const deleteTask = (taskID) => {
        const thisTaskWillBeDeleted = tasksKindOfDictByUserUIDSel[taskID];

        for (let deleteTaskSign in thisTaskWillBeDeleted) {
            let deleteTaskSignIsFind = false;
            for (let specificTaskId in tasksKindOfDictByUserUIDSel) {
                if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign]) {
                    if (+specificTaskId === taskID) {
                        continue;
                    } else if (+specificTaskId !== taskID) {
                        if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign] === thisTaskWillBeDeleted[deleteTaskSign]) {
                            deleteTaskSignIsFind = true;
                            break;
                        } else if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign] !== thisTaskWillBeDeleted[deleteTaskSign]) {
                            continue;
                        }
                    }
                }
            }

            if (!deleteTaskSignIsFind) {
                dispatch(deleteExtraSignOfTaskFilteringWithThunkAction(deleteTaskSign, thisTaskWillBeDeleted[deleteTaskSign]));
            }
        }

        deleteTaskWithThunkAction(taskID);
    };

    const sortTasksBySign = (itemA, itemB) => {
        let propertyA;
        let propertyB;

        if (tasksSignForTasksSortingSel === allSignsForTasksFilter.taskCreateAt || !tasksSignForTasksSortingSel) {
            propertyA = +itemA.taskID;
            propertyB = +itemB.taskID;
        } else {
            propertyA = itemA[tasksSignForTasksSortingSel];
            propertyB = itemB[tasksSignForTasksSortingSel];
        }

        let tasksSortingDirectionSwitch = 1;
        if (reverseDirectionForTasksSortinBySignSel) {
            tasksSortingDirectionSwitch = -1;
        }

        if (propertyA > propertyB) {
            return 1 * tasksSortingDirectionSwitch
        } else if (propertyA < propertyB) {
            return -1 * tasksSortingDirectionSwitch
        } else {
            return 0
        }
    };

    const tasksListTasksKindOfListByIdSelForProps = tasksKindOfListByUserUIDSel
    .filter((item) => {
        return (
            dictWithListsForTasksFilterSel
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable][item.taskID]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable][item.taskCreateAt]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable][item.taskCategory]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable][item.taskName]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable][item.subtaskName]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable][item.taskControl]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable][item.taskDeadline]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable][item.taskDuration]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable][item.taskImportance]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable][item.taskPriority]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable][item.taskStatus]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable][item.taskUrgency]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable][item.taskComment]
        )
    })
    .sort((itemA, itemB) => sortTasksBySign(itemA, itemB))
    .map((item) => (
        <li className={classes.allTasks__taskListItem} key={item.taskID}>
            <div className={classes.allTasks__taskListItemBtnsPannel}>
                <button className={`${classes.allTasks__taskListItemBtn} ${classes.allTasks__taskListItemBtn_change}`} onClick={() => changeTask(item)}>&#9998;</button>
                <button className={`${classes.allTasks__taskListItemBtn} ${classes.allTasks__taskListItemBtn_delete}`} onClick={() => deleteTask(item.taskID)}>&#128465;</button>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Категория: {item.taskCategory}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph} ${classes.allTasks__taskListItemParagraph_taskName}`}>Название: {item.taskName}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Подзадача: {item.subtaskName}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Приоритет: {item.taskPriority}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Контроль: {item.taskControl}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Срочность: {item.taskUrgency}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Важность: {item.taskImportance}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Срок: {item.taskDeadline}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Продолжительность: {item.taskDuration}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Статус: {item.taskStatus}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Дата создания: {item.taskCreateAt}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Комментарий: {item.taskComment}</p>
            </div>
        </li>
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
        <AllTasksUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={dictWithListsForTasksFilterSel}></AllTasksUI>
    )
};
