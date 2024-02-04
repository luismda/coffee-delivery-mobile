import { Text, View } from 'react-native'
import { ShoppingCart } from 'phosphor-react-native'

import { THEME } from '@/theme/default'

import { styles } from './styles'

export function EmptyCart() {
  return (
    <View style={styles.container}>
      <ShoppingCart size={32} color={THEME.COLORS.GRAY[600]} />

      <Text style={styles.message}>
        Você ainda não adicionou nenhum café ao seu carrinho.
      </Text>
    </View>
  )
}
