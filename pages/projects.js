import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbMlpv99 from '../public/images/works/mlpv99_eyecatch.png'
import thumbFastapi from '../public/images/works/fastapi_eyecatch.png'
import thumbNetflix from '../public/images/works/netflix_eyecatch.png'
import thumbGraphLink from '../public/images/works/graphLink_eyecaych.png'
import thumbSolar from '../public/images/works/solar_eyecatch.png'
import thumbDcgan from '../public/images/works/dcgan_eyecatch.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem id="mlpv99" title="MLPV99" thumbnail={thumbMlpv99}>
              A simple (Keras-like) library for building Multi-Layer Perceptron
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="fastapi_mini_social_app"
              title="Mini Social Media App"
              thumbnail={thumbFastapi}
            >
              Mini Social Media App Backend Created with Fastapi Framework
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="netflixRS"
              title="Recommendation System"
              thumbnail={thumbNetflix}
            >
              Predict the Rating That A User Would Give to A Movie That He Has
              Not Yet Rated
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="graphLinkPred"
              title="Graph Link Prediction"
              thumbnail={thumbGraphLink}
            >
              Facebook - Social network Graph Link Prediction
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="solar"
              title="Solar System Simulation"
              thumbnail={thumbSolar}
            >
              Simulating Solar System Using Python with PyGame Module
            </WorkGridItem>
          </Section>
          <Section delay={0.55}>
            <WorkGridItem
              id="dcganAnime"
              title="Anime Faces"
              thumbnail={thumbDcgan}
            >
              Anime Face Generation Using DC-GAN
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Projects
