import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  title: {
    color: THEME.COLORS.GRAY[700],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
  categories: {
    gap: 8,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
