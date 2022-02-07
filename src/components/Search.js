/**
 * Renders and handles the search functionality.
 *
 * Handles the search input, and passes the search results to the
 * SearchResults component.
 */

import {
   Button,
   Input,
   useBoolean,
   FormControl,
   VisuallyHidden,
} from '@chakra-ui/react'
import SearchResults from '../components/SearchResults'
import NpoResults from '../components/NpoResults'
import { supabase } from '../utils/supabaseClient'
import { useState } from 'react'
import Fuse from 'fuse.js'

const handleSubmit = () => {
   setIsSearch.toggle
}

const Search = ({ items, npos }) => {
   const [isSearch, setIsSearch] = useBoolean(true)
   const [searchQuery, setSearchQuery] = useState("");
   const [searchResults, setSearchResults] = useState([]);

   const fuse = new Fuse(items, {
      includeScore: true,
      threshold: 0.4,
      keys: ['name'],
   })

   const handleSearch = (searchQuery) => {
      setSearchQuery(searchQuery);
      const results = fuse.search(searchQuery);
      setSearchResults(results);
    };

   return (
      <>
         <form onSubmit={setIsSearch.on}>
            <FormControl>
               <Input
                  placeholder={isSearch ? 'i can donate...' : 'Item Searched'}
                  variant={'filled'}
                  size={'lg'}
                  px={8}
                  value={searchQuery}
                  onChange={(event) => handleSearch(event.target.value)}
               />
            </FormControl>
         </form>
         <SearchResults items={searchResults} />
         {!isSearch && <NpoResults npos={npos} />}
      </>
   )
}

export default Search
