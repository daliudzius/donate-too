/**
 * Renders the search results dropdown
 * with the selected item highlighted.
 */

import {
   Menu,
   MenuList,
   MenuItem,
   Text,
   Flex,
   Spacer,
   Box,
   Icon,
   Divider,
   Kbd,
   Center,
   HStack,
   MenuButton,
   useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineEnter } from 'react-icons/ai'
import { IoAppsOutline } from 'react-icons/io5'
import CategoryItem from './CategoryItem'

const SearchResults = ({ items, isOpen }) => {
   const [selectedId, setSelectedId] = useState(null)
   //let isSelected = false

   const isSelected = (itemId) => {
      return itemId === selectedId
   }

   return (
      <Menu
         defaultIsOpen={true}
         isOpen={isOpen}
         closeOnBlur={false}
         matchWidth={true}
      >
         <MenuButton w={'100%'}></MenuButton>
         <MenuList w={'100%'}>
            {items.map((item, index) => {
               // map menu list rows
               item = item.item
               //isSelected = index === selectedIndex

               return (
                  <Box
                     key={item.id}
                     h={12}
                     px={4}
                     _focus={{ bg: 'blue.100' }} // override Chakra default
                     onFocus={() => setSelectedId(item.id)}
                     onClick={() =>
                        console.log('Clicked - ', item.name, `(${item.id})`)
                     }
                     rounded={'lg'}
                     as={MenuItem}
                  >
                     <CategoryItem
                        item={item}
                        isSelected={isSelected(item.id)}
                     />
                     <Spacer />
                     <Box>
                        <Center
                           width={32}
                           alignContent={'center'}
                           justifyContent={'center'}
                           fontSize={'2xl'}
                           color={'blue.500'}
                        >
                           {isSelected(item.id) && (
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
                  </Box>
               )
            })}
            {
               <>
                  <Divider />
                  <Box
                     h={12}
                     px={4}
                     _focus={{ bg: 'blue.100' }} // override Chakra default
                     onFocus={() => setSelectedId(-1)}
                     onClick={() => {
                        console.log('Clicked - Show All Categories')
                     }}
                     rounded={'lg'}
                  >
                     <Text
                        fontSize={'xl'}
                        fontWeight={isSelected(-1) && 'semibold'}
                     >
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
                           {isSelected(-1) && (
                              <>
                                 <Kbd>Enter</Kbd>
                                 <Spacer />
                                 <Icon ml={4} boxSize={7} as={IoAppsOutline} />
                              </>
                           )}
                        </Center>
                     </Box>
                  </Box>
               </>
            }
         </MenuList>
      </Menu>
   )
}

export default SearchResults
