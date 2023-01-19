import React from 'react';
import { allSignsForTasksFilter } from '../data/consts';
import { OpenTask } from '../route_components/OpenTask/OpenTask';
import { AdditionalPanelWithTasksSettings } from '../widget_components/AdditionalPanelWithTasksSettings/AdditionalPanelWithTasksSettings';
import { TasksFilter } from '../widget_components/TasksFilter/TasksFilter';

export const TasksPageUI = (props) => {
    return (
        <div className={props.classes.allTasks}>
            <OpenTask changeTask={props.changeTask} deleteTask={props.deleteTask} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history}></OpenTask>
            <div className={props.classes.allTasks__filterWrapper}>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCategory || {}} signForTasksFilter={allSignsForTasksFilter.taskCategory.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskName || {}} signForTasksFilter={allSignsForTasksFilter.taskName.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.subtaskName || {}} signForTasksFilter={allSignsForTasksFilter.subtaskName.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskStatus || {}} signForTasksFilter={allSignsForTasksFilter.taskStatus.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskEisenhowerMatrixValue || {}} signForTasksFilter={allSignsForTasksFilter.taskEisenhowerMatrixValue.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskUrgency || {}} signForTasksFilter={allSignsForTasksFilter.taskUrgency.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskImportance || {}} signForTasksFilter={allSignsForTasksFilter.taskImportance.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskPriority || {}} signForTasksFilter={allSignsForTasksFilter.taskPriority.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskControl || {}} signForTasksFilter={allSignsForTasksFilter.taskControl.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDeadline || {}} signForTasksFilter={allSignsForTasksFilter.taskDeadline.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDuration || {}} signForTasksFilter={allSignsForTasksFilter.taskDuration.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCreateAt || {}} signForTasksFilter={allSignsForTasksFilter.taskCreateAt.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskComment || {}} signForTasksFilter={allSignsForTasksFilter.taskComment.variable}></TasksFilter>
            </div>
            <AdditionalPanelWithTasksSettings></AdditionalPanelWithTasksSettings>
            <div className={props.classes.allTasks__tableWrapper}>
                <div className={props.classes.allTasks__table}>
                    <div className={`${props.classes.allTasks__tableTitleWrapper} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableTitleWrapper_mobileDevice : null}`}>
                        {
                            (
                                props.location.pathname === props.allAppComponentsWithPageTitle.tasksfortoday.path 
                                && 
                                props.tasksListTasksKindOfListByIdSelForProps.length
                            ) 
                            ? 
                            <div className={props.classes.allTasks__taskListItemLinePannel}>
                                <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_today}`} onClick={props.deleteAllTaskFromListWithTasksForToday}>Очистить</button>
                            </div>
                            : 
                            null
                        }
                        <div className={props.classes.allTasks__tableTitle}>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskCategory.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskName.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_subtaskName_mobileDevice : props.classes.allTasks__tableColumnTitle_subtaskName}`}>{allSignsForTasksFilter.subtaskName.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskStatus.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskEisenhowerMatrixValue.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskUrgency.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskImportance.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskPriority.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskControl.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskDeadline.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskDuration.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null}`}>{allSignsForTasksFilter.taskCreateAt.decodingIntoRusShort}</p>
                            <p className={`${props.classes.allTasks__tableColumnTitle} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_mobileDevice : null} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tableColumnTitle_taskComment_mobileDevice : props.classes.allTasks__tableColumnTitle_taskComment}`}>{allSignsForTasksFilter.taskComment.decodingIntoRusShort}</p>
                        </div>
                    </div>
                    <ul className={`${props.classes.allTasks__tasksList} ${props.isMobileDeviceBoolean ? props.classes.allTasks__tasksList_mobileDevice : null}`}>
                        {
                            props.tasksListTasksKindOfListByIdSelForProps.length
                            ? 
                            props.tasksListTasksKindOfListByIdSelForProps
                            : 
                            <li className={props.classes.allTasks__tasksEmptyListText}>{props.valueInInputForTasksLookupSel === '' ? 'Список задач пуст' : 'Нет подходящих задач'}</li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};
