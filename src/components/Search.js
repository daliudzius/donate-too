/**
 * Handles the search functionality search rendering.
 *
 * Handles the search input, and passes the search results to the
 * SearchResults component.
 */

import {
   InputGroup,
   Input,
   InputRightElement,
   IconButton,
   Center,
   Icon,
   useDisclosure,
} from '@chakra-ui/react'
import SearchResults from '../components/SearchResults'
import NpoResults from '../components/NpoResults'
import { useState } from 'react'
import Fuse from 'fuse.js'
import { CloseIcon } from '@chakra-ui/icons'

const MAX_RESULTS = 4

const Search = ({ items, npos }) => {
   const [searchInput, setSearchInput] = useState('')
   const [searchResults, setSearchResults] = useState([])
   const [selectedIndex, setSelectedIndex] = useState(0)
   const [selectedItem, setSelectedItem] = useState(null)
   const { isOpen, onOpen, onClose } = useDisclosure()

   // initialize the fuse search options
   const fuse = new Fuse(items, {
      includeScore: true,
      threshold: 0.5,
      keys: [{ name: 'name', weight: 10 }, 'category'],
   })

   // handles keypresses for Enter, Up, Down
   const handleKeyDown = (pressedKey) => {
      switch (pressedKey) {
         case 'Enter':
            // if 'Show All Categories' is selected
            if (selectedIndex === searchResults.length) {
               console.log('To-do: Show the categories.')
            }
            // if an item is selected
            else if (searchResults.length > 0) {
               let currentItem = searchResults[selectedIndex].item
               setSelectedItem(currentItem)
               setSearchInput(currentItem.name)
            }
            setSelectedIndex(0)
            break
         case 'ArrowUp':
            selectedIndex > 0 && setSelectedIndex((prev) => prev - 1)
            break
         case 'ArrowDown':
            // +1 to account for 'Show All Categories option
            selectedIndex < searchResults.length &&
               setSelectedIndex((prev) => prev + 1)
            break
      }
   }

   // handles search and sets the search results array
   const handleSearch = (query) => {
      // if the query is non-empty, keep the search results dropdown open
      query ? onOpen() : onClose()

      // update input value
      setSearchInput(query)

      // update fuzzy search results
      const results = fuse.search(query).slice(0, MAX_RESULTS)
      setSearchResults(results)

      // reset selected index on input update

      //setSelectedIndex(0)
   }

   const handleClear = () => {
      setSearchInput('')
      setSearchResults([])
      //setSelectedIndex(0)
      setSelectedItem(null)
      onClose()
   }

   return (
      <>
         <InputGroup>
            <Input
               placeholder={'i can donate...'}
               variant={'filled'}
               fontSize={'2xl'}
               px={8}
               value={searchInput}
               onChange={(event) => handleSearch(event.target.value)}
               //onKeyDown={(event) => handleKeyDown(event.key)}
               h={16}
            />
            {searchInput && (
               <Center>
                  <InputRightElement h={'100%'} mr={6}>
                     <IconButton
                        aria-label='Clear search'
                        ml={4}
                        fontSize={'2xl'}
                        colorScheme={'blue'}
                        variant={'ghost'}
                        icon={<CloseIcon />}
                        onClick={() => handleClear()}
                     />
                  </InputRightElement>
               </Center>
            )}
         </InputGroup>
         {searchResults && (
            <SearchResults
               items={searchResults}
               isEmpty={searchInput === ''}
               isOpen={isOpen}
            >
               {console.log(searchResults)}
            </SearchResults>
         )}
         {
            // selectedItem && (
            //  <NpoResults npos={npos}>{console.log(selectedItem)}</NpoResults>)
         }
      </>
   )
}

export default Search
