import { useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Routes } from './src/routes'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Baloo2_700Bold,
    Roboto_700Bold,
    Roboto_400Regular,
  })

  const hideSplashScreen = useCallback(async () => {
    if (hasLoadedFonts) {
      await SplashScreen.hideAsync()
    }
  }, [hasLoadedFonts])

  useEffect(() => {
    hideSplashScreen()
  }, [hideSplashScreen])

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Routes />
    </GestureHandlerRootView>
  )
}
