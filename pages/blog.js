import NextLink from 'next/link'
import {
  Container,
  Heading,
  Image,
  useColorModeValue,
  Text,
  Box,
  Button,
  Center
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Blogs = () => (
  <Layout title="Blogs">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <Image src={useColorModeValue('/logo1.png', '/logo2.png')} alt="logo" />
        <Center>
          <Box mt={-5}>
            <Text ml={9} fontSize={20}>
              No Posts Yet 😉
            </Text>
            <Box my={6}>
              <NextLink href="/">
                <Button colorScheme="teal">Return to the Homepage</Button>
              </NextLink>
            </Box>
          </Box>
        </Center>
      </Section>
    </Container>
  </Layout>
)

export default Blogs
