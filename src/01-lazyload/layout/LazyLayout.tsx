import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {LazyRoutes} from "../routes";

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            <ul>
                {LazyRoutes[0]?.children?.map((route, index) => (
                    <li key={index}>
                        <NavLink
                            to={route.path ? route.path : '/'}
                            className={({ isActive }) => (isActive ? 'nav-active' : '')}
                        >
                            {route.handle}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/*<Outlet />*/}
            <Routes>
                {LazyRoutes[0]?.children?.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
                <Route path='*' element={<Navigate replace to='lazy1'/> } />
            </Routes>
        </div>
    );
};

export default LazyLayout;
