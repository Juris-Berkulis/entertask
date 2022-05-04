import React from 'react';
import { allSignsForTasksFilter } from '../data/consts';
import { subtaskNameAction, taskCategoryAction, taskCommentAction, taskControlAction, taskDeadlineAction, taskDurationAction, taskImportanceAction, taskNameAction, taskPriorityAction, taskStatusAction, taskUrgencyAction } from '../store/InputFieldsValuesForNewTask/Action';
import { TaskInput } from '../widget_components/TaskInput/TaskInput';

export const TaskInputFieldsUI = (props) => {
    return (
        <div className={props.classes.taskInputFields__wrapper}>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskCategoryAction.type} labelName='Категория' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskCategory} taskFieldIdentifier={allSignsForTasksFilter.taskCategory.variable} obligatoryField={true}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskNameAction.type} labelName='Название задачи' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskName} taskFieldIdentifier={allSignsForTasksFilter.taskName.variable} obligatoryField={true}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={subtaskNameAction.type} labelName='Подзадача' initialValueInInput={props.editableTaskObject && props.editableTaskObject.subtaskName} taskFieldIdentifier={allSignsForTasksFilter.subtaskName.variable} obligatoryField={true}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskUrgencyAction.type} labelName='Срочность' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskUrgency} taskFieldIdentifier={allSignsForTasksFilter.taskUrgency.variable} obligatoryField={true}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskImportanceAction.type} labelName='Важность' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskImportance} taskFieldIdentifier={allSignsForTasksFilter.taskImportance.variable} obligatoryField={true}></TaskInput>
            <div className={props.classes.taskInputFields__taskEisenhowerMatrixWrapper}>
                <p className={props.classes.taskInputFields__taskEisenhowerMatrixLabel}>{allSignsForTasksFilter.taskEisenhowerMatrixValue.decodingIntoRus}:</p>
                <p className={props.classes.taskInputFields__taskEisenhowerMatrixValue}>{props.taskEisenhowerMatrixValue}</p>
            </div>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskPriorityAction.type} labelName='Приоритет' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskPriority} taskFieldIdentifier={allSignsForTasksFilter.taskPriority.variable} obligatoryField={false}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskControlAction.type} labelName='Контроль' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskControl} taskFieldIdentifier={allSignsForTasksFilter.taskControl.variable} obligatoryField={false}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskDeadlineAction.type} labelName='Срок' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskDeadline} taskFieldIdentifier={allSignsForTasksFilter.taskDeadline.variable} obligatoryField={true}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskDurationAction.type} labelName='Продолжительность' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskDuration} taskFieldIdentifier={allSignsForTasksFilter.taskDuration.variable} obligatoryField={true}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskStatusAction.type} labelName='Статус' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskStatus} taskFieldIdentifier={allSignsForTasksFilter.taskStatus.variable} obligatoryField={true}></TaskInput>
            <TaskInput actionForInputFieldsValuesForNewTaskReducer={taskCommentAction.type} labelName='Комментарий' initialValueInInput={props.editableTaskObject && props.editableTaskObject.taskComment} taskFieldIdentifier={allSignsForTasksFilter.taskComment.variable} obligatoryField={false}></TaskInput>
        </div>
    )
};
