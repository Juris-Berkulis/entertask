import { mobileScreenWidth } from "../data/consts";

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;

    const screenDimensions = {width: width, height: height};
    return screenDimensions
};

export const isMobileDevice = () => {
    if (getWindowDimensions().width < mobileScreenWidth) {
        return true
    } else {
        return false
    };
};

export const fillInEmptyTaskAttributes = (task) => {
    for (let key in task) {
        if (task[key] === '') {
            task[key] = '<пусто>';
        }
    }
    return task
};
