import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import Hotel from './pages/Hotel'
import List from './pages/List'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  }, {
    path: '/hotels',
    element: <List></List>
  }, {
    path: "/hotels/:id", element: <Hotel></Hotel>
  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App