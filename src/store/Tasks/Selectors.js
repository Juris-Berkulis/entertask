export const getTasksListRootSelector = (state) => state.tasksListStore || {};
export const getTasksListTasksSelector = (state) => getTasksListRootSelector(state).tasks || {};
export const getTasksListTasksKindOfDictByUserUID = (userUID) => (state) => getTasksListTasksSelector(state)[userUID] || {};
export const getTasksListTasksKindOfListByUserUID = (userUID) => (state) => Object.values(getTasksListTasksKindOfDictByUserUID(userUID)(state));
export const getTasksListDictWithListsForTasksFilterSelector = (state) => getTasksListRootSelector(state).dictWithListsForTasksFilterCase || {};
