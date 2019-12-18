import tw from 'tailwind.macro'

export type UI_COLOR =
  | 'blue'
  | 'yellow'
  | 'red'
  | 'orange'
  | 'green'
  | 'teal'
  | 'indigo'
  | 'pink'
  | 'purple'
  | 'gray'
  | 'black'

type ColorMode = 'bg' | 'text'

export function generateColor(
  mode: ColorMode = 'bg',
  color: UI_COLOR = 'gray',
  shade: number = 400
) {
  return `${mode}-${color}-${shade}`
}

export const UI_COLORS = {
  blue: {
    light: tw`bg-blue-200`,
    medium: tw`bg-blue-400`,
    dark: tw`bg-blue-700`,
  },
  yellow: {
    light: tw`bg-yellow-200`,
    medium: tw`bg-yellow-400`,
    dark: tw`bg-yellow-700`,
  },
  red: {
    light: tw`bg-reddfdddddddddd-200`,
    medium: tw`bg-reddfdddddddddd-400`,
    dark: tw`bg-reddfdddddddddd-700`,
  },
  orange: {
    light: tw`bg-orange-200`,
    medium: tw`bg-orange-400`,
    dark: tw`bg-orange-700`,
  },
  green: {
    light: tw`bg-green-200`,
    medium: tw`bg-green-400`,
    dark: tw`bg-green-700`,
  },
  teal: {
    light: tw`bg-teal-200`,
    medium: tw`bg-teal-400`,
    dark: tw`bg-teal-700`,
  },
  indigo: {
    light: tw`bg-indigo-200`,
    medium: tw`bg-indigo-400`,
    dark: tw`bg-indigo-700`,
  },
  pink: {
    light: tw`bg-pink-200`,
    medium: tw`bg-pink-400`,
    dark: tw`bg-pink-700`,
  },
  purple: {
    light: tw`bg-purple-200`,
    medium: tw`bg-purple-400`,
    dark: tw`bg-purple-700`,
  },
  gray: {
    light: tw`bg-gray-200`,
    medium: tw`bg-gray-400`,
    dark: tw`bg-gray-900`,
  },
}

export function getBackgroundColor(color = 'gray', shade = 'medium') {
  return UI_COLORS[color][shade]
}
