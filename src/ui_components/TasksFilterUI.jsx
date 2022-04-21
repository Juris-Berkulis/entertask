import React from 'react';
import { allSignsForTasksFilter } from '../data/consts';

export const TasksFilterUI = (props) => {
    return (
        <div className={props.classes.tasksFilter}>
            <button className={props.classes.tasksFilter__btn} onClick={props.toggleListPropertiesForTasksFilter}>{allSignsForTasksFilter[props.signForTasksFilter].decodingIntoRus}</button>
            <div className={props.classes.tasksFilter__listWrapper}>
                {
                    props.showListPropertiesForTasksFilter 
                    ? 
                    <li className={props.classes.tasksFilter__list}>
                        <div className={props.classes.tasksFilter__closeListBtn} onClick={props.toggleListPropertiesForTasksFilter}>&#10006;</div>
                        <p className={props.classes.tasksFilter__listTitle} onClick={() => props.selectSignForTasksSorting(allSignsForTasksFilter[props.signForTasksFilter].variable)}>{allSignsForTasksFilter[props.signForTasksFilter].decodingIntoRus}</p>
                        <div className={props.classes.tasksFilter__listItemsWrapper}>
                            {props.propertiesForTasksFilterList}
                        </div>
                    </li>
                    : 
                    null
                }
            </div>
        </div>
    )
};
