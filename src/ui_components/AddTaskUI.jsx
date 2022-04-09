import React from 'react';
import { subtaskNameAction, taskCategoryAction, taskCommentAction, taskControlAction, taskDeadlineAction, taskDurationAction, taskImportanceAction, taskNameAction, taskPriorityAction, taskStatusAction, taskUrgencyAction } from '../store/InputFieldsValuesForNewTask/Action';
import { TaskInput } from '../widget_components/TaskInput/TaskInput';

export const AddTaskUI = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmitForm}>
                <div>
                    <TaskInput fieldName={taskCategoryAction.type}></TaskInput>
                    <TaskInput fieldName={taskNameAction.type}></TaskInput>
                    <TaskInput fieldName={subtaskNameAction.type}></TaskInput>
                    <TaskInput fieldName={taskPriorityAction.type}></TaskInput>
                    <TaskInput fieldName={taskControlAction.type}></TaskInput>
                    <TaskInput fieldName={taskUrgencyAction.type}></TaskInput>
                    <TaskInput fieldName={taskImportanceAction.type}></TaskInput>
                    <TaskInput fieldName={taskDeadlineAction.type}></TaskInput>
                    <TaskInput fieldName={taskDurationAction.type}></TaskInput>
                    <TaskInput fieldName={taskStatusAction.type}></TaskInput>
                    <TaskInput fieldName={taskCommentAction.type}></TaskInput>
                </div>
                <div>
                    <button type='submit'>Добавить задачу</button>
                    <button type='reset' onClick={props.resetInputsValuesByButton}>Сбросить значения</button>
                </div>
            </form>
        </div>
    )
};
