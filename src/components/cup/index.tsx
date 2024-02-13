import { Image } from 'react-native'
import Animated, { Easing, SlideInLeft } from 'react-native-reanimated'

import { styles } from './styles'

import { Smoke } from '@/components/smoke'

export function Cup() {
  return (
    <Animated.View
      entering={SlideInLeft.delay(800).duration(800).easing(Easing.elastic(1))}
      style={styles.container}
    >
      <Smoke />

      <Image
        style={styles.image}
        source={require('@/assets/coffee-cup.png')}
        alt="Xícara de café"
      />
    </Animated.View>
  )
}
