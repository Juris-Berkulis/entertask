import { 
    subtaskNameAction, 
    taskCategoryAction, 
    taskCommentAction, 
    taskControlAction, 
    taskDeadlineAction, 
    taskDurationAction, 
    taskEisenhowerMatrixValueAction, 
    taskImportanceAction, 
    taskNameAction, 
    taskPriorityAction, 
    taskStatusAction, 
    taskUrgencyAction 
} from './Action.js';

const initialState = {};

export const inputFieldsValuesForNewTaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case taskCategoryAction.type: {
            return {
                ...state,
                taskCategoryCase: action.payload,
            }
        }
        case taskNameAction.type: {
            return {
                ...state,
                taskNameCase: action.payload,
            }
        }
        case subtaskNameAction.type: {
            return {
                ...state,
                subtaskNameCase: action.payload,
            }
        }
        case taskPriorityAction.type: {
            return {
                ...state,
                taskPriorityCase: action.payload,
            }
        }
        case taskControlAction.type: {
            return {
                ...state,
                taskControlCase: action.payload,
            }
        }
        case taskUrgencyAction.type: {
            return {
                ...state,
                taskUrgencyCase: action.payload,
            }
        }
        case taskImportanceAction.type: {
            return {
                ...state,
                taskImportanceCase: action.payload,
            }
        }
        case taskDeadlineAction.type: {
            return {
                ...state,
                taskDeadlineCase: action.payload,
            }
        }
        case taskDurationAction.type: {
            return {
                ...state,
                taskDurationCase: action.payload,
            }
        }
        case taskStatusAction.type: {
            return {
                ...state,
                taskStatusCase: action.payload,
            }
        }
        case taskCommentAction.type: {
            return {
                ...state,
                taskCommentCase: action.payload,
            }
        }
        case taskEisenhowerMatrixValueAction.type: {
            return {
                ...state,
                taskEisenhowerMatrixValueCase: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
