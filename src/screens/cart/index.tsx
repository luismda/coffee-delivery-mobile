import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAtomValue, useSetAtom } from 'jotai'
import Animated, { SlideOutDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import {
  cartItemsAtom,
  totalCartPriceAtom,
  updateItemAmountAtom,
  removeItemFromCartAtom,
} from '@/state/cart-state'

import { priceFormatter } from '@/utils/price-formatter'

import { styles } from './styles'

import { Button } from '@/components/button'
import { CartItem } from '@/components/cart-item'
import { EmptyCart } from '@/components/empty-cart'
import { ScreenHeader } from '@/components/screen-header'

export function CartScreen() {
  const navigation = useNavigation()

  const cartItems = useAtomValue(cartItemsAtom)
  const totalPrice = useAtomValue(totalCartPriceAtom)

  const updateItemAmount = useSetAtom(updateItemAmountAtom)
  const removeItemFromCart = useSetAtom(removeItemFromCartAtom)

  function handleFinishOrder() {
    navigation.navigate('confirmed')
  }

  const hasCartItems = cartItems.length > 0

  return (
    <>
      <StatusBar backgroundColor="transparent" />

      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <ScreenHeader title="Carrinho" />

          {hasCartItems ? (
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 48 }}
              showsVerticalScrollIndicator={false}
            >
              {cartItems.map((item) => (
                <CartItem
                  key={item.id.concat(item.size)}
                  data={item}
                  onRemove={removeItemFromCart}
                  onUpdateAmount={updateItemAmount}
                />
              ))}
            </ScrollView>
          ) : (
            <EmptyCart />
          )}
        </View>

        {hasCartItems && (
          <Animated.View exiting={SlideOutDown} style={styles.footer}>
            <View style={styles.totalCart}>
              <Text style={styles.total}>Valor total</Text>

              <Text style={styles.price}>
                R$ {priceFormatter.format(totalPrice)}
              </Text>
            </View>

            <Button
              title="Confirmar pedido"
              variant="secondary"
              onPress={handleFinishOrder}
            />
          </Animated.View>
        )}
      </SafeAreaView>
    </>
  )
}
