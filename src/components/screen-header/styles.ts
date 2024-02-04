import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    paddingHorizontal: 32,
    alignItems: 'center',
    borderBottomColor: THEME.COLORS.GRAY[300],
  },
  buttonContainer: {
    top: 16,
    left: 32,
    position: 'absolute',
  },
  title: {
    color: THEME.COLORS.GRAY[800],
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.TITLE,
    lineHeight: getLineHeight(THEME.FONT_SIZE.MD, 'NORMAL'),
  },
})
