import React from 'react';

export const TaskInputUI = (props) => {
    return (
        <div>
            <input onChange={props.onSaveValueFromInput} value={props.inputValue}></input>
        </div>
    )
};
