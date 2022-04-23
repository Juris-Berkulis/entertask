import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSwitchesResetInputFieldsValuesInitializerSelector } from '../../store/AppSwitches/Selectors';
import { useStyles } from '../../styles/Style';
import { TaskInputUI } from '../../ui_components/TaskInputUI';
import { dictWithNewTaskPropertiesErrorsAction } from '../../store/Tasks/Action';
import { checkIsInputValueValid } from '../../helper/helper';
import { getTasksListDictWithNewTaskPropertiesErrorsSelector } from '../../store/Tasks/Selectors';

export const TaskInput = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const inputFieldsValuesInitializer = useSelector(getAppSwitchesResetInputFieldsValuesInitializerSelector);
    const dictWithNewTaskPropertiesErrorsSel = useSelector(getTasksListDictWithNewTaskPropertiesErrorsSelector);

    const [inputValue, setInputValue] = useState('');

    const onSaveValueFromInput = (event) => {
        setInputValue(event.target.value);

        dispatch({
            type: props.actionForInputFieldsValuesForNewTaskReducer,
            payload: event.target.value,
        });

        dispatch({
            type: dictWithNewTaskPropertiesErrorsAction.type,
            payload: {
                taskPropertyError: props.taskFieldIdentifier,
                taskPropertyErrorValue: checkIsInputValueValid(event.target.value, props.taskFieldIdentifier, dispatch),
            }
        });
    };

    useEffect(() => {
        if (props.initialValueInInput) {
            setInputValue(props.initialValueInInput);

            dispatch({
                type: props.actionForInputFieldsValuesForNewTaskReducer,
                payload: props.initialValueInInput,
            });
        } else {
            setInputValue('');

            dispatch({
                type: props.actionForInputFieldsValuesForNewTaskReducer,
                payload: '',
            });
        }
    }, [inputFieldsValuesInitializer, dispatch, props.actionForInputFieldsValuesForNewTaskReducer, props.initialValueInInput]);

    return (
        <TaskInputUI classes={classes} onSaveValueFromInput={onSaveValueFromInput} inputValue={inputValue} labelName={props.labelName} actionForInputFieldsValuesForNewTaskReducer={props.actionForInputFieldsValuesForNewTaskReducer} inputValueIsError={dictWithNewTaskPropertiesErrorsSel[props.taskFieldIdentifier]} obligatoryField={props.obligatoryField}></TaskInputUI>
    )
};
