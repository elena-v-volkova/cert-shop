import React from 'react';
import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
} from "react-router-dom";

import { MainPage } from './pages/MainPage/MainPage';
import { FormPage } from './pages/FormPage/FormPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PaymentPage } from './pages/PaymentPage/PaymentPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const App = () => {

    const router = createHashRouter([
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/form",
            element: <FormPage />,
        },
        {
            path: "/payment",
            element: <PaymentPage />,
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
            <main className="content" >
                <RouterProvider router={router} />
            </main >
        </QueryClientProvider>
    );
};

export default App;