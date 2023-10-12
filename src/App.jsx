// rrd imports
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom"


//pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipie from './pages/Recipie';
import Error from "./pages/Error";

//layouts
import MainLayout from "./layout/MainLayout"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'create',
          element: <Create />,
        },
        {
          path: 'recipie/:id',
          element: <Recipie/>
        }
      ]
    },
  ])

  return <RouterProvider router={routes} />
}

export default App 