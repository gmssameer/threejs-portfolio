// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import Layout from '../components/layouts/Main'

function MyApp({ Component, pageProps, router }) {
  return (
    <NextUIProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </NextUIProvider>
  )
}

export default MyApp
