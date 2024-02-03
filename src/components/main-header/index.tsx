import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { MapPin } from 'phosphor-react-native'
import Animated from 'react-native-reanimated'

import { THEME } from '@/theme/default'

import { styles } from './styles'

import { CartButton } from '@/components/cart-button'

interface MainHeaderProps {
  animatedTextStyle?: StyleProp<TextStyle>
  animatedContainerStyle?: StyleProp<ViewStyle>
}

export function MainHeader({
  animatedTextStyle,
  animatedContainerStyle,
}: MainHeaderProps) {
  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <View style={styles.location}>
        <MapPin weight="fill" size={20} color={THEME.COLORS.PURPLE[500]} />

        <Animated.Text style={[styles.text, animatedTextStyle]}>
          São José, SP
        </Animated.Text>
      </View>

      <CartButton />
    </Animated.View>
  )
}
