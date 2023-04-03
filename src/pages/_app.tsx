import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from '@/context/AuthContext'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store } from "@/store";
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthContextProvider>
            <Toaster />
            <Component {...pageProps} />
          </AuthContextProvider>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  )
}