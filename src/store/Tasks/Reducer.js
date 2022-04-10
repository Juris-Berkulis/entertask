import { CHANGE_TASKS_LIST } from "./Action";

const initialState = {
    messages: {},
};

export const tasksListReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TASKS_LIST: {
            return {
                tasks: {
                    [action.payload.userUID]: action.payload.snapshotVal
                }
            }
        }
        default: {
            return state
        }
    }
};
