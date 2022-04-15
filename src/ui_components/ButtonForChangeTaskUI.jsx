import React from 'react';

export const ButtonForChangeTaskUI = ({children, ...props}) => {
    return (
        <button className={props.classes.btnForChangeTask} {...props}>{children}</button>
    )
};
