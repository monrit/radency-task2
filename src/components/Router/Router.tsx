import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

const Router: FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/archive",
            element: <MainPage archive />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
