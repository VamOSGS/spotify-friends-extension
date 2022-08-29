import React from 'react';
import { SpotifyProvider } from 'contexts/SpotifyContext';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages';

export const RouterProvider = BrowserRouter;

function App() {
  return (
    <RouterProvider>
      <SpotifyProvider>
        <Pages />
      </SpotifyProvider>
    </RouterProvider>
  );
}

export default App;
