import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from '@/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Component {...pageProps} /> 
      </AuthContextProvider>
    </ChakraProvider>
  )
}