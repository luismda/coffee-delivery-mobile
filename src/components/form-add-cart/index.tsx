import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Haptics from 'expo-haptics'
import { Audio } from 'expo-av'
import { useSetAtom } from 'jotai'

import Animated, {
  SlideInDown,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import { THEME } from '@/theme/default'
import { CoffeeDTO } from '@/dtos/coffee-dto'
import { addItemToCartAtom } from '@/state/cart-state'

import cartSound from '@/assets/sounds/added-to-cart.mp3'

import { styles } from './styles'

import { Option } from '@/components/option'
import { Button } from '@/components/button'
import { Counter } from '@/components/counter'

enum InvalidAnimation {
  Valid = 0,
  Invalid = 1,
}

interface FormAddCartProps {
  data: CoffeeDTO
}

export function FormAddCart({ data }: FormAddCartProps) {
  const navigation = useNavigation()

  const addItemToCart = useSetAtom(addItemToCartAtom)

  const [amount, setAmount] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const buttonOpacity = useSharedValue(0.5)
  const invalid = useSharedValue(InvalidAnimation.Valid)

  const animatedInvalidTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      invalid.value,
      [InvalidAnimation.Valid, InvalidAnimation.Invalid],
      [THEME.COLORS.GRAY[600], THEME.COLORS.RED[700]],
    ),
  }))

  const animatedInvalidOptionStyle = useAnimatedStyle(() => ({
    flex: 1,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: interpolateColor(
      invalid.value,
      [InvalidAnimation.Valid, InvalidAnimation.Invalid],
      [THEME.COLORS.TRANSPARENT, THEME.COLORS.RED[500]],
    ),
  }))

  const animatedButtonOpacityStyle = useAnimatedStyle(() => ({
    opacity: buttonOpacity.value,
  }))

  function handleSelectSize(size: string) {
    setSelectedSize(size)
    buttonOpacity.value = withTiming(1)
  }

  function runInvalidAnimations() {
    invalid.value = withSequence(
      withTiming(InvalidAnimation.Invalid, { duration: 600 }),
      withDelay(800, withTiming(InvalidAnimation.Valid, { duration: 600 })),
    )
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(cartSound, {
      shouldPlay: true,
    })

    await sound.setPositionAsync(0)
    await sound.playAsync()
  }

  async function handleAddItemToCart() {
    if (!selectedSize) {
      runInvalidAnimations()
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)

      return
    }

    addItemToCart({
      ...data,
      amount,
      size: selectedSize,
    })

    await playSound()

    navigation.goBack()
  }

  return (
    <Animated.View
      entering={SlideInDown.duration(800)}
      style={styles.container}
    >
      <Animated.Text style={[styles.title, animatedInvalidTextStyle]}>
        Selecione o tamanho:
      </Animated.Text>

      <View style={styles.options}>
        {data.sizes.map((size) => (
          <Animated.View key={size} style={animatedInvalidOptionStyle}>
            <Option
              title={size}
              isSelected={size === selectedSize}
              onPress={() => handleSelectSize(size)}
            />
          </Animated.View>
        ))}
      </View>

      <View style={styles.footer}>
        <Counter currentCount={amount} onUpdate={setAmount} />

        <Animated.View
          style={[styles.buttonContainer, animatedButtonOpacityStyle]}
        >
          <Button title="Adicionar" onPress={handleAddItemToCart} />
        </Animated.View>
      </View>
    </Animated.View>
  )
}
