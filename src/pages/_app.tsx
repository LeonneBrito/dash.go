import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClient, QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContexts';
import { makeServer } from '../services/mirage';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
      <ReactQueryDevtools />
    </ChakraProvider>
  </QueryClientProvider>
  )
}

export default MyApp
