import React from 'react';
import { allSignsForTasksFilter } from '../data/consts';

export const TasksFilterUI = (props) => {
    return (
        <div className={`${props.classes.tasksFilter} ${props.isMobileDeviceBoolean ? props.classes.tasksFilter_mobileDevice : null}`}>
            <button className={`${props.classes.tasksFilter__btn} ${(
                (props.location.pathname === props.allAppComponentsWithPageTitle.alltasks.path && props.tasksSignForTasksSortingSel === allSignsForTasksFilter[props.signForTasksFilter].variable) 
                || 
                (props.location.pathname === props.allAppComponentsWithPageTitle.tasksfortoday.path && props.tasksSignForTodayTasksSortingSel === allSignsForTasksFilter[props.signForTasksFilter].variable)
            ) 
            ? 
            (
                (
                    (props.location.pathname === props.allAppComponentsWithPageTitle.alltasks.path && props.reverseDirectionForTasksSortinBySignSel) 
                    || 
                    (props.location.pathname === props.allAppComponentsWithPageTitle.tasksfortoday.path && props.reverseDirectionForTodayTasksSortinBySignSel)
                ) 
                ? 
                props.classes.tasksFilter__btn_up 
                : 
                props.classes.tasksFilter__btn_down
            )
            : 
            null}`} onClick={props.toggleListPropertiesForTasksFilter}>
                {
                    (
                        props.allTasksSignPropertiesForFilteringAreTrue 
                        || 
                        props.allTasksSignPropertiesForFilteringAreFalse
                    )
                    ? 
                    (
                        props.allTasksSignPropertiesForFilteringAreTrue 
                        ? 
                        <span className={`${props.classes.tasksFilter__btnIcon}`}>&#9989;</span>
                        : 
                        <span className={`${props.classes.tasksFilter__btnIcon}`}>&#10060;</span>
                    )
                    : 
                    <span className={`${props.classes.tasksFilter__btnIcon}`}>&#128305;</span>
                }
                <span className={props.classes.tasksFilter__btnText}>{allSignsForTasksFilter[props.signForTasksFilter].decodingIntoRus}</span>
                {
                    (
                        (props.location.pathname === props.allAppComponentsWithPageTitle.alltasks.path && props.tasksSignForTasksSortingSel === allSignsForTasksFilter[props.signForTasksFilter].variable) 
                        || 
                        (props.location.pathname === props.allAppComponentsWithPageTitle.tasksfortoday.path && props.tasksSignForTodayTasksSortingSel === allSignsForTasksFilter[props.signForTasksFilter].variable)
                    )
                    ?
                    <div className={`${props.classes.tasksFilter__signIsTurnOn} ${(props.location.pathname === props.allAppComponentsWithPageTitle.alltasks.path && props.reverseDirectionForTasksSortinBySignSel) || (props.location.pathname === props.allAppComponentsWithPageTitle.tasksfortoday.path && props.reverseDirectionForTodayTasksSortinBySignSel) ? props.classes.tasksFilter__signIsTurnOn_up : props.classes.tasksFilter__signIsTurnOn_down}`}></div>
                    :
                    null
                }
            </button>
            <div className={props.classes.tasksFilter__listWrapper}>
                {
                    props.showListPropertiesForTasksFilter 
                    ? 
                    <li className={props.classes.tasksFilter__list}>
                        <div className={props.classes.tasksFilter__closeListBtn} onClick={props.toggleListPropertiesForTasksFilter}>&#10006;</div>
                        <p className={props.classes.tasksFilter__listTitle}>
                            {
                                (
                                    props.allTasksSignPropertiesForFilteringAreTrue 
                                    || 
                                    props.allTasksSignPropertiesForFilteringAreFalse
                                )
                                ? 
                                (
                                    props.allTasksSignPropertiesForFilteringAreTrue 
                                    ? 
                                    <button className={`${props.classes.tasksFilter__tasksBtnsPanel} ${props.classes.tasksFilter__tasksFilteringBtn}`} onClick={() => props.togglePropertyShowToSpecificValue(false)}>
                                        <span className={`${props.classes.tasksFilter__tasksFilteringBtnSpan}`}>&#9989;</span>
                                    </button>
                                    : 
                                    <button className={`${props.classes.tasksFilter__tasksBtnsPanel} ${props.classes.tasksFilter__tasksFilteringBtn}`} onClick={() => props.togglePropertyShowToSpecificValue(true)}>
                                        <span className={`${props.classes.tasksFilter__tasksFilteringBtnSpan}`}>&#10060;</span>
                                    </button>
                                )
                                : 
                                <button className={`${props.classes.tasksFilter__tasksBtnsPanel} ${props.classes.tasksFilter__tasksFilteringBtn}`} onClick={() => props.togglePropertyShowToSpecificValue(true)}>
                                    <span className={`${props.classes.tasksFilter__tasksFilteringBtnSpan}`}>&#128305;</span>
                                </button>
                            }
                            <span className={props.classes.tasksFilter__listTitleText}>{allSignsForTasksFilter[props.signForTasksFilter].decodingIntoRus}</span>
                            {
                                (
                                    (props.location.pathname === props.allAppComponentsWithPageTitle.alltasks.path && props.tasksSignForTasksSortingSel === allSignsForTasksFilter[props.signForTasksFilter].variable) 
                                    || 
                                    (props.location.pathname === props.allAppComponentsWithPageTitle.tasksfortoday.path && props.tasksSignForTodayTasksSortingSel === allSignsForTasksFilter[props.signForTasksFilter].variable)
                                )
                                ? 
                                <button className={`${props.classes.tasksFilter__tasksBtnsPanel} ${props.classes.tasksFilter__tasksSortingBtn}`} onClick={props.toggleDirectionForTasksSortingBySign}>
                                    {
                                        (
                                            (props.location.pathname === props.allAppComponentsWithPageTitle.alltasks.path && props.reverseDirectionForTasksSortinBySignSel) 
                                            ||
                                            (props.location.pathname === props.allAppComponentsWithPageTitle.tasksfortoday.path && props.reverseDirectionForTodayTasksSortinBySignSel)
                                        )
                                        ? 
                                        <span className={`${props.classes.tasksFilter__tasksSortingBtnArrow} ${props.classes.tasksFilter__tasksSortingBtnArrow_up}`}>&#8593;</span>
                                        : 
                                        <span className={`${props.classes.tasksFilter__tasksSortingBtnArrow} ${props.classes.tasksFilter__tasksSortingBtnArrow_down}`}>&#8595;</span>
                                    }
                                </button>
                                : 
                                <button className={`${props.classes.tasksFilter__tasksBtnsPanel} ${props.classes.tasksFilter__tasksSortingBtn}`} onClick={() => props.selectSignForTasksSorting(allSignsForTasksFilter[props.signForTasksFilter].variable)}>
                                    <span className={`${props.classes.tasksFilter__tasksSortingBtnArrow} ${props.classes.tasksFilter__tasksSortingBtnArrow_andUpAndDown}`}>&#8597;</span>
                                </button>
                            }
                        </p>
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
