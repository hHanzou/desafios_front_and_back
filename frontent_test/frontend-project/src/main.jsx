import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/info",
        element: <Info />,
      }
    ]
  },
 
]);

import { FormProvider } from './context/FormContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>,
)
