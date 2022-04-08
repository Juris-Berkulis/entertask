import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { allAppComponentsWithPageTitle } from './data/consts';
import { isMobileDevice } from './helper/helper';
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
      </div>
    </>
    </Switch>
    </div>
    </PersistGate>
  );
};
