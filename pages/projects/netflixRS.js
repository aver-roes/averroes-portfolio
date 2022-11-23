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
          Recommendation System <Badge>2021</Badge>
        </Title>
        <Paragraph>
          For a given movie and user predict the rating would be given by
          him/her to the movie. The given problem is a Recommendation problem It
          can also seen as a Regression problem
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/aver-roes/data-science-machine-learning/blob/main/Netflix_Movie_Competition.ipynb">
              Netflix_Movie_Competition.ipynb
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Python, Pandas, Numpy, Matplotlib, Seaborn, Scipy, Sk-learn,
              Surprise
            </span>
          </ListItem>
        </List>

        <ProjectImage src="/images/works/netflix_01.png" alt="netflix" />
        <ProjectImage src="/images/works/netflix_01.png" alt="netflix" />
      </Container>
    </Layout>
  )
}

export default ProjectNetflixRS
