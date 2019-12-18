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

export const UI_COLORS = {
  blue: { light: tw`bg-blue-200`, medium: tw`bg-blue-400` },
  yellow: { light: tw`bg-yellow-200`, medium: tw`bg-yellow-400` },
  red: { light: tw`bg-red-200`, medium: tw`bg-red-400` },
  orange: { light: tw`bg-orange-200`, medium: tw`bg-orange-400` },
  green: { light: tw`bg-green-200`, medium: tw`bg-green-400` },
  teal: { light: tw`bg-teal-200`, medium: tw`bg-teal-400` },
  indigo: { light: tw`bg-indigo-200`, medium: tw`bg-indigo-400` },
  pink: { light: tw`bg-pink-200`, medium: tw`bg-pink-400` },
  purple: { light: tw`bg-purple-200`, medium: tw`bg-purple-400` },
  gray: { light: tw`bg-gray-200`, medium: tw`bg-gray-400` },
  black: { light: tw`bg-gray-600`, medium: tw`bg-gray-900` },
}

export function getBackgroundColor(color = 'gray', shade = 'medium') {
  return UI_COLORS[color][shade]
}
