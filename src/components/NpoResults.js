/**
 * Renders the NPO results based off of category/item.
 *
 */

const NpoResults = ({ npos }) => (
   <>
      <p>NPO Results component.</p>
      {npos.map((npo) => (
         <p key={npo.id}>{npo.name}</p>
      ))}
   </>
)

export default NpoResults
