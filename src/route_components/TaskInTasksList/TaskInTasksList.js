import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { allAppComponentsWithPageTitle, allSignsForTasksFilter, characterToAutocompleteEmptyTaskSign } from '../../data/consts';
import { auth } from '../../firebase/firebase';
import { changeTaskSignValue, isMobileDevice, replaceBrieflyValueToDetailValueOfTheTaskSign, replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys } from '../../helper/helper';
import { selectTodayTaskIDAction } from '../../store/AppSwitches/Action';
import { getAppSwitchesDeviceOnTheNetworkSelector, getAppSwitchesSelectTodayTaskIDSelector } from '../../store/AppSwitches/Selectors';
import { getTasksListTasksKindOfDictByUserUIDSelector } from '../../store/Tasks/Selectors';
import { useStyles } from '../../styles/Style';
import { TaskInTasksListUI } from '../../ui_components/TaskInTasksListUI';

export const TaskInTasksList = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const location = useLocation();

    const userUID = auth.currentUser && auth.currentUser.uid ? auth.currentUser.uid : null;

    const isMobileDeviceBoolean = isMobileDevice();

    const localTimezone = new Date().getTimezoneOffset() / -60;

    const deviceOnTheNetworkSel = useSelector(getAppSwitchesDeviceOnTheNetworkSelector);
    const tasksKindOfDictByUserUIDSel = useSelector(getTasksListTasksKindOfDictByUserUIDSelector(userUID));
    const selectTodayTaskIDSel = useSelector(getAppSwitchesSelectTodayTaskIDSelector);

    const selectTask = (task) => {
        if (location.pathname === allAppComponentsWithPageTitle.tasksfortoday.path) {
            dispatch({
                type: selectTodayTaskIDAction.type,
                payload: task.taskID,
            });
        }
    };
    
    const getMonth = (monthString) => {
        if (monthString === 'Jan') {
            return '01'
        } else if (monthString === 'Feb') {
            return '02'
        } else if (monthString === 'Mar') {
            return '03'
        } else if (monthString === 'Apr') {
            return '04'
        } else if (monthString === 'May') {
            return '05'
        } else if (monthString === 'Jun') {
            return '06'
        } else if (monthString === 'Jul') {
            return '07'
        } else if (monthString === 'Aug') {
            return '08'
        } else if (monthString === 'Sep') {
            return '09'
        } else if (monthString === 'Oct') {
            return '10'
        } else if (monthString === 'Nov') {
            return '11'
        } else if (monthString === 'Dec') {
            return '12'
        } else {
            return '??'
        };
    };

    const parseUTCDataAndTimeString = (utcDateAndTime) => {
        const utcDateAndTimeList = utcDateAndTime.split(' ');
        const localYear = +utcDateAndTimeList[3];
        const localMonth = getMonth(utcDateAndTimeList[2]);
        const localNumber = utcDateAndTimeList[1];
        const localHour = +utcDateAndTimeList[4].split(':')[0] + localTimezone;
        const localMinute = +utcDateAndTimeList[4].split(':')[1];
        const localSecond = +utcDateAndTimeList[4].split(':')[2];

        return {
            localYear, 
            localMonth, 
            localNumber, 
            localHour, 
            localMinute, 
            localSecond
        }
    };

    const getValidLocalDateAndTime = (
        localYear, 
        localMonth, 
        localNumber, 
        localHour, 
        localMinute, 
        localSecond
        ) => {
        const localDateAndTime = new Date(localYear, localMonth, localNumber, localHour, localMinute, localSecond).toString(); 
        //* - Example: "Mon Dec 27 2021 18:14:41 GMT+0300 (Москва, стандартное время)".
        
        return localDateAndTime
    };

    const getDayOfTheWeek = (dayOfTheWeekString) => {
        if (dayOfTheWeekString === 'Mon') {
            return 'Пн'
        } else if (dayOfTheWeekString === 'Tue') {
            return 'Вт'
        } else if (dayOfTheWeekString === 'Wed') {
            return 'Ср'
        } else if (dayOfTheWeekString === 'Thu') {
            return 'Чт'
        } else if (dayOfTheWeekString === 'Fri') {
            return 'Пт'
        } else if (dayOfTheWeekString === 'Sat') {
            return 'Сб'
        } else if (dayOfTheWeekString === 'Sun') {
            return 'Вс'
        } else {
            return dayOfTheWeekString
        };
    };

    const parseLocalDataAndTimeString = (validDateAndTime) => {
        const validDateAndTimeList = validDateAndTime.split(' ');
        const validLocalDayOfTheWeek = getDayOfTheWeek(validDateAndTimeList[0]);
        const validLocalYear = +validDateAndTimeList[3];
        const validLocalMonth = getMonth(validDateAndTimeList[1]);
        const validLocalNumber = validDateAndTimeList[2];
        const validLocalHour = +validDateAndTimeList[4].split(':')[0];
        const validLocalMinute = validDateAndTimeList[4].split(':')[1];
        const validLocalSecond = validDateAndTimeList[4].split(':')[2];

        return {
            validLocalDayOfTheWeek, 
            validLocalNumber, 
            validLocalMonth, 
            validLocalYear, 
            validLocalHour, 
            validLocalMinute, 
            validLocalSecond
        }
    };

    const getLocalDateAndTime = (utcDateAndTime) => { //* - Example: "Mon, 27 Dec 2021 15:14:41 GMT".
        const {
            localYear, 
            localMonth, 
            localNumber, 
            localHour, 
            localMinute, 
            localSecond
        } = parseUTCDataAndTimeString(utcDateAndTime);

        const validDateAndTime = getValidLocalDateAndTime(localYear, +localMonth - 1, localNumber, localHour, localMinute, localSecond);

        const {
            validLocalDayOfTheWeek, 
            validLocalNumber, 
            validLocalMonth, 
            validLocalYear, 
            validLocalHour, 
            validLocalMinute, 
            validLocalSecond
        } = parseLocalDataAndTimeString(validDateAndTime);

        return `(${validLocalDayOfTheWeek}) ${validLocalNumber}.${validLocalMonth}.${validLocalYear} в ${validLocalHour}:${validLocalMinute}:${validLocalSecond}`
    };
    
    return (
        <TaskInTasksListUI 
            classes={classes} 
            item={replaceInTaskAllowedCharactersFromFirebaseDatabaseKeys(props.item)} 
            characterToAutocompleteEmptyTaskSign={characterToAutocompleteEmptyTaskSign} 
            changeTask={props.changeTask} 
            deleteTask={props.deleteTask} 
            openTheTask={props.openTheTask} 
            addTheTaskInListWithTasksForToday={props.addTheTaskInListWithTasksForToday} 
            deleteTheTaskFromListWithTasksForToday={props.deleteTheTaskFromListWithTasksForToday} 
            dispatch={dispatch} 
            tasksKindOfDictByUserUIDSel={tasksKindOfDictByUserUIDSel} 
            history={props.history} 
            replaceBrieflyValueToDetailValueOfTheTaskSign={replaceBrieflyValueToDetailValueOfTheTaskSign} 
            allSignsForTasksFilter={allSignsForTasksFilter} 
            isMobileDeviceBoolean={isMobileDeviceBoolean} 
            userUID={userUID} 
            deviceOnTheNetworkSel={deviceOnTheNetworkSel} 
            changeTaskSignValue={changeTaskSignValue} 
            selectTask={selectTask} 
            selectTodayTaskIDSel={selectTodayTaskIDSel} 
            location={location} 
            allAppComponentsWithPageTitle={allAppComponentsWithPageTitle} 
            selectTodayTaskRef={props.selectTodayTaskRef} 
            unselectTodayTaskRef={props.unselectTodayTaskRef} 
            getLocalDateAndTime={getLocalDateAndTime}
        ></TaskInTasksListUI>
    )
};
