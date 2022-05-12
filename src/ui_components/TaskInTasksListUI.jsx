import React from 'react';

export const TaskInTasksListUI = (props) => {
    return (
        <li className={props.classes.allTasks__taskListItem}>
            <div className={`${props.classes.allTasks__taskListItemLinePannel}`}>
                <div className={props.classes.allTasks__taskListItemBtnsPannel}>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_open}`} onClick={() => props.openTheTask(props.item, props.dispatch)}>Открыть</button>
                    {
                        props.item.taskForToday
                        ? 
                        <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_today}`} onClick={() => props.deleteTheTaskFromListWithTasksForToday(props.item.taskID, props.dispatch)}>Не сегодня</button>
                        : 
                        <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_notToday}`} onClick={() => props.addTheTaskInListWithTasksForToday(props.item.taskID, props.dispatch)}>На сегодня</button>
                    }
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_change}`} onClick={() => props.changeTask(props.item, props.dispatch, props.history)}>&#9998;</button>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_delete}`} onClick={() => props.deleteTask(props.item.taskID, props.dispatch, props.tasksKindOfDictByUserUIDSel)}>&#128465;</button>
                </div>
            </div>
            <div className={`${props.classes.allTasks__taskListItemLineInfo}`}>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskCategory 
                        && 
                        props.item.taskCategory !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskCategory}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskName 
                        && 
                        props.item.taskName !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph_taskName}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskName}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_subtaskName_mobileDevice : props.classes.allTasks__taskListItemCell_subtaskName}`}>
                    {
                        props.item.subtaskName 
                        && 
                        props.item.subtaskName !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.subtaskName}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskUrgency 
                        && 
                        props.item.taskUrgency !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.replaceBrieflyValueToDetailValueOfTheTaskSign(props.allSignsForTasksFilter.taskUrgency.variable, props.item.taskUrgency)}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskImportance 
                        && 
                        props.item.taskImportance !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.replaceBrieflyValueToDetailValueOfTheTaskSign(props.allSignsForTasksFilter.taskImportance.variable, props.item.taskImportance)}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null} ${props.classes.taskEisenhowerMatrixValue__color_} ${props.classes['taskEisenhowerMatrixValue__color_' + props.item.taskEisenhowerMatrixValue]}`}>
                    {
                        props.item.taskEisenhowerMatrixValue 
                        && 
                        props.item.taskEisenhowerMatrixValue !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.replaceBrieflyValueToDetailValueOfTheTaskSign(props.allSignsForTasksFilter.taskEisenhowerMatrixValue.variable, props.item.taskEisenhowerMatrixValue)}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskPriority 
                        && 
                        props.item.taskPriority !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskPriority}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskControl 
                        && 
                        props.item.taskControl !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskControl}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskDeadline 
                        && 
                        props.item.taskDeadline !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph} ${props.classes.textAlign_center}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskDeadline}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskDuration 
                        && 
                        props.item.taskDuration !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph} ${props.classes.textAlign_center}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskDuration}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskStatus 
                        && 
                        props.item.taskStatus !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph_status} ${(props.item.taskStatus === '+' && props.classes.allTasks__taskListItemParagraph_statusPlus) || (props.item.taskStatus === '-' && props.classes.allTasks__taskListItemParagraph_statusMinus) || null} ${props.classes.textAlign_center}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue} ${props.classes.allTasks__taskListItemParagraphValue_status} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemParagraphValue_status_mobileDevice : null} ${(props.item.taskStatus === '+' && props.classes.allTasks__taskListItemParagraphValue_statusPlus) || (props.item.taskStatus === '-' && props.classes.allTasks__taskListItemParagraphValue_statusMinus) || null}`}>{props.item.taskStatus === '-' ? <span>&#8722;</span> : props.item.taskStatus}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null}`}>
                    {
                        props.item.taskCreateAt 
                        && 
                        props.item.taskCreateAt !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskCreateAt}</span>
                        </p>
                    }
                </div>
                <div className={`${props.classes.allTasks__taskListItemCell} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_mobileDevice : null} ${props.isMobileDeviceBoolean ? props.classes.allTasks__taskListItemCell_taskComment_mobileDevice : props.classes.allTasks__taskListItemCell_taskComment}`}>
                    {
                        props.item.taskComment 
                        && 
                        props.item.taskComment !== props.characterToAutocompleteEmptyTaskSign 
                        && 
                        <p className={`${props.classes.allTasks__taskListItemParagraph}`}>
                            <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.item.taskComment}</span>
                        </p>
                    }
                </div>
            </div>
        </li>
    )
};
