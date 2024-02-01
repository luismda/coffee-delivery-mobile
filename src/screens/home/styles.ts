import { StyleSheet } from 'react-native'

import { THEME } from '../../theme/default'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: THEME.FONT_SIZE.XL,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    color: THEME.COLORS.PURPLE[700],
  },
})
