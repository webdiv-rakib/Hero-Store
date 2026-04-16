import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: "*",
      element: <ErrorPage />,
    },
    {
      index: true,
      path: "/",
      loader: () => fetch('appData.json'),
      Component: Home
    },
    {
      path: "/apps",
      loader: () => fetch('appData.json'),
      Component: AllApps,
    },
    {
      path: "/appDetails/:id",
      loader: () => fetch('appData.json'),
      Component: <AppDetails></AppDetails>
    }
    ]
  },
]);