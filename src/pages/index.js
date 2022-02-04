import { Box, Flex, Heading, Container, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { supabase } from '../utils/supabaseClient'
import Search from '../components/Search'

const Index = ({ items, npos }) => (
   <>
      <Head>
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <title>DonateToo</title>
      </Head>
      <Navbar />
      <Container centerContent maxW={'container.md'}>
         <Flex h={'40vh'} alignItems={'center'}>
            <Box>
               <Heading fontSize={'5xl'}>DonateToo</Heading>
               <Text>Orchestrating donations in the bay area.</Text>
            </Box>
         </Flex>
         <Search items={items} />
      </Container>
      <Footer />
   </>
)

// fetch the possible items and npos at build time
// getStaticProps must be on the page component, not child components
export const getStaticProps = async () => {
   const { data: items } = await supabase.from('items_test').select('*')

   const { data: npos } = await supabase.from('npos_test').select('*')

   return {
      props: {
         items,
         npos,
      },
   }
}

export default Index
