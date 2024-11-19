import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { Logo } from './components/Logo';
import RootLayout from './layouts/RootLayouts';
import Login from './pages/Login';
import Login2 from './pages/Login2';

import DashboardUser from './layouts/DashboardUser';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Login2 />} />
        {/* <Route path="create" element={<Create />} /> */}
        {/* <Route path="profile" element={<Profile />} /> */}
        <Route path="/dashboard" element={<RootLayout />}>
          <Route index element={<DashboardUser />} />
          {/* <Route path="create" element={<Create />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
