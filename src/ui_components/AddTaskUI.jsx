import React from 'react';
import { ButtonForChangeTaskUI } from './ButtonForChangeTaskUI';
import { TaskInputFieldsUI } from './TaskInputFieldsUI';

export const AddTaskUI = (props) => {
    return (
        <div className={props.classes.changeTask__wrapper}>
            <form className={props.classes.changeTask__form} onSubmit={props.onSubmitForm}>
                <TaskInputFieldsUI classes={props.classes}></TaskInputFieldsUI>
                <div className={props.classes.changeTask__btnWrapper}>
                    <ButtonForChangeTaskUI classes={props.classes} type='submit'>Добавить задачу</ButtonForChangeTaskUI>
                    <ButtonForChangeTaskUI classes={props.classes} type='button' onClick={(event) => {props.onSubmitForm(event, true)}}>Добавить и вернуться</ButtonForChangeTaskUI>
                    <ButtonForChangeTaskUI classes={props.classes} type='reset' onClick={props.resetInputsValuesByButton}>Сбросить значения</ButtonForChangeTaskUI>
                </div>
            </form>
        </div>
    )
};
