import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Wishlist from './Wishlist.tsx'
import ErrorPage from './ErrorPage.tsx'
import './index.css'
import { Container } from '@mui/material'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/wishlist',
    element: <Wishlist />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Container fixed>
        <Navbar children={<></>} />
        <RouterProvider router={router} />
        <Footer />
    </Container>  
  </React.StrictMode>,
)
