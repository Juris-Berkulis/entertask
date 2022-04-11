import React from 'react';
import { Link } from 'react-router-dom';

export const AllTasksUI = (props) => {
    return (
        <div>
            <Link to={props.allAppComponentsWithPageTitle.addtask.path}>{props.allAppComponentsWithPageTitle.addtask.displayTitle}</Link>
            <ul>
                {props.tasksListTasksKindOfListByIdSelForProps}
            </ul>
        </div>
    )
};
