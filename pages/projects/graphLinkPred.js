import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const ProjectGraphLinkPred = () => {
  return (
    <Layout>
      <Container>
        <Title>
          Graph Link Prediction <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Given a directed social graph, You have to predict missing links to
          recommend users.<pre></pre>
          Generated training samples of good and bad links from given directed
          graph and for each link got some features like NO. of followers, is he
          followed back, page rank, katz score, adar index, some svd features of
          adj matrix, some weight features etc. and trained ML models based on
          these features to predict a link.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/aver-roes/data-science-machine-learning/blob/main/FB_graph_link_prediction.ipynb">
              FB_graph_link_prediction.ipynb
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Python, Pandas, Numpy, Matplotlib, Seaborn, Scipy, Sk-learn,
              XGboost, Networkx
            </span>
          </ListItem>
        </List>

        <ProjectImage src="/images/works/graphLink_01.png" alt="graphLink" />
        <ProjectImage src="/images/works/graphLink_02.png" alt="graphLink" />
      </Container>
    </Layout>
  )
}

export default ProjectGraphLinkPred
