import React from 'react';
import { Link } from 'react-router-dom';
import { allSignsForTasksFilter } from '../data/consts';
import { TasksFilter } from '../widget_components/TasksFilter/TasksFilter';

export const AllTasksUI = (props) => {
    return (
        <div className={props.classes.allTasks}>
            <div className={props.classes.allTasks__filterWrapper}>
                <div className={props.classes.allTasks__filterLine}>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCategory} signForTasksFilter={allSignsForTasksFilter.taskCategory.variable}></TasksFilter>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskName} signForTasksFilter={allSignsForTasksFilter.taskName.variable}></TasksFilter>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.subtaskName} signForTasksFilter={allSignsForTasksFilter.subtaskName.variable}></TasksFilter>
                </div>
                <div className={props.classes.allTasks__filterLine}>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDeadline} signForTasksFilter={allSignsForTasksFilter.taskDeadline.variable}></TasksFilter>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDuration} signForTasksFilter={allSignsForTasksFilter.taskDuration.variable}></TasksFilter>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskImportance} signForTasksFilter={allSignsForTasksFilter.taskImportance.variable}></TasksFilter>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskPriority} signForTasksFilter={allSignsForTasksFilter.taskPriority.variable}></TasksFilter>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskUrgency} signForTasksFilter={allSignsForTasksFilter.taskUrgency.variable}></TasksFilter>
                </div>
                <div className={props.classes.allTasks__filterLine}>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCreateAt} signForTasksFilter={allSignsForTasksFilter.taskCreateAt.variable}></TasksFilter>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskID} signForTasksFilter={allSignsForTasksFilter.taskID.variable}></TasksFilter>
                </div>
                <div className={props.classes.allTasks__filterLine}>
                    <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskComment} signForTasksFilter={allSignsForTasksFilter.taskComment.variable}></TasksFilter>
                </div>
            </div>
            <Link className={props.classes.allTasks__addNewTaskBtn} to={props.allAppComponentsWithPageTitle.addtask.path}>{props.allAppComponentsWithPageTitle.addtask.displayTitle}</Link>
            <ul className={props.classes.allTasks__tasksList}>
                {props.tasksListTasksKindOfListByIdSelForProps}
            </ul>
        </div>
    )
};
