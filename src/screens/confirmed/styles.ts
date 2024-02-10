import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.GRAY[100],
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  content: {
    gap: 8,
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 48,
  },
  title: {
    textAlign: 'center',
    color: THEME.COLORS.YELLOW[700],
    fontSize: THEME.FONT_SIZE.XL,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.XL, 'NORMAL'),
  },
  message: {
    textAlign: 'center',
    paddingHorizontal: 16,
    color: THEME.COLORS.GRAY[800],
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.SM, 'NORMAL'),
  },
  buttonContainer: {
    width: '100%',
    marginTop: 64,
    paddingHorizontal: 64,
  },
})
