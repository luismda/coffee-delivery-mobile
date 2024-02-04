import { useEffect } from 'react'
import { Pressable, Text } from 'react-native'
import { ShoppingCart } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { useAtomValue } from 'jotai'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import { totalCartItemsAtom } from '@/state/cart-state'

import { THEME } from '@/theme/default'

import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

export function CartButton() {
  const navigation = useNavigation()

  const totalItems = useAtomValue(totalCartItemsAtom)

  const scale = useSharedValue(1)
  const badgeScale = useSharedValue(1)

  const animatedScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const animatedBadgeScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: badgeScale.value }],
  }))

  function handleNavigateToCart() {
    navigation.navigate('cart')
  }

  function handlePressIn() {
    scale.value = withTiming(1.1)
  }

  function handlePressOut() {
    scale.value = withTiming(1)
  }

  const hasBadge = totalItems > 0

  const iconColor = hasBadge
    ? THEME.COLORS.PURPLE[500]
    : THEME.COLORS.YELLOW[700]

  useEffect(() => {
    badgeScale.value = withSequence(withSpring(1.05), withTiming(1))
  }, [totalItems, badgeScale])

  return (
    <PressableAnimated
      style={[styles.container, animatedScaleStyle]}
      onPress={handleNavigateToCart}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      {hasBadge && (
        <Animated.View style={[styles.badge, animatedBadgeScaleStyle]}>
          <Text style={styles.totalItems}>{totalItems}</Text>
        </Animated.View>
      )}

      <ShoppingCart weight="fill" size={20} color={iconColor} />
    </PressableAnimated>
  )
}
