import React from 'react'
import { action } from '@storybook/addon-actions'
import { Masonry } from './masonry'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Molecules|Masonry',
  decorators: [withKnobs],
}

export const normal = () => <Masonry />
