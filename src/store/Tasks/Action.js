import { allSignsForTasksFilter } from "../../data/consts";
import { tasksDBRef, tasksFilterDBRef } from "../../firebase/firebase";
import { replaceForbiddenCharactersForFirebaseDatabaseKeys } from "../../helper/helper";

//! TODO: Объединить общий код с "editTaskWithThunkAction":
export const addNewTaskWithThunkAction = (userUID, taskUTCDateAndTime, taskUTCInMilliseconds, newTask) => () => {
    tasksDBRef.child(userUID).update({
        [taskUTCInMilliseconds]: '',
    });
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCreateAt.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCDateAndTime));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskID.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCInMilliseconds));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCategory.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskCategory));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskName));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.subtaskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.subtaskName));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskPriority.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskPriority));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskControl.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskControl));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskUrgency.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskUrgency));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskImportance.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskImportance));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDeadline.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDeadline));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDuration.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDuration));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskStatus.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskStatus));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskComment.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskComment));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskEisenhowerMatrixValue));

    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskCreateAt.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCDateAndTime)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskID.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(taskUTCInMilliseconds)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskCategory.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskCategory)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskName.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskName)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.subtaskName.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.subtaskName)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskPriority.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskPriority)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskControl.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskControl)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskUrgency.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskUrgency)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskImportance.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskImportance)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskDeadline.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDeadline)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskDuration.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskDuration)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskStatus.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskStatus)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskComment.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskComment)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(newTask.taskEisenhowerMatrixValue)]: true,});
};

export const changeTaskPropertyShowWithThunkAction = (userUID, sign, property, value) => () => {
    tasksFilterDBRef.child(userUID).child(sign).update({[property]: !value,});
};

export const changeTaskSignValueWithThunkAction = (userUID, taskUTCInMilliseconds, sign, value) => () => {
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(sign).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(value));

    tasksFilterDBRef.child(userUID).child(sign).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(value)]: true,});
};

//! TODO: Объединить общий код с "addNewTaskWithThunkAction":
export const editTaskWithThunkAction = (userUID, taskUTCInMilliseconds, editableTask) => () => {
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCategory.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskCategory));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskName));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.subtaskName.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.subtaskName));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskPriority.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskPriority));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskControl.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskControl));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskUrgency.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskUrgency));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskImportance.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskImportance));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDeadline.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDeadline));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDuration.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDuration));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskStatus.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskStatus));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskComment.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskComment));
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).set(replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskEisenhowerMatrixValue));

    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskCategory.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskCategory)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskName.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskName)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.subtaskName.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.subtaskName)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskPriority.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskPriority)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskControl.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskControl)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskUrgency.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskUrgency)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskImportance.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskImportance)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskDeadline.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDeadline)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskDuration.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskDuration)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskStatus.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskStatus)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskComment.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskComment)]: true,});
    tasksFilterDBRef.child(userUID).child(allSignsForTasksFilter.taskEisenhowerMatrixValue.variable).update({[replaceForbiddenCharactersForFirebaseDatabaseKeys(editableTask.taskEisenhowerMatrixValue)]: true,});
};

export const deleteTaskWithThunkAction = (userUID, taskUTCInMilliseconds) => {
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).remove();
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
    if (userUID !== null) {
        tasksDBRef.child(userUID).on('value', changeTasksList(dispatch, userUID));
    }
};

export const offTrackingChangeValueInTasksListWithThunkAction = (userUID) => (dispatch) => {
    if (userUID !== null) {
        tasksDBRef.child(userUID).off('value', changeTasksList(dispatch, userUID));
    }
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
    if (userUID !== null) {
        tasksFilterDBRef.child(userUID).on('value', changeTasksFilter(dispatch));
    }
};

export const offTrackingChangeDictWithListsForTasksFilterWithThunkAction = (userUID) => (dispatch) => {
    if (userUID !== null) {
        tasksFilterDBRef.child(userUID).off('value', changeTasksFilter(dispatch));
    }
};

export const deleteExtraSignOfTaskFilteringWithThunkAction = (userUID, sign, property) => () => {
    if (typeof(property) !== 'string') {
        property = String(property)
    }

    tasksFilterDBRef.child(userUID).child(sign).child(property).remove();
};

export const TASKS_SIGN_FOR_TASKS_SORTING_ACTION = 'TASKS_SIGN_FOR_TASKS_SORTING_ACTION';

export const tasksSignForTasksSortingAction = {
    type: TASKS_SIGN_FOR_TASKS_SORTING_ACTION,
};

export const REVERSE_DIRECTION_FOR_TASKS_SORTING_BY_SIGN_ACTION = 'REVERSE_DIRECTION_FOR_TASKS_SORTING_BY_SIGN_ACTION';

export const reverseDirectionForTasksSortinBySignAction = {
    type: REVERSE_DIRECTION_FOR_TASKS_SORTING_BY_SIGN_ACTION,
};

export const TASKS_SIGN_FOR_TODAY_TASKS_SORTING_ACTION = 'TASKS_SIGN_FOR_TODAY_TASKS_SORTING_ACTION';

export const tasksSignForTodayTasksSortingAction = {
    type: TASKS_SIGN_FOR_TODAY_TASKS_SORTING_ACTION,
};

export const REVERSE_DIRECTION_FOR_TODAY_TASKS_SORTING_BY_SIGN_ACTION = 'REVERSE_DIRECTION_FOR_TODAY_TASKS_SORTING_BY_SIGN_ACTION';

export const reverseDirectionForTodayTasksSortinBySignAction = {
    type: REVERSE_DIRECTION_FOR_TODAY_TASKS_SORTING_BY_SIGN_ACTION,
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

export const addTheTaskInListWithTasksForTodayWithThunkAction = (userUID, taskUTCInMilliseconds) => () => {
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).update({
        [allSignsForTasksFilter.taskForToday.variable]: true,
    });
};

export const deleteTheTaskFromListWithTasksForTodayWithThunkAction = (userUID, taskUTCInMilliseconds) => () => {
    tasksDBRef.child(userUID).child(taskUTCInMilliseconds).update({
        [allSignsForTasksFilter.taskForToday.variable]: false,
    });
};
