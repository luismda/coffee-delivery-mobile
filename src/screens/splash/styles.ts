import { StyleSheet, Dimensions } from 'react-native'

import { THEME } from '@/theme/default'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PURPLE[700],
  },
  background: {
    position: 'absolute',
    width: height * 2,
    height: height * 2,
    borderRadius: 999,
    backgroundColor: THEME.COLORS.PURPLE[500],
  },
  logo: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
