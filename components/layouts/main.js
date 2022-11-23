import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AverRoes - Portfolio</title>
      </Head>
      <NavBar path={router.asPath} />
      <br />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
