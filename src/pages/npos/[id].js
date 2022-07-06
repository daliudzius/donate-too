/*import { supabase } from '../../utils/supabaseClient'

const NpoDetails = () => (
   <>
      <p>NPO Details</p>
   </>
)

export const getStaticPaths = async () => {
   /onst { npos } = await supabase.from('npos').select('id')
   const paths = npos.map(({ id }) => ({
      params: {
         id: id.toString(),
      },
   }))

   return {
      paths,
      fallback: false,
   }
}

export default NpoDetails
*/
