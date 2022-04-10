import { allAppComponentsWithPageTitle } from "./consts";

export const NAVIGATION = [
    {
        name: allAppComponentsWithPageTitle.home.displayTitle,
        href: allAppComponentsWithPageTitle.home.path,
    },
    {
        name: allAppComponentsWithPageTitle.profile.displayTitle,
        href: allAppComponentsWithPageTitle.profile.path,
    },
    {
        name: allAppComponentsWithPageTitle.alltasks.displayTitle,
        href: allAppComponentsWithPageTitle.alltasks.path,
    },
    {
        name: allAppComponentsWithPageTitle.tasksfortoday.displayTitle,
        href: allAppComponentsWithPageTitle.tasksfortoday.path,
    },
];
