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

const ProjectMlpv99 = () => {
  return (
    <Layout>
      <Container>
        <Title>
          mlpv99 <Badge>2022</Badge>
        </Title>
        <Paragraph>
          The library is built from scratch using Neural network math with only
          vanilla Python & a little bit of Numpy. Currently, it can be used to
          build only dense neural networks, but you can add other
          architectures(CNN, RNN..etc) if you wish after all it's an open-source
          project! anyone is welcome to contribute to the project
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/aver-roes/mlpv99">
              https://github.com/aver-roes/mlpv99 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Numpy</span>
          </ListItem>
        </List>
        <Heading as="h3" variant="section-title">
          Features
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Dense Layer</Meta>
            <span>Dense layer with random initialization for weights.</span>
          </ListItem>
          <ListItem>
            <Meta>Regularization</Meta>
            <span>Dropout Layer - L1 & L2</span>
          </ListItem>
          <ListItem>
            <Meta>Activation Functions</Meta>
            <span>ReLU - Sigmoid - Softmax - Linear</span>
          </ListItem>
          <ListItem>
            <Meta>Loss Functions</Meta>
            <span>Binary CE - Categorical CE - MSE - MAE</span>
          </ListItem>
          <ListItem>
            <Meta>Accuracy Functions</Meta>
            <span>Accuracy Categorical - Accuracy Regression</span>
          </ListItem>
          <ListItem>
            <Meta>Optimizers</Meta>
            <span>
              SGD with learning decay & momentum - AdaGrad - RMSprop - Adam
            </span>
          </ListItem>
          <ListItem>
            <Meta>Model Layer</Meta>
            <span>
              For saving and loading this object to use for future prediction
              tasks
            </span>
          </ListItem>
        </List>
        <ProjectImage src="/images/works/mlpv99_01.png" alt="mlpv99" />
        <ProjectImage src="/images/works/mlpv99_02.png" alt="mlpv99" />
      </Container>
    </Layout>
  )
}

export default ProjectMlpv99
