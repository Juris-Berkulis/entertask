import { tasksDBRef } from "../../firebase/firebase";

export const addNewTaskWithThunkAction = (taskUTCDateAndTime, taskUTCInMilliseconds, newTask) => () => {
    tasksDBRef.child('userUID').update({
        [taskUTCInMilliseconds]: '',
    });
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskCreateAt').set(taskUTCDateAndTime);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskID').set(taskUTCInMilliseconds);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskCategory').set(newTask.taskCategory);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskName').set(newTask.taskName);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('subtaskName').set(newTask.subtaskName);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskPriority').set(newTask.taskPriority);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskControl').set(newTask.taskControl);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskUrgency').set(newTask.taskUrgency);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskImportance').set(newTask.taskImportance);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskDeadline').set(newTask.taskDeadline);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskDuration').set(newTask.taskDuration);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskStatus').set(newTask.taskStatus);
    tasksDBRef.child('userUID').child(taskUTCInMilliseconds).child('taskComment').set(newTask.taskComment);
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
