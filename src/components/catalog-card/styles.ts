import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    marginBottom: 16,
    paddingHorizontal: 32,
  },
  button: {
    gap: 12,
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 16,
    flexDirection: 'row',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderColor: THEME.COLORS.GRAY[300],
    backgroundColor: THEME.COLORS.GRAY[200],
  },
  image: {
    width: 96,
    height: 96,
    marginTop: -16,
  },
  info: {
    flex: 1,
    paddingVertical: 16,
  },
  name: {
    color: THEME.COLORS.GRAY[800],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
  description: {
    color: THEME.COLORS.GRAY[600],
    fontSize: THEME.FONT_SIZE.XS,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XS, 'NORMAL'),
  },
  price: {
    marginTop: 8,
    color: THEME.COLORS.YELLOW[700],
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.LG, 'NORMAL'),
  },
  priceSymbol: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
  },
})
