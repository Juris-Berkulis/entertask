import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { allAppComponentsWithPageTitle } from "../data/consts";

// export const PublicRoute = ({ authenticated, ...rest }) => {
//     return (
//         (
//             !authenticated
//         ) ? (
//             <Route {...rest} />
//         ) : (
//             <Navigate to={allAppComponentsWithPageTitle.tasksfortoday.path} />
//         )
//     )
// };

export const PublicRoute = ({ authenticated, ...rest }) => {
    return !authenticated ? <Outlet /> : <Navigate to={allAppComponentsWithPageTitle.tasksfortoday.path} />
};
