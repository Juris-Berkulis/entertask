import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { resetInputFieldsValuesInitializerAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesResetInputFieldsValuesInitializerSelector } from '../../store/AppSwitches/Selectors';
import { inputFieldsValuesForNewTaskActionsList } from '../../store/InputFieldsValuesForNewTask/Action';
import { getInputFieldsValuesForNewTaskSubtaskNameSelector, getInputFieldsValuesForNewTasktaskCategorySelector, getInputFieldsValuesForNewTaskTaskCommentSelector, getInputFieldsValuesForNewTaskTaskControlSelector, getInputFieldsValuesForNewTaskTaskDeadlineSelector, getInputFieldsValuesForNewTaskTaskDurationSelector, getInputFieldsValuesForNewTaskTaskImportanceSelector, getInputFieldsValuesForNewTaskTaskNameSelector, getInputFieldsValuesForNewTaskTaskPrioritySelector, getInputFieldsValuesForNewTaskTaskStatusSelector, getInputFieldsValuesForNewTaskTaskUrgencySelector } from '../../store/InputFieldsValuesForNewTask/Selectors';
import { addNewTaskWithThunkAction } from '../../store/Tasks/Action';
import { useStyles } from '../../styles/Style';
import { AddTaskUI } from '../../ui_components/AddTaskUI';

export const AddTask = () => {
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

    const inputFieldsValuesInitializer = useSelector(getAppSwitchesResetInputFieldsValuesInitializerSelector);

    const onSubmitForm = (event) => {
        event.preventDefault();

        const newTask = {
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

        console.log(newTask)

        const now = new Date();
        const taskUTCDateAndTime = now.toUTCString();

        dispatch(addNewTaskWithThunkAction(taskUTCDateAndTime, newTask));

        dispatch({
            type: resetInputFieldsValuesInitializerAction.type,
            payload: inputFieldsValuesInitializer + 1,
        });
    };

    const returnToAllTasks = () => {
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
        <AddTaskUI classes={classes} onSubmitForm={onSubmitForm} resetInputsValuesByButton={resetInputsValuesByButton} returnToAllTasks={returnToAllTasks}></AddTaskUI>
    )
};
