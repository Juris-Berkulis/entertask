import React from 'react';

export const HeaderUI = (props) => {
    return (
        <div className={props.classes.header}>
            {props.navigationForProps}
            {props.showLogOutBtnForProps}
        </div>
    )
};
