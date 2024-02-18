import React from 'react';
import Home from '../components/Home';
import Main from '../components/Main';
import {
    createBrowserRouter
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;