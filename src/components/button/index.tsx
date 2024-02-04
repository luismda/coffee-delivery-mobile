import { Pressable, PressableProps, Text } from 'react-native'

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { THEME } from '@/theme/default'

import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

const BACKGROUND_VARIANTS = {
  primary: THEME.COLORS.PURPLE[700],
  secondary: THEME.COLORS.YELLOW[700],
}

const PRESSED_BACKGROUND_VARIANTS = {
  primary: THEME.COLORS.PURPLE[500],
  secondary: THEME.COLORS.YELLOW[500],
}

interface ButtonProps extends PressableProps {
  title: string
  variant?: keyof typeof BACKGROUND_VARIANTS
}

export function Button({ title, variant = 'primary', ...rest }: ButtonProps) {
  const pressed = useSharedValue(0)

  const backgroundColor = BACKGROUND_VARIANTS[variant]
  const pressedBackgroundColor = PRESSED_BACKGROUND_VARIANTS[variant]

  const animatedPressedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      pressed.value,
      [0, 1],
      [backgroundColor, pressedBackgroundColor],
    ),
  }))

  function handlePressIn() {
    pressed.value = withTiming(1)
  }

  function handlePressOut() {
    pressed.value = withTiming(0)
  }

  return (
    <PressableAnimated
      style={[styles.container, animatedPressedStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </PressableAnimated>
  )
}
