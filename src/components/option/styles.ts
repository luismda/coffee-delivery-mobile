import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: THEME.FONT_SIZE.SM,
    lineHeight: getLineHeight(THEME.FONT_SIZE.SM, 'NORMAL'),
  },
})
