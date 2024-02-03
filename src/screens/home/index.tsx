import { useRef, useState } from 'react'
import { SectionList, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import Animated, {
  Extrapolate,
  FadeInUp,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

import { THEME } from '@/theme/default'

import { styles } from './styles'

import { Hero } from '@/components/hero'
import { Carousel } from '@/components/carousel'
import { MainHeader } from '@/components/main-header'
import { CatalogList } from '@/components/catalog-list'
import { CatalogHeader } from '@/components/catalog-header'

export function HomeScreen() {
  const sectionListRef = useRef<SectionList>(null)
  const [categoryIndex, setCategoryIndex] = useState<number | null>(null)

  const insets = useSafeAreaInsets()

  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    },
  })

  const animatedHeaderBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollY.value,
      [0, 300],
      [THEME.COLORS.GRAY[900], THEME.COLORS.GRAY[100]],
    ),
  }))

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    zIndex: 1,
    width: '100%',
    top: insets.top,
    borderBottomWidth: 1,
    position: 'absolute',
    paddingVertical: interpolate(
      scrollY.value,
      [0, 280],
      [20, 8],
      Extrapolate.CLAMP,
    ),
    backgroundColor: interpolateColor(
      scrollY.value,
      [0, 300],
      [THEME.COLORS.GRAY[900], THEME.COLORS.GRAY[100]],
    ),
    borderBottomColor: interpolateColor(
      scrollY.value,
      [0, 280],
      [THEME.COLORS.TRANSPARENT, THEME.COLORS.GRAY[200]],
    ),
    opacity: interpolate(scrollY.value, [0, 1], [0, 1], Extrapolate.CLAMP),
  }))

  const animatedHeaderTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      scrollY.value,
      [0, 300],
      [THEME.COLORS.GRAY[100], THEME.COLORS.GRAY[800]],
    ),
  }))

  const animatedCatalogHeaderStyle = useAnimatedStyle(() => ({
    zIndex: 1,
    marginTop: 0,
    width: '100%',
    position: 'absolute',
    borderBottomWidth: 1,
    top: insets.top + 61.1,
    opacity: scrollY.value >= 518 ? 1 : 0,
    backgroundColor: THEME.COLORS.GRAY[100],
    pointerEvents: scrollY.value >= 510 ? 'auto' : 'none',
    borderBottomColor: interpolateColor(
      scrollY.value,
      [0, 510],
      [THEME.COLORS.TRANSPARENT, THEME.COLORS.GRAY[200]],
    ),
  }))

  function handleSelectCategory(index: number) {
    if (!sectionListRef.current) return

    setCategoryIndex(index)

    sectionListRef.current.scrollToLocation({
      itemIndex: 0,
      animated: true,
      viewOffset: 144,
      sectionIndex: index,
    })
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={THEME.COLORS.GRAY[900]} />

      <SafeAreaView style={styles.container}>
        <MainHeader
          animatedTextStyle={animatedHeaderTextStyle}
          animatedContainerStyle={animatedHeaderStyle}
        />

        <CatalogHeader
          animatedStyle={animatedCatalogHeaderStyle}
          categoryIndex={categoryIndex}
          onSelectCategory={handleSelectCategory}
        />

        <CatalogList
          ref={sectionListRef}
          headerComponent={
            <View>
              <View style={styles.header}>
                <Animated.View
                  entering={FadeInUp.duration(800)}
                  style={animatedHeaderBackgroundStyle}
                >
                  <MainHeader />
                  <Hero />
                </Animated.View>
              </View>

              <Carousel />

              <CatalogHeader
                categoryIndex={categoryIndex}
                onSelectCategory={handleSelectCategory}
              />
            </View>
          }
          onScroll={scrollHandler}
        />
      </SafeAreaView>
    </>
  )
}
