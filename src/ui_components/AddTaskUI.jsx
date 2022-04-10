import React from 'react';
import { subtaskNameAction, taskCategoryAction, taskCommentAction, taskControlAction, taskDeadlineAction, taskDurationAction, taskImportanceAction, taskNameAction, taskPriorityAction, taskStatusAction, taskUrgencyAction } from '../store/InputFieldsValuesForNewTask/Action';
import { TaskInput } from '../widget_components/TaskInput/TaskInput';

export const AddTaskUI = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmitForm}>
                <div>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskCategoryAction.type} labelName='Категория'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskNameAction.type} labelName='Нзавание задачи'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={subtaskNameAction.type} labelName='Подзадача'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskPriorityAction.type} labelName='Приоритет'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskControlAction.type} labelName='Контроль'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskUrgencyAction.type} labelName='Срочность'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskImportanceAction.type} labelName='Важность'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskDeadlineAction.type} labelName='Срок'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskDurationAction.type} labelName='Продолжительность'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskStatusAction.type} labelName='Статус'></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskCommentAction.type} labelName='Комментарий'></TaskInput>
                </div>
                <div>
                    <button type='submit'>Добавить задачу</button>
                    <button type='reset' onClick={props.resetInputsValuesByButton}>Сбросить значения</button>
                </div>
            </form>
        </div>
    )
};
