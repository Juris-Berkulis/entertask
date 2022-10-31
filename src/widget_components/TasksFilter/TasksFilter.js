import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { isMobileDevice, replaceAllowedCharactersFromFirebaseDatabaseKeys, replaceBrieflyValueToDetailValueOfTheTaskSign } from '../../helper/helper';
import { switchForCloseAllListsForTasksPropertiesFilterAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesDeviceOnTheNetworkSelector, getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector } from '../../store/AppSwitches/Selectors';
import { changeTaskPropertyShowToSpecificValueWithThunkAction, changeTaskPropertyShowWithThunkAction, reverseDirectionForTasksSortinBySignAction, reverseDirectionForTodayTasksSortinBySignAction, tasksSignForTasksSortingAction, tasksSignForTodayTasksSortingAction } from '../../store/Tasks/Action';
import { getTasksListReverseDirectionForTasksSortinBySignSelector, getTasksListReverseDirectionForTodayTasksSortinBySignSelector, getTasksListTasksSignForTasksSortingSelector, getTasksListTasksSignForTodayTasksSortingSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TasksFilterUI } from '../../ui_components/TasksFilterUI';

export const TasksFilter = (props) => {
    const classes = useStyles();

    const [allTasksSignPropertiesForFilteringAreTrue, allTasksSignPropertiesForFilteringAreTrueSet] = useState(-1);
    const [allTasksSignPropertiesForFilteringAreFalse, allTasksSignPropertiesForFilteringAreFalseSet] = useState(-1);

    const isMobileDeviceBoolean = isMobileDevice();

    const location = useLocation();

    const dispatch = useDispatch();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const [showListPropertiesForTasksFilter, setShowListPropertiesForTasksFilter] = useState(false);

    const switchForCloseAllListsForTasksPropertiesFilterSel = useSelector(getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector);
    const tasksSignForTasksSortingSel = useSelector(getTasksListTasksSignForTasksSortingSelector);
    const reverseDirectionForTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTasksSortinBySignSelector);
    const tasksSignForTodayTasksSortingSel = useSelector(getTasksListTasksSignForTodayTasksSortingSelector);
    const reverseDirectionForTodayTasksSortinBySignSel = useSelector(getTasksListReverseDirectionForTodayTasksSortinBySignSelector);
    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);

    const toggleListPropertiesForTasksFilter = () => {
        dispatch({
            type: switchForCloseAllListsForTasksPropertiesFilterAction.type,
            payload: props.signForTasksFilter,
        });

        setShowListPropertiesForTasksFilter(!showListPropertiesForTasksFilter);
    };

    const togglePropertyShow = (item) => {
        if (!deviceOnTheNetworkSel) {
            return
        }

        dispatch(changeTaskPropertyShowWithThunkAction(userUID, props.signForTasksFilter, item, props.propertiesForTasksFilter[item]));
    };

    const togglePropertyShowToSpecificValue = (value) => {
        if (!deviceOnTheNetworkSel) {
            return
        }

        for (let item in props.propertiesForTasksFilter) {
            dispatch(changeTaskPropertyShowToSpecificValueWithThunkAction(userUID, props.signForTasksFilter, item, value));
        }
    };

    const sortFilteringListWithTaskCreateAt = (itemA, itemB, signForTasksFilter) => {
        if (signForTasksFilter === allSignsForTasksFilter.taskCreateAt.variable) {
            const dateA = new Date(itemA);
            const dateB = new Date(itemB);

            if (dateA > dateB) {
                return 1
            } else if (dateA < dateB) {
                return -1
            } else {
                return 0
            }
        } else {
            return 0
        }
    };

    const propertiesForTasksFilterList = Object.keys(props.propertiesForTasksFilter).sort((itemA, itemB) => sortFilteringListWithTaskCreateAt(itemA, itemB, props.signForTasksFilter)).map((item) => {
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

    useEffect(() => {
        let allPropertiesHasTrue = false;
        let allPropertiesHasFalse = false;
        let allPropertiesHasDifferentValues = false;

        for (let property in props.propertiesForTasksFilter) {
            if (props.propertiesForTasksFilter[property]) {
                allPropertiesHasTrue = true;

                if (allPropertiesHasFalse === false) {
                    continue;
                } else {
                    allPropertiesHasTrue = false;
                    allPropertiesHasFalse = false;
                    allPropertiesHasDifferentValues = true;

                    break;
                }
            } else {
                allPropertiesHasFalse = true;

                if (allPropertiesHasTrue === false) {
                    continue;
                } else {
                    allPropertiesHasTrue = false;
                    allPropertiesHasFalse = false;
                    allPropertiesHasDifferentValues = true;

                    break;
                }
            }
        }

        if (allPropertiesHasTrue) {
            allTasksSignPropertiesForFilteringAreTrueSet(true);
            allTasksSignPropertiesForFilteringAreFalseSet(false);
        } else if (allPropertiesHasFalse) {
            allTasksSignPropertiesForFilteringAreTrueSet(false);
            allTasksSignPropertiesForFilteringAreFalseSet(true);
        } else if (allPropertiesHasDifferentValues) {
            allTasksSignPropertiesForFilteringAreTrueSet(false);
            allTasksSignPropertiesForFilteringAreFalseSet(false);
        }
    }, [props.propertiesForTasksFilter]);

    return (
        <TasksFilterUI 
            classes={classes} 
            propertiesForTasksFilterList={propertiesForTasksFilterList} 
            signForTasksFilter={props.signForTasksFilter} 
            toggleListPropertiesForTasksFilter={toggleListPropertiesForTasksFilter} 
            showListPropertiesForTasksFilter={showListPropertiesForTasksFilter} 
            selectSignForTasksSorting={selectSignForTasksSorting} 
            toggleDirectionForTasksSortingBySign={toggleDirectionForTasksSortingBySign} 
            tasksSignForTasksSortingSel={tasksSignForTasksSortingSel} 
            reverseDirectionForTasksSortinBySignSel={reverseDirectionForTasksSortinBySignSel} 
            isMobileDeviceBoolean={isMobileDeviceBoolean} 
            tasksSignForTodayTasksSortingSel={tasksSignForTodayTasksSortingSel} 
            reverseDirectionForTodayTasksSortinBySignSel={reverseDirectionForTodayTasksSortinBySignSel} 
            location={location} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} 
            togglePropertyShowToSpecificValue={togglePropertyShowToSpecificValue} 
            allTasksSignPropertiesForFilteringAreTrue={allTasksSignPropertiesForFilteringAreTrue} 
            allTasksSignPropertiesForFilteringAreFalse={allTasksSignPropertiesForFilteringAreFalse}
        ></TasksFilterUI>
    )
};
