/**
 * Handles the search functionality search rendering.
 *
 * Handles the search input, and passes the search results to the
 * SearchResults component.
 */

import { Input } from '@chakra-ui/react'
import SearchResults from '../components/SearchResults'
import NpoResults from '../components/NpoResults'
import { useState } from 'react'
import Fuse from 'fuse.js'

const MAX_RESULTS = 4

const Search = ({ items, npos }) => {
   const [searchInput, setSearchInput] = useState('')
   const [searchResults, setSearchResults] = useState([])
   const [selectedIndex, setSelectedIndex] = useState(0)
   const [selectedItem, setSelectedItem] = useState({})

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
               alert('To-do: Show the categories.')
            }
            // if an item is selected
            if (searchResults.length > 0) {
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
      // update input value
      setSearchInput(query)

      // update fuzzy search results
      const results = fuse.search(query).slice(0, MAX_RESULTS)
      setSearchResults(results)

      // reset selected index on input update
      setSelectedIndex(0)
   }

   return (
      <>
         <Input
            placeholder={selectedItem ? 'i can donate...' : 'Item Searched'}
            variant={'filled'}
            fontSize={'2xl'}
            px={8}
            value={searchInput}
            onChange={(event) => handleSearch(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event.key)}
            h={16}
         />
         {selectedItem && (
            <SearchResults
               items={searchResults}
               selectedIndex={selectedIndex}
            />
         )}
         {!selectedItem && <NpoResults npos={npos} />}
      </>
   )
}

export default Search
