import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '@/screens/home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  )
}
