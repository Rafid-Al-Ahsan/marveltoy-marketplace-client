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
            path: "/mytoy",
            element: <Mytoy></Mytoy>
        },
        {
            path: "/addtoy",
            element: <Addtoy></Addtoy>
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