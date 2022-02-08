/**
 * Renders the search results dropdown
 * with the selected item highlighted.
 */

import {
   List,
   ListItem,
   Text,
   Flex,
   Spacer,
   Box,
   Icon,
   Divider,
   Kbd,
   Center,
   HStack,
} from '@chakra-ui/react'
import { AiOutlineEnter } from 'react-icons/ai'
import { IoAppsOutline } from 'react-icons/io5'

const categoryIcon = (categoryName) => (
   <Center
      textAlign={'center'}
      bg={'blue.500'}
      rounded={'md'}
      w={'5.5rem'}
      h={7}
   >
      <Text fontSize={'sm'} color={'white'} fontWeight={'bold'}>
         {categoryName.toUpperCase()}
      </Text>
   </Center>
)

const ShowAllCategoriesRow = (numResults, selectedIndex) => {
   const isSelected = numResults === selectedIndex
   const row
   
   row = numResults && (
      <>
         <Divider />
         <ListItem>
            <Flex
               px={8}
               h={12}
               align={'center'}
               rounded={'lg'}
               bg={isSelected && 'blue.100'}
            >
               <Text
                  fontSize={'xl'}
                  fontWeight={isSelected && 'semibold'}
               >
                  Show All Categories
               </Text>
               <Spacer/>
               <Box>
                  <Center
                     width={32}
                     alignContent={'center'}
                     justifyContent={'center'}
                     fontSize={'2xl'}
                  >
                     {isSelected && (
                        <>
                           <Kbd>Enter</Kbd>
                           <Spacer />
                           <Icon ml={4} boxSize={7} as={IoAppsOutline} />
                        </>
                     )}
                  </Center>
               </Box>
            </Flex>
         </ListItem>
      </>
   )
   return row
}

const SearchResults = ({ items, selectedIndex }) => {
   let isSelected = false

   return (
      <Box w={'100%'} mt={4}>
         {items && (
            <List spacing={1}>
               {items.map((item, index) => {
                  item = item.item
                  isSelected = index === selectedIndex

                  return (
                     <ListItem key={item.id}>
                        <Flex
                           px={8}
                           h={12}
                           align={'center'}
                           rounded={'lg'}
                           bg={isSelected && 'blue.100'}
                        >
                           <HStack spacing={8}>
                              {categoryIcon(item.category)}
                              <Text
                                 fontSize={'2xl'}
                                 fontWeight={isSelected && 'semibold'}
                              >
                                 {item.isCategory
                                    ? item.description
                                    : item.name}
                              </Text>
                           </HStack>

                           <Spacer />
                           <Box>
                              <Center
                                 width={32}
                                 alignContent={'center'}
                                 justifyContent={'center'}
                                 fontSize={'2xl'}
                              >
                                 {isSelected && (
                                    <>
                                       <Kbd>Enter</Kbd>
                                       <Spacer />
                                       <Icon
                                          ml={4}
                                          boxSize={10}
                                          as={AiOutlineEnter}
                                       />
                                    </>
                                 )}
                              </Center>
                           </Box>
                        </Flex>
                     </ListItem>
                  )
               })}
               {
                  // if selecting last row, 'Show All Categories'
                  ShowAllCategoriesRow(items.length, selectedIndex)
               }
            </List>
         )}
      </Box>
   )
}

export default SearchResults
