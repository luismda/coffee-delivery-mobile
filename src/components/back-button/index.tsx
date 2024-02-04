import { ArrowLeft } from 'phosphor-react-native'
import { Pressable, PressableProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { THEME } from '@/theme/default'

const ICON_COLORS = {
  primary: THEME.COLORS.WHITE,
  secondary: THEME.COLORS.GRAY[900],
}

interface BackButtonProps extends PressableProps {
  variant?: keyof typeof ICON_COLORS
}

export function BackButton({ variant = 'primary', ...rest }: BackButtonProps) {
  const navigation = useNavigation()

  return (
    <Pressable
      accessibilityLabel="Voltar"
      onPress={navigation.goBack}
      {...rest}
    >
      <ArrowLeft size={24} color={ICON_COLORS[variant]} />
    </Pressable>
  )
}
