import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
    path:"/",
    element:<App/>
  },
  {
    path:"/login",
    element:<Login/>
  }
  
  
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


