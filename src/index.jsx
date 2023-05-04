import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';

import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import ErrorPage from './pages/Error';

const breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(max-width: 991px) and (min-width: 768px)",
  desktop: "(min-width: 992px)",
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "logement/:logementId",
    element: <Logement />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);