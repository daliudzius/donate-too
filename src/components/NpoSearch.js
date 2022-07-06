{
   // use Fuse.js to make similar component: <NposSearch npos={npos} selectedItem={selectedItem} setIsItems=setIsItems />
}
import {
   Icon,
   InputGroup,
   InputLeftElement,
   Stack,
   Center,
   Spacer,
   Kbd,
   Text,
} from '@chakra-ui/react'
import {
   AutoComplete,
   AutoCompleteGroup,
   AutoCompleteInput,
   AutoCompleteItem,
   AutoCompleteList,
} from '@choc-ui/chakra-autocomplete'
import CategoryItem from './CategoryItem'

const NpoSearch = ({ npos, selectedItem, setIsItems }) => {
   const [focusedId, setFocusedId] = useState(null)

   const handleSelected = (item, selectMethod, isNewInput) => {
      console.log(`Selected NPO - ${item.item.label} id=[${item.item.value}]`) //debug
   }

   const isFocused = (itemId) => {
      return itemId === focusedId
   }

   return (
      <Stack direction='column' w={'container.md'}>
         <AutoComplete
            emptyState={
               <Text pl={4} fontSize={'2xl'}>
                  No results found
               </Text>
            }
            onOptionFocus={(item) => {
               setFocusedId(parseInt(item.item?.value, 10) ?? '-1')
            }}
            onSelectOption={handleSelected}
         >
            <InputGroup h={16}>
               <InputLeftElement
                  pointerEvents={'none'}
                  color={'blue.500'}
                  h={'100%'}
                  pl={5}
               >
                  <Icon boxSize={5} focusable='false' as={Search2Icon} />
               </InputLeftElement>
               <AutoCompleteInput
                  variant={'filled'}
                  fontSize={'2xl'}
                  h={'100%'}
                  pl={16}
                  pb={1}
               />
            </InputGroup>
            <AutoCompleteList w={'container.md'}>
               <AutoCompleteGroup title={'Search results'} showDivider>
                  {items.map((item) => (
                     <AutoCompleteItem
                        key={`item-${item.id}`}
                        label={item.name}
                        value={`${item.id}`}
                        h={12}
                        textTransform='capitalize'
                        // override Chakra default
                        _focus={{ bg: 'blue.100', fontWeight: 'semibold' }}
                     >
                        <CategoryItem
                           item={item}
                           isFocused={isFocused(item.id)}
                        />
                        <Spacer />
                        {isFocused(item.id) && (
                           <Center
                              width={32}
                              alignContent={'center'}
                              justifyContent={'center'}
                              fontSize={'2xl'}
                              color={'blue.500'}
                           >
                              <Kbd>Enter</Kbd>
                              <Spacer />
                              <Icon ml={4} boxSize={10} as={AiOutlineEnter} />
                           </Center>
                        )}
                     </AutoCompleteItem>
                  ))}
               </AutoCompleteGroup>
               <AutoCompleteItem
                  key={`show-map`}
                  label={'Show Map'}
                  value={'-1'}
                  fixed
                  h={12}
                  px={2}
                  textTransform='capitalize'
                  _focus={{ bg: 'blue.100' }} // override Chakra default
               >
                  <Text
                     fontSize={'xl'}
                     fontWeight={isFocused(-1) && 'semibold'}
                  >
                     Show Map
                  </Text>
                  <Spacer />
                  <Center
                     width={32}
                     alignContent={'center'}
                     justifyContent={'center'}
                     fontSize={'2xl'}
                     color={'blue.500'}
                  >
                     {isFocused(-1) && (
                        <>
                           <Kbd>Enter</Kbd>
                           <Spacer />
                           <Icon ml={4} boxSize={7} as={IoAppsOutline} />
                        </>
                     )}
                  </Center>
               </AutoCompleteItem>
            </AutoCompleteList>
         </AutoComplete>
      </Stack>
   )
}
