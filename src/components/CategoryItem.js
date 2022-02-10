import { Center, Text, HStack } from '@chakra-ui/react'

const categoryIcon = (categoryName) => (
   <Center
      textAlign={'center'}
      bg={'blue.500'}
      rounded={'md'}
      w={'5.5rem'}
      h={7}
   >
      <Text fontSize={'sm'} color={'white'} fontWeight={'bold'}>
         {categoryName.toUpperCase()}
      </Text>
   </Center>
)

const CategoryItem = ({ item, isSelected }) => {
   return (
      <HStack spacing={8}>
         {categoryIcon(item.category)}
         <Text
            fontSize={'2xl'}
            fontWeight={isSelected && 'semibold'}
            color={'gray.600'}
         >
            {item.isCategory ? item.description : item.name}
         </Text>
      </HStack>
   )
}

export default CategoryItem
