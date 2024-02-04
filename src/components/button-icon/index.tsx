import { ElementType } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { IconProps } from 'phosphor-react-native'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { THEME } from '@/theme/default'

import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

const BACKGROUND_VARIANTS = {
  primary: THEME.COLORS.GRAY[300],
  ghost: THEME.COLORS.TRANSPARENT,
}

interface ButtonIconProps extends PressableProps {
  icon: ElementType<IconProps>
  variant?: keyof typeof BACKGROUND_VARIANTS
}

export function ButtonIcon({
  icon: Icon,
  variant = 'primary',
  ...rest
}: ButtonIconProps) {
  const scale = useSharedValue(1)

  const animatedScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  function handlePressIn() {
    scale.value = withTiming(1.05)
  }

  function handlePressOut() {
    scale.value = withTiming(1)
  }

  const backgroundColor = BACKGROUND_VARIANTS[variant]

  return (
    <PressableAnimated
      style={[styles.container, { backgroundColor }, animatedScaleStyle]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Icon size={20} color={THEME.COLORS.PURPLE[500]} />
    </PressableAnimated>
  )
}
