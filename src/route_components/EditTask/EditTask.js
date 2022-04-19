import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { fillInEmptyTaskAttributes } from '../../helper/helper';
import { resetInputFieldsValuesInitializerAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesEditableTaskObjectSelector, getAppSwitchesResetInputFieldsValuesInitializerSelector } from '../../store/AppSwitches/Selectors';
import { inputFieldsValuesForNewTaskActionsList } from '../../store/InputFieldsValuesForNewTask/Action';
import { getInputFieldsValuesForNewTaskSubtaskNameSelector, getInputFieldsValuesForNewTasktaskCategorySelector, getInputFieldsValuesForNewTaskTaskCommentSelector, getInputFieldsValuesForNewTaskTaskControlSelector, getInputFieldsValuesForNewTaskTaskDeadlineSelector, getInputFieldsValuesForNewTaskTaskDurationSelector, getInputFieldsValuesForNewTaskTaskImportanceSelector, getInputFieldsValuesForNewTaskTaskNameSelector, getInputFieldsValuesForNewTaskTaskPrioritySelector, getInputFieldsValuesForNewTaskTaskStatusSelector, getInputFieldsValuesForNewTaskTaskUrgencySelector } from '../../store/InputFieldsValuesForNewTask/Selectors';
import { deleteExtraSignOfTaskFilteringWithThunkAction, editTaskWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListTasksKindOfDictByUserUIDSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { EditTaskUI } from '../../ui_components/EditTaskUI';

export const EditTask = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useNavigate();

    const taskCategory = useSelector(getInputFieldsValuesForNewTasktaskCategorySelector);
    const taskName = useSelector(getInputFieldsValuesForNewTaskTaskNameSelector);
    const subtaskName = useSelector(getInputFieldsValuesForNewTaskSubtaskNameSelector);
    const taskPriority = useSelector(getInputFieldsValuesForNewTaskTaskPrioritySelector);
    const taskControl = useSelector(getInputFieldsValuesForNewTaskTaskControlSelector);
    const taskUrgency = useSelector(getInputFieldsValuesForNewTaskTaskUrgencySelector);
    const taskImportance = useSelector(getInputFieldsValuesForNewTaskTaskImportanceSelector);
    const taskDeadline = useSelector(getInputFieldsValuesForNewTaskTaskDeadlineSelector);
    const taskDuration = useSelector(getInputFieldsValuesForNewTaskTaskDurationSelector);
    const taskStatus = useSelector(getInputFieldsValuesForNewTaskTaskStatusSelector);
    const taskComment = useSelector(getInputFieldsValuesForNewTaskTaskCommentSelector);

    const editableTaskObject = useSelector(getAppSwitchesEditableTaskObjectSelector);

    const inputFieldsValuesInitializer = useSelector(getAppSwitchesResetInputFieldsValuesInitializerSelector);

    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector('userUID'));

    const editForm = (event) => {
        event.preventDefault();

        const thisTaskWillBeDeleted = tasksKindOfDictByUserUIDSel[editableTaskObject.taskID];

        for (let deleteTaskSign in thisTaskWillBeDeleted) {
            if (deleteTaskSign !== allSignsForTasksFilter.taskCreateAt.variable && deleteTaskSign !== allSignsForTasksFilter.taskID.variable) {
                for (let specificTaskId in tasksKindOfDictByUserUIDSel) {
                    if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign]) {
                        if (specificTaskId !== editableTaskObject.taskID && tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign] === thisTaskWillBeDeleted[deleteTaskSign]) {
                            continue;
                        }
                    }
    
                    dispatch(deleteExtraSignOfTaskFilteringWithThunkAction(deleteTaskSign, thisTaskWillBeDeleted[deleteTaskSign]));
                }
            }
        }

        const editableTask = {
            taskCategory: taskCategory,
            taskName: taskName,
            subtaskName: subtaskName,
            taskPriority: taskPriority,
            taskControl: taskControl,
            taskUrgency: taskUrgency,
            taskImportance: taskImportance,
            taskDeadline: taskDeadline,
            taskDuration: taskDuration,
            taskStatus: taskStatus,
            taskComment: taskComment,
        };

        const fullEditableTask = fillInEmptyTaskAttributes(editableTask);

        const taskUTCInMilliseconds = editableTaskObject.taskID;

        dispatch(editTaskWithThunkAction(taskUTCInMilliseconds, fullEditableTask));

        dispatch({
            type: resetInputFieldsValuesInitializerAction.type,
            payload: inputFieldsValuesInitializer + 1,
        });

        history(allAppComponentsWithPageTitle.alltasks.path);
    };

    const resetInputsValuesByButton = () => {
        for (let i=0; i < inputFieldsValuesForNewTaskActionsList.length; i++) {
            dispatch({
                type: inputFieldsValuesForNewTaskActionsList[i].type,
                payload: '',
            });
        }

        dispatch({
            type: resetInputFieldsValuesInitializerAction.type,
            payload: inputFieldsValuesInitializer + 1,
        });
    };

    return (
        <EditTaskUI classes={classes} editForm={editForm} resetInputsValuesByButton={resetInputsValuesByButton} editableTaskObject={editableTaskObject}></EditTaskUI>
    )
};
