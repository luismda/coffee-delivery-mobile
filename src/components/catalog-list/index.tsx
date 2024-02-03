import { ReactElement } from 'react'
import { SectionList, Text } from 'react-native'

import { COFFEE_DATA } from '@/data/coffee-data'

import { styles } from './styles'

import { CatalogCard } from '@/components/catalog-card'

interface CatalogListProps {
  headerComponent: ReactElement
}

export function CatalogList({
  headerComponent: HeaderComponent,
}: CatalogListProps) {
  return (
    <SectionList
      sections={COFFEE_DATA}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={HeaderComponent}
      renderItem={({ item }) => <CatalogCard data={item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
    />
  )
}
