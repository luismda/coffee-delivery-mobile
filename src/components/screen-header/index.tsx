import { Text, View } from 'react-native'

import { styles } from './styles'

import { BackButton } from '@/components/back-button'

interface ScreenHeaderProps {
  title: string
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BackButton variant="secondary" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
