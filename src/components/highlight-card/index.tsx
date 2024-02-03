import { Image, Pressable, PressableProps, Text, View } from 'react-native'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { CoffeeDTO } from '@/dtos/coffee-dto'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

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
  const scale = useSharedValue(1)

  const animatedScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  function handlePressIn() {
    scale.value = withTiming(0.95)
  }

  function handlePressOut() {
    scale.value = withTiming(1)
  }

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
      <PressableAnimated
        style={[styles.button, animatedScaleStyle]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...rest}
      >
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
      </PressableAnimated>
    </View>
  )
}
