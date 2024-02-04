import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: THEME.COLORS.GRAY[300],
  },
  image: {
    width: 64,
    height: 64,
  },
  content: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    color: THEME.COLORS.GRAY[900],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
  price: {
    color: THEME.COLORS.GRAY[900],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
  size: {
    marginTop: 2,
    color: THEME.COLORS.GRAY[600],
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.SM, 'NORMAL'),
  },
  actions: {
    gap: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counter: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.GRAY[400],
  },
  button: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.GRAY[300],
  },
})
