import { Text, View } from 'react-native'
import { Minus, Plus } from 'phosphor-react-native'

import { styles } from './styles'

import { ButtonIcon } from '@/components/button-icon'

interface CounterProps {
  currentCount: number
  onUpdate: (count: number) => void
}

export function Counter({ currentCount, onUpdate }: CounterProps) {
  function handleDecrement() {
    onUpdate(currentCount > 1 ? currentCount - 1 : currentCount)
  }

  function handleIncrement() {
    onUpdate(currentCount + 1)
  }

  return (
    <View style={styles.container}>
      <ButtonIcon
        variant="ghost"
        icon={(props) => <Minus weight="bold" {...props} />}
        accessibilityLabel="Diminuir a quantidade"
        onPress={handleDecrement}
      />

      <Text style={styles.counter}>{currentCount}</Text>

      <ButtonIcon
        variant="ghost"
        icon={(props) => <Plus weight="bold" {...props} />}
        accessibilityLabel="Aumentar a quantidade"
        onPress={handleIncrement}
      />
    </View>
  )
}
