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
    signup: {
        pageTitle: 'Регистрация',
        displayTitle: 'Регистрация',
        path: '/signup',
        pathCheck: /^$/,
    },
    login: {
        pageTitle: 'Вход',
        displayTitle: 'Вход',
        path: '/login',
        pathCheck: /^$/,
    },
    logout: {
        pageTitle: '',
        displayTitle: 'Выход',
        path: '',
        pathCheck: /^$/,
    },
};

export const allSignsForTasksFilter = {
    taskCreateAt: {
        variable: 'taskCreateAt',
        decodingIntoRus: 'Дата создания',
        decodingIntoRusShort: 'Создано',
        showForInputFilter: 12,
    },
    taskID: {
        variable: 'taskID',
        decodingIntoRus: 'id',
        decodingIntoRusShort: 'id',
        showForInputFilter: false,
    },
    taskCategory: {
        variable: 'taskCategory',
        decodingIntoRus: 'Категория',
        decodingIntoRusShort: 'Категория',
        showForInputFilter: 1,
    },
    taskName: {
        variable: 'taskName',
        decodingIntoRus: 'Задача',
        decodingIntoRusShort: 'Задача',
        showForInputFilter: 2,
    },
    subtaskName: {
        variable: 'subtaskName',
        decodingIntoRus: 'Подзадача',
        decodingIntoRusShort: 'Подзадача',
        showForInputFilter: 3,
    },
    taskPriority: {
        variable: 'taskPriority',
        decodingIntoRus: 'Приоритет',
        decodingIntoRusShort: 'Приоритет',
        showForInputFilter: 8,
    },
    taskControl: {
        variable: 'taskControl',
        decodingIntoRus: 'Контроль',
        decodingIntoRusShort: 'Контроль',
        showForInputFilter: 9,
    },
    taskUrgency: {
        variable: 'taskUrgency',
        decodingIntoRus: 'Срочность',
        decodingIntoRusShort: 'Срочность',
        showForInputFilter: 6,
    },
    taskImportance: {
        variable: 'taskImportance',
        decodingIntoRus: 'Важность',
        decodingIntoRusShort: 'Важность',
        showForInputFilter: 7,
    },
    taskDeadline: {
        variable: 'taskDeadline',
        decodingIntoRus: 'Срок',
        decodingIntoRusShort: 'Срок',
        showForInputFilter: 10,
    },
    taskDuration: {
        variable: 'taskDuration',
        decodingIntoRus: 'Продолжительность',
        decodingIntoRusShort: 'Продолжительность',
        showForInputFilter: 11,
    },
    taskStatus: {
        variable: 'taskStatus',
        decodingIntoRus: 'Статус',
        decodingIntoRusShort: 'Статус',
        showForInputFilter: 4,
    },
    taskComment: {
        variable: 'taskComment',
        decodingIntoRus: 'Комментарий',
        decodingIntoRusShort: 'Комментарий',
        showForInputFilter: 13,
    },
    taskForToday: {
        variable: 'taskForToday',
        decodingIntoRus: 'Задача на сегодня',
        decodingIntoRusShort: 'Задача на сегодня',
        showForInputFilter: false,
    },
    taskEisenhowerMatrixValue: {
        variable: 'taskEisenhowerMatrixValue',
        decodingIntoRus: 'Матрица Эйзенхауэра',
        decodingIntoRusShort: 'Эйзенхауэр',
        showForInputFilter: 5,
    },
    todayTaskNumber: {
        variable: 'todayTaskNumber',
        decodingIntoRus: '№',
        decodingIntoRusShort: '№',
        showForInputFilter: false,
    },
    taskNumber: {
        variable: 'taskNumber',
        decodingIntoRus: '№',
        decodingIntoRusShort: '№',
        showForInputFilter: false,
    },
};

export const characterToAutocompleteEmptyTaskSign = '<пусто>';

export const eisenhowerMatrix = {
    '1_1': {
        briefly: '1_1',
        detail: '1-1. Игнорировать',
    },
    '1_2': {
        briefly: '1_2',
        detail: '1-2. Игнорировать-Запланировать',
    },
    '1_3': {
        briefly: '1_3',
        detail: '1-3. Запланировать',
    },
    '2_1': {
        briefly: '2_1',
        detail: '2-1. Игнорировать-Делегировать',
    },
    '2_2': {
        briefly: '2_2',
        detail: '2-2. Распределить',
    },
    '2_3': {
        briefly: '2_3',
        detail: '2-3. Запланировать-Сделать',
    },
    '3_1': {
        briefly: '3_1',
        detail: '3-1. Делегировать',
    },
    '3_2': {
        briefly: '3_2',
        detail: '3-2. Делегировать-Сделать',
    },
    '3_3': {
        briefly: '3_3',
        detail: '3-3. Сделать',
    },
    '0_0': {
        briefly: '0_0',
        detail: 'Не распределено',
    },
};

export const urgency = {
    '1': {
        briefly: '1',
        detail: '1. Низкая',
    },
    '2': {
        briefly: '2',
        detail: '2. Средняя',
    },
    '3': {
        briefly: '3',
        detail: '3. Высокая',
    },
};

export const importance = {
    '1': {
        briefly: '1',
        detail: '1. Низкая',
    },
    '2': {
        briefly: '2',
        detail: '2. Средняя',
    },
    '3': {
        briefly: '3',
        detail: '3. Высокая',
    },
};

export const objectWithForbiddenCharactersForFirebaseDatabaseKeys = {
    '.': {
        forbiddenCharacter: '.',
        allowedCharacter: '🎴'
    },
    '#': {
        forbiddenCharacter: '#',
        allowedCharacter: '🎭'
    },
    '$': {
        forbiddenCharacter: '$',
        allowedCharacter: '🖼'
    },
    '/': {
        forbiddenCharacter: '/',
        allowedCharacter: '🎨'
    },
    '[': {
        forbiddenCharacter: '[',
        allowedCharacter: '🧵'
    },
    ']': {
        forbiddenCharacter: ']',
        allowedCharacter: '🧶'
    },
};

export const startValueForTimer = 91;

export const condition = {
    success: 'success',
};
