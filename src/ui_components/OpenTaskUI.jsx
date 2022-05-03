import React from 'react';

export const OpenTaskUI = (props) => {
    return (
        props.someTaskIsOpen 
        && 
        <div className={props.classes.openTask__wrapper}>
            <div className={props.classes.openTask__controlPanel}>
                <div className={props.classes.openTask__taskListItemBtnsPannel}>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_change}`} onClick={() => {props.changeTask(props.tasksListOpenTaskSel); props.closeTheTask()}}>&#9998;</button>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.allTasks__taskListItemBtn_delete}`} onClick={() => {props.deleteTask(props.tasksListOpenTaskSel.taskID); props.closeTheTask()}}>&#128465;</button>
                    <button className={`${props.classes.allTasks__taskListItemBtn} ${props.classes.openTask__taskListItemBtn_close}`} onClick={props.closeTheTask}>&#10006;</button>
                </div>
            </div>
            <div className={props.classes.openTask__taskInfo}>
                {
                    props.tasksListOpenTaskSel.taskCategory 
                    && 
                    props.tasksListOpenTaskSel.taskCategory !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Категория: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskCategory}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskName 
                    && 
                    props.tasksListOpenTaskSel.taskName !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph_taskName}`}>Название: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskName}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.subtaskName 
                    && 
                    props.tasksListOpenTaskSel.subtaskName !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Подзадача: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.subtaskName}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskPriority 
                    && 
                    props.tasksListOpenTaskSel.taskPriority !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Приоритет: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskPriority}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskControl 
                    && 
                    props.tasksListOpenTaskSel.taskControl !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Контроль: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskControl}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskUrgency 
                    && 
                    props.tasksListOpenTaskSel.taskUrgency !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Срочность: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskUrgency}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskImportance 
                    && 
                    props.tasksListOpenTaskSel.taskImportance !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Важность: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskImportance}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskDeadline 
                    && 
                    props.tasksListOpenTaskSel.taskDeadline !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Срок: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskDeadline}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskDuration 
                    && 
                    props.tasksListOpenTaskSel.taskDuration !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Продолжительность: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskDuration}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskStatus 
                    && 
                    props.tasksListOpenTaskSel.taskStatus !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph_status}`}>Статус: <span className={`${props.classes.allTasks__taskListItemParagraphValue} ${props.classes.allTasks__taskListItemParagraphValue_status} ${(props.tasksListOpenTaskSel.taskStatus === '+' && props.classes.allTasks__taskListItemParagraphValue_statusPlus) || (props.tasksListOpenTaskSel.taskStatus === '-' && props.classes.allTasks__taskListItemParagraphValue_statusMinus) || null}`}>{props.tasksListOpenTaskSel.taskStatus === '-' ? <span>&#8722;</span> : props.tasksListOpenTaskSel.taskStatus}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskCreateAt 
                    && 
                    props.tasksListOpenTaskSel.taskCreateAt !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Дата создания: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskCreateAt}</span></p>
                }
                {
                    props.tasksListOpenTaskSel.taskComment 
                    && 
                    props.tasksListOpenTaskSel.taskComment !== props.characterToAutocompleteEmptyTaskSign 
                    && 
                    <p className={`${props.classes.openTask__taskListItemParagraph} ${props.classes.allTasks__taskListItemParagraph}`}>Комментарий: <span className={`${props.classes.allTasks__taskListItemParagraphValue}`}>{props.tasksListOpenTaskSel.taskComment}</span></p>
                }
            </div>
        </div>
    )
};
