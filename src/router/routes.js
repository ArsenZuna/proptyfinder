import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyRegistration from "../pages/PropertyRegistration";
import Nearby from "../pages/Nearby";
import Property from "../pages/Property"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <><h1>404 Not Found</h1></>
  },
  {
    path: '/properties',
    element: <Properties />,
    errorElement: <><h1>404 Not Found</h1></>
  },
  {
    path: '/registration',
    element: <PropertyRegistration />,
    errorElement: <><h1>404 Not Found</h1></>
  },
  {
    path: '/nearby',
    element: <Nearby />,
    errorElement: <><h1>404 Not Found</h1></>
  },
  {
    path: '/properties/:id',
    element: <Property />,
    errorElement: <><h1>404 Not Found</h1></>
  },
  {
    path: '/nearby/:id',
    element: <Property />,
    errorElement: <><h1>404 Not Found</h1></>
  }
])

const Root = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default Root;