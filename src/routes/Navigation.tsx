import {createBrowserRouter, Navigate, NavLink, Outlet, RouterProvider} from 'react-router-dom';
import {ShoppingPage} from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';

const Root = () => {
    return (

        <div className="main-layout">
            <nav>
                <img src={logo} alt="React log"/>
                <ul>
                    <li>
                        <NavLink
                            to="/shop" className={({isActive}) => isActive ? 'nav-active' : ''}
                        >
                            Shopping
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about" className={({isActive}) => isActive ? 'nav-active' : ''}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users" className={({isActive}) => isActive ? 'nav-active' : ''}
                        >
                            Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet/>
            </div>
        </div>
    );
};


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/shop',
                element: <ShoppingPage/>
            },
            {
                path: 'about',
                element: <h1>About</h1>
            },
            {
                path: 'users',
                element: <h1>Users page</h1>,
            }

        ]
    },
    {
        path: '/*',
        element: <Navigate to="/shop" replace={true}/>
    }
]);

export const Navigation = () => {
    return (<RouterProvider router={router}/>);
};
