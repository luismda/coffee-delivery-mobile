import { StyleSheet } from 'react-native'

import { THEME } from '@/theme/default'
import { getLineHeight } from '@/utils/get-line-height'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 32,
    paddingHorizontal: 32,
    backgroundColor: THEME.COLORS.GRAY[100],
  },
  title: {
    marginTop: 2,
    color: THEME.COLORS.GRAY[600],
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BODY_REGULAR,
    lineHeight: getLineHeight(THEME.FONT_SIZE.SM, 'NORMAL'),
  },
  options: {
    gap: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    gap: 16,
    padding: 8,
    marginTop: 20,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY[300],
  },
  buttonContainer: {
    flex: 1,
  },
})
