import React from 'react';
import { TasksPage } from '../widget_components/TasksPage/TasksPage';

export const TasksForTodayUI = (props) => {
    return (
        <TasksPage allAppComponentsWithPageTitle={props.allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={props.tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={props.dictWithListsForTasksFilterSel} changeTask={props.changeTask} deleteTask={props.deleteTask} dispatch={props.dispatch} tasksKindOfDictByUserUIDSel={props.tasksKindOfDictByUserUIDSel} history={props.history}></TasksPage>
    )
};
