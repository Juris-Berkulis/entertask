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
    messenger: {
        pageTitle: 'Пул задач',
        displayTitle: 'Задачи',
        path: '/alltasks',
        pathCheck: /^$/,
    },
    usersApi: {
        pageTitle: 'Задачи на сегодня',
        displayTitle: 'Сегодня',
        path: '/tasksfortoday',
        pathCheck: /^$/,
    },
};
