import { allSignsForTasksFilter } from "../../data/consts";
import { tasksDBRef, tasksFilterDBRef } from "../../firebase/firebase";

export const addNewTaskWithThunkAction = (taskUTCDateAndTime, taskUTCInMilliseconds, newTask) => () => {
    tasksDBRef.child('userUID').update({
        [taskUTCInMilliseconds]: '',
    });
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCreateAt.variable).set(taskUTCDateAndTime);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskID.variable).set(taskUTCInMilliseconds);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCategory.variable).set(newTask.taskCategory);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskName.variable).set(newTask.taskName);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.subtaskName.variable).set(newTask.subtaskName);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskPriority.variable).set(newTask.taskPriority);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskControl.variable).set(newTask.taskControl);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskUrgency.variable).set(newTask.taskUrgency);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskImportance.variable).set(newTask.taskImportance);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDeadline.variable).set(newTask.taskDeadline);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDuration.variable).set(newTask.taskDuration);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskStatus.variable).set(newTask.taskStatus);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskComment.variable).set(newTask.taskComment);

    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskCreateAt.variable).update({[taskUTCDateAndTime]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskID.variable).update({[taskUTCInMilliseconds]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskCategory.variable).update({[newTask.taskCategory]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskName.variable).update({[newTask.taskName]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.subtaskName.variable).update({[newTask.subtaskName]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskPriority.variable).update({[newTask.taskPriority]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskControl.variable).update({[newTask.taskControl]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskUrgency.variable).update({[newTask.taskUrgency]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskImportance.variable).update({[newTask.taskImportance]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDeadline.variable).update({[newTask.taskDeadline]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDuration.variable).update({[newTask.taskDuration]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskStatus.variable).update({[newTask.taskStatus]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskComment.variable).update({[newTask.taskComment]: true,});
};

export const changeTaskPropertyShowWithThunkAction = (sign, property, value) => () => {
    tasksFilterDBRef.child('userUID').child(sign).update({[property]: !value,});
};

export const editTaskWithThunkAction = (taskUTCInMilliseconds, editableTask) => () => {
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskCategory.variable).set(editableTask.taskCategory);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskName.variable).set(editableTask.taskName);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.subtaskName.variable).set(editableTask.subtaskName);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskPriority.variable).set(editableTask.taskPriority);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskControl.variable).set(editableTask.taskControl);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskUrgency.variable).set(editableTask.taskUrgency);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskImportance.variable).set(editableTask.taskImportance);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDeadline.variable).set(editableTask.taskDeadline);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskDuration.variable).set(editableTask.taskDuration);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskStatus.variable).set(editableTask.taskStatus);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child(allSignsForTasksFilter.taskComment.variable).set(editableTask.taskComment);

    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskCategory.variable).update({[editableTask.taskCategory]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskName.variable).update({[editableTask.taskName]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.subtaskName.variable).update({[editableTask.subtaskName]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskPriority.variable).update({[editableTask.taskPriority]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskControl.variable).update({[editableTask.taskControl]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskUrgency.variable).update({[editableTask.taskUrgency]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskImportance.variable).update({[editableTask.taskImportance]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDeadline.variable).update({[editableTask.taskDeadline]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskDuration.variable).update({[editableTask.taskDuration]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskStatus.variable).update({[editableTask.taskStatus]: true,});
    tasksFilterDBRef.child('userUID').child(allSignsForTasksFilter.taskComment.variable).update({[editableTask.taskComment]: true,});
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
