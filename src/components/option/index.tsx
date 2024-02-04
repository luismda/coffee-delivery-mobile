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

interface OptionProps extends PressableProps {
  title: string
  isSelected?: boolean
}

export function Option({ title, isSelected = false, ...rest }: OptionProps) {
  const selected = useSharedValue(0)

  const animatedContainerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      selected.value,
      [0, 1],
      [THEME.COLORS.GRAY[300], THEME.COLORS.TRANSPARENT],
    ),
    borderColor: interpolateColor(
      selected.value,
      [0, 1],
      [THEME.COLORS.TRANSPARENT, THEME.COLORS.PURPLE[500]],
    ),
  }))

  const animatedTitleStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      selected.value,
      [0, 1],
      [THEME.COLORS.GRAY[700], THEME.COLORS.PURPLE[500]],
    ),
  }))

  useEffect(() => {
    selected.value = withTiming(isSelected ? 1 : 0)
  }, [isSelected, selected])

  const fontFamily = isSelected
    ? THEME.FONT_FAMILY.BODY_BOLD
    : THEME.FONT_FAMILY.BODY_REGULAR

  return (
    <PressableAnimated
      aria-selected={isSelected}
      style={[styles.container, animatedContainerStyle]}
      {...rest}
    >
      <Animated.Text style={[styles.title, { fontFamily }, animatedTitleStyle]}>
        {title}
      </Animated.Text>
    </PressableAnimated>
  )
}
