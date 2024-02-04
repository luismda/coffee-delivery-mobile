import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
} from 'react-native'

import { ElementRef, ReactElement, forwardRef } from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

import { CoffeeDTO } from '@/dtos/coffee-dto'
import { COFFEE_DATA } from '@/data/coffee-data'

import { styles } from './styles'

import { CatalogCard } from '@/components/catalog-card'

const SectionListAnimated = Animated.createAnimatedComponent(
  SectionList<CoffeeDTO>,
)

interface CatalogListProps {
  headerComponent: ReactElement
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}

export const CatalogList = forwardRef<
  ElementRef<typeof SectionList<CoffeeDTO>>,
  CatalogListProps
>(({ headerComponent: HeaderComponent, onScroll }, ref) => {
  const navigation = useNavigation()

  function handleNavigateToProduct(productId: string) {
    navigation.navigate('product', { productId })
  }

  return (
    <SectionListAnimated
      ref={ref}
      sections={COFFEE_DATA}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={HeaderComponent}
      renderItem={({ item }) => (
        <CatalogCard
          data={item}
          onPress={() => handleNavigateToProduct(item.id)}
        />
      )}
      renderSectionHeader={({ section }) => (
        <Animated.Text
          entering={FadeInDown.delay(1000).duration(1000)}
          style={styles.sectionTitle}
        >
          {section.title}
        </Animated.Text>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
      scrollEventThrottle={16}
      onScroll={onScroll}
    />
  )
})

CatalogList.displayName = 'CatalogList'
