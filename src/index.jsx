import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import RootLayout from './layouts/RootLayout';

import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import ErrorPage from './pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="logement/:logementId" element={<Housing />} errorElement={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);