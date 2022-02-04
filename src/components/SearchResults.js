/**
 * Renders the search results.
 *
 */

const SearchResults = ({ items }) => (
   <>
      <p>Search Results component.</p>
      {items.map((item) => (
         <p key={item.id}>{item.name}</p>
      ))}
   </>
)

export default SearchResults
