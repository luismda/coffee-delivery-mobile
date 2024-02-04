import { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Trash } from 'phosphor-react-native'
import Animated, { Layout, SlideOutRight } from 'react-native-reanimated'

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
  const [amount, setAmount] = useState(data.amount)

  function handleUpdateAmount(amount: number) {
    setAmount(amount)
    onUpdateAmount({ ...data, amount })
  }

  return (
    <Animated.View
      exiting={SlideOutRight}
      layout={Layout.springify().delay(200)}
      style={styles.container}
    >
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
  )
}
