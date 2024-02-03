import { Image, Pressable, PressableProps, Text, View } from 'react-native'

import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { CoffeeDTO } from '@/dtos/coffee-dto'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

interface CatalogCardProps extends PressableProps {
  data: CoffeeDTO
}

export function CatalogCard({ data, ...rest }: CatalogCardProps) {
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

  return (
    <View style={styles.container}>
      <PressableAnimated
        entering={FadeInDown.delay(1000).duration(1000)}
        style={[styles.button, animatedScaleStyle]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...rest}
      >
        <Image style={styles.image} source={data.image} alt={data.name} />

        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>

          <Text style={styles.description}>{data.description}</Text>

          <Text style={styles.price}>
            <Text style={styles.priceSymbol}>R$</Text>{' '}
            {priceFormatter.format(data.price)}
          </Text>
        </View>
      </PressableAnimated>
    </View>
  )
}
