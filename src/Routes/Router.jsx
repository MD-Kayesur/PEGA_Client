
import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Platform from "../Components/Platform";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [{
        path:'/',
        element:<Home></Home>, 
    },
    {
      path:'/Platform',
      element:<Platform></Platform>
    }


]

  },
]);