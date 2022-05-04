import { eisenhowerMatrix } from "../../data/consts";

export const getInputFieldsValuesForNewTaskRootSelector = (state) => state.inputFieldsValuesForNewTaskStore;
export const getInputFieldsValuesForNewTasktaskCategorySelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskCategoryCase || '';
export const getInputFieldsValuesForNewTaskTaskNameSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskNameCase || '';
export const getInputFieldsValuesForNewTaskSubtaskNameSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).subtaskNameCase || '';
export const getInputFieldsValuesForNewTaskTaskPrioritySelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskPriorityCase || '';
export const getInputFieldsValuesForNewTaskTaskControlSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskControlCase || '';
export const getInputFieldsValuesForNewTaskTaskUrgencySelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskUrgencyCase || '';
export const getInputFieldsValuesForNewTaskTaskImportanceSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskImportanceCase || '';
export const getInputFieldsValuesForNewTaskTaskDeadlineSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskDeadlineCase || '';
export const getInputFieldsValuesForNewTaskTaskDurationSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskDurationCase || '';
export const getInputFieldsValuesForNewTaskTaskStatusSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskStatusCase || '';
export const getInputFieldsValuesForNewTaskTaskCommentSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskCommentCase || '';
export const getInputFieldsValuesForNewTaskTaskEisenhowerMatrixValueSelector = (state) => getInputFieldsValuesForNewTaskRootSelector(state).taskEisenhowerMatrixValueCase || eisenhowerMatrix["0_0"];
