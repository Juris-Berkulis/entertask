import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchForCloseAllListsForTasksPropertiesFilterAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector } from '../../store/AppSwitches/Selectors';
import { changeTaskPropertyShowWithThunkAction } from '../../store/Tasks/Action';
import { useStyles } from '../../styles/Style';
import { TasksFilterUI } from '../../ui_components/TasksFilterUI';

export const TasksFilter = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [showListPropertiesForTasksFilter, setShowListPropertiesForTasksFilter] = useState(false);

    const switchForCloseAllListsForTasksPropertiesFilterSel = useSelector(getAppSwitchesSwitchForCloseAllListsForTasksPropertiesFilterSelector);

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
                        <span>&#9989; </span>
                    : 
                        <span>&#10060; </span>
                }
                <span>{item}</span>
            </p>
        )
    });

    useEffect(() => {
        if (props.signForTasksFilter !== switchForCloseAllListsForTasksPropertiesFilterSel) {
            setShowListPropertiesForTasksFilter(false);
        }
    }, [switchForCloseAllListsForTasksPropertiesFilterSel, props.signForTasksFilter]);

    return (
        <TasksFilterUI classes={classes} propertiesForTasksFilterList={propertiesForTasksFilterList} signForTasksFilter={props.signForTasksFilter} toggleListPropertiesForTasksFilter={toggleListPropertiesForTasksFilter} showListPropertiesForTasksFilter={showListPropertiesForTasksFilter}></TasksFilterUI>
    )
};
