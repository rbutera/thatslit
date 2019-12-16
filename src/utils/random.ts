import tw from 'tailwind.macro'
import { UI_COLORS } from './colors'

export function selectRandomFromArray(input: any[]) {
  if (!input) {
    throw new Error('empty/missing array')
  }

  if (input.length < 2) {
    return input[0]
  }

  return input[Math.floor(Math.random() * input.length)]
}

export function getRandomBackgroundColor() {
  return selectRandomFromArray(UI_COLORS)
}
