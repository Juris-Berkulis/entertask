import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { editableTaskObjectAction } from '../../store/AppSwitches/Action';
import { deleteTaskWithThunkAction, offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListTasksKindOfListByUserUID } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { AllTasksUI } from '../../ui_components/AllTasksUI';

export const AllTasks = () => {
    const classes = useStyles();

    const history = useNavigate();

    const dispatch = useDispatch();

    const tasksListTasksKindOfListByIdSel = useSelector(getTasksListTasksKindOfListByUserUID('userUID'));

    const changeTask = (taskObject) => {
        dispatch({
            type: editableTaskObjectAction.type,
            payload: taskObject,
        });

        history(allAppComponentsWithPageTitle.edittask.path);
    };

    const deleteTask = (taskID) => {
        deleteTaskWithThunkAction(taskID);
    };

    const tasksListTasksKindOfListByIdSelForProps = tasksListTasksKindOfListByIdSel.reverse().map((item) => (
        <li className={classes.allTasks__taskListItem} key={item.taskID}>
            <div className={classes.allTasks__taskListItemBtnsPannel}>
                <button className={`${classes.allTasks__taskListItemBtn} ${classes.allTasks__taskListItemBtn_change}`} onClick={() => changeTask(item)}>&#9998;</button>
                <button className={`${classes.allTasks__taskListItemBtn} ${classes.allTasks__taskListItemBtn_delete}`} onClick={() => deleteTask(item.taskID)}>&#128465;</button>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Категория: {item.taskCategory}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph} ${classes.allTasks__taskListItemParagraph_taskName}`}>Название: {item.taskName}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Подзадача: {item.subtaskName}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Приоритет: {item.taskPriority}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Контроль: {item.taskControl}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Срочность: {item.taskUrgency}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Важность: {item.taskImportance}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Срок: {item.taskDeadline}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Продолжительность: {item.taskDuration}</p>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Статус: {item.taskStatus}</p>
            </div>
            <div className={`${classes.allTasks__taskListItemline}`}>
                <p className={`${classes.allTasks__taskListItemParagraph}`}>Комментарий: {item.taskComment}</p>
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
