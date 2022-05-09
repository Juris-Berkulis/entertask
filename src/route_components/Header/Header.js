import React from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../../data/navigation';
import { useStyles } from '../../styles/Style';
import { HeaderUI } from '../../ui_components/HeaderUI.jsx';

export const Header = () => {
    const classes = useStyles();

    const navigationForProps = NAVIGATION.map((item) => <Link className={classes.header__link} to={item.href} key={item.name}>{item.name}</Link>);

    return (
        <HeaderUI classes={classes} navigationForProps={navigationForProps}></HeaderUI>
    )
};
