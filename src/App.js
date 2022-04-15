import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { allAppComponentsWithPageTitle } from './data/consts';
import { isMobileDevice } from './helper/helper';
import { AddTask } from './route_components/AddTask/AddTask';
import { AllTasks } from './route_components/AllTasks/AllTasks';
import { EditTask } from './route_components/EditTask/EditTask';
import { Header } from './route_components/Header/Header';
import { persistor } from './store/Store';
import { useStyles } from './styles/Style';

export const App = () => {
  const classes = useStyles();

  const isMobileDeviceBoolean = isMobileDevice();

  return (
    <PersistGate persistor={persistor}>
      <div className={`${classes.main}`}>
        <Header></Header>
        <div className={`${classes.field} ${isMobileDeviceBoolean ? classes.field_mobileDevice : null}`}>
          <Routes>
            {/* <Route exact path={allAppComponentsWithPageTitle.home.path} element={<Home />} /> */}
              {/* <Home></Home> */}
            {/* </Route> */}
            {/* <Route exact path={allAppComponentsWithPageTitle.profile.path} element={<Home />} /> */}
              {/* <Home></Home> */}
            {/* </Route> */}
            <Route exact path={allAppComponentsWithPageTitle.alltasks.path} element={<AllTasks />} />
              {/* <AllTasks></AllTasks>
            </Route> */}
            {/* <Route exact path={allAppComponentsWithPageTitle.tasksfortoday.path} element={<Home />} /> */}
              {/* <Home></Home> */}
            {/* </Route> */}
            <Route exact path={allAppComponentsWithPageTitle.addtask.path} element={<AddTask />} />
              {/* <AddTask></AddTask>
            </Route> */}
            <Route exact path={allAppComponentsWithPageTitle.edittask.path} element={<EditTask />} />
              {/* <AddTask></AddTask>
            </Route> */}
          </Routes>
        </div>
      </div>
    </PersistGate>
  );
};
