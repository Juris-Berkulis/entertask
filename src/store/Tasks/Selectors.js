var firebaseKeyEncode = require('firebase-key-encode');

export const getTasksListRootSelector = (state) => state.tasksListStore || {};
export const getTasksListTasksSelector = (state) => getTasksListRootSelector(state).tasks || {};
export const getTasksListTasksKindOfDictByUserUIDSelector = (userUID) => (state) => getTasksListTasksSelector(state)[userUID] || {};
export const getTasksListTasksKindOfListByUserUIDSelector = (userUID) => (state) => Object.values(getTasksListTasksKindOfDictByUserUIDSelector(userUID)(state));
export const getTasksListDictWithListsForTasksFilterSelector = (state) => firebaseKeyEncode.deepDecode(getTasksListRootSelector(state).dictWithListsForTasksFilterCase) || {};
export const getTasksListTasksSignForTasksSortingSelector = (state) => getTasksListRootSelector(state).tasksSignForTasksSortingCase || false;
export const getTasksListReverseDirectionForTasksSortinBySignSelector = (state) => getTasksListRootSelector(state).reverseDirectionForTasksSortinBySignCase || false;
export const getTasksListDictWithNewTaskPropertiesErrorsSelector = (state) => getTasksListRootSelector(state).dictWithNewTaskPropertiesErrorsCase || {};
export const getTasksListOpenTaskSelector = (state) => getTasksListRootSelector(state).openTaskCase || {};
