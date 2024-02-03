import { Image, Pressable, PressableProps, Text, View } from 'react-native'

import { CoffeeDTO } from '@/dtos/coffee-dto'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

interface CatalogCardProps extends PressableProps {
  data: CoffeeDTO
}

export function CatalogCard({ data, ...rest }: CatalogCardProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} {...rest}>
        <Image style={styles.image} source={data.image} alt={data.name} />

        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>

          <Text style={styles.description}>{data.description}</Text>

          <Text style={styles.price}>
            <Text style={styles.priceSymbol}>R$</Text>{' '}
            {priceFormatter.format(data.price)}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}
