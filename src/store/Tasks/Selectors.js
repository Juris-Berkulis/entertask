export const getTasksListRootSelector = (state) => state.tasksListStore || {};
export const getTasksListTasksSelector = (state) => getTasksListRootSelector(state).tasks || {};
export const getTasksListTasksKindOfDictByUserUIDSelector = (userUID) => (state) => getTasksListTasksSelector(state)[userUID] || {};
export const getTasksListTasksKindOfListByUserUIDSelector = (userUID) => (state) => Object.values(getTasksListTasksKindOfDictByUserUIDSelector(userUID)(state));
export const getTasksListDictWithListsForTasksFilterSelector = (state) => getTasksListRootSelector(state).dictWithListsForTasksFilterCase || {};
