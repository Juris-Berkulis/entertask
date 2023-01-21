import React from 'react';

export const TasksSearchUI = (props) => {
    return (
        <div className={`${props.classes.tasksSearch} ${props.isMobileDeviceBoolean ? props.classes.tasksSearch_mobileDevice : null}`}>
            <div className={props.classes.tasksSearch__inputWrapper}>
                <input className={props.classes.tasksSearch__input} placeholder={`Поиск по "${props.signForInputForTasksLookupSel ? props.allSignsForTasksFilter[props.signForInputForTasksLookupSel].decodingIntoRusShort : 'Все поля'}"`} onFocus={() => props.focusIsOnInputForTasksLookup()} onBlur={() => props.focusIsNotOnInputForTasksLookup()} onChange={props.onSaveValueForTasksLookupFromInput} value={props.valueInInputForTasksLookupSel} ref={props.refInput} />
                <div className={props.classes.tasksSearch__setting} onClick={() => props.toggleTasksSearchSetingsVisibility()}>
                    <div className={props.classes.tasksSearch__settingSign}>
                        <div className={`${props.classes.tasksSearch__settingSignPoint} ${props.classes.tasksSearch__settingSignPoint-1}`}></div>
                        <div className={`${props.classes.tasksSearch__settingSignPoint} ${props.classes.tasksSearch__settingSignPoint-1}`}></div>
                        <div className={`${props.classes.tasksSearch__settingSignPoint} ${props.classes.tasksSearch__settingSignPoint-1}`}></div>
                    </div>
                </div>
                {
                    props.isTasksSearchSetingsVisibility
                    &&
                    <div className={props.classes.tasksSearch__settingList}>
                        <p className={props.classes.tasksSearch__settingItem} onClick={() => props.changeTasksSearchMode()}>
                            {
                                props.isStrictSearchSel 
                                ? 
                                'Строгий поиск'
                                : 
                                'Не строгий поиск'
                            }
                        </p>
                        {props.tasksSignsListForTasksFilteringByInputField}
                    </div>
                }
            </div>
        </div>
    )
};
