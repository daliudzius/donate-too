import { Flex, Box, Spacer, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

const Navbar = () => (
   <Flex p={4}>
      <Box fontWeight={'semibold'}>DonateToo</Box>
      <Spacer />
      <Box>
         <Link href={'/'} passHref>
            <ChakraLink mr={4}>
               <Button colorScheme={'blue'}>Home</Button>
            </ChakraLink>
         </Link>
         <Link href={'/about'} passHref>
            <ChakraLink>
               <Button colorScheme={'blue'}>About</Button>
            </ChakraLink>
         </Link>
      </Box>
   </Flex>
)

export default Navbar
