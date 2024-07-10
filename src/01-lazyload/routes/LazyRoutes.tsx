import { Navigate, RouteObject } from 'react-router-dom';
import {lazy, LazyExoticComponent} from 'react';

const LazyPage1: LazyExoticComponent<() => JSX.Element> = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../pages/LazyPage1'));
const LazyPage2: LazyExoticComponent<() => JSX.Element> = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../pages/LazyPage2'));
const LazyPage3: LazyExoticComponent<() => JSX.Element> = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../pages/LazyPage3'));

export const LazyRoutes: RouteObject[] = [
    {
        index: true,
        path: '/',
        element: <Navigate to='/lazy1' replace />,
    },
    {
        path: '/lazy1',
        handle: 'LazyPage 1',
        element: <LazyPage1 />,
    },
    {
        path: 'lazy2',
        handle: 'LazyPage 2',
        element: <LazyPage2 />,
    },
    {
        path: 'lazy3',
        handle: 'LazyPage 3',
        element: <LazyPage3 />,
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace />,
    },
];
