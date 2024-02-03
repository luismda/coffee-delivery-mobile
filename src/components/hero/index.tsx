import { Image, Text, View } from 'react-native'

import { styles } from './styles'

import { SearchInput } from '@/components/search-input'

export function Hero() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>
          Encontre o café perfeito para qualquer hora do dia
        </Text>

        <SearchInput />
      </View>

      <Image
        style={styles.image}
        source={require('@/assets/coffee.png')}
        alt="Grãos de café"
      />
    </View>
  )
}
