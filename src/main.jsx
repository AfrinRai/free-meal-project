import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Menus from './components/Menus/Menus.jsx';
import ShowDetails from './components/ShowDetails/ShowDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/menus",
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
        element: <Menus></Menus>
      },
      {
        path: "/menu/:menuId",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.menuId}`),
        element: <ShowDetails></ShowDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
