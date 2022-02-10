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
import CategoryItem from './CategoryItem'

const ShowAllCategoriesRow = (numResults, selectedIndex) => {
   const isSelected = numResults === selectedIndex
   const row = numResults && (
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
               <Text fontSize={'xl'} fontWeight={isSelected && 'semibold'}>
                  Show All Categories
               </Text>
               <Spacer />
               <Box>
                  <Center
                     width={32}
                     alignContent={'center'}
                     justifyContent={'center'}
                     fontSize={'2xl'}
                     color={'blue.500'}
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

const SearchResults = ({ items, selectedIndex, setSelectedIndex, isEmpty }) => {
   let isSelected = false
   return (
      <Box w={'100%'} mt={4}>
         {
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
                           <CategoryItem item={item} isSelected={isSelected} />
                           <Spacer />
                           <Box>
                              <Center
                                 width={32}
                                 alignContent={'center'}
                                 justifyContent={'center'}
                                 fontSize={'2xl'}
                                 color={'blue.500'}
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
                  // add final row for 'Show All Categories'
                  !isEmpty && ShowAllCategoriesRow(items.length, selectedIndex)
               }
            </List>
         }
      </Box>
   )
}

export default SearchResults
