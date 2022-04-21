import { CHANGE_TASKS_LIST, dictWithListsForTasksFilterAction, reverseDirectionForTasksSortinBySignAction, tasksSignForTasksSortingAction } from "./Action";

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
        default: {
            return state
        }
    }
};
