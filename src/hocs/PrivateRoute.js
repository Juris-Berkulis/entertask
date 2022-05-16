import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { allAppComponentsWithPageTitle } from "../data/consts";

// export const PrivateRoute = ({ authenticated, ...rest }) => {
//     return (
//         (
//             authenticated
//         ) ? (
//             <Route {...rest} />
//         ) : (
//             <Navigate to={allAppComponentsWithPageTitle.login.path} />
//         )
//     )
// };

export const PrivateRoute = ({ authenticated, ...rest }) => {
    return authenticated ? <Outlet /> : <Navigate to={allAppComponentsWithPageTitle.login.path} />
};
