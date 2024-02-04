import { useState } from 'react'
import { Image, Text, View, ViewProps } from 'react-native'
import { Trash } from 'phosphor-react-native'

import { CoffeeItemDTO } from '@/dtos/coffee-dto'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

import { Counter } from '@/components/counter'
import { ButtonIcon } from '@/components/button-icon'

interface CartItemProps extends ViewProps {
  data: CoffeeItemDTO
}

export function CartItem({ data }: CartItemProps) {
  const [amount, setAmount] = useState(data.amount)

  return (
    <View style={styles.container}>
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
            <Counter currentCount={amount} onUpdate={setAmount} />
          </View>

          <View style={styles.button}>
            <ButtonIcon
              icon={Trash}
              accessibilityLabel="Remover item do carrinho"
            />
          </View>
        </View>
      </View>
    </View>
  )
}
