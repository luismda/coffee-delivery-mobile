import { Text, View } from 'react-native'

import { CATEGORIES_DATA } from '@/data/coffee-data'

import { styles } from './styles'

import { TagButton } from '@/components/tag-button'

interface CatalogHeaderProps {
  selectedCategory: string | null
  onSelectCategory: (category: string) => void
}

export function CatalogHeader({
  selectedCategory,
  onSelectCategory,
}: CatalogHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos cafés</Text>

      <View style={styles.categories}>
        {CATEGORIES_DATA.map((category) => (
          <TagButton
            key={category}
            title={category}
            isSelected={category === selectedCategory}
            onPress={() => onSelectCategory(category)}
          />
        ))}
      </View>
    </View>
  )
}
