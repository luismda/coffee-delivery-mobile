import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    bottom: 0,
    elevation: 4,
    width: '100%',
    paddingTop: 28,
    paddingBottom: 32,
    shadowRadius: 2.62,
    shadowOpacity: 0.23,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: 32,
    shadowColor: THEME.COLORS.BLACK,
    backgroundColor: THEME.COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  cart: {
    width: 36,
    height: 36,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.GRAY[500],
  },
  badge: {
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    zIndex: 1,
    borderRadius: 999,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PURPLE[500],
  },
  badgeLabel: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XS, 'NORMAL'),
  },
  message: {
    flex: 1,
    color: THEME.COLORS.GRAY[600],
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.SM, 'NORMAL'),
  },
  bold: {
    fontFamily: THEME.FONT_FAMILY.BODY_BOLD,
  },
  button: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTitle: {
    textTransform: 'uppercase',
    color: THEME.COLORS.PURPLE[500],
    fontSize: THEME.FONT_SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.BODY_BOLD,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XS, 'LARGE'),
  },
})
