import React from 'react';
import { NAVIGATION as navigation } from '../../data/navigation';
import { useStyles } from '../../styles/Style';
import { HeaderUI } from '../../ui_components/HeaderUI.jsx';

export const Header = () => {
    const classes = useStyles();

    const navigationForProps = navigation.map((item) => <a href={item.href} key={item.name}>{item.name}</a>);

    return (
        <HeaderUI classes={classes} navigationForProps={navigationForProps}></HeaderUI>
    )
};
