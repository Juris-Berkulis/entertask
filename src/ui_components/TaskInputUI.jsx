import React from 'react';

export const TaskInputUI = (props) => {
    return (
        <div className={props.classes.taskInput__wrapper}>
            <label className={props.classes.taskInput__label} htmlFor={props.actionForInputFieldsValuesForNewTaskReducer}>{props.labelName}{props.obligatoryField && ' *'}:</label>
            <div className={props.classes.taskInput__inputWrapper}>
                <input className={`${props.classes.taskInput__input} ${props.inputValueIsError ? props.classes.taskInput__input_error : null}`} id={props.actionForInputFieldsValuesForNewTaskReducer} placeholder={props.labelName} onChange={props.onSaveValueFromInput} value={props.inputValue}></input>
                {
                    props.inputValueIsError
                    ? 
                    <p className={props.classes.taskInput__inputError}>{props.inputValueIsError}</p>
                    : 
                    null
                }
            </div>
        </div>
    )
};
