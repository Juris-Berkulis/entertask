import React from 'react';
import { TasksSearch } from '../widget_components/TasksSearch/TasksSearch';

export const AdditionalPanelWithTasksSettingsUI = (props) => {
    return (
        <div className={props.classes.additionalPanelWithTasksSettings}>
            <TasksSearch></TasksSearch>
        </div>
    )
};
