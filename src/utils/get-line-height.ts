import { THEME } from '@/theme/default'

type LineHeightVariant = keyof typeof THEME.LINE_HEIGHT

export function getLineHeight(
  fontSize: number,
  lineHeightVariant: LineHeightVariant,
) {
  const lineHeightMultiplier = THEME.LINE_HEIGHT[lineHeightVariant]
  const lineHeight = fontSize * lineHeightMultiplier

  return lineHeight
}
