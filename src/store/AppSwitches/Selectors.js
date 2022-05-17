export const getAppSwitchesRootSelector = (state) => state.appSwitchesStore;
export const getAppSwitchesResetInputFieldsValuesInitializerSelector = (state) => getAppSwitchesRootSelector(state).resetInputFieldsValuesInitializerCase || 0;
export const getAppSwitchesEditableTaskObjectSelector = (state) => getAppSwitchesRootSelector(state).editableTaskObjectCase || false;
export const getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector = (state) => getAppSwitchesRootSelector(state).switchForCloseAllListsForTasksPropertiesFilterCase || false;
export const getStatusesInTheAppIsEmailVerificationConfirmationWaitingSelector = (state) => getAppSwitchesRootSelector(state).isEmailVerificationConfirmationWaiting || null;
export const getStatusesInTheAppCountdownForLetterRequestIsNumberSelector = (state) => getAppSwitchesRootSelector(state).countdownForLetterRequestIsNumber || null;
export const getStatusesInTheAppLastAuthorizationDateAndTimeSelector = (state) => getAppSwitchesRootSelector(state).lastAuthorizationDateAndTime || null;
