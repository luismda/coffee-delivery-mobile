import { ImageSourcePropType } from 'react-native'

export type CategoryDTO = {
  text: string
  value: 'traditional' | 'sweet' | 'special'
}

export type CoffeeDTO = {
  id: string
  name: string
  price: number
  sizes: string[]
  description: string
  category: CategoryDTO
  image: ImageSourcePropType
}

export type CoffeeItemDTO = CoffeeDTO & {
  size: string
  amount: number
}
