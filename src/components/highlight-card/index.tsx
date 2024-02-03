import { Image, Pressable, PressableProps, Text, View } from 'react-native'

import { CoffeeDTO } from '@/dtos/coffee-dto'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

interface HighlightCardProps extends PressableProps {
  isFirst: boolean
  isLast: boolean
  data: CoffeeDTO
}

export function HighlightCard({
  isFirst,
  isLast,
  data,
  ...rest
}: HighlightCardProps) {
  const containerAlign = isFirst ? 'flex-start' : 'flex-end'

  return (
    <View
      style={[
        styles.container,
        {
          alignItems: !isFirst && !isLast ? 'center' : containerAlign,
          paddingLeft: isFirst ? 32 : 0,
          paddingRight: isLast ? 32 : 0,
        },
      ]}
    >
      <Pressable style={styles.button} {...rest}>
        <Image style={styles.image} source={data.image} alt={data.name} />

        <View style={styles.badge}>
          <Text style={styles.badgeLabel}>{data.category}</Text>
        </View>

        <Text style={styles.name}>{data.name}</Text>

        <Text style={styles.description} numberOfLines={2}>
          {data.description}
        </Text>

        <Text style={styles.price}>
          <Text style={styles.priceSymbol}>R$</Text>{' '}
          {priceFormatter.format(data.price)}
        </Text>
      </Pressable>
    </View>
  )
}
