import React from 'react';
import Home from '../components/Home';
import Main from '../components/Main';
import {
    createBrowserRouter
  } from "react-router-dom";
import Mytoy from '../components/Mytoy';
import Addtoy from '../components/Addtoy';
import Login from '../components/Login';
import Alltoys from '../components/Alltoys';
import Blog from '../components/Blog';
import Registration from '../components/Registration';
import PrivateRouter from './PrivateRouter';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },
        {
            path: "/mytoy",
            element: <PrivateRouter><Mytoy></Mytoy></PrivateRouter>
        },
        {
            path: "/addtoy",
            element: <PrivateRouter><Addtoy></Addtoy></PrivateRouter>
        },
        {
            path: "/alltoy",
            element: <Alltoys></Alltoys>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
      ]
    },
  ]);

export default router;