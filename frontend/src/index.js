import React from 'react';
import {createRoot} from 'react-dom/client';
import { createHashRouter,RouterProvider } from 'react-router-dom';


import App from './App';
import Add from './components/Add';
const router = createHashRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path:'/add',
        element: <Add/>
    },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
            
)