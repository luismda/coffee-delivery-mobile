import { Text, View } from 'react-native'
import { MapPin } from 'phosphor-react-native'

import { THEME } from '@/theme/default'

import { styles } from './styles'

import { CartButton } from '@/components/cart-button'

export function MainHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <MapPin weight="fill" size={20} color={THEME.COLORS.PURPLE[500]} />

        <Text style={styles.text}>São José, SP</Text>
      </View>

      <CartButton />
    </View>
  )
}
