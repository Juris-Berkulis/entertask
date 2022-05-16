import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { allAppComponentsWithPageTitle } from '../../data/consts';
import { NAVIGATION } from '../../data/navigation';
import { auth } from '../../firebase/firebase';
import { useChangeEmailVerificationStatus } from '../../hooks/hooks';
import { useStyles } from '../../styles/Style';
import { HeaderUI } from '../../ui_components/HeaderUI.jsx';

export const Header = () => {
    const classes = useStyles();

    const location = useLocation();

    // const navigationForProps = NAVIGATION.map((item) => <Link className={`${classes.header__link} ${item.href === location.pathname ? classes.header__link_activePage : null}`} to={item.href} key={item.name}>{item.name}</Link>);

    const emailVerificationStatus = useChangeEmailVerificationStatus(location.pathname);

    const navigationForProps = (
        emailVerificationStatus 
        ? 
        NAVIGATION.map((item) => <Link className={`${classes.header__link} ${item.href === location.pathname ? classes.header__link_activePage : null}`} to={item.href} key={item.name}>{item.name}</Link>)
        : 
        null
    );

    const logoutUser = async () => {
        auth.signOut();
        if (auth.currentUser) {
            // await functionsForMocks.userReload();
            await auth.currentUser.reload();
        }
    };

    const showLogOutBtnForProps = (
        emailVerificationStatus 
        ? 
        <button className={`${classes.header__link} ${classes.header__link_logoutBtn}`} onClick={logoutUser}>{allAppComponentsWithPageTitle.logout.displayTitle}</button> 
        : 
        <>
            <Link className={`${classes.header__link} ${allAppComponentsWithPageTitle.login.path === location.pathname ? classes.header__link_activePage : null}`} to={allAppComponentsWithPageTitle.login.path} component={Link}>{allAppComponentsWithPageTitle.login.displayTitle}</Link>
            <Link className={`${classes.header__link} ${allAppComponentsWithPageTitle.signup.path === location.pathname ? classes.header__link_activePage : null}`} to={allAppComponentsWithPageTitle.signup.path} component={Link}>{allAppComponentsWithPageTitle.signup.displayTitle}</Link>
        </>
    );

    return (
        <HeaderUI classes={classes} navigationForProps={navigationForProps} showLogOutBtnForProps={showLogOutBtnForProps}></HeaderUI>
    )
};
