import { useEffect } from 'react'
import { Pressable, PressableProps } from 'react-native'

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { THEME } from '@/theme/default'

import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

interface TagButtonProps extends PressableProps {
  title: string
  isSelected?: boolean
}

export function TagButton({
  title,
  isSelected = false,
  ...rest
}: TagButtonProps) {
  const scale = useSharedValue(1)
  const selected = useSharedValue(0)

  const animatedScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const animatedContainerColorStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      selected.value,
      [0, 1],
      [THEME.COLORS.TRANSPARENT, THEME.COLORS.PURPLE[500]],
    ),
  }))

  const animatedLabelColorStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      selected.value,
      [0, 1],
      [THEME.COLORS.PURPLE[700], THEME.COLORS.WHITE],
    ),
  }))

  function handlePressIn() {
    scale.value = withTiming(1.05)
  }

  function handlePressOut() {
    scale.value = withTiming(1)
  }

  useEffect(() => {
    selected.value = withTiming(isSelected ? 1 : 0)
  }, [isSelected, selected])

  return (
    <PressableAnimated
      style={[
        styles.container,
        animatedScaleStyle,
        animatedContainerColorStyle,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Animated.Text style={[styles.label, animatedLabelColorStyle]}>
        {title}
      </Animated.Text>
    </PressableAnimated>
  )
}
