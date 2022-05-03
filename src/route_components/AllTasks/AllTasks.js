import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { editableTaskObjectAction } from '../../store/AppSwitches/Action';
import { deleteExtraSignOfTaskFilteringWithThunkAction, deleteTaskWithThunkAction, offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeDictWithListsForTasksFilterWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction, openTaskAction } from '../../store/Tasks/Action';
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

        if (tasksSignForTasksSortingSel === allSignsForTasksFilter.taskCreateAt.variable || !tasksSignForTasksSortingSel) {
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

    const openTheTask = (item) => {
        dispatch({
            type: openTaskAction.type,
            payload: item,
        });
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
            <div className={`${classes.allTasks__taskListItemLinePannel}`}>
                <div className={classes.allTasks__taskListItemBtnsPannel}>
                    <button className={`${classes.allTasks__taskListItemBtn} ${classes.allTasks__taskListItemBtn_open}`} onClick={() => openTheTask(item)}>Открыть</button>
                    <button className={`${classes.allTasks__taskListItemBtn} ${classes.allTasks__taskListItemBtn_change}`} onClick={() => changeTask(item)}>&#9998;</button>
                    <button className={`${classes.allTasks__taskListItemBtn} ${classes.allTasks__taskListItemBtn_delete}`} onClick={() => deleteTask(item.taskID)}>&#128465;</button>
                </div>
            </div>
            <div className={`${classes.allTasks__taskListItemLineInfo}`}>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskCategory 
                        && 
                        item.taskCategory !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Категория: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskCategory}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskName 
                        && 
                        item.taskName !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph} ${classes.allTasks__taskListItemParagraph_taskName}`}>Название: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskName}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.subtaskName 
                        && 
                        item.subtaskName !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Подзадача: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.subtaskName}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskPriority 
                        && 
                        item.taskPriority !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Приоритет: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskPriority}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskControl 
                        && 
                        item.taskControl !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Контроль: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskControl}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskUrgency 
                        && 
                        item.taskUrgency !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Срочность: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskUrgency}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskImportance 
                        && 
                        item.taskImportance !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Важность: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskImportance}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskDeadline 
                        && 
                        item.taskDeadline !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Срок: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskDeadline}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskDuration 
                        && 
                        item.taskDuration !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Продолжительность: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskDuration}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskStatus 
                        && 
                        item.taskStatus !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph} ${classes.allTasks__taskListItemParagraph_status} ${(item.taskStatus === '+' && classes.allTasks__taskListItemParagraph_statusPlus) || (item.taskStatus === '-' && classes.allTasks__taskListItemParagraph_statusMinus) || null}`}>Статус: <span className={`${classes.allTasks__taskListItemParagraphValue} ${classes.allTasks__taskListItemParagraphValue_status} ${(item.taskStatus === '+' && classes.allTasks__taskListItemParagraphValue_statusPlus) || (item.taskStatus === '-' && classes.allTasks__taskListItemParagraphValue_statusMinus) || null}`}>{item.taskStatus === '-' ? <span>&#8722;</span> : item.taskStatus}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskCreateAt 
                        && 
                        item.taskCreateAt !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Дата создания: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskCreateAt}</span></p>
                    }
                </div>
                <div className={`${classes.allTasks__taskListItemCell}`}>
                    {
                        item.taskComment 
                        && 
                        item.taskComment !== characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${classes.allTasks__taskListItemParagraph}`}>Комментарий: <span className={`${classes.allTasks__taskListItemParagraphValue}`}>{item.taskComment}</span></p>
                    }
                </div>
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
        <AllTasksUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={dictWithListsForTasksFilterSel} changeTask={changeTask} deleteTask={deleteTask}></AllTasksUI>
    )
};
