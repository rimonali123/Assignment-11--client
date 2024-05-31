import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import AddService from "../Pages/AddService";
import ManageService from "../Pages/ManageService";
import BookedService from "../Pages/BookedService";
import ServiceToDo from "../Pages/ServiceToDo";
import PrivateRoot from "../PrivateRoot/PrivateRoot";
import SingleServiceDetails from "../Pages/SingleServiceDetails";
import UpdateService from "../Pages/UpdateService";
import ErrorPage from "../Pages/ErrorPage";
import BookServiceDetails from "../Pages/BookServiceDetails";
import AllServices from "../Pages/AllServices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () =>fetch('https://assignment-11-server-side-theta.vercel.app/services'),
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader : () =>fetch('https://assignment-11-server-side-theta.vercel.app/services'),
      },
      {
        path: "/updateService/:id",
        element:<PrivateRoot><UpdateService></UpdateService></PrivateRoot>,
        loader: ({params}) =>fetch(`https://assignment-11-server-side-theta.vercel.app/services/${params.id}`)
      },
      {
        path: "/singleServiceDetails/:_id",
        element: <PrivateRoot><SingleServiceDetails></SingleServiceDetails></PrivateRoot>,
        loader : () =>fetch('https://assignment-11-server-side-theta.vercel.app/services'),
      },
      {
        path: "/addServices",
        element: <PrivateRoot><AddService></AddService></PrivateRoot>,
      },
      {
        path: "/manageService",
        element: <PrivateRoot><ManageService></ManageService></PrivateRoot>,
        loader : () =>fetch('https://assignment-11-server-side-theta.vercel.app/services'),
      },
      {
        path: "/bookedServices",
        element: <PrivateRoot><BookedService></BookedService></PrivateRoot>,
        // loader : () =>fetch('https://assignment-11-server-side-theta.vercel.app/bookedService'),
      },
      {
        path: "/bookServiceDetails/:_id",
        element: <PrivateRoot><BookServiceDetails></BookServiceDetails></PrivateRoot>,
        loader : () =>fetch('https://assignment-11-server-side-theta.vercel.app/bookedService'),
      },
      {
        path: "/servicesToDo",
        element: <PrivateRoot><ServiceToDo></ServiceToDo></PrivateRoot>,
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },

]);