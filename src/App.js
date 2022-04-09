import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { allAppComponentsWithPageTitle } from './data/consts';
import { isMobileDevice } from './helper/helper';
import { AddTask } from './route_components/AddTask/AddTask';
import { AllTasks } from './route_components/AllTasks/AllTasks';
import { Header } from './route_components/Header/Header';
import { persistor } from './store/Store';
import { useStyles } from './styles/Style';

export const App = () => {
  const classes = useStyles();

  const isMobileDeviceBoolean = isMobileDevice();

  return (
    <PersistGate persistor={persistor}>
    <div className={`${classes.main}`}>
    <Switch>
    <>
      <Header></Header>
      <div className={`${classes.field} ${isMobileDeviceBoolean ? classes.field_mobileDevice : null}`}>
        <Route exact path={allAppComponentsWithPageTitle.home.path}>
          {/* <Home></Home> */}
        </Route>
        <Route exact path={allAppComponentsWithPageTitle.profile.path}>
          {/* <Home></Home> */}
        </Route>
        <Route exact path={allAppComponentsWithPageTitle.alltasks.path}>
          <AllTasks></AllTasks>
        </Route>
        <Route exact path={allAppComponentsWithPageTitle.tasksfortoday.path}>
          {/* <Home></Home> */}
        </Route>
        <Route exact path={allAppComponentsWithPageTitle.addtask.path}>
          <AddTask></AddTask>
        </Route>
      </div>
    </>
    </Switch>
    </div>
    </PersistGate>
  );
};
