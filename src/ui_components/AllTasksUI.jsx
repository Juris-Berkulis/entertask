import React from 'react';
import { Link } from 'react-router-dom';

export const AllTasksUI = (props) => {
    return (
        <div className={props.classes.allTasks}>
            <Link className={props.classes.allTasks__addNewTaskBtn} to={props.allAppComponentsWithPageTitle.addtask.path}>{props.allAppComponentsWithPageTitle.addtask.displayTitle}</Link>
            <ul className={props.classes.allTasks__tasksList}>
                {props.tasksListTasksKindOfListByIdSelForProps}
            </ul>
        </div>
    )
};
