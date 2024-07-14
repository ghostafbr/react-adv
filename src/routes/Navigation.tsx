import {
    NavLink,
    Outlet,
    createBrowserRouter,
    Navigate,
    RouterProvider
} from 'react-router-dom';
import {FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage} from '../03-forms/pages';
import logo from '../logo.svg';

const Root = () => {
    return (

        <div className="main-layout">
            <nav>
                <img src={logo} alt="React log" />
                <ul>
                    <li>
                        <NavLink
                            to="/register" className={({isActive}) => isActive ? "nav-active" : ""}
                        >
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/formik-basic" className={({isActive}) => isActive ? "nav-active" : ""}
                        >
                            Formik Basic Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/formik-yup-page" className={({isActive}) => isActive ? "nav-active" : ""}
                        >
                            Formik Yup Page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/formik-components" className={({isActive}) => isActive ? "nav-active" : ""}
                        >
                            Formik Components
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/formik-abstraction" className={({isActive}) => isActive ? "nav-active" : ""}
                        >
                            Formik Abstraction
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "formik-basic",
                element: <FormikBasicPage />
            },
            {
                path: "formik-yup-page",
                element: <FormikYupPage />
            },
            {
                path: "formik-components",
                element: <FormikComponents />
            },
            {
                path: "formik-abstraction",
                element: <FormikAbstraction />
            }

        ]
    },
    {
        path: "/*",
        element: <Navigate to="/home" replace={true} />
    }
]);

export const Navigation = () => {
    return (<RouterProvider router={router} />);
};
