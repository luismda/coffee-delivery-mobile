import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CoffeeItemDTO } from '@/dtos/coffee-dto'
import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

import { Button } from '@/components/button'
import { CartItem } from '@/components/cart-item'
import { EmptyCart } from '@/components/empty-cart'
import { ScreenHeader } from '@/components/screen-header'

export function CartScreen() {
  const totalPrice = 0

  const cartItems: CoffeeItemDTO[] = []
  const hasCartItems = false

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScreenHeader title="Carrinho" />

        {hasCartItems ? (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 48 }}
            showsVerticalScrollIndicator={false}
          >
            {cartItems.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </ScrollView>
        ) : (
          <EmptyCart />
        )}
      </View>

      {hasCartItems && (
        <View style={styles.footer}>
          <View style={styles.totalCart}>
            <Text style={styles.total}>Valor total</Text>

            <Text style={styles.price}>
              R$ {priceFormatter.format(totalPrice)}
            </Text>
          </View>

          <Button title="Confirmar pedido" variant="secondary" />
        </View>
      )}
    </SafeAreaView>
  )
}
