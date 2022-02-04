import { Box, Flex, Heading, Container, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const About = () => (
   <>
      <Navbar />
      <Container centerContent maxW={'container.md'}>
         <Flex direction={'column'} h={'40vh'} alignItems={'center'}>
            <Heading>About</Heading>
            <Text>
               This is where all the about text will be for the DonateToo
               website. Lorum ipsum and stuff.
            </Text>
         </Flex>
      </Container>
   </>
)

export default About
