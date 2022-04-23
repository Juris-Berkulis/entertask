import { CHANGE_TASKS_LIST, dictWithListsForTasksFilterAction, dictWithNewTaskPropertiesErrorsAction, resetDictWithNewTaskPropertiesErrorsAction, reverseDirectionForTasksSortinBySignAction, tasksSignForTasksSortingAction } from "./Action";

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
        default: {
            return state
        }
    }
};
