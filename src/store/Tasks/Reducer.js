import { CHANGE_TASKS_LIST, dictWithListsForTasksFilterAction } from "./Action";

//! FIX: Удалить "messages: {},":
const initialState = {
    messages: {},
};

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
        default: {
            return state
        }
    }
};
