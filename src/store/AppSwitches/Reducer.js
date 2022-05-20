import { 
    countdownForLetterRequest,
    deviceOnTheNetworkAction,
    editableTaskObjectAction,
    emailVerificationConfirmationWaitingIsFalse,
    emailVerificationConfirmationWaitingIsTrue,
    eventForPWAInstallation,
    lastAuthorization,
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
        case emailVerificationConfirmationWaitingIsTrue.type: {
            return {
                ...state, 
                isEmailVerificationConfirmationWaiting: true,
            }
        }
        case emailVerificationConfirmationWaitingIsFalse.type: {
            return {
                ...state, 
                isEmailVerificationConfirmationWaiting: false,
            }
        }
        case countdownForLetterRequest.type: {
            return {
                ...state, 
                countdownForLetterRequestIsNumber: action.payload,
            }
        }
        case lastAuthorization.type: {
            return {
                ...state,
                lastAuthorizationDateAndTime: action.payload,
            }
        }
        case eventForPWAInstallation.type: {
            return {
                ...state,
                eventForPWAInstallationCase: action.payload,
            }
        }
        case deviceOnTheNetworkAction.type: {
            return {
                ...state,
                deviceOnTheNetworkCase: action.payload,
            }
        }
        default: {
            return state
        }
    }
};
