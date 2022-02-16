/**
 * Renders and handles the search functionality.
 *
 * Handles the search input, and passes the search results to the
 * SearchResults component.
 */

import { useState } from 'react'
import ItemSearch from './ItemSearch'

const Search = ({ items, npos }) => {
   const [isItems, setIsItems] = useState(true)
   const [selectedItem, setSelectedItem] = useState(null)

   return (
      <>
         {isItems ?? (
            <ItemSearch
               items={items}
               setSelectedItem={setSelectedItem}
               setIsItems={setIsItems}
            />
         )}
         {!isItems ?? (
            <NposSearch
               npos={npos}
               selectedItem={selectedItem}
               setIsItems={setIsItems}
            />
         )}
      </>
   )
}

export default Search
