import { useRef, useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { MagnifyingGlass } from 'phosphor-react-native'

import { THEME } from '@/theme/default'

import { styles } from './styles'

type SearchInputProps = TextInputProps

export function SearchInput(props: SearchInputProps) {
  const inputRef = useRef<TextInput>(null)
  const [iconColor, setIconColor] = useState<string>(THEME.COLORS.GRAY[600])

  function handleInputFocus() {
    const isFocused = inputRef.current?.isFocused()
    setIconColor(isFocused ? THEME.COLORS.YELLOW[500] : THEME.COLORS.GRAY[600])
  }

  return (
    <View style={styles.container}>
      <MagnifyingGlass size={16} color={iconColor} />

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Pesquisar"
        cursorColor={THEME.COLORS.GRAY[600]}
        placeholderTextColor={THEME.COLORS.GRAY[600]}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        {...props}
      />
    </View>
  )
}
