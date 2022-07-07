/**
 * Renders and handles the search functionality.
 *
 * Handles the search input, and passes the search results to the
 * SearchResults component.
 */

import { useState } from 'react'
import ItemSearch from './ItemSearch'
import NpoSearch from './NpoSearch'

const Search = ({ items, npos }) => {
   const [isItems, setIsItems] = useState(true)
   const [selectedItem, setSelectedItem] = useState(null)

   console.log(`Rendered Search. isItems = ${isItems}`)
   return (
      <>
         {isItems && (
            <ItemSearch
               items={items}
               setSelectedItem={setSelectedItem}
               setIsItems={setIsItems}
            />
         )}
         {!isItems && (
            <NpoSearch
               npos={npos}
               selectedItem={selectedItem}
               setIsItems={setIsItems}
            />
         )}
      </>
   )
}

export default Search
