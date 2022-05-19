import React from 'react';

export const ProfileUI = (props) => {
    return (
        <div className={props.classes.profile_wrapper}>
            <div className={props.classes.profile_pageScroll}>
                <h1 className={props.classes.profile_pageTitle}>Профиль</h1>
                <p className={props.classes.profile_userEmail}>({props.myEmail})</p>
                <div className={props.classes.profile_pageInfo}>
                    <div className={props.classes.profile_installWraper} id="installContainer">
                        {
                            props.eventForPWAInstallationSel && props.eventForPWAInstallationSel !== 'success' 
                            ? 
                            <>
                                <p className={props.classes.profile_installInfo}>Установить {props.appTitle.name} на рабочий стол</p>
                                <button className={props.classes.profile_installBtn} id="butInstall" type="button" onClick={props.installApp}>Установить</button>
                            </>
                            : 
                            (
                                props.eventForPWAInstallationSel === props.condition.success
                                ? 
                                <p className={props.classes.profile_installInfo}>{props.appTitle.name} установлено на рабочий стол!</p>
                                : 
                                <p className={props.classes.profile_installInfo}>{props.appTitle.name} возможно установить на рабочий стол, открыв более новую версию браузера!</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};
