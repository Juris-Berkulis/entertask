export const getAppSwitchesRootSelector = (state) => state.appSwitchesStore;
export const getAppSwitchesResetInputFieldsValuesInitializerSelector = (state) => getAppSwitchesRootSelector(state).resetInputFieldsValuesInitializerCase || 0;
export const getAppSwitchesEditableTaskObjectSelector = (state) => getAppSwitchesRootSelector(state).editableTaskObjectCase || false;
export const getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector = (state) => getAppSwitchesRootSelector(state).switchForCloseAllListsForTasksPropertiesFilterCase || false;
