import { StyleProp, Text, View, ViewStyle } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

import { CATEGORIES_DATA } from '@/data/coffee-data'

import { styles } from './styles'

import { TagButton } from '@/components/tag-button'

interface CatalogHeaderProps {
  animatedStyle?: StyleProp<ViewStyle>
  categoryIndex: number | null
  onSelectCategory: (categoryIndex: number) => void
}

export function CatalogHeader({
  animatedStyle,
  categoryIndex,
  onSelectCategory,
}: CatalogHeaderProps) {
  const hasAnimatedStyle = !!animatedStyle

  const enteringAnimation = !hasAnimatedStyle
    ? FadeInDown.delay(1000).duration(1000)
    : undefined

  return (
    <Animated.View
      entering={enteringAnimation}
      style={[styles.container, animatedStyle]}
    >
      <Text style={styles.title}>Nossos cafés</Text>

      <View style={styles.categories}>
        {CATEGORIES_DATA.map((category, index) => (
          <TagButton
            key={category}
            title={category}
            isSelected={index === categoryIndex}
            onPress={() => onSelectCategory(index)}
          />
        ))}
      </View>
    </Animated.View>
  )
}
