import { Image, View } from 'react-native'

import SmokeSvg from '@/assets/illustrations/smoke-9.svg'

import { styles } from './styles'

export function Cup() {
  return (
    <View style={styles.container}>
      <View style={styles.smoke}>
        <SmokeSvg width={64} height={136} />
      </View>

      <Image
        style={styles.image}
        source={require('@/assets/coffee-cup.png')}
        alt="Xícara de café"
      />
    </View>
  )
}
