import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";

const delayFetch = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return fetch('/appData.json');
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: delayFetch,
        Component: Home
      },
      {
        path: "/apps",
        loader: () => fetch('/appData.json'),
        Component: AllApps,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch('/appData.json'),
        Component: AppDetails
      },
      {
        path: "/installation",
        loader: () => fetch('/appData.json'),
        Component: Installation,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ]
  },
]);