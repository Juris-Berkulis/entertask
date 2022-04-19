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
                        <p className={props.classes.tasksFilter__listTitle}>{allSignsForTasksFilter[props.signForTasksFilter].decodingIntoRus}</p>
                        {props.propertiesForTasksFilterList}
                    </li>
                    : 
                    null
                }
            </div>
        </div>
    )
};
