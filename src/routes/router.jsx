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
import Updatetoy from '../components/Updatetoy';
import Notfound from '../components/Notfound';

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
        loader: ({ params }) => fetch(`https://toy-marketplace-server-drab-psi.vercel.app/toy/${params.id}`)
      },
      {
        path: "/alltoy",
        element: <Alltoys></Alltoys>,
        loader: () => fetch('https://toy-marketplace-server-drab-psi.vercel.app/addtoy')
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
      {
        path: "/updatetoy/:id",
        element: <PrivateRouter><Updatetoy></Updatetoy></PrivateRouter>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-drab-psi.vercel.app/addtoy/${params.id}`)
      },
    ]
  },
  {
    path: "*",
    element: <Notfound></Notfound>
  },

]);

export default router;