import React from 'react';

export const OpenTaskUI = (props) => {
    return (
        props.someTaskIsOpen 
        && 
        <div className={props.classes.openTask__wrapper}>
            <div className={props.classes.openTask__controlPanel}>
                <div className={props.classes.openTask__taskListItemBtnsPannel}>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_change}`} onClick={() => {props.changeTask(props.tasksListOpenTaskSel, props.dispatch, props.history); props.closeTheTask()}}>&#9998;</button>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_delete}`} onClick={() => {props.deleteTask(props.tasksListOpenTaskSel.taskID, props.dispatch, props.tasksKindOfDictByUserUIDSel); props.closeTheTask()}}>&#128465;</button>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.openTask__taskListItemBtn_close}`} onClick={props.closeTheTask}>&#10006;</button>
                </div>
            </div>
            <div className={props.classes.openTask__taskInfo}>
                {
                    props.tasksListOpenTaskSel.taskCategory 
                    && 
                    props.tasksListOpenTaskSel.taskCategory !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskCategory.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskCategory}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskName 
                    && 
                    props.tasksListOpenTaskSel.taskName !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph_taskName}`}>{props.allSignsForTasksFilter.taskName.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskName}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.subtaskName 
                    && 
                    props.tasksListOpenTaskSel.subtaskName !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.subtaskName.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.subtaskName}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskUrgency 
                    && 
                    props.tasksListOpenTaskSel.taskUrgency !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskUrgency.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.replaceBrieflyValueToDetailValueOfTheTaskSign(props.allSignsForTasksFilter.taskUrgency.variable, props.tasksListOpenTaskSel.taskUrgency)}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskImportance 
                    && 
                    props.tasksListOpenTaskSel.taskImportance !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskImportance.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.replaceBrieflyValueToDetailValueOfTheTaskSign(props.allSignsForTasksFilter.taskImportance.variable, props.tasksListOpenTaskSel.taskImportance)}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskEisenhowerMatrixValue 
                    && 
                    props.tasksListOpenTaskSel.taskEisenhowerMatrixValue !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskEisenhowerMatrixValue.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.replaceBrieflyValueToDetailValueOfTheTaskSign(props.allSignsForTasksFilter.taskEisenhowerMatrixValue.variable, props.tasksListOpenTaskSel.taskEisenhowerMatrixValue)}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskPriority 
                    && 
                    props.tasksListOpenTaskSel.taskPriority !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskPriority.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskPriority}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskControl 
                    && 
                    props.tasksListOpenTaskSel.taskControl !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskControl.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskControl}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskDeadline 
                    && 
                    props.tasksListOpenTaskSel.taskDeadline !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskDeadline.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskDeadline}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskDuration 
                    && 
                    props.tasksListOpenTaskSel.taskDuration !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskDuration.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskDuration}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskStatus 
                    && 
                    props.tasksListOpenTaskSel.taskStatus !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph_status}`}>{props.allSignsForTasksFilter.taskStatus.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue} ${props.classes.allTasks__taskListItemParagraphValue_status} ${(props.tasksListOpenTaskSel.taskStatus === '+' && props.classes.allTasks__taskListItemParagraphValue_statusPlus) || (props.tasksListOpenTaskSel.taskStatus === '-' && props.classes.allTasks__taskListItemParagraphValue_statusMinus) || null}`}>{props.tasksListOpenTaskSel.taskStatus === '-' ? <span>&#8722;</span> : props.tasksListOpenTaskSel.taskStatus}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskCreateAt 
                    && 
                    props.tasksListOpenTaskSel.taskCreateAt !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskCreateAt.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskCreateAt}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskComment 
                    && 
                    props.tasksListOpenTaskSel.taskComment !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>{props.allSignsForTasksFilter.taskComment.decodingIntoRus}: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskComment}</span></p>
                }
            </div>
        </div>
    )
};
