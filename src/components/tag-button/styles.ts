import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderColor: THEME.COLORS.PURPLE[500],
  },
  label: {
    textTransform: 'uppercase',
    fontSize: THEME.FONT_SIZE.XXS,
    fontFamily: THEME.FONT_FAMILY.BODY_BOLD,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XXS, 'NORMAL'),
  },
})
