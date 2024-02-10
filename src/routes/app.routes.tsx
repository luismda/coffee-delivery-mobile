import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '@/screens/home'
import { CartScreen } from '@/screens/cart'
import { ProductScreen } from '@/screens/product'
import { ConfirmedScreen } from '@/screens/confirmed'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Screen name="home" component={HomeScreen} />
      <Screen name="cart" component={CartScreen} />
      <Screen name="product" component={ProductScreen} />

      <Screen
        name="confirmed"
        component={ConfirmedScreen}
        options={{ gestureEnabled: false }}
      />
    </Navigator>
  )
}
