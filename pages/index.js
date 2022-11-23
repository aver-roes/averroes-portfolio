import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  UnorderedList,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import Typewriter from 'typewriter-effect'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWechat,
  IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('#494e5420', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
          textColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
        >
          Hello, I&apos;m Software Engineer Based in{' '}
          <Typewriter
            options={{
              strings: [
                'Asia⛩',
                'North America🌉',
                'MENA🛕',
                'Europe🗼',
                'Hum 🤔',
                'Just Worldwide!🖤'
              ],
              pauseFor: 1000,
              delay: 100,
              deleteSpeed: 50,
              autoStart: true,
              loop: true
            }}
          />
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ali H.H
            </Heading>
            <p>
              Aver-Roes (ML/DL Engineer / Software Engineer / Data Scientist)
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ali.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work Experience 👨‍💻
          </Heading>
          <BioSection>
            <BioYear>Aug 2021 - Present: Freelance Software Engineer</BioYear>
            <UnorderedList pl={5}>
              <ListItem>Teaching Python programming language.</ListItem>
              <ListItem>Building Fullstack Software.</ListItem>
              <ListItem>Machine Learning Consultant.</ListItem>
            </UnorderedList>
          </BioSection>

          <BioSection>
            <BioYear>
              Jan 2020 - Jul 2021: Data Scientist at Yurten Kimya
            </BioYear>
            <UnorderedList pl={5}>
              <ListItem>
                Wrangled, analyzed, and Interpreted, data using Pandas, Numpy,
                Sk-learn and Matplotlip in order to drive successful business
                solutions.
              </ListItem>
              <ListItem>
                Created machine learning models(SVM, XGBoost) using predictive
                data modeling
              </ListItem>
              <ListItem>
                Made PowerPoint presentations to interpret the result clearly.
              </ListItem>
            </UnorderedList>
          </BioSection>
          <BioSection>
            <BioYear>
              May 2019 - Dec 2019: Data Scientist Intern at DENGXIAN.ltd
            </BioYear>
            <UnorderedList pl={5}>
              <ListItem>
                Build data driven reports, store procedures, query optimization
                using SQL and PL/SQL knowledge.
              </ListItem>
              <ListItem>
                Develop and A/B test improvements to business survey questions.
              </ListItem>
              <ListItem>
                Use Python to parallelize pre existing code to make data
                analysis processes faster.
              </ListItem>
            </UnorderedList>
          </BioSection>
          <BioSection>
            <BioYear>
              Nov 2014 - Oct 2016: IT Maintenance at Oriental Treasures Trading
            </BioYear>
            <UnorderedList pl={5}>
              <ListItem>Maintained the company website.</ListItem>
              <ListItem>
                Debugged and added new features when needed using javascript,
                HTML, and CSS.
              </ListItem>
            </UnorderedList>
          </BioSection>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            About Me 🙋‍♂️
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Is the year I was Born 😊
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Graduated from Xidian University for Science and Technology with a
            Bachelor&apos;s Degree, Among the top three students.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            One year Chinese Language Training at Shaanxi Normal University
            (remotely).
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Will Finish Master Degree from Xidian University (remotely).
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 🖤
          </Heading>
          <Paragraph>
            Science 👨‍🔬 / Machine Learning 🤖 / Playing Guitar 🎸 /
            Cinematography 🎥
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Contacts 📞
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/aver-roes" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @aver-roes
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ali-h-655774134/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Ali H.
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoWechat} />}
                >
                  @aloosh-1993
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://discord.com/channels/eddieali#0608"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @eddieali#0608
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
