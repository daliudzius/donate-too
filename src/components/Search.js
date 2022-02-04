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
import { supabase } from '../utils/supabaseClient'

const handleSubmit = () => {
   setIsSearch.toggle
}

const Search = ({ items, npos }) => {
   const [isSearch, setIsSearch] = useBoolean(true)
   return (
      <>
         <form onSubmit={setIsSearch.toggle}>
            <FormControl>
               {isSearch && (
                  <>
                     <Input
                        placeholder={'i can donate...'}
                        variant={'filled'}
                        size={'lg'}
                        px={8}
                     />
                     <VisuallyHidden>
                        <Button type={'submit'}></Button>
                     </VisuallyHidden>
                  </>
               )}
               {!isSearch && (
                  <Input
                     placeholder={'Item Searched'}
                     variant={'filled'}
                     size={'lg'}
                     px={8}
                  />
               )}
            </FormControl>
         </form>
         {isSearch && <SearchResults items={items} />}
         {!isSearch && <NpoResults npos={npos} />}
      </>
   )
}

export default Search
