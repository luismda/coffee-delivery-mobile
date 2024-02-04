import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY[900],
  },
  content: {
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    marginTop: 12,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    backgroundColor: THEME.COLORS.GRAY[800],
  },
  badgeLabel: {
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase',
    fontSize: THEME.FONT_SIZE.XXS,
    fontFamily: THEME.FONT_FAMILY.BODY_BOLD,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XXS, 'NORMAL'),
  },
  info: {
    gap: 16,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.XL,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XL, 'NORMAL'),
  },
  price: {
    color: THEME.COLORS.YELLOW[500],
    fontSize: THEME.FONT_SIZE['2XL'],
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE['2XL'], 'NORMAL'),
  },
  priceSymbol: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
  },
  description: {
    marginTop: 20,
    marginBottom: 112,
    color: THEME.COLORS.GRAY[500],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
})
