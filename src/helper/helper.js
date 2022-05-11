import { allAppComponentsWithPageTitle, allSignsForTasksFilter, appTitle, characterToAutocompleteEmptyTaskSign, eisenhowerMatrix, importance, mobileScreenWidth, objectWithForbiddenCharactersForFirebaseDatabaseKeys, urgency } from "../data/consts";
import { editableTaskObjectAction } from "../store/AppSwitches/Action";
import { addTheTaskInListWithTasksForTodayWithThunkAction, deleteExtraSignOfTaskFilteringWithThunkAction, deleteTaskWithThunkAction, deleteTheTaskFromListWithTasksForTodayWithThunkAction, dictWithNewTaskPropertiesErrorsAction, openTaskAction } from "../store/Tasks/Action";

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

export const replaceForbiddenCharactersForFirebaseDatabaseKeys = (property) => {
    if (typeof(property) === 'string') {
        for (let character in objectWithForbiddenCharactersForFirebaseDatabaseKeys) {
            property = property
            .split(objectWithForbiddenCharactersForFirebaseDatabaseKeys[character].forbiddenCharacter)
            .join(objectWithForbiddenCharactersForFirebaseDatabaseKeys[character].allowedCharacter);
        }
    }

    return property
};

export const replaceAllowedCharactersFromFirebaseDatabaseKeys = (property) => {
    if (typeof(property) === 'string') {
        for (let character in objectWithForbiddenCharactersForFirebaseDatabaseKeys) {
            property = property
            .split(objectWithForbiddenCharactersForFirebaseDatabaseKeys[character].allowedCharacter)
            .join(objectWithForbiddenCharactersForFirebaseDatabaseKeys[character].forbiddenCharacter);
        }
    }

    return property
};

export const replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys = (task) => {
    const newDictWithTask = {};

    for (let sign in task) {
        if (typeof(task[sign]) === 'string') {
            newDictWithTask[sign] = replaceAllowedCharactersFromFirebaseDatabaseKeys(task[sign]);
        } else {
            newDictWithTask[sign] = task[sign]
        }
    }

    return newDictWithTask
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
        case allSignsForTasksFilter.taskUrgency.variable:
        case allSignsForTasksFilter.taskImportance.variable:
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
                    case allSignsForTasksFilter.taskCategory.variable:
                    case allSignsForTasksFilter.taskName.variable:
                    case allSignsForTasksFilter.subtaskName.variable: {
                        if (eventTargetValue.length < 3) {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: 'Минимум 3 символа',
                                }
                            });
                            
                            return 'Минимум 3 символа'
                        } else {
                            break;
                        }
                    }
                    case allSignsForTasksFilter.taskDeadline.variable: {
                        const dateError = dateIsError(eventTargetValue);

                        if (dateError) {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: dateIsError(eventTargetValue),
                                }
                            });
    
                            return dateIsError(eventTargetValue)
                        } else {
                            break;
                        }
                    }
                    case allSignsForTasksFilter.taskStatus.variable: {
                        if (
                            !(
                                eventTargetValue === '+' 
                                || 
                                eventTargetValue === '-'
                            )
                        ) {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: 'Только "+" или "-"',
                                }
                            });
                            
                            return 'Только "+" или "-"'
                        } else {
                            break;
                        }
                    }
                    case allSignsForTasksFilter.taskDuration.variable: {
                        const regExp = /^[0-9]+$/

                        if (!regExp.test(eventTargetValue)) {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: 'Введите натуразльное число, равное количеству дней',
                                }
                            });
                            
                            return 'Введите натуразльное число, равное количеству дней'
                        } else {
                            break;
                        }
                    }
                    case allSignsForTasksFilter.taskUrgency.variable:
                    case allSignsForTasksFilter.taskImportance.variable: {
                        const regExp = /^[1-3]$/

                        if (!regExp.test(eventTargetValue)) {
                            dispatch({
                                type: dictWithNewTaskPropertiesErrorsAction.type,
                                payload: {
                                    taskPropertyError: taskSignIdentifier,
                                    taskPropertyErrorValue: 'Только "1", "2" или "3"',
                                }
                            });
                            
                            return 'Только "1", "2" или "3"'
                        } else {
                            break;
                        }
                    }
                    default: {
                        //* No default.
                    }
                }
            }
            break;
        }
        default: {
            //* No default.
        }
    }

    //* Ключи в базе данных "firebase" не могут превышать по весу 768 байт (это примерно 183 символа, если использовать одни только тяжеловесные символы):
    const maximumNumberOfCharactersForTaskSignsValues = 180;

    if (eventTargetValue.length > maximumNumberOfCharactersForTaskSignsValues) {
        dispatch({
            type: dictWithNewTaskPropertiesErrorsAction.type,
            payload: {
                taskPropertyError: taskSignIdentifier,
                taskPropertyErrorValue: `Максимум ${maximumNumberOfCharactersForTaskSignsValues} символов`,
            }
        });
        
        return `Максимум ${maximumNumberOfCharactersForTaskSignsValues} символов`
    } else {
        dispatch({
            type: dictWithNewTaskPropertiesErrorsAction.type,
            payload: {
                taskPropertyError: taskSignIdentifier,
                taskPropertyErrorValue: false,
            }
        });
        
        return false
    }
};

export const changeTask = (taskObject, dispatch, history) => {
    dispatch({
        type: editableTaskObjectAction.type,
        payload: taskObject,
    });

    history(allAppComponentsWithPageTitle.edittask.path);
};

export const deleteTask = (taskID, dispatch, tasksKindOfDictByUserUIDSel) => {
    const thisTaskWillBeDeleted = tasksKindOfDictByUserUIDSel[taskID];

    for (let deleteTaskSign in thisTaskWillBeDeleted) {
        let deleteTaskSignIsFind = false;
        for (let specificTaskId in tasksKindOfDictByUserUIDSel) {
            if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign]) {
                if (+specificTaskId === taskID) {
                    continue;
                } else if (+specificTaskId !== taskID) {
                    if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign] === thisTaskWillBeDeleted[deleteTaskSign]) {
                        deleteTaskSignIsFind = true;
                        break;
                    } else if (tasksKindOfDictByUserUIDSel[specificTaskId][deleteTaskSign] !== thisTaskWillBeDeleted[deleteTaskSign]) {
                        continue;
                    }
                }
            }
        }

        if (!deleteTaskSignIsFind) {
            dispatch(deleteExtraSignOfTaskFilteringWithThunkAction(deleteTaskSign, thisTaskWillBeDeleted[deleteTaskSign]));
        }
    }

    deleteTaskWithThunkAction(taskID);
};

export const sortTasksBySign = (itemA, itemB, tasksSignForTasksSortingSel, reverseDirectionForTasksSortinBySignSel) => {
    let propertyA;
    let propertyB;

    if (tasksSignForTasksSortingSel === allSignsForTasksFilter.taskCreateAt.variable || !tasksSignForTasksSortingSel) {
        propertyA = +itemA.taskID;
        propertyB = +itemB.taskID;
    } else {
        propertyA = itemA[tasksSignForTasksSortingSel];
        propertyB = itemB[tasksSignForTasksSortingSel];
    }

    let tasksSortingDirectionSwitch = 1;
    if (reverseDirectionForTasksSortinBySignSel) {
        tasksSortingDirectionSwitch = -1;
    }

    if (propertyA > propertyB) {
        return 1 * tasksSortingDirectionSwitch
    } else if (propertyA < propertyB) {
        return -1 * tasksSortingDirectionSwitch
    } else {
        return 0
    }
};

export const openTheTask = (item, dispatch) => {
    dispatch({
        type: openTaskAction.type,
        payload: item,
    });
};

export const addTheTaskInListWithTasksForToday = (taskID, dispatch) => {
    dispatch(addTheTaskInListWithTasksForTodayWithThunkAction(taskID));
};

export const deleteTheTaskFromListWithTasksForToday = (taskID, dispatch) => {
    dispatch(deleteTheTaskFromListWithTasksForTodayWithThunkAction(taskID));
};

export const tasksFiltering = (item, dictWithListsForTasksFilterSel, allSignsForTasksFilter) => {
    return (
        dictWithListsForTasksFilterSel
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable][item.taskID]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable][item.taskCreateAt]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable][item.taskCategory]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable][item.taskName]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable][item.subtaskName]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable][item.taskControl]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable][item.taskDeadline]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable][item.taskDuration]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable][item.taskImportance]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable][item.taskPriority]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable][item.taskStatus]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable][item.taskUrgency]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable][item.taskComment]
        && 
        dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskEisenhowerMatrixValue.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskEisenhowerMatrixValue.variable][item.taskEisenhowerMatrixValue]
    )
};

export const getEisenhowerMatrixValue = (taskUrgency, taskImportance) => {
    if (taskUrgency === '1') {
        if (taskImportance === '1') {
            return eisenhowerMatrix["1_1"].briefly
        } else if (taskImportance === '2') {
            return eisenhowerMatrix["1_2"].briefly
        } else if (taskImportance === '3') {
            return eisenhowerMatrix["1_3"].briefly
        } else {
            return eisenhowerMatrix["0_0"].briefly
        }
    } else if (taskUrgency === '2') {
        if (taskImportance === '1') {
            return eisenhowerMatrix["2_1"].briefly
        } else if (taskImportance === '2') {
            return eisenhowerMatrix["2_2"].briefly
        } else if (taskImportance === '3') {
            return eisenhowerMatrix["2_3"].briefly
        } else {
            return eisenhowerMatrix["0_0"].briefly
        }
    } else if (taskUrgency === '3') {
        if (taskImportance === '1') {
            return eisenhowerMatrix["3_1"].briefly
        } else if (taskImportance === '2') {
            return eisenhowerMatrix["3_2"].briefly
        } else if (taskImportance === '3') {
            return eisenhowerMatrix["3_3"].briefly
        } else {
            return eisenhowerMatrix["0_0"].briefly
        }
    } else {
        return eisenhowerMatrix["0_0"].briefly
    }
};

export const replaceBrieflyValueToDetailValueOfTheEisenhowerMatrix = (taskEisenhowerMatrixValue) => {
    return eisenhowerMatrix[taskEisenhowerMatrixValue].detail
};

export const replaceBrieflyValueToDetailValueOfTheTaskSign = (sign, property) => {
    if (sign === allSignsForTasksFilter.taskUrgency.variable) {
        return urgency[property] && urgency[property].detail
    } else if (sign === allSignsForTasksFilter.taskImportance.variable) {
        return importance[property] && importance[property].detail
    } else if (sign === allSignsForTasksFilter.taskEisenhowerMatrixValue.variable) {
        return replaceBrieflyValueToDetailValueOfTheEisenhowerMatrix(property)
    } else {
        return property
    }
};

export const getPageTitle = (location) => {
    for (let key in allAppComponentsWithPageTitle) {
        if (allAppComponentsWithPageTitle[key].path === location.pathname) {
        return allAppComponentsWithPageTitle[key].pageTitle
        } else {
            const objectRegExp = location.pathname.match(allAppComponentsWithPageTitle[key].pathCheck);

            if (objectRegExp !== null && objectRegExp.input === location.pathname) {
                return allAppComponentsWithPageTitle[key].pageTitle(location.pathname.split('/')[2])
            };
        };
    };
};

export const makeFullPageTitle = (pageTitle) => {
    return `${appTitle.name}${appTitle.delimiter}${pageTitle}`
};

export const giveTitleForPage = (title) => {
    return title ? (document.title = title) : (document.title = appTitle.name);
};
