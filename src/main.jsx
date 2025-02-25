import { StrictMode } from 'react'
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import HomeContents from './components/HomeContents/HomeContents.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HomeContents></HomeContents>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/products/:productId',
        loader: () => fetch('/gadgets.json'),
        element: <ProductDetails></ProductDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
