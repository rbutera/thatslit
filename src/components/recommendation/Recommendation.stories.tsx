import React from 'react'
import { action } from '@storybook/addon-actions'
import Recommendation from './recommendation'
import styled from 'styled-components'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Atoms|Recommendation',
  decorators: [withKnobs],
}

const LargeWrapper = styled.div`
  height: 50vh;
  width: 50vw;
`

export const small = () => {
  const data = {
    name: text('Name', 'Lorem ipsum dolor sit amet'),
    tagline: text(
      'Tagline',
      'A free and open source framework based on React that helps developers build blazing fast websites and apps'
    ),
    picture: text('picture', 'https://source.unsplash.com/random/1024x1024'),
    category: text('Category', 'Example'),
    url: text('url', 'https://google.com'),
    includeCategory: boolean('Include Category?', true),
  }

  return <Recommendation {...data} variant="small" />
}
export const large = () => {
  const data = {
    name: text('Name', 'Lorem ipsum dolor sit amet'),
    tagline: text(
      'Tagline',
      'A free and open source framework based on React that helps developers build blazing fast websites and apps'
    ),
    picture: text('picture', 'https://source.unsplash.com/random/1024x1024'),
    category: text('Category', 'Example'),
    url: text('url', 'https://google.com'),
    includeCategory: boolean('Include Category?', true),
  }

  return (
    <LargeWrapper>
      <Recommendation {...data} variant="large" />
    </LargeWrapper>
  )
}
