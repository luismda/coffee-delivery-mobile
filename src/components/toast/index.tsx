import { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { ArrowRight, ShoppingCart } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { useAtom } from 'jotai'

import { THEME } from '@/theme/default'
import { lastItemAddedAtom } from '@/state/cart-state'

import { styles } from './styles'

export function Toast() {
  const navigation = useNavigation()

  const [lastItemAdded, setLastItemAdded] = useAtom(lastItemAddedAtom)

  function handleNavigateToCart() {
    if (!lastItemAdded) return

    setLastItemAdded(null)
    navigation.navigate('cart')
  }

  useEffect(() => {
    if (lastItemAdded) {
      setTimeout(() => {
        setLastItemAdded(null)
      }, 4000)
    }
  }, [lastItemAdded, setLastItemAdded])

  if (!lastItemAdded) return

  const coffeeText =
    lastItemAdded.amount === 1 ? '1 café' : `${lastItemAdded.amount} cafés`

  return (
    <Animated.View
      entering={SlideInDown.delay(160).springify().mass(0.3)}
      exiting={SlideOutDown.springify()}
      style={styles.container}
    >
      <View>
        <View style={styles.badge}>
          <Text style={styles.badgeLabel}>1</Text>
        </View>

        <View style={styles.cart}>
          <ShoppingCart size={20} weight="fill" color={THEME.COLORS.WHITE} />
        </View>
      </View>

      <Text style={styles.message}>
        {coffeeText} <Text style={styles.bold}>{lastItemAdded.name}</Text> de{' '}
        <Text style={styles.bold}>{lastItemAdded.size}</Text> adicionado ao{' '}
        carrinho
      </Text>

      <Pressable style={styles.button} onPress={handleNavigateToCart}>
        <Text style={styles.buttonTitle}>Ver</Text>

        <ArrowRight size={16} color={THEME.COLORS.PURPLE[500]} />
      </Pressable>
    </Animated.View>
  )
}
