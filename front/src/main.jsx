import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import IndexContainer from './containers/IndexContainer'
import { ItemSection, ItemsSection } from './sections'
import './main.module.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexContainer/>,
    children: [
      { path: 'items', element: <ItemsSection/> },
      { path: 'items/:id', element: <ItemSection/> }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
