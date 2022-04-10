import { tasksDBRef } from "../../firebase/firebase";

export const addNewTaskWithThunkAction = (taskUTCDateAndTime, newTask) => () => {
    tasksDBRef.child('userUID').update({
        [taskUTCDateAndTime]: '',
    });
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskCreateAt').set(taskUTCDateAndTime);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskCategory').set(newTask.taskCategory);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskName').set(newTask.taskName);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('subtaskName').set(newTask.subtaskName);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskPriority').set(newTask.taskPriority);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskControl').set(newTask.taskControl);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskUrgency').set(newTask.taskUrgency);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskImportance').set(newTask.taskImportance);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskDeadline').set(newTask.taskDeadline);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskDuration').set(newTask.taskDuration);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskStatus').set(newTask.taskStatus);
    tasksDBRef.child('userUID').child(taskUTCDateAndTime).child('taskComment').set(newTask.taskComment);
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
