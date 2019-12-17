import React from 'react'
import { action } from '@storybook/addon-actions'
import { Masonry } from './masonry'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export default {
  title: 'Molecules|Masonry',
  decorators: [withKnobs],
}

const Container = styled.div`
  ${tw`relative w-full h-full`}
`
export const normal = () => <Masonry />
