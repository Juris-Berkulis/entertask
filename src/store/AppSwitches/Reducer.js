import { 
    editableTaskObjectAction,
    resetInputFieldsValuesInitializerAction, 
    switchForCloseAllListsForTasksPropertiesFilterAction
} from './Action.js';

const initialState = {};

export const appSwitchesReducer = (state = initialState, action) => {
    switch(action.type) {
        case resetInputFieldsValuesInitializerAction.type: {
            return {
                ...state,
                resetInputFieldsValuesInitializerCase: action.payload,
            }
        }
        case editableTaskObjectAction.type: {
            return {
                ...state,
                editableTaskObjectCase: action.payload,
            }
        }
        case switchForCloseAllListsForTasksPropertiesFilterAction.type: {
            return {
                ...state,
                switchForCloseAllListsForTasksPropertiesFilterCase: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
