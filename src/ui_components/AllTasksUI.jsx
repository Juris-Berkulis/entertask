import React from 'react';
import { allSignsForTasksFilter } from '../data/consts';
import { OpenTask } from '../route_components/OpenTask/OpenTask';
import { TasksFilter } from '../widget_components/TasksFilter/TasksFilter';

export const AllTasksUI = (props) => {
    return (
        <div className={props.classes.allTasks}>
            <OpenTask changeTask={props.changeTask} deleteTask={props.deleteTask}></OpenTask>
            <div className={props.classes.allTasks__filterWrapper}>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCategory || {}} signForTasksFilter={allSignsForTasksFilter.taskCategory.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskName || {}} signForTasksFilter={allSignsForTasksFilter.taskName.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.subtaskName || {}} signForTasksFilter={allSignsForTasksFilter.subtaskName.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDeadline || {}} signForTasksFilter={allSignsForTasksFilter.taskDeadline.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDuration || {}} signForTasksFilter={allSignsForTasksFilter.taskDuration.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskImportance || {}} signForTasksFilter={allSignsForTasksFilter.taskImportance.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskPriority || {}} signForTasksFilter={allSignsForTasksFilter.taskPriority.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskUrgency || {}} signForTasksFilter={allSignsForTasksFilter.taskUrgency.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskControl || {}} signForTasksFilter={allSignsForTasksFilter.taskControl.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskStatus || {}} signForTasksFilter={allSignsForTasksFilter.taskStatus.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCreateAt || {}} signForTasksFilter={allSignsForTasksFilter.taskCreateAt.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskComment || {}} signForTasksFilter={allSignsForTasksFilter.taskComment.variable}></TasksFilter>
            </div>
            <ul className={props.classes.allTasks__tasksList}>
                {
                    props.tasksListTasksKindOfListByIdSelForProps.length
                    ? 
                    props.tasksListTasksKindOfListByIdSelForProps
                    : 
                    <p className={props.classes.allTasks__tasksEmptyListText}>Список задач пуст</p>
                }
            </ul>
        </div>
    )
};
