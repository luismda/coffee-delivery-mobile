import { useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

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
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  )
}
