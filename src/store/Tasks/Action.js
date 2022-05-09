import { allSignsForTasksFilter } from "../../data/consts";
import { tasksDBRef, tasksFilterDBRef } from "../../firebase/firebase";
import { replaceForbiddenCharactersForFirebaseDatabaseKeys } from "../../helper/helper";
var firebaseKeyEncode = require('firebase-key-encode');

//! TODO: Объединить общий код с "editTaskWithThunkAction":
export const addNewTaskWithThunkAction = (taskUTCDateAndTime, taskUTCInMilliseconds, newTask) => () => {
    tasksDBRef.child('userUID').update({
        [taskUTCInMilliseconds]: '',
    });
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCreateAt.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCDateAndTime));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskID.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCInMilliseconds));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCategory.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskCategory));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskName));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.subtaskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.subtaskName));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskPriority.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskPriority));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskControl.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskControl));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskUrgency.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskUrgency));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskImportance.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskImportance));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDeadline.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDeadline));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDuration.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDuration));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskStatus.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskStatus));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskComment.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskComment));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskEisenhowerMatrixValue));

    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskCreateAt.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCDateAndTime))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskID.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCInMilliseconds))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskCategory.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskCategory))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskName.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskName))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.subtaskName.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.subtaskName))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskPriority.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskPriority))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskControl.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskControl))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskUrgency.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskUrgency))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskImportance.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskImportance))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDeadline.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDeadline))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDuration.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDuration))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskStatus.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskStatus))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskComment.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskComment))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskEisenhowerMatrixValue))]: true,});
};

export const changeTaskPropertyShowWithThunkAction = (sign, property, value) => () => {
    tasksFilterDBRef.child('userUID').child(sign).update({[firebaseKeyEncode.encode(property)]: !value,});
};

//! TODO: Объединить общий код с "addNewTaskWithThunkAction":
export const editTaskWithThunkAction = (taskUTCInMilliseconds, editableTask) => () => {
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCategory.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskCategory));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskName));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.subtaskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.subtaskName));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskPriority.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskPriority));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskControl.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskControl));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskUrgency.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskUrgency));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskImportance.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskImportance));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDeadline.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDeadline));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDuration.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDuration));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskStatus.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskStatus));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskComment.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskComment));
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskEisenhowerMatrixValue));

    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskCategory.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskCategory))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskName.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskName))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.subtaskName.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.subtaskName))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskPriority.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskPriority))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskControl.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskControl))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskUrgency.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskUrgency))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskImportance.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskImportance))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDeadline.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDeadline))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDuration.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDuration))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskStatus.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskStatus))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskComment.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskComment))]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).update({[firebaseKeyEncode.encode(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskEisenhowerMatrixValue))]: true,});
};

export const deleteTaskWithThunkAction = (taskUTCInMilliseconds) => {
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).remove();
};

export const CHANGE_TASKS_LIST = 'CHANGE_TASKS_LIST';

export const changeTasksListAction = (payload) => ({
    type: CHANGE_TASKS_LIST,
    payload: payload,
});

const changeTasksList = (dispatch, userUID) => {
    return (snapshot) => {
        dispatch(changeTasksListAction({
            userUID: userUID, 
            snapshotVal: snapshot.val(),
        }));
    }
};

export const onTrackingChangeValueInTasksListWithThunkAction = (userUID) => (dispatch) => {
    tasksDBRef.child(userUID).on('value', changeTasksList(dispatch, userUID));
};

export const offTrackingChangeValueInTasksListWithThunkAction = (userUID) => (dispatch) => {
    tasksDBRef.child(userUID).off('value', changeTasksList(dispatch, userUID));
};

export const DICT_WITH_LISTS_FOR_TASKS_FILTER_ACTION = 'DICT_WITH_LISTS_FOR_TASKS_FILTER_ACTION';

export const dictWithListsForTasksFilterAction = {
    type: DICT_WITH_LISTS_FOR_TASKS_FILTER_ACTION,
};

const changeTasksFilter = (dispatch) => {
    return (snapshot) => {
        dispatch({
            type: dictWithListsForTasksFilterAction.type,
            payload: snapshot.val(),
        });
    }
};

export const onTrackingChangeDictWithListsForTasksFilterWithThunkAction = (userUID) => (dispatch) => {
    tasksFilterDBRef.child(userUID).on('value', changeTasksFilter(dispatch));
};

export const offTrackingChangeDictWithListsForTasksFilterWithThunkAction = (userUID) => (dispatch) => {
    tasksFilterDBRef.child(userUID).off('value', changeTasksFilter(dispatch));
};

export const deleteExtraSignOfTaskFilteringWithThunkAction = (sign, property) => () => {
    tasksFilterDBRef.child('userUID').child(sign).child(firebaseKeyEncode.encode(property)).remove();
};

export const TASKS_SIGN_FOR_TASKS_SORTING_ACTION = 'TASKS_SIGN_FOR_TASKS_SORTING_ACTION';

export const tasksSignForTasksSortingAction = {
    type: TASKS_SIGN_FOR_TASKS_SORTING_ACTION,
};

export const REVERSE_DIRECTION_FOR_TASKS_SORTING_BY_SIGN_ACTION = 'REVERSE_DIRECTION_FOR_TASKS_SORTING_BY_SIGN_ACTION';

export const reverseDirectionForTasksSortinBySignAction = {
    type: REVERSE_DIRECTION_FOR_TASKS_SORTING_BY_SIGN_ACTION,
};

const DICT_WITH_NEW_TASK_PROPERTIES_ERRORS_ACTION = 'DICT_WITH_NEW_TASK_PROPERTIES_ERRORS_ACTION';

export const dictWithNewTaskPropertiesErrorsAction = {
    type: DICT_WITH_NEW_TASK_PROPERTIES_ERRORS_ACTION,
};

const RESET_DICT_WITH_NEW_TASK_PROPERTIES_ERRORS_ACTION = 'RESET_DICT_WITH_NEW_TASK_PROPERTIES_ERRORS_ACTION';

export const resetDictWithNewTaskPropertiesErrorsAction = {
    type: RESET_DICT_WITH_NEW_TASK_PROPERTIES_ERRORS_ACTION,
};

const OPEN_TASK_ACTION = 'OPEN_TASK_ACTION';

export const openTaskAction = {
    type: OPEN_TASK_ACTION,
};

const CLOSE_TASK_ACTION = 'CLOSE_TASK_ACTION';

export const closeTaskAction = {
    type: CLOSE_TASK_ACTION,
};

export const addTheTaskInListWithTasksForTodayWithThunkAction = (taskUTCInMilliseconds) => () => {
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).update({
        [allSignsForTasksFilter.taskForToday.variable]: true,
    });
};

export const deleteTheTaskFromListWithTasksForTodayWithThunkAction = (taskUTCInMilliseconds) => () => {
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).update({
        [allSignsForTasksFilter.taskForToday.variable]: false,
    });
};
