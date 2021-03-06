import { allAppComponentsWithPageTitle, allSignsForTasksFilter, appTitle, characterToAutocompleteEmptyTaskSign, eisenhowerMatrix, importance, mobileScreenWidth, objectWithForbiddenCharactersForFirebaseDatabaseKeys, urgency } from "../data/consts";
import { auth } from "../firebase/firebase";
import { countdownForLetterRequest, editableTaskObjectAction } from "../store/AppSwitches/Action";
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
    if (date === '') {
        return false
    }

    const regExp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

    if (!regExp.test(date)) {
        return `?????????????? ?? ??????????????: "dd.mm.yyyy".`
    } else {
        const daysInMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const [number, month, year] = date.split('.');
        
        if (+month > 12 || +number > daysInMonths[+month - 1]) {
            return `???????? ???? ????????????????????!`
        } else if (+number === 29 && +month === 2 && (!(+year % 4 === 0) || (+year % 100 === 0 && +year % 400 !== 0))) {
            return `???????? ???? ????????????????????, ?????? ?????? ???????????? ???????????? ?????????????????? ??????, ?????????????? ?????? ???????? ?????? ???? ???????????? 100, ?????? ???????????? 400, ???????????????? ????????????????????!`
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
        case allSignsForTasksFilter.taskStatus.variable: {
            if (eventTargetValue === '') {
                dispatch({
                    type: dictWithNewTaskPropertiesErrorsAction.type,
                    payload: {
                        taskPropertyError: taskSignIdentifier,
                        taskPropertyErrorValue: '???????????????????????? ????????',
                    }
                });
                
                return '???????????????????????? ????????'
            } else {
                break;
            }
        }
        default: {
            //* No default.
        }
    }

    switch(taskSignIdentifier) {
        case allSignsForTasksFilter.taskCategory.variable:
        case allSignsForTasksFilter.taskName.variable:
        case allSignsForTasksFilter.subtaskName.variable: {
            if (eventTargetValue.length < 3) {
                dispatch({
                    type: dictWithNewTaskPropertiesErrorsAction.type,
                    payload: {
                        taskPropertyError: taskSignIdentifier,
                        taskPropertyErrorValue: '?????????????? 3 ??????????????',
                    }
                });
                
                return '?????????????? 3 ??????????????'
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
                        taskPropertyErrorValue: dateError,
                    }
                });

                return dateError
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
                        taskPropertyErrorValue: '???????????? "+" ?????? "-"',
                    }
                });
                
                return '???????????? "+" ?????? "-"'
            } else {
                break;
            }
        }
        case allSignsForTasksFilter.taskDuration.variable: {
            if (eventTargetValue === '') {
                break;
            }

            const regExp = /^[0-9]+$/

            if (!regExp.test(eventTargetValue)) {
                dispatch({
                    type: dictWithNewTaskPropertiesErrorsAction.type,
                    payload: {
                        taskPropertyError: taskSignIdentifier,
                        taskPropertyErrorValue: '?????????????? ???????????????????????? ??????????, ???????????? ???????????????????? ????????',
                    }
                });
                
                return '?????????????? ???????????????????????? ??????????, ???????????? ???????????????????? ????????'
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
                        taskPropertyErrorValue: '???????????? "1", "2" ?????? "3"',
                    }
                });
                
                return '???????????? "1", "2" ?????? "3"'
            } else {
                break;
            }
        }
        default: {
            //* No default.
        }
    }

    //* ?????????? ?? ???????? ???????????? "firebase" ???? ?????????? ?????????????????? ???? ???????? 768 ???????? (?????? ???????????????? 183 ??????????????, ???????? ???????????????????????? ???????? ???????????? ???????????????????????? ??????????????):
    const maximumNumberOfCharactersForTaskSignsValues = 180;

    if (eventTargetValue.length > maximumNumberOfCharactersForTaskSignsValues) {
        dispatch({
            type: dictWithNewTaskPropertiesErrorsAction.type,
            payload: {
                taskPropertyError: taskSignIdentifier,
                taskPropertyErrorValue: `???????????????? ${maximumNumberOfCharactersForTaskSignsValues} ????????????????`,
            }
        });
        
        return `???????????????? ${maximumNumberOfCharactersForTaskSignsValues} ????????????????`
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

export const deleteTask = (userUID, taskID, dispatch, tasksKindOfDictByUserUIDSel, deviceOnTheNetworkSel) => {
    if (!deviceOnTheNetworkSel) {
        return
    }

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
            dispatch(deleteExtraSignOfTaskFilteringWithThunkAction(userUID, deleteTaskSign, thisTaskWillBeDeleted[deleteTaskSign]));
        }
    }

    deleteTaskWithThunkAction(userUID, taskID);
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

export const addTheTaskInListWithTasksForToday = (userUID, taskID, dispatch, deviceOnTheNetworkSel) => {
    if (!deviceOnTheNetworkSel) {
        return
    }

    dispatch(addTheTaskInListWithTasksForTodayWithThunkAction(userUID, taskID));
};

export const deleteTheTaskFromListWithTasksForToday = (userUID, taskID, dispatch, deviceOnTheNetworkSel) => {
    if (!deviceOnTheNetworkSel) {
        return
    }

    dispatch(deleteTheTaskFromListWithTasksForTodayWithThunkAction(userUID, taskID));
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

export const userVerificationWaiting = (verificationWaitingBoolean, push) => {
    const timerId = setInterval(async () => {
        if (auth.currentUser) {
            await auth.currentUser.reload();

            if (auth.currentUser && auth.currentUser.emailVerified) {
                push(allAppComponentsWithPageTitle.tasksfortoday.path);
                verificationWaitingBoolean = false;

                return {waiting: verificationWaitingBoolean, clear: clearInterval(timerId)}
            }
        } else {
            verificationWaitingBoolean = false;

            return {waiting: verificationWaitingBoolean, clear: clearInterval(timerId)}
        }
    }, 5000);
};

export const requestTheLetter = async (myEmail) => {
    if (auth.currentUser) {
        await auth.currentUser.sendEmailVerification();
        const infoMessage = confirmSendingOfTheVerificationLetter(myEmail).success;

        return infoMessage
    } else if (!auth.currentUser) {
        const error = confirmSendingOfTheVerificationLetter(myEmail).error;

        return error
    }
};

export const confirmSendingOfTheVerificationLetter = (myEmail) => {
    return {
        success: `???????????? ????????????????????${myEmail ? (' ???? ' + myEmail) : null}. ?????????????????? ???? ???????????? ?? ????????????, ?????????? ?????????????????? ?????????????? ??????????????????????.`,
        error: `?????????????????? ????????!`,
    }
};

export const countdownForLetterRequestWithLink = (dispatch, startValueForTimer) => {
    let counter = startValueForTimer;

    const intervalId = setInterval(() => {
        dispatch({
            type: countdownForLetterRequest.type,
            payload: counter,
        });
        if (counter <= 0) {
            dispatch({
                type: countdownForLetterRequest.type,
                payload: 0,
            });

            return clearTimeout(intervalId)
        }
        counter--;
    }, 1000);
};

export const instantUserVerificationChecking = async (verificationWaitingBoolean, push) => {
    if (auth.currentUser) {
        verificationWaitingBoolean = false;
        await auth.currentUser.reload();
        if (auth.currentUser && auth.currentUser.emailVerified) {
            push(allAppComponentsWithPageTitle.tasksfortoday.path);

            return verificationWaitingBoolean
        } else if (auth.currentUser && !auth.currentUser.emailVerified) {
            verificationWaitingBoolean = true;
            const isLoading = userVerificationWaiting(verificationWaitingBoolean, push);
            const waiting = (isLoading && isLoading.waiting ? isLoading.waiting : null);
            if (isLoading && isLoading.clear) {
                isLoading.clear();
            }

            if (waiting === false) {
                verificationWaitingBoolean = false;
            }

            return verificationWaitingBoolean
        }
    }
};

export const allowedPeriodInsideTheApp = (
    years, 
    weeks, 
    days, 
    hours, 
    minutes, 
    seconds, 
    milliseconds
) => {
    const period = (
        milliseconds 
        + seconds * 1000 
        + minutes * 60 * 1000 
        + hours * 60 * 60 * 1000 
        + days * 24 * 60 * 60 * 1000 
        + weeks * 7 * 24 * 60 * 60 * 1000 
        + years * 365 * 24 * 60 * 60 * 1000
    );

    return period
};
