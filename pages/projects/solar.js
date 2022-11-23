import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ProjectSolarSim = () => {
  return (
    <Layout>
      <Container>
        <Title>
          Solar Simulation <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Simulation how the Solar System Work with the usage of real
          astronomical values, update the velocity of the planet by solving for
          acceleration using a = f / m (derived from Newton's second law)
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/aver-roes/simulating-solar-system">
              simulating-solar-system
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, PyGame, Math</span>
          </ListItem>
        </List>

        <ProjectImage src="/images/works/solar_eyecatch.png" alt="solar" />
      </Container>
    </Layout>
  )
}

export default ProjectSolarSim
