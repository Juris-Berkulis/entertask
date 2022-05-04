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
    taskEisenhowerMatrixValue: {
        variable: 'taskEisenhowerMatrixValue',
        decodingIntoRus: 'Матрица эйзенхауэра',
    },
};

export const characterToAutocompleteEmptyTaskSign = '<пусто>';

export const eisenhowerMatrix = {
    '1_1': '1-1. Игнорировать',
    '1_2': '1-2. Игнорировать-Запланировать',
    '1_3': '1-3. Запланировать',
    '2_1': '2-1. Игнорировать-Делегировать',
    '2_2': '2-2. Распределить',
    '2_3': '2-3. Запланировать-Сделать',
    '3_1': '3-1. Делегировать',
    '3_2': '3-2. Делегировать-Сделать',
    '3_3': '3-3. Сделать',
    '0_0': 'Не распределено',
};
