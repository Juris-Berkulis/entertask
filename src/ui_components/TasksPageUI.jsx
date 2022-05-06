import React from 'react';
import { allSignsForTasksFilter } from '../data/consts';
import { OpenTask } from '../route_components/OpenTask/OpenTask';
import { TasksFilter } from '../widget_components/TasksFilter/TasksFilter';

export const TasksPageUI = (props) => {
    return (
        <div className={props.classes.allTasks}>
            <OpenTask changeTask={props.changeTask} deleteTask={props.deleteTask} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history}></OpenTask>
            <div className={props.classes.allTasks__filterWrapper}>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCategory || {}} signForTasksFilter={allSignsForTasksFilter.taskCategory.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskName || {}} signForTasksFilter={allSignsForTasksFilter.taskName.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.subtaskName || {}} signForTasksFilter={allSignsForTasksFilter.subtaskName.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskUrgency || {}} signForTasksFilter={allSignsForTasksFilter.taskUrgency.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskImportance || {}} signForTasksFilter={allSignsForTasksFilter.taskImportance.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskEisenhowerMatrixValue || {}} signForTasksFilter={allSignsForTasksFilter.taskEisenhowerMatrixValue.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskPriority || {}} signForTasksFilter={allSignsForTasksFilter.taskPriority.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskControl || {}} signForTasksFilter={allSignsForTasksFilter.taskControl.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDeadline || {}} signForTasksFilter={allSignsForTasksFilter.taskDeadline.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskDuration || {}} signForTasksFilter={allSignsForTasksFilter.taskDuration.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskStatus || {}} signForTasksFilter={allSignsForTasksFilter.taskStatus.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskCreateAt || {}} signForTasksFilter={allSignsForTasksFilter.taskCreateAt.variable}></TasksFilter>
                <TasksFilter propertiesForTasksFilter={props.dictWithListsForTasksFilterSel.taskComment || {}} signForTasksFilter={allSignsForTasksFilter.taskComment.variable}></TasksFilter>
            </div>
            <div className={props.classes.allTasks__tableWrapper}>
                <div className={props.classes.allTasks__table}>
                    <div className={props.classes.allTasks__tableTitleWrapper}>
                        <div className={props.classes.allTasks__tableTitle}>
                            <p className={props.classes.allTasks__tableColumnTitle}>Категория</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Задача</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Подзадача</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Срочность</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Важность</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Эйзенхауэр</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Приоритет</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Контроль</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Срок</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Продолжительность</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Статус</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Дата создания</p>
                            <p className={props.classes.allTasks__tableColumnTitle}>Комментарий</p>
                        </div>
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
            </div>
        </div>
    )
};
