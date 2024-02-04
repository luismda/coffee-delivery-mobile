import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    color: THEME.COLORS.GRAY[900],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
})
