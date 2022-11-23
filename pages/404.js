import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1">Not Found</Heading>
        <Text>The Page you&apos;re looking for doesn&apos;t Exist 😕</Text>
        <Divider my={6} />
        <Box my={6}>
          <NextLink href="/">
            <Button colorScheme="teal">Return to the Homepage</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
