import React from 'react';

export const AllTasksUI = (props) => {
    return (
        <div>
            <a href={props.allAppComponentsWithPageTitle.addtask.path}>{props.allAppComponentsWithPageTitle.addtask.displayTitle}</a>
            <ul>
                {props.tasksListTasksKindOfListByIdSelForProps}
            </ul>
        </div>
    )
};
