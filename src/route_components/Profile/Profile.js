import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appTitle, condition } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { eventForPWAInstallation } from '../../store/AppSwitches/Action';
import { getStatusesInTheAppEventForPWAInstallationSelector } from '../../store/AppSwitches/Selectors';
import { useStyles } from '../../styles/Style';
import { ProfileUI } from '../../ui_components/ProfileUI.jsx';

export const Profile = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const eventForPWAInstallationSel = useSelector(getStatusesInTheAppEventForPWAInstallationSelector);

    const myEmail = (auth.currentUser !== null ? auth.currentUser.email : null);

    const installApp = async () => {
        if (eventForPWAInstallationSel) {
            //* Show the install prompt:
            eventForPWAInstallationSel.prompt();
            //* Wait for the user to respond to the prompt (You can optionally return an object that has an "outcome" method that displays the user's response from the "prompt" modal window):
            await eventForPWAInstallationSel.userChoice;
            //* 1. Hide the app-provided install promp; 2. We've used the instalation prompt, and we don't need in it more:
            dispatch({
                type: eventForPWAInstallation.type,
                payload: condition.success,
            });
        }
    };

    return (
        <ProfileUI classes={classes} installApp={installApp} eventForPWAInstallationSel={eventForPWAInstallationSel} myEmail={myEmail} appTitle={appTitle} condition={condition}></ProfileUI>
    )
};
