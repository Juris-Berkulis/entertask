export const getAppSwitchesRootSelector = (state) => state.appSwitchesStore;
export const getAppSwitchesResetInputFieldsValuesInitializerSelector = (state) => getAppSwitchesRootSelector(state).resetInputFieldsValuesInitializerCase || 0;
