import { Box, Flex, Heading, Container, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { gql } from '@apollo/client'
import apollo from '../utils/apolloClient'
import Search from '../components/Search'
import { npos, items } from '../utils/test_data'

const Index = (/* { items, npos } */) => (
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
         <Search items={items} npos={npos} />
      </Container>
      <Footer />
   </>
)

/* // Currently using hardcoded test data at ../utils/test_data.js
// fetch the possible items and npos at build time
// getStaticProps must be on the page component, not child components
export const getStaticProps = async () => {
   const { data } = await apollo.query({
      query: GET_DATA,
   })

   // add accepted donation items to each npo
   await data.npos_test.forEach((npo) => {
      npo.items = data.npo_item_test.filter((item) => item.npo_id === npo.id)
   })

   // add accepting npos to each item
   await data.items_test.forEach((item) => {
      item.npos = data.npo_item_test.filter((npo) => npo.item_id === item.id)
   })

   return {
      props: {
         items: data.items_test,
         npos: data.npos_test,
      },
   }
} */

export default Index
