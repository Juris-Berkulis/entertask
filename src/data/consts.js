export const appTitle = {
    name: 'Entertask',
    delimiter: '. ',
};

export const mobileScreenWidth = 1000;

export const allAppComponentsWithPageTitle = {
    home: {
        pageTitle: 'Домашняя страница',
        displayTitle: 'Дом',
        path: '/',
        pathCheck: /^$/,
    },
    profile: {
        pageTitle: 'Профиль',
        displayTitle: 'Профиль',
        path: '/profile',
        pathCheck: /^$/,
    },
    alltasks: {
        pageTitle: 'Пул задач',
        displayTitle: 'Задачи',
        path: '/alltasks',
        pathCheck: /^$/,
    },
    tasksfortoday: {
        pageTitle: 'Задачи на сегодня',
        displayTitle: 'Сегодня',
        path: '/tasksfortoday',
        pathCheck: /^$/,
    },
    addtask: {
        pageTitle: 'Добавить задачу',
        displayTitle: 'Добавить',
        path: '/addtask',
        pathCheck: /^$/,
    },
};
