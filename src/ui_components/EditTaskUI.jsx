import React from 'react';
import { ButtonForChangeTaskUI } from './ButtonForChangeTaskUI';
import { TaskInputFieldsUI } from './TaskInputFieldsUI';

export const EditTaskUI = (props) => {
    return (
        <div classes={props.classes.changeTask__wrapper}>
            <form classes={props.classes.changeTask__form} onSubmit={props.onSubmitForm}>
                <TaskInputFieldsUI classes={props.classes} editableTaskObject={props.editableTaskObject} taskEisenhowerMatrixValue={props.taskEisenhowerMatrixValue}></TaskInputFieldsUI>
                <div classes={props.classes.changeTask__btnWrapper}>
                    <ButtonForChangeTaskUI classes={props.classes} type='button' onClick={(event) => {props.editForm(event)}}>Подтвердить и вернуться</ButtonForChangeTaskUI>
                    <ButtonForChangeTaskUI classes={props.classes} type='reset' onClick={props.resetInputsValuesByButton}>Начальные значения</ButtonForChangeTaskUI>
                </div>
            </form>
        </div>
    )
};
