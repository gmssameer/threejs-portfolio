import Head from 'next/head'
import { Container, Card, Row, Text } from '@nextui-org/react'
const Main = ({ children, router }) => {
  return (
    <div as="main" className="pb-4">
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Mohammed Sameer - HomePage</title>
      </Head>
      <Container>{children}</Container>
    </div>
  )
}

export default Main
