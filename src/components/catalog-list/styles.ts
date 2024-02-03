import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 32,
    marginBottom: 16,
    paddingHorizontal: 32,
    color: THEME.COLORS.GRAY[600],
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.SM, 'NORMAL'),
  },
  containerStyle: {
    zIndex: 0,
    paddingBottom: 120,
  },
})
