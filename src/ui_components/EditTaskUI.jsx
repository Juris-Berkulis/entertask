import React from 'react';
import { subtaskNameAction, taskCategoryAction, taskCommentAction, taskControlAction, taskDeadlineAction, taskDurationAction, taskImportanceAction, taskNameAction, taskPriorityAction, taskStatusAction, taskUrgencyAction } from '../store/InputFieldsValuesForNewTask/Action';
import { TaskInput } from '../widget_components/TaskInput/TaskInput';

export const EditTaskUI = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmitForm}>
                <div>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskCategoryAction.type} labelName='Категория' initialValueInInput={props.editableTaskObject.taskCategory}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskNameAction.type} labelName='Название задачи' initialValueInInput={props.editableTaskObject.taskName}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={subtaskNameAction.type} labelName='Подзадача' initialValueInInput={props.editableTaskObject.subtaskName}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskPriorityAction.type} labelName='Приоритет' initialValueInInput={props.editableTaskObject.taskPriority}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskControlAction.type} labelName='Контроль' initialValueInInput={props.editableTaskObject.taskControl}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskUrgencyAction.type} labelName='Срочность' initialValueInInput={props.editableTaskObject.taskUrgency}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskImportanceAction.type} labelName='Важность' initialValueInInput={props.editableTaskObject.taskImportance}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskDeadlineAction.type} labelName='Срок' initialValueInInput={props.editableTaskObject.taskDeadline}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskDurationAction.type} labelName='Продолжительность' initialValueInInput={props.editableTaskObject.taskDuration}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskStatusAction.type} labelName='Статус' initialValueInInput={props.editableTaskObject.taskStatus}></TaskInput>
                    <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskCommentAction.type} labelName='Комментарий' initialValueInInput={props.editableTaskObject.taskComment}></TaskInput>
                </div>
                <div>
                    <button type='button' onClick={(event) => {props.editForm(event)}}>Подтвердить и вернуться</button>
                    <button type='reset' onClick={props.resetInputsValuesByButton}>Сбросить значения</button>
                </div>
            </form>
        </div>
    )
};
