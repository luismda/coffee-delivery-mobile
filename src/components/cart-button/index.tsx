import { Pressable, Text, View } from 'react-native'
import { ShoppingCart } from 'phosphor-react-native'

import { THEME } from '@/theme/default'

import { styles } from './styles'

export function CartButton() {
  const hasBadge = true

  const iconColor = hasBadge
    ? THEME.COLORS.PURPLE[500]
    : THEME.COLORS.YELLOW[700]

  return (
    <Pressable style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.totalItems}>3</Text>
      </View>

      <ShoppingCart weight="fill" size={20} color={iconColor} />
    </Pressable>
  )
}
