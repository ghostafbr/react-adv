import { Navigate, RouteObject } from 'react-router-dom';
import {lazy, LazyExoticComponent} from 'react';
import {LazyPage1, LazyPage2, LazyPage3, NoLazy} from "../pages";

const LazyLayout: LazyExoticComponent<() => JSX.Element> = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../layout/LazyLayout'));

export const LazyRoutes: RouteObject[] = [
    {
        path: '/lazyload/',
        handle: 'LazyLayout',
        element: <LazyLayout />,
        children: [
            {
                path: 'lazy1',
                handle: 'lazy1',
                element: <LazyPage1 />,
            },
            {
                path: 'lazy2',
                handle: 'lazy2',
                element: <LazyPage2 />,
            },
            {
                path: 'lazy3',
                handle: 'lazy3',
                element: <LazyPage3 />,
            },
        ],
    },
    {
        path: '/no-lazy',
        handle: 'No Lazy',
        element: <NoLazy />,
    },
    {
        path: '*',
        element: <Navigate to={'/lazyload/'} replace />,
    },
];
