import React from 'react';
import { TasksPage } from '../widget_components/TasksPage/TasksPage';

export const AllTasksUI = (props) => {
    return (
        <TasksPage allAppComponentsWithPageTitle={props.allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={props.tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={props.dictWithListsForTasksFilterSel} changeTask={props.changeTask} deleteTask={props.deleteTask} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history}></TasksPage>
        // <div className={props.classes.allTasks}>
        //     <OpenTask changeTask={props.changeTask} deleteTask={props.deleteTask} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history}></OpenTask>
        //     <div className={props.classes.allTasks__filterWrapper}>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCategory || {}} signForTasksFilter={allSignsForTasksFilter.taskCategory.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskName || {}} signForTasksFilter={allSignsForTasksFilter.taskName.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.subtaskName || {}} signForTasksFilter={allSignsForTasksFilter.subtaskName.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDeadline || {}} signForTasksFilter={allSignsForTasksFilter.taskDeadline.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDuration || {}} signForTasksFilter={allSignsForTasksFilter.taskDuration.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskImportance || {}} signForTasksFilter={allSignsForTasksFilter.taskImportance.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskPriority || {}} signForTasksFilter={allSignsForTasksFilter.taskPriority.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskUrgency || {}} signForTasksFilter={allSignsForTasksFilter.taskUrgency.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskControl || {}} signForTasksFilter={allSignsForTasksFilter.taskControl.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskStatus || {}} signForTasksFilter={allSignsForTasksFilter.taskStatus.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCreateAt || {}} signForTasksFilter={allSignsForTasksFilter.taskCreateAt.variable}></TasksFilter>
        //         <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskComment || {}} signForTasksFilter={allSignsForTasksFilter.taskComment.variable}></TasksFilter>
        //     </div>
        //     <ul className={props.classes.allTasks__tasksList}>
        //         {
        //             props.tasksListTasksKindOfListByIdSelForProps.length
        //             ? 
        //             props.tasksListTasksKindOfListByIdSelForProps
        //             : 
        //             <p className={props.classes.allTasks__tasksEmptyListText}>Список задач пуст</p>
        //         }
        //     </ul>
        // </div>
    )
};
