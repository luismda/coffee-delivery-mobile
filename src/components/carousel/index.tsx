import { Dimensions } from 'react-native'
import ReanimatedCarousel from 'react-native-reanimated-carousel'
import Animated, { ZoomInRight } from 'react-native-reanimated'

import { HIGHLIGHT_COFFEE_DATA } from '@/data/coffee-data'

import { styles } from './styles'

import { HighlightCard } from '@/components/highlight-card'

const SCREEN_WIDTH = Dimensions.get('window').width

export function Carousel() {
  return (
    <Animated.View
      entering={ZoomInRight.delay(1400).duration(1400)}
      style={styles.container}
    >
      <ReanimatedCarousel
        loop={false}
        width={SCREEN_WIDTH}
        height={292}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 232,
          parallaxScrollingScale: 1,
          parallaxAdjacentItemScale: 0.8,
        }}
        data={HIGHLIGHT_COFFEE_DATA}
        renderItem={({ item, index }) => (
          <HighlightCard
            data={item}
            isFirst={index === 0}
            isLast={index === HIGHLIGHT_COFFEE_DATA.length - 1}
          />
        )}
      />
    </Animated.View>
  )
}
