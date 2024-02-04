import { Text, View } from 'react-native'
import { ShoppingCart } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeIn, Layout } from 'react-native-reanimated'

import { THEME } from '@/theme/default'

import { styles } from './styles'

import { Button } from '@/components/button'

export function EmptyCart() {
  const navigation = useNavigation()

  function handleNavigateToHome() {
    navigation.navigate('home')
  }

  return (
    <Animated.View
      entering={FadeIn.delay(300)}
      layout={Layout}
      style={styles.container}
    >
      <ShoppingCart size={24} color={THEME.COLORS.GRAY[600]} />

      <Text style={styles.message}>Seu carrinho está vazio</Text>

      <View style={styles.button}>
        <Button title="Ver catálogo" onPress={handleNavigateToHome} />
      </View>
    </Animated.View>
  )
}
