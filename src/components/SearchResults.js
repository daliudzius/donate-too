/**
 * Renders the search results.
 *
 */

import { List, ListItem } from '@chakra-ui/react'

const SearchResults = ({items}) => (
   <div>
      {items && (
         <List spacing={2}>
            {items.map((result) => (
               <ListItem key={result.item.id}>{result.item.name}</ListItem>
            ))}
         </List>
      )}
      {!items && console.log('2nd option')}
   </div>
)

export default SearchResults
