import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 56,
    backgroundColor: THEME.COLORS.GRAY[900],
  },
  hero: {
    paddingTop: 20,
    paddingHorizontal: 32,
  },
  title: {
    marginBottom: 16,
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.LG, 'NORMAL'),
  },
  image: {
    marginRight: 4,
    alignSelf: 'flex-end',
  },
})
