import './index.css';
import reportWebVitals from './reportWebVitals';


import * as React from 'react';
import  ContactPage from './pages/contact';
import  OutlookPage from './pages/outlook';
import  TrendPage from './pages/trend';
import  AdminPage from './pages/admin';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/outlook",
    element: <OutlookPage/>,
  },
  {
    path: "/trend",
    element: <TrendPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/admin",
    element: <AdminPage/>,
  },
]);



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <RouterProvider router= {router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
