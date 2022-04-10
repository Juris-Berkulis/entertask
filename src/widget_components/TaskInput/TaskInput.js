import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSwitchesResetInputFieldsValuesInitializerSelector } from '../../store/AppSwitches/Selectors';
import { useStyles } from '../../styles/Style';
import { TaskInputUI } from '../../ui_components/TaskInputUI';

export const TaskInput = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const inputFieldsValuesInitializer = useSelector(getAppSwitchesResetInputFieldsValuesInitializerSelector);

    const [inputValue, setInputValue] = useState('');

    const onSaveValueFromInput = (event) => {
        setInputValue(event.target.value);

        dispatch({
            type: props.actionForInputFieldsValuesForNewTaskReducer,
            payload: event.target.value,
        });
    };

    useEffect(() => {
        setInputValue('');

        dispatch({
            type: props.actionForInputFieldsValuesForNewTaskReducer,
            payload: '',
        });
    }, [inputFieldsValuesInitializer, dispatch, props.actionForInputFieldsValuesForNewTaskReducer]);

    return (
        <TaskInputUI classes={classes} onSaveValueFromInput={onSaveValueFromInput} inputValue={inputValue} labelName={props.labelName} actionForInputFieldsValuesForNewTaskReducer={props.actionForInputFieldsValuesForNewTaskReducer}></TaskInputUI>
    )
};
