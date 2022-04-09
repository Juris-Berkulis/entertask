import React from 'react';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { useStyles } from '../../styles/Style';
import { AllTasksUI } from '../../ui_components/AllTasksUI';

export const AllTasks = () => {
    const classes = useStyles();

    return (
        <AllTasksUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle}></AllTasksUI>
    )
};
