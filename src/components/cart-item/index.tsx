import { useRef, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Trash } from 'phosphor-react-native'
import { Swipeable } from 'react-native-gesture-handler'

import Animated, {
  FadeOut,
  Layout,
  SlideOutRight,
} from 'react-native-reanimated'

import { THEME } from '@/theme/default'
import { CoffeeItemDTO } from '@/dtos/coffee-dto'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

import { Counter } from '@/components/counter'
import { ButtonIcon } from '@/components/button-icon'

interface CartItemProps {
  data: CoffeeItemDTO
  onRemove: (data: CoffeeItemDTO) => void
  onUpdateAmount: (data: CoffeeItemDTO) => void
}

export function CartItem({ data, onRemove, onUpdateAmount }: CartItemProps) {
  const swipeableRef = useRef<Swipeable>(null)
  const [amount, setAmount] = useState(data.amount)

  function handleRemove() {
    swipeableRef.current?.close()
    onRemove(data)
  }

  function handleUpdateAmount(amount: number) {
    setAmount(amount)
    onUpdateAmount({ ...data, amount })
  }

  return (
    <Animated.View
      exiting={FadeOut.delay(200)}
      layout={Layout.springify().delay(400)}
    >
      <Swipeable
        ref={swipeableRef}
        leftThreshold={10}
        containerStyle={styles.swipeableContainer}
        renderRightActions={() => null}
        renderLeftActions={() => (
          <Animated.View exiting={FadeOut} style={styles.swipeableBackground}>
            <Trash size={28} color={THEME.COLORS.RED[700]} />
          </Animated.View>
        )}
        onSwipeableOpen={handleRemove}
      >
        <Animated.View exiting={SlideOutRight} style={styles.container}>
          <Image style={styles.image} source={data.image} alt={data.name} />

          <View style={styles.content}>
            <View style={styles.info}>
              <Text style={styles.name}>{data.name}</Text>

              <Text style={styles.price}>
                R$ {priceFormatter.format(data.price)}
              </Text>
            </View>

            <Text style={styles.size}>{data.size}</Text>

            <View style={styles.actions}>
              <View style={styles.counter}>
                <Counter currentCount={amount} onUpdate={handleUpdateAmount} />
              </View>

              <View style={styles.button}>
                <ButtonIcon
                  icon={Trash}
                  accessibilityLabel="Remover item do carrinho"
                  onPress={() => onRemove(data)}
                />
              </View>
            </View>
          </View>
        </Animated.View>
      </Swipeable>
    </Animated.View>
  )
}
