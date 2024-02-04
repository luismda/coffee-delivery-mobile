import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_BOLD,
    lineHeight: getLineHeight(THEME.FONT_SIZE.SM, 'LARGE'),
  },
})
