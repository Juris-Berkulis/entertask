import { CHANGE_TASKS_LIST, closeTaskAction, dictWithListsForTasksFilterAction, dictWithNewTaskPropertiesErrorsAction, isStrictSearchAction, openTaskAction, resetDictWithNewTaskPropertiesErrorsAction, reverseDirectionForTasksSortinBySignAction, reverseDirectionForTodayTasksSortinBySignAction, tasksSignForTasksSortingAction, tasksSignForTodayTasksSortingAction, valueInInputForTasksLookupAction } from "./Action";

const initialState = {};

export const tasksListReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TASKS_LIST: {
            return {
                ...state,
                tasks: {
                    [action.payload.userUID]: action.payload.snapshotVal
                }
            }
        }
        case dictWithListsForTasksFilterAction.type: {
            return {
                ...state,
                dictWithListsForTasksFilterCase: action.payload,
            }
        }
        case tasksSignForTasksSortingAction.type: {
            return {
                ...state,
                tasksSignForTasksSortingCase: action.payload,
            }
        }
        case reverseDirectionForTasksSortinBySignAction.type: {
            return {
                ...state,
                reverseDirectionForTasksSortinBySignCase: action.payload,
            }
        }
        case tasksSignForTodayTasksSortingAction.type: {
            return {
                ...state,
                tasksSignForTodayTasksSortingCase: action.payload,
            }
        }
        case reverseDirectionForTodayTasksSortinBySignAction.type: {
            return {
                ...state,
                reverseDirectionForTodayTasksSortinBySignCase: action.payload,
            }
        }
        case dictWithNewTaskPropertiesErrorsAction.type: {
            return {
                ...state,
                dictWithNewTaskPropertiesErrorsCase: {
                    ...state.dictWithNewTaskPropertiesErrorsCase,
                    [action.payload.taskPropertyError]: action.payload.taskPropertyErrorValue
                },
            }
        }
        case resetDictWithNewTaskPropertiesErrorsAction.type: {
            return {
                ...state,
                dictWithNewTaskPropertiesErrorsCase: {},
            }
        }
        case openTaskAction.type: {
            return {
                ...state,
                openTaskCase: action.payload,
            }
        }
        case closeTaskAction.type: {
            return {
                ...state,
                openTaskCase: false,
            }
        }
        case valueInInputForTasksLookupAction.type: {
            return {
                ...state,
                valueInInputForTasksLookupCase: action.payload,
            }
        }
        case isStrictSearchAction.type: {
            return {
                ...state,
                isStrictSearchCase: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
