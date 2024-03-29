import { useCallback, useEffect } from 'react'
import { Text, BackHandler } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useSetAtom } from 'jotai'
import { Audio } from 'expo-av'

import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  Layout,
  SlideInLeft,
} from 'react-native-reanimated'

import { clearCartAtom } from '@/state/cart-state'

import DeliverySvg from '@/assets/illustrations/delivery.svg'
import confirmedSound from '@/assets/sounds/confirmed-order.mp3'

import { styles } from './styles'

import { Button } from '@/components/button'

export function ConfirmedScreen() {
  const navigation = useNavigation()

  const clearCart = useSetAtom(clearCartAtom)

  const playSound = useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(confirmedSound, {
      shouldPlay: true,
    })

    await sound.setPositionAsync(0)
    await sound.playAsync()
  }, [])

  const handleGoBackToHome = useCallback(() => {
    clearCart()
    navigation.navigate('home')
  }, [clearCart, navigation])

  useEffect(() => {
    playSound()
  }, [playSound])

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        handleGoBackToHome()
        return true
      },
    )

    return backHandler.remove
  }, [handleGoBackToHome])

  return (
    <>
      <StatusBar backgroundColor="transparent" />

      <SafeAreaView style={styles.container}>
        <Animated.View layout={Layout}>
          <Animated.View
            style={styles.imageContainer}
            entering={SlideInLeft.easing(Easing.elastic(1))
              .delay(200)
              .duration(800)}
          >
            <DeliverySvg />
          </Animated.View>
        </Animated.View>

        <Animated.View
          layout={Layout}
          entering={FadeInDown.delay(200).duration(800)}
          style={styles.content}
        >
          <Text style={styles.title}>Uhu! Pedido confirmado</Text>

          <Text style={styles.message}>
            Agora é só aguardar que logo o café chegará até você!
          </Text>
        </Animated.View>

        <Animated.View
          layout={Layout}
          entering={FadeIn.delay(1000)}
          style={styles.buttonContainer}
        >
          <Button title="Ir para home" onPress={handleGoBackToHome} />
        </Animated.View>
      </SafeAreaView>
    </>
  )
}
