import { Image, View } from 'react-native'
import Animated, { Easing, SlideInLeft } from 'react-native-reanimated'

import SmokeSvg from '@/assets/illustrations/smoke-9.svg'

import { styles } from './styles'

export function Cup() {
  return (
    <Animated.View
      entering={SlideInLeft.delay(800).duration(800).easing(Easing.elastic(1))}
      style={styles.container}
    >
      <View style={styles.smoke}>
        <SmokeSvg width={64} height={136} />
      </View>

      <Image
        style={styles.image}
        source={require('@/assets/coffee-cup.png')}
        alt="Xícara de café"
      />
    </Animated.View>
  )
}
