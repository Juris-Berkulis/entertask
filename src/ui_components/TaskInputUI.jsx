import React from 'react';

export const TaskInputUI = (props) => {
    return (
        <div>
            <label htmlFor={props.actionForInputFieldsValuesForNewTaskReducer}>{props.labelName}</label>
            <input id={props.actionForInputFieldsValuesForNewTaskReducer} placeholder={props.labelName} onChange={props.onSaveValueFromInput} value={props.inputValue}></input>
        </div>
    )
};
