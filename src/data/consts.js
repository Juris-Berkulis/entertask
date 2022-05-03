export const appTitle = {
    name: 'Entertask',
    delimiter: '. ',
};

export const mobileScreenWidth = 1000;

export const allAppComponentsWithPageTitle = {
    tasksfortoday: {
        pageTitle: 'Задачи на сегодня',
        displayTitle: 'Сегодня',
        path: '/',
        pathCheck: /^$/,
    },
    alltasks: {
        pageTitle: 'Пул задач',
        displayTitle: 'Задачи',
        path: '/alltasks',
        pathCheck: /^$/,
    },
    profile: {
        pageTitle: 'Профиль',
        displayTitle: 'Профиль',
        path: '/profile',
        pathCheck: /^$/,
    },
    addtask: {
        pageTitle: 'Добавить задачу',
        displayTitle: 'Добавить',
        path: '/addtask',
        pathCheck: /^$/,
    },
    edittask: {
        pageTitle: 'Редактировать задачу',
        displayTitle: 'Редактировать',
        path: '/edittask',
        pathCheck: /^$/,
    },
};

export const allSignsForTasksFilter = {
    taskCreateAt: {
        variable: 'taskCreateAt',
        decodingIntoRus: 'Дата создания',
    },
    taskID: {
        variable: 'taskID',
        decodingIntoRus: 'id',
    },
    taskCategory: {
        variable: 'taskCategory',
        decodingIntoRus: 'Категория',
    },
    taskName: {
        variable: 'taskName',
        decodingIntoRus: 'Задача',
    },
    subtaskName: {
        variable: 'subtaskName',
        decodingIntoRus: 'Подзадача',
    },
    taskPriority: {
        variable: 'taskPriority',
        decodingIntoRus: 'Приоритет',
    },
    taskControl: {
        variable: 'taskControl',
        decodingIntoRus: 'Контроль',
    },
    taskUrgency: {
        variable: 'taskUrgency',
        decodingIntoRus: 'Срочность',
    },
    taskImportance: {
        variable: 'taskImportance',
        decodingIntoRus: 'Важность',
    },
    taskDeadline: {
        variable: 'taskDeadline',
        decodingIntoRus: 'Срок',
    },
    taskDuration: {
        variable: 'taskDuration',
        decodingIntoRus: 'Продолжительность',
    },
    taskStatus: {
        variable: 'taskStatus',
        decodingIntoRus: 'Статус',
    },
    taskComment: {
        variable: 'taskComment',
        decodingIntoRus: 'Комментарий',
    },
    taskForToday: {
        variable: 'taskForToday',
        decodingIntoRus: 'Задача на сегодня',
    },
};

export const characterToAutocompleteEmptyTaskSign = '<пусто>';
