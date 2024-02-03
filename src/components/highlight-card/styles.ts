import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
  button: {
    width: 208,
    borderWidth: 1,
    paddingBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderColor: THEME.COLORS.GRAY[300],
    backgroundColor: THEME.COLORS.GRAY[200],
  },
  image: {
    width: 120,
    height: 120,
    marginTop: -32,
  },
  badge: {
    marginTop: 8,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: THEME.COLORS.PURPLE[300],
  },
  badgeLabel: {
    textTransform: 'uppercase',
    color: THEME.COLORS.PURPLE[500],
    fontSize: THEME.FONT_SIZE.XXS,
    fontFamily: THEME.FONT_FAMILY.BODY_BOLD,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XXS, 'NORMAL'),
  },
  name: {
    marginTop: 16,
    textAlign: 'center',
    color: THEME.COLORS.GRAY[800],
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.LG, 'NORMAL'),
  },
  description: {
    marginTop: 4,
    textAlign: 'center',
    color: THEME.COLORS.GRAY[600],
    fontSize: THEME.FONT_SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XS, 'NORMAL'),
  },
  price: {
    marginTop: 16,
    color: THEME.COLORS.YELLOW[700],
    fontSize: THEME.FONT_SIZE.XL,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XL, 'NORMAL'),
  },
  priceSymbol: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
  },
})
