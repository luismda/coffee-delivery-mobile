import { useState } from 'react'
import { Text, View } from 'react-native'

import { CoffeeDTO } from '@/dtos/coffee-dto'

import { styles } from './styles'

import { Option } from '@/components/option'
import { Button } from '@/components/button'
import { Counter } from '@/components/counter'

interface FormAddCartProps {
  data: CoffeeDTO
}

export function FormAddCart({ data }: FormAddCartProps) {
  const [amount, setAmount] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <View style={styles.container}>
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
          <Button title="Adicionar" />
        </View>
      </View>
    </View>
  )
}
