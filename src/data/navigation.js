import { allAppComponentsWithPageTitle } from "./consts";

export const NAVIGATION = [
    {
        name: allAppComponentsWithPageTitle.tasksfortoday.displayTitle,
        href: allAppComponentsWithPageTitle.tasksfortoday.path,
    },
    {
        name: allAppComponentsWithPageTitle.alltasks.displayTitle,
        href: allAppComponentsWithPageTitle.alltasks.path,
    },
    {
        name: allAppComponentsWithPageTitle.addtask.displayTitle,
        href: allAppComponentsWithPageTitle.addtask.path,
    },
    {
        name: allAppComponentsWithPageTitle.profile.displayTitle,
        href: allAppComponentsWithPageTitle.profile.path,
    },
];
