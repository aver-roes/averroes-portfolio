import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ProjectNetflixRS = () => {
  return (
    <Layout>
      <Container>
        <Title>
          Anime Faces Generation <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Generate an Anime Face in an Unsupervised learning Technique Call Deep
          Convolutional GANs by given it a random 100D array it will generate an
          Anime face image.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/aver-roes/DCGAN">
              DCGAN
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Numpy, Tensorflow, Keras, Matplotlib</span>
          </ListItem>
        </List>

        <ProjectImage src="/images/works/dcgan_02.png" alt="dcgan" />
        <ProjectImage src="/images/works/dcgan_01.png" alt="dcgan" />
        <ProjectImage src="/images/works/dcgan_eyecatch.png" alt="dcgan" />
      </Container>
    </Layout>
  )
}

export default ProjectNetflixRS
