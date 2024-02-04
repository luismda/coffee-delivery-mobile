import { useState } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { SlideInDown } from 'react-native-reanimated'
import { useSetAtom } from 'jotai'

import { CoffeeDTO } from '@/dtos/coffee-dto'
import { addItemToCartAtom } from '@/state/cart-state'

import { styles } from './styles'

import { Option } from '@/components/option'
import { Button } from '@/components/button'
import { Counter } from '@/components/counter'

interface FormAddCartProps {
  data: CoffeeDTO
}

export function FormAddCart({ data }: FormAddCartProps) {
  const navigation = useNavigation()

  const addItemToCart = useSetAtom(addItemToCartAtom)

  const [amount, setAmount] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  function handleAddItemToCart() {
    if (!selectedSize) return

    addItemToCart({
      ...data,
      amount,
      size: selectedSize,
    })

    navigation.goBack()
  }

  return (
    <Animated.View
      entering={SlideInDown.duration(800)}
      style={styles.container}
    >
      <Text style={styles.title}>Selecione o tamanho:</Text>

      <View style={styles.options}>
        {data.sizes.map((size) => (
          <Option
            key={size}
            title={size}
            isSelected={size === selectedSize}
            onPress={() => setSelectedSize(size)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Counter currentCount={amount} onUpdate={setAmount} />

        <View style={styles.buttonContainer}>
          <Button title="Adicionar" onPress={handleAddItemToCart} />
        </View>
      </View>
    </Animated.View>
  )
}
