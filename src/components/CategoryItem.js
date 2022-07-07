import { Center, Text, HStack } from '@chakra-ui/react'

const categoryIcon = (categoryName, isFocused) => (
   <Center
      textAlign={'center'}
      bg={isFocused ? 'blue.500' : 'gray.300'}
      rounded={'md'}
      w={'5.5rem'}
      h={7}
   >
      <Text fontSize={'sm'} color={'white'} fontWeight={'bold'}>
         {categoryName.toUpperCase()}
      </Text>
   </Center>
)

const CategoryItem = ({ item, isFocused }) => {
   return (
      <HStack spacing={8}>
         {categoryIcon(item.category, isFocused)}
         <Text
            fontSize={'2xl'}
            fontWeight={isFocused && 'semibold'}
            color={'gray.600'}
         >
            {item.isCategory ? item.description : item.name}
         </Text>
      </HStack>
   )
}

export default CategoryItem
