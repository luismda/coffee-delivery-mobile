import { useState } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import { THEME } from '@/theme/default'

import { styles } from './styles'

import { Hero } from '@/components/hero'
import { Carousel } from '@/components/carousel'
import { MainHeader } from '@/components/main-header'
import { CatalogList } from '@/components/catalog-list'
import { CatalogHeader } from '@/components/catalog-header'

export function HomeScreen() {
  const [category, setCategory] = useState<string | null>(null)

  return (
    <>
      <StatusBar style="light" backgroundColor={THEME.COLORS.GRAY[900]} />

      <SafeAreaView style={styles.container}>
        <MainHeader />

        <CatalogList
          headerComponent={
            <View>
              <Hero />
              <Carousel />

              <CatalogHeader
                selectedCategory={category}
                onSelectCategory={setCategory}
              />
            </View>
          }
        />
      </SafeAreaView>
    </>
  )
}
