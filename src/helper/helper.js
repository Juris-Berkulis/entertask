import { allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign, mobileScreenWidth } from "../data/consts";
import { dictWithNewTaskPropertiesErrorsAction } from "../store/Tasks/Action";

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;

    const screenDimensions = {width: width, height: height};
    return screenDimensions
};

export const isMobileDevice = () => {
    if (getWindowDimensions().width < mobileScreenWidth) {
        return true
    } else {
        return false
    };
};

export const fillInEmptyTaskAttributes = (task) => {
    for (let key in task) {
        if (task[key] === '') {
            task[key] = characterToAutocompleteEmptyTaskSign;
        }
    }
    return task
};

export const dateIsError = (date) => {
    const regExp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

    if (!regExp.test(date)) {
        return `Введите в формате: "dd.mm.yyyy".`
    } else {
        const daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const [number, month, year] = date.split('.');
        
        if (+month > 12 || +number > daysInMonths[+month - 1]) {
            return `Даты не существует!`
        } else if (+number === 29 && +month === 2 && (!(+year % 4 === 0) || (+year % 100 === 0 && +year % 400 !== 0))) {
            return `Даты не существует, так как только каждый четвёртый год, который при этом или не кратен 100, или кратен 400, является високосным!`
        } else {
            return false
        }
    }
};

export const checkIsInputValueValid = (eventTargetValue, taskSignIdentifier, dispatch) => {
    dispatch({
        type: dictWithNewTaskPropertiesErrorsAction.type,
        payload: {
            taskPropertyError: taskSignIdentifier,
            taskPropertyErrorValue: false,
        }
    });

    switch(taskSignIdentifier) {
        case allSignsForTasksFilter.taskCategory.variable:
        case allSignsForTasksFilter.taskName.variable:
        case allSignsForTasksFilter.subtaskName.variable:
        case allSignsForTasksFilter.taskDeadline.variable:
        case allSignsForTasksFilter.taskDuration.variable:
        case allSignsForTasksFilter.taskStatus.variable: {
            if (eventTargetValue === '') {
                dispatch({
                    type: dictWithNewTaskPropertiesErrorsAction.type,
                    payload: {
                        taskPropertyError: taskSignIdentifier,
                        taskPropertyErrorValue: 'Обязательное поле',
                    }
                });
                
                return 'Обязательное поле'
            } else {
                switch(taskSignIdentifier) {
                    case allSignsForTasksFilter.taskDeadline.variable: {
                        dispatch({
                            type: dictWithNewTaskPropertiesErrorsAction.type,
                            payload: {
                                taskPropertyError: taskSignIdentifier,
                                taskPropertyErrorValue: dateIsError(eventTargetValue),
                            }
                        });

                        return dateIsError(eventTargetValue)
                    }
                    case allSignsForTasksFilter.taskStatus.variable: {
                        if (
                            eventTargetValue === '+' 
                            || 
                            eventTargetValue === '-'
                        ) {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: false,
                                }
                            });
                            
                            return false
                        } else {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: 'Только "+" или "-"',
                                }
                            });
                            
                            return 'Только "+" или "-"'
                        }
                    }
                    case allSignsForTasksFilter.taskDuration.variable: {
                        const regExp = /^[0-9]+$/

                        if (regExp.test(eventTargetValue)) {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: false,
                                }
                            });
                            
                            return false
                        } else {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: 'Введите натуразльное число, равное количеству дней',
                                }
                            });
                            
                            return 'Введите натуразльное число, равное количеству дней'
                        }
                    }
                    default: {
                        dispatch({
                            type: dictWithNewTaskPropertiesErrorsAction.type,
                            payload: {
                                taskPropertyError: taskSignIdentifier,
                                taskPropertyErrorValue: false,
                            }
                        });

                        return false;
                    }
                }
            }
        }
        default: {
            //* No default.
        }
    }
};
