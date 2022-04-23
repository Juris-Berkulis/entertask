import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { checkIsInputValueValid, fillInEmptyTaskAttributes } from '../../helper/helper';
import { resetInputFieldsValuesInitializerAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesResetInputFieldsValuesInitializerSelector } from '../../store/AppSwitches/Selectors';
import { inputFieldsValuesForNewTaskActionsList } from '../../store/InputFieldsValuesForNewTask/Action';
import { getInputFieldsValuesForNewTaskSubtaskNameSelector, getInputFieldsValuesForNewTasktaskCategorySelector, getInputFieldsValuesForNewTaskTaskCommentSelector, getInputFieldsValuesForNewTaskTaskControlSelector, getInputFieldsValuesForNewTaskTaskDeadlineSelector, getInputFieldsValuesForNewTaskTaskDurationSelector, getInputFieldsValuesForNewTaskTaskImportanceSelector, getInputFieldsValuesForNewTaskTaskNameSelector, getInputFieldsValuesForNewTaskTaskPrioritySelector, getInputFieldsValuesForNewTaskTaskStatusSelector, getInputFieldsValuesForNewTaskTaskUrgencySelector } from '../../store/InputFieldsValuesForNewTask/Selectors';
import { addNewTaskWithThunkAction, resetDictWithNewTaskPropertiesErrorsAction } from '../../store/Tasks/Action';
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

    const onSubmitForm = (event, goToAllTasks) => {
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

        let errorFound = false;

        for (let key in newTask) {
            if (checkIsInputValueValid(newTask[key], key, dispatch)) {
                errorFound = true;
            }
        }

        if (!errorFound) {
            const fullNewTask = fillInEmptyTaskAttributes(newTask);
    
            const now = new Date();
            const taskUTCDateAndTime = now.toUTCString();
            const taskUTCInMilliseconds = now.getTime();
    
            dispatch(addNewTaskWithThunkAction(taskUTCDateAndTime, taskUTCInMilliseconds, fullNewTask));
    
            dispatch({
                type: resetInputFieldsValuesInitializerAction.type,
                payload: inputFieldsValuesInitializer + 1,
            });

            if (goToAllTasks) {
                history(allAppComponentsWithPageTitle.alltasks.path);
            }
        }
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

    useEffect(() => {
        dispatch({
            type: resetDictWithNewTaskPropertiesErrorsAction.type,
        });
    }, [dispatch]);

    return (
        <AddTaskUI classes={classes} onSubmitForm={onSubmitForm} resetInputsValuesByButton={resetInputsValuesByButton}></AddTaskUI>
    )
};
