import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: THEME.COLORS.GRAY[100],
  },
  content: {
    flex: 1,
  },
  footer: {
    gap: 20,
    elevation: 8,
    paddingTop: 28,
    paddingBottom: 40,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    paddingHorizontal: 32,
    shadowColor: THEME.COLORS.BLACK,
    backgroundColor: THEME.COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  totalCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    color: THEME.COLORS.GRAY[800],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
  price: {
    color: THEME.COLORS.GRAY[800],
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.LG, 'NORMAL'),
  },
})
