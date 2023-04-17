import './index.css';
import reportWebVitals from './reportWebVitals';


import * as React from 'react';
import  ContactPage from './pages/contact';
import  OutlookPage from './pages/outlook';
import  TrendPage from './pages/trend';
import  AdminPage from './pages/admin';
import  TestPage from './pages/test';
import  DetailPage from './pages/detail';



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
    path: "/N9-fashionProject",
    element: <App/>,
  },
  {
    path: "/N9-fashionProject/outlook/*",
    element: <OutlookPage/>,
  },
  {
    path: "/N9-fashionProject/trend/*",
    element: <TrendPage/>,
  },
  {
    path: "/N9-fashionProject/contact",
    element: <ContactPage/>,
  },
  {
    path: "/N9-fashionProject/admin",
    element: <AdminPage/>,
  },
  {
    path: "/N9-fashionProject/test",
    element: <TestPage/>,
  },
  {
    path: "/N9-fashionProject/detail/*",
    element: <DetailPage/>,
  },
  {
    basename:"/N9-fashionProject"
  }
]);



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const basename = '/N9-fashionProject';


root.render(
  // <RouterProvider router= {router}   basename={basename}/>
  <RouterProvider router={router} basename={basename}>
  <App />
</RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
