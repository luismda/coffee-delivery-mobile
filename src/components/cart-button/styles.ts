import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  badge: {
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: 24,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PURPLE[500],
  },
  totalItems: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.XS,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XS, 'NORMAL'),
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
  },
})
