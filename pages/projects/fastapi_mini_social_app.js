import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ProjectFastapi = () => {
  return (
    <Layout>
      <Container>
        <Title>
          Mini Social Media App <Badge>2021</Badge>
        </Title>
        <Paragraph>
          A mini Social Media app Backend with DevOps using Fastapi framework
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://social-media-fastapi-backend.herokuapp.com/docs">
              https://social-media-fastapi-backend/docs
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/aver-roes/social_media_fastapi">
              https://github.com/aver-roes/social_media_fastapi{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Python, Fastapi, PostgresSQL, Alembic, Docker, Heroku, CI/CD
              Github Actions
            </span>
          </ListItem>
        </List>
        <Heading as="h3" variant="section-title">
          Features
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>POST CRUD</Meta>
          </ListItem>
          <ListItem>
            <Meta>USER CRUD</Meta>
          </ListItem>
          <ListItem>
            <Meta>COMMENTS CRUD</Meta>
          </ListItem>
          <ListItem>
            <Meta>LIKES CRUD</Meta>
          </ListItem>
          <ListItem>
            <Meta>JWT Authentication</Meta>
          </ListItem>
          <ListItem>
            <Meta>TESTING using Pytest</Meta>
          </ListItem>
          <ListItem>
            <Meta>virtualization with Docker</Meta>
          </ListItem>
          <ListItem>
            <Meta>Deployed on Heroku</Meta>
          </ListItem>
          <ListItem>
            <Meta>CI/CD Pipeline using Github Actions</Meta>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/works/fastapi_mini_social_app01.png"
          alt="fastapi"
        />
        <ProjectImage
          src="/images/works/fastapi_mini_social_app02.png"
          alt="fastapi"
        />
      </Container>
    </Layout>
  )
}

export default ProjectFastapi
