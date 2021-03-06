import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { checkIsInputValueValid, fillInEmptyTaskAttributes, getEisenhowerMatrixValue, replaceBrieflyValueToDetailValueOfTheEisenhowerMatrix } from '../../helper/helper';
import { resetInputFieldsValuesInitializerAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesDeviceOnTheNetworkSelector, getAppSwitchesEditableTaskObjectSelector, getAppSwitchesResetInputFieldsValuesInitializerSelector } from '../../store/AppSwitches/Selectors';
import { inputFieldsValuesForNewTaskActionsList, taskEisenhowerMatrixValueAction } from '../../store/InputFieldsValuesForNewTask/Action';
import { getInputFieldsValuesForNewTaskSubtaskNameSelector, getInputFieldsValuesForNewTasktaskCategorySelector, getInputFieldsValuesForNewTaskTaskCommentSelector, getInputFieldsValuesForNewTaskTaskControlSelector, getInputFieldsValuesForNewTaskTaskDeadlineSelector, getInputFieldsValuesForNewTaskTaskDurationSelector, getInputFieldsValuesForNewTaskTaskEisenhowerMatrixValueSelector, getInputFieldsValuesForNewTaskTaskImportanceSelector, getInputFieldsValuesForNewTaskTaskNameSelector, getInputFieldsValuesForNewTaskTaskPrioritySelector, getInputFieldsValuesForNewTaskTaskStatusSelector, getInputFieldsValuesForNewTaskTaskUrgencySelector } from '../../store/InputFieldsValuesForNewTask/Selectors';
import { deleteExtraSignOfTaskFilteringWithThunkAction, editTaskWithThunkAction, resetDictWithNewTaskPropertiesErrorsAction } from '../../store/Tasks/Action';
import { getTasksListTasksKindOfDictByUserUIDSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { EditTaskUI } from '../../ui_components/EditTaskUI';

export const EditTask = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

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
    const taskEisenhowerMatrixValue = useSelector(getInputFieldsValuesForNewTaskTaskEisenhowerMatrixValueSelector);

    const editableTaskObject = useSelector(getAppSwitchesEditableTaskObjectSelector);

    const inputFieldsValuesInitializerSel = useSelector(getAppSwitchesResetInputFieldsValuesInitializerSelector);

    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));

    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);

    const [editableTaskObjectWithoutAutocomplete, setEditableTaskObjectWithoutAutocomplete] = useState({});

    const editForm = (event) => {
        event.preventDefault();

        if (!deviceOnTheNetworkSel) {
            return
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
            taskEisenhowerMatrixValue: taskEisenhowerMatrixValue,
        };

        let errorFound = false;

        for (let key in editableTask) {
            if (checkIsInputValueValid(editableTask[key], key, dispatch)) {
                errorFound = true;
            }
        }

        if (!errorFound) {
            const thisTaskWillBeEdited = tasksKindOfDictByUserUIDSel[editableTaskObject.taskID];

            for (let editTaskSign in thisTaskWillBeEdited) {
                if (editTaskSign !== allSignsForTasksFilter.taskCreateAt.variable && editTaskSign !== allSignsForTasksFilter.taskID.variable) {
                    let deleteTaskSignIsFind = false;
                    for (let specificTaskId in tasksKindOfDictByUserUIDSel) {
                        if (tasksKindOfDictByUserUIDSel[specificTaskId][editTaskSign]) {
                            if (+specificTaskId === editableTaskObject.taskID) {
                                continue;
                            } else if (+specificTaskId !== editableTaskObject.taskID) {
                                if (tasksKindOfDictByUserUIDSel[specificTaskId][editTaskSign] === thisTaskWillBeEdited[editTaskSign]) {
                                    deleteTaskSignIsFind = true;
                                    break;
                                } else if (tasksKindOfDictByUserUIDSel[specificTaskId][editTaskSign] !== thisTaskWillBeEdited[editTaskSign]) {
                                    continue;
                                }
                            }
                        }
                    }
        
                    if (!deleteTaskSignIsFind) {
                        dispatch(deleteExtraSignOfTaskFilteringWithThunkAction(userUID, editTaskSign, thisTaskWillBeEdited[editTaskSign]));
                    }
                }
            }

            const fullEditableTask = fillInEmptyTaskAttributes(editableTask);

            const taskUTCInMilliseconds = editableTaskObject.taskID;

            dispatch(editTaskWithThunkAction(userUID, taskUTCInMilliseconds, fullEditableTask));

            dispatch({
                type: resetInputFieldsValuesInitializerAction.type,
                payload: inputFieldsValuesInitializerSel + 1,
            });

            history(allAppComponentsWithPageTitle.alltasks.path);
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
            payload: inputFieldsValuesInitializerSel + 1,
        });
    };

    useEffect(() => {
        dispatch({
            type: resetDictWithNewTaskPropertiesErrorsAction.type,
        });
    }, [dispatch]);

    useEffect(() => {
        const dict = {};

        for (let taskSign in editableTaskObject) {
            if (editableTaskObject[taskSign] === characterToAutocompleteEmptyTaskSign) {
                dict[taskSign] = '';
            } else {
                dict[taskSign] = editableTaskObject[taskSign];
            }
        }

        setEditableTaskObjectWithoutAutocomplete(dict);
    }, [editableTaskObject]);

    useEffect(() => {
        dispatch({
            type: taskEisenhowerMatrixValueAction.type,
            payload: getEisenhowerMatrixValue(taskUrgency, taskImportance),
        })
    }, [taskUrgency, taskImportance, dispatch]);

    return (
        <EditTaskUI classes={classes} editForm={editForm} resetInputsValuesByButton={resetInputsValuesByButton} editableTaskObject={editableTaskObjectWithoutAutocomplete} taskEisenhowerMatrixValue={replaceBrieflyValueToDetailValueOfTheEisenhowerMatrix(taskEisenhowerMatrixValue)}></EditTaskUI>
    )
};
