import Head from 'next/head'
import { Container, Card, Row, Text } from '@nextui-org/react'
import Navbar from '../navbar'
const Main = ({ children, router }) => {
  return (
    <div as="main" className="pb-4">
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Mohammed Sameer - HomePage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container className="pt-16">{children}</Container>
    </div>
  )
}

export default Main
