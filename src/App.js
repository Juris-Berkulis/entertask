import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { allAppComponentsWithPageTitle } from './data/consts';
import { getPageTitle, giveTitleForPage, isMobileDevice, makeFullPageTitle } from './helper/helper';
import { useWindowDimensions } from './hooks/hooks';
import { AddTask } from './route_components/AddTask/AddTask';
import { AllTasks } from './route_components/AllTasks/AllTasks';
import { EditTask } from './route_components/EditTask/EditTask';
import { Header } from './route_components/Header/Header';
import { TasksForToday } from './route_components/TasksForToday/TasksForToday';
import { persistor } from './store/Store';
import { useStyles } from './styles/Style';
import { styleConsts } from './styles/StyleConsts';

export const App = () => {
  const classes = useStyles();

  useWindowDimensions();

  const location = useLocation();

  const pageTitle = getPageTitle(location);
  const fullPageTitle = makeFullPageTitle(pageTitle);
  giveTitleForPage(fullPageTitle);

  const isMobileDeviceBoolean = isMobileDevice();

  useEffect(() => {
    if (isMobileDeviceBoolean) {
      document.getElementById('html').style.fontSize = styleConsts.fontSize.htmlMobileDevice;
    } else {
      document.getElementById('html').style.fontSize = styleConsts.fontSize.html;
    }
  }, [isMobileDeviceBoolean]);

  return (
    <PersistGate persistor={persistor}>
      <div className={`${classes.main}`}>
        <Header></Header>
        <div className={`${classes.field} ${isMobileDeviceBoolean ? classes.field_mobileDevice : null}`}>
          <Routes>
            <Route exact path={allAppComponentsWithPageTitle.tasksfortoday.path} element={<TasksForToday />} />
            <Route exact path={allAppComponentsWithPageTitle.alltasks.path} element={<AllTasks />} />
            <Route exact path={allAppComponentsWithPageTitle.addtask.path} element={<AddTask />} />
            <Route exact path={allAppComponentsWithPageTitle.edittask.path} element={<EditTask />} />
          </Routes>
        </div>
      </div>
    </PersistGate>
  );
};
