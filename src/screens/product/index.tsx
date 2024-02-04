import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInUp } from 'react-native-reanimated'

import { COFFEE_LIST } from '@/data/coffee-data'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

import { Cup } from '@/components/cup'
import { BackButton } from '@/components/back-button'
import { CartButton } from '@/components/cart-button'
import { FormAddCart } from '@/components/form-add-cart'

type RouteParams = {
  productId: string
}

export function ProductScreen() {
  const route = useRoute()
  const { productId } = route.params as RouteParams

  const [coffee] = COFFEE_LIST.filter((coffee) => coffee.id === productId)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Animated.View entering={FadeInUp.delay(200).duration(600)}>
            <View style={styles.header}>
              <BackButton />
              <CartButton />
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeLabel}>{coffee.category}</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{coffee.name}</Text>

              <Text style={styles.price}>
                <Text style={styles.priceSymbol}>R$</Text>{' '}
                {priceFormatter.format(coffee.price)}
              </Text>
            </View>

            <Text style={styles.description}>{coffee.description}</Text>
          </Animated.View>

          <Cup />
        </View>

        <FormAddCart data={coffee} />
      </ScrollView>
    </SafeAreaView>
  )
}
