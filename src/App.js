import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Visualizer from './pages/Visualizer/Visualizer';
import  Search  from './pages/Search/Search';
import Context from './context';
import useLanguage from './hooks/useLanguage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/visualizer/:s_id/',
    element: <Visualizer />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '*',
    element: <Navigate to={'/'} />
  }
]);

export const App = () => {
  const [language, setLanguage] = useLanguage('en')

  return (
    <Context.Provider value={{language, setLanguage}}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}
