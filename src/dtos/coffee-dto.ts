import { ImageSourcePropType } from 'react-native'

export type CoffeeDTO = {
  id: string
  name: string
  price: number
  sizes: string[]
  description: string
  category: string
  image: ImageSourcePropType
}

export type CoffeeItemDTO = CoffeeDTO & {
  size: string
  amount: number
}

export type CoffeeData = {
  title: string
  data: CoffeeDTO[]
}
