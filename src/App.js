import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { allAppComponentsWithPageTitle } from './data/consts';
import { allowedPeriodInsideTheApp, getPageTitle, giveTitleForPage, isMobileDevice, makeFullPageTitle } from './helper/helper';
import { PublicRoute } from './hocs/PublicRoute';
import { PrivateRoute } from './hocs/PrivateRoute';
import { useChangeEmailVerificationStatus, useWindowDimensions } from './hooks/hooks';
import { AddTask } from './route_components/AddTask/AddTask';
import { AllTasks } from './route_components/AllTasks/AllTasks';
import { EditTask } from './route_components/EditTask/EditTask';
import { Header } from './route_components/Header/Header';
import { Login } from './route_components/Login/Login';
import { Signup } from './route_components/Signup/Signup';
import { TasksForToday } from './route_components/TasksForToday/TasksForToday';
import { persistor } from './store/Store';
import { useStyles } from './styles/Style';
import { styleConsts } from './styles/StyleConsts';
import { getStatusesInTheAppLastAuthorizationDateAndTimeSelector } from './store/AppSwitches/Selectors';
import { useSelector } from 'react-redux';
import { auth } from './firebase/firebase';
import { StartingScreensaver } from './widget_components/StartingScreensaver/StartingScreensaver';

export const App = () => {
  const classes = useStyles();

  useWindowDimensions();

  const location = useLocation();

  const emailVerificationStatus = useChangeEmailVerificationStatus(location.pathname);

  const pageTitle = getPageTitle(location);
  const fullPageTitle = makeFullPageTitle(pageTitle);
  giveTitleForPage(fullPageTitle);

  const lastAuthorizationDateAndTime = useSelector(getStatusesInTheAppLastAuthorizationDateAndTimeSelector)

  const isMobileDeviceBoolean = isMobileDevice();

  useEffect(() => {
    if (isMobileDeviceBoolean) {
      document.getElementById('html').style.fontSize = styleConsts.fontSize.htmlMobileDevice;
    } else {
      document.getElementById('html').style.fontSize = styleConsts.fontSize.html;
    }
  }, [isMobileDeviceBoolean]);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged((user) => {
      if (user) {
        const now = new Date().getTime();
        const period = allowedPeriodInsideTheApp(0, 1, 0, 0, 0, 0, 0);
        if (lastAuthorizationDateAndTime === null || now - lastAuthorizationDateAndTime > period) {
          auth.signOut();
        }
      }
    });

    return () => unsubscribe()
  }, [lastAuthorizationDateAndTime]);

  return (
    <PersistGate persistor={persistor}>
      <div className={`${classes.main}`}>
        {
          emailVerificationStatus !== null 
          ? 
          <>
            <Header></Header>
            <div className={`${classes.field} ${isMobileDeviceBoolean ? classes.field_mobileDevice : null}`}>
              <Routes>
                <Route element={<PrivateRoute authenticated={emailVerificationStatus}/>}>
                  <Route exact path={allAppComponentsWithPageTitle.tasksfortoday.path} element={<TasksForToday />} />
                </Route>
                <Route element={<PrivateRoute authenticated={emailVerificationStatus}/>}>
                  <Route exact path={allAppComponentsWithPageTitle.alltasks.path} element={<AllTasks />} />
                </Route>
                <Route element={<PrivateRoute authenticated={emailVerificationStatus}/>}>
                  <Route exact path={allAppComponentsWithPageTitle.addtask.path} element={<AddTask />} />
                </Route>
                <Route element={<PrivateRoute authenticated={emailVerificationStatus}/>}>
                  <Route exact path={allAppComponentsWithPageTitle.edittask.path} element={<EditTask />} />
                </Route>
                <Route element={<PublicRoute authenticated={emailVerificationStatus}/>}>
                  <Route exact path={allAppComponentsWithPageTitle.signup.path} element={<Signup />} />
                </Route>
                <Route element={<PublicRoute authenticated={emailVerificationStatus}/>}>
                  <Route exact path={allAppComponentsWithPageTitle.login.path} element={<Login />} />
                </Route>
              </Routes>
            </div>
          </>
          :
          <StartingScreensaver></StartingScreensaver>
        }
      </div>
    </PersistGate>
  );
};
