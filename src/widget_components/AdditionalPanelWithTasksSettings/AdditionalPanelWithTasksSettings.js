import React from 'react';
import { useStyles } from '../../styles/Style';
import { AdditionalPanelWithTasksSettingsUI } from '../../ui_components/AdditionalPanelWithTasksSettingsUI';

export const AdditionalPanelWithTasksSettings = (props) => {
    const classes = useStyles();

    return (
        <AdditionalPanelWithTasksSettingsUI classes={classes}></AdditionalPanelWithTasksSettingsUI>
    )
};
