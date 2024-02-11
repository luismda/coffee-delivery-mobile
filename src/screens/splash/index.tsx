import { useState } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import Animated, {
  FadeIn,
  Layout,
  ZoomIn,
  runOnJS,
} from 'react-native-reanimated'

import LogoSvg from '@/assets/logo.svg'
import BrandSvg from '@/assets/brand.svg'

import { styles } from './styles'

export function SplashScreen() {
  const navigation = useNavigation()

  const [isShouldDisplayBrand, setIsShouldDisplayBrand] = useState(false)

  function handleDisplayBrand() {
    setIsShouldDisplayBrand(true)
  }

  async function handleAnimationFinished() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    navigation.navigate('home')
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <View style={styles.container}>
        <Animated.View
          style={styles.background}
          entering={ZoomIn.duration(800)}
        />

        <View style={styles.logo}>
          <Animated.View
            layout={Layout}
            entering={ZoomIn.duration(800).withCallback((finished) => {
              'worklet'

              if (finished) {
                runOnJS(handleDisplayBrand)()
              }
            })}
          >
            <LogoSvg />
          </Animated.View>

          {isShouldDisplayBrand && (
            <Animated.View
              layout={Layout}
              entering={FadeIn.duration(800).withCallback((finished) => {
                'worklet'

                if (finished) {
                  runOnJS(handleAnimationFinished)()
                }
              })}
            >
              <BrandSvg />
            </Animated.View>
          )}
        </View>
      </View>
    </>
  )
}
