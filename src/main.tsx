import { ChakraProvider } from '@chakra-ui/react';
import { ProviderUser } from '@context/User/User.context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/routes';
import theme from './styles/index.style';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ProviderUser>
        <RouterProvider router={router} />
      </ProviderUser>
    </ChakraProvider>
  </React.StrictMode>,
)
