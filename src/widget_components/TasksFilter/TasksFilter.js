import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { isMobileDevice, replaceAllowedCharactersFromFirebaseDatabaseKeys, replaceBrieflyValueToDetailValueOfTheTaskSign } from '../../helper/helper';
import { switchForCloseAllListsForTasksPropertiesFilterAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector } from '../../store/AppSwitches/Selectors';
import { changeTaskPropertyShowWithThunkAction, reverseDirectionForTasksSortinBySignAction, reverseDirectionForTodayTasksSortinBySignAction, tasksSignForTasksSortingAction, tasksSignForTodayTasksSortingAction } from '../../store/Tasks/Action';
import { getTasksListReverseDirectionForTasksSortinBySignSelector, getTasksListReverseDirectionForTodayTasksSortinBySignSelector, getTasksListTasksSignForTasksSortingSelector, getTasksListTasksSignForTodayTasksSortingSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksFilterUI } from '../../ui_components/TasksFilterUI';

export const TasksFilter = (props) => {
    const classes = useStyles();

    const isMobileDeviceBoolean = isMobileDevice();

    const location = useLocation();

    const dispatch = useDispatch();

    const [showListPropertiesForTasksFilter, setShowListPropertiesForTasksFilter] = useState(false);

    const switchForCloseAllListsForTasksPropertiesFilterSel = useSelector(getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector);
    const tasksSignForTasksSortingSel = useSelector(getTasksListTasksSignForTasksSortingSelector);
    const reverseDirectionForTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTasksSortinBySignSelector);
    const tasksSignForTodayTasksSortingSel = useSelector(getTasksListTasksSignForTodayTasksSortingSelector);
    const reverseDirectionForTodayTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTodayTasksSortinBySignSelector);

    const toggleListPropertiesForTasksFilter = () => {
        dispatch({
            type: switchForCloseAllListsForTasksPropertiesFilterAction.type,
            payload: props.signForTasksFilter,
        });

        setShowListPropertiesForTasksFilter(!showListPropertiesForTasksFilter);
    };

    const togglePropertyShow = (item) => {
        dispatch(changeTaskPropertyShowWithThunkAction(props.signForTasksFilter, item, props.propertiesForTasksFilter[item]));
    };

    const propertiesForTasksFilterList = Object.keys(props.propertiesForTasksFilter).map((item) => {
        return (
            <p className={classes.tasksFilter__listItem} onClick={() => togglePropertyShow(item)} key={item}>
                {
                    props.propertiesForTasksFilter[item]
                    ? 
                        <span className={classes.tasksFilter__listItemIcon}>&#9989;</span>
                    : 
                        <span className={classes.tasksFilter__listItemIcon}>&#10060;</span>
                }
                <span className={classes.tasksFilter__listItemText}>
                    {
                        replaceBrieflyValueToDetailValueOfTheTaskSign(props.signForTasksFilter, replaceAllowedCharactersFromFirebaseDatabaseKeys(item))
                    }
                </span>
            </p>
        )
    });

    const selectSignForTasksSorting = (sign) => {
        if (location.pathname === allAppComponentsWithPageTitle.alltasks.path) {
            dispatch({
                type: tasksSignForTasksSortingAction.type,
                payload: sign,
            });
        } else if (location.pathname === allAppComponentsWithPageTitle.tasksfortoday.path) {
            dispatch({
                type: tasksSignForTodayTasksSortingAction.type,
                payload: sign,
            });
        }
    };

    const toggleDirectionForTasksSortingBySign = () => {
        if (location.pathname === allAppComponentsWithPageTitle.alltasks.path) {
            dispatch({
                type: reverseDirectionForTasksSortinBySignAction.type,
                payload: !reverseDirectionForTasksSortinBySignSel,
            });
        } else if (location.pathname === allAppComponentsWithPageTitle.tasksfortoday.path) {
            dispatch({
                type: reverseDirectionForTodayTasksSortinBySignAction.type,
                payload: !reverseDirectionForTodayTasksSortinBySignSel,
            });
        }
    };

    useEffect(() => {
        if (props.signForTasksFilter !== switchForCloseAllListsForTasksPropertiesFilterSel) {
            setShowListPropertiesForTasksFilter(false);
        }
    }, [switchForCloseAllListsForTasksPropertiesFilterSel, props.signForTasksFilter]);

    return (
        <TasksFilterUI classes={classes} propertiesForTasksFilterList={propertiesForTasksFilterList} signForTasksFilter={props.signForTasksFilter} toggleListPropertiesForTasksFilter={toggleListPropertiesForTasksFilter} showListPropertiesForTasksFilter={showListPropertiesForTasksFilter} selectSignForTasksSorting={selectSignForTasksSorting} toggleDirectionForTasksSortingBySign={toggleDirectionForTasksSortingBySign} tasksSignForTasksSortingSel={tasksSignForTasksSortingSel} reverseDirectionForTasksSortinBySignSel={reverseDirectionForTasksSortinBySignSel} isMobileDeviceBoolean={isMobileDeviceBoolean} tasksSignForTodayTasksSortingSel={tasksSignForTodayTasksSortingSel} reverseDirectionForTodayTasksSortinBySignSel={reverseDirectionForTodayTasksSortinBySignSel} location={location} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle}></TasksFilterUI>
    )
};
