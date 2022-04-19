import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter } from '../../data/consts';
import { editableTaskObjectAction } from '../../store/AppSwitches/Action';
import { deleteTaskWithThunkAction, offTrackingChangeValueInTasksListWithThunkAction, onTrackingChangeDictWithListsForTasksFilterWithThunkAction, onTrackingChangeValueInTasksListWithThunkAction } from '../../store/Tasks/Action';
import { getTasksListDictWithListsForTasksFilterSelector, getTasksListTasksKindOfListByUserUID } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { AllTasksUI } from '../../ui_components/AllTasksUI';

export const AllTasks = () => {
    const classes = useStyles();

    const history = useNavigate();

    const dispatch = useDispatch();

    const tasksListTasksKindOfListByIdSel = useSelector(getTasksListTasksKindOfListByUserUID('userUID'));
    const dictWithListsForTasksFilterSel = useSelector(getTasksListDictWithListsForTasksFilterSelector);

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

    const tasksListTasksKindOfListByIdSelForProps = tasksListTasksKindOfListByIdSel
    .filter((item) => {
        return (
            dictWithListsForTasksFilterSel
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskID.variable][item.taskID]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCreateAt.variable][item.taskCreateAt]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskCategory.variable][item.taskCategory]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskName.variable][item.taskName]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.subtaskName.variable][item.subtaskName]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskControl.variable][item.taskControl]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDeadline.variable][item.taskDeadline]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskDuration.variable][item.taskDeadline]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskImportance.variable][item.taskImportance]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskPriority.variable][item.taskPriority]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskStatus.variable][item.taskStatus]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskUrgency.variable][item.taskUrgency]
            && 
            dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable] && dictWithListsForTasksFilterSel[allSignsForTasksFilter.taskComment.variable][item.taskComment]
        )
    })
    .reverse().map((item) => (
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

    useLayoutEffect(() => {
        dispatch(onTrackingChangeDictWithListsForTasksFilterWithThunkAction('userUID'));

        return () => {
            dispatch(onTrackingChangeDictWithListsForTasksFilterWithThunkAction('userUID'));
        }
    }, [dispatch]);
    

    
    // const dict = useRef({});
    // const dictCurrent = dict.current;

    // useEffect(() => {
    //     // const dictCurrent = {};
    //     console.log(dictCurrent)
    //     // console.log(tasksListTasksKindOfListByIdSel)


    //     for (let i=0; i < tasksListTasksKindOfListByIdSel.length; i++) {
    //         // console.log(tasksListTasksKindOfListByIdSel[i])
    //         // console.log(Object.keys(tasksListTasksKindOfListByIdSel[i]))
    //         // console.log(Object.values(tasksListTasksKindOfListByIdSel[i]))

    //         for (let j=0; j < Object.keys(tasksListTasksKindOfListByIdSel[i]).length; j++) {
    //             // console.log(Object.keys(tasksListTasksKindOfListByIdSel[i])[j])

    //             if (!dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[i])[j]]) {
    //                 dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[i])[j]] = {}
    //             }

    //             if (tasksListTasksKindOfListByIdSel[i][Object.keys(tasksListTasksKindOfListByIdSel[i])[j]]) {
    //                 // console.log(tasksListTasksKindOfListByIdSel[i][Object.keys(tasksListTasksKindOfListByIdSel[i])[j]])
    //                 if (dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[i])[j]][tasksListTasksKindOfListByIdSel[i][Object.keys(tasksListTasksKindOfListByIdSel[i])[j]]] !== dictWithListsForTasksFilter[Object.keys(tasksListTasksKindOfListByIdSel[i])[j]][tasksListTasksKindOfListByIdSel[i][Object.keys(tasksListTasksKindOfListByIdSel[i])[j]]]) {
    //                     // console.log(dictWithListsForTasksFilter[Object.keys(tasksListTasksKindOfListByIdSel[i])[j]][tasksListTasksKindOfListByIdSel[i][Object.keys(tasksListTasksKindOfListByIdSel[i])[j]]])
    //                     // console.log(dictWithListsForTasksFilter[Object.keys(tasksListTasksKindOfListByIdSel[i])[j]])
    //                     dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[i])[j]][tasksListTasksKindOfListByIdSel[i][Object.keys(tasksListTasksKindOfListByIdSel[i])[j]]] = true
    //                 }
    //             }
    //         }
    //     }

    //     console.log(dictCurrent)

    //     // dispatch({
    //     //     type: dictWithListsForTasksFilterAction.type,
    //     //     payload: dictCurrent,
    //     // })
    // }, [tasksListTasksKindOfListByIdSel, dictCurrent, dictWithListsForTasksFilter]);

    // useEffect(() => {
    //     dispatch({
    //         type: dictWithListsForTasksFilterAction.type,
    //         payload: dictCurrent,
    //     })
    //     // console.log('111')
    //     // dispatch(add(dictCurrent));
    // }, [dispatch, dictCurrent]);



    // useEffect(() => {
    //     console.log(dictWithListsForTasksFilter)
    // }, [dictWithListsForTasksFilter])



    // const tasksListTasksKindOfListByIdSelFilter = tasksListTasksKindOfListByIdSel.filter((item) => )

    // const myDiv = (
    //     dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[1])[1]]
    //     &&
    //     dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[1])[1]][tasksListTasksKindOfListByIdSel[1][Object.keys(tasksListTasksKindOfListByIdSel[1])[1]]]
    //     ?
    //     <div onClick={() => dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[1])[1]][tasksListTasksKindOfListByIdSel[1][Object.keys(tasksListTasksKindOfListByIdSel[1])[1]]] = false}>
    //         {
    //         dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[1])[1]][tasksListTasksKindOfListByIdSel[1][Object.keys(tasksListTasksKindOfListByIdSel[1])[1]]]
    //         ?
    //         Object.keys(dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[1])[1]])[0]
    //         :
    //         Object.keys(dictCurrent[Object.keys(tasksListTasksKindOfListByIdSel[0])[0]])[0]
    //         }
    //     </div>
    //     : 
    //     null
    // )

    return (
        <AllTasksUI classes={classes} allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} tasksListTasksKindOfListByIdSelForProps={tasksListTasksKindOfListByIdSelForProps} dictWithListsForTasksFilterSel={dictWithListsForTasksFilterSel}></AllTasksUI>
    )
};
