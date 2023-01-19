import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { allAppComponentsWithPageTitle, condition } from './data/consts';
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
import { useDispatch, useSelector } from 'react-redux';
import { auth, connectedDBRef } from './firebase/firebase';
import { StartingScreensaver } from './widget_components/StartingScreensaver/StartingScreensaver';
import { Profile } from './route_components/Profile/Profile';
import { deviceOnTheNetworkAction, eventForPWAInstallation } from './store/AppSwitches/Action';
import { DeviceOnTheNetwork } from './widget_components/DeviceOnTheNetwork/DeviceOnTheNetwork';
import { valueInInputForTasksLookupAction } from './store/Tasks/Action';

export const App = () => {
  const classes = useStyles();

  useWindowDimensions();

  const location = useLocation();

  const dispatch = useDispatch();

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

    //* The listener function will fire if the application can be installed on the desktop:
    useEffect(() => {
      const saveEventForfurtherPWAInstallation = (e) => {
        //* Prevent the mini-infobar from appearing on mobile:
        e.preventDefault();
        //* 1. Stash the event so it can be triggered later; 2. update UI notify the user they can install the PWA:
        dispatch({
          type: eventForPWAInstallation.type,
          payload: e,
        });
      };
  
      if (window.addEventListener) {
        window.addEventListener('beforeinstallprompt', saveEventForfurtherPWAInstallation);
        return () => window.removeEventListener('beforeinstallprompt', saveEventForfurtherPWAInstallation);
      } else if (window.attachEvent) {
        window.attachEvent('beforeinstallprompt', saveEventForfurtherPWAInstallation);
        return () => window.detachEvent('beforeinstallprompt', saveEventForfurtherPWAInstallation);
      }
    }, [dispatch]);
  
    //* The listener function will fire when the application is installed on the desktop:
    useEffect(() => {
      const reportAboutPWAInstallationSuccess = () => {
        //* 1. Hide the app-provided install prompt; 2. Clear the instalation event:
        dispatch({
          type: eventForPWAInstallation.type,
          payload: condition.success,
        });
      };
  
      if (window.addEventListener) {
        window.addEventListener('appinstalled', reportAboutPWAInstallationSuccess);
        return () => window.removeEventListener('appinstalled', reportAboutPWAInstallationSuccess);
      } else if (window.attachEvent) {
        window.attachEvent('appinstalled', reportAboutPWAInstallationSuccess);
        return () => window.detachEvent('appinstalled', reportAboutPWAInstallationSuccess);
      }
    }, [dispatch]);

    useEffect(() => {
      connectedDBRef.on("value", (snapshot) => {
        if (snapshot.val() === true) {
          dispatch({
            type: deviceOnTheNetworkAction.type,
            payload: true,
          });
        } else {
          dispatch({
            type: deviceOnTheNetworkAction.type,
            payload: false,
          });
        }
      });
    }, [dispatch]);

    useEffect(() => {
      return () => {
        dispatch({
          type: valueInInputForTasksLookupAction.type,
          payload: '',
        });
      }
    }, [dispatch]);

  return (
    <PersistGate persistor={persistor}>
      <div className={`${classes.main}`}>
        {
          emailVerificationStatus !== null 
          ? 
          <>
            <DeviceOnTheNetwork></DeviceOnTheNetwork>
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
                <Route element={<PrivateRoute authenticated={emailVerificationStatus}/>}>
                  <Route exact path={allAppComponentsWithPageTitle.profile.path} element={<Profile />} />
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
