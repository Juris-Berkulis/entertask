import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListTasksKindOfListByUserUID } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { AllTasksUI } from '../../ui_components/AllTasksUI';

export const AllTasks = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const tasksListTasksKindOfListByIdSel = useSelector(getTasksListTasksKindOfListByUserUID('userUID'));

    const tasksListTasksKindOfListByIdSelForProps = tasksListTasksKindOfListByIdSel.reverse().map((item) => (
        <li className={classes.allTasks__taskListItem} key={item.taskCreateAt}>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskCategory}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph} ${classes.allTasks__taskListItemParagraph_taskName}`}>{item.taskName}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.subtaskName}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskPriority}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskControl}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskUrgency}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskImportance}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskDeadline}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskDuration}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskStatus}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>{item.taskComment}</p>
            </div>
        </li>
    ));

    useLayoutEffect(() => {
        dispatch(onTrackingChangeValueInTasksListWithThunkAction('userUID'));

        return () => {
            dispatch(offTrackingChangeValueInTasksListWithThunkAction('userUID'));
        }
    }, [dispatch]);

    return (
        <AllTasksUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps}></AllTasksUI>
    )
};
