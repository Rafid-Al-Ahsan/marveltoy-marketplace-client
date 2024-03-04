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
import Herodetails from '../components/Herodetails'
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
        path: "/herodetails/:id",
        element: <PrivateRouter><Herodetails></Herodetails></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: "/alltoy",
        element: <Alltoys></Alltoys>,
        loader: () => fetch('http://localhost:5000/addtoy')
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
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
]);

export default router;