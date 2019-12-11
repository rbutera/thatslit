import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { RecommendationProps } from './recommendation'
import { getRandomBackgroundColor } from '../../utils/random'

const Box = styled.article`
  ${tw`relative w-full h-full bg-cover m-0 overflow-hidden bg-center rounded`}
  min-height: 240px;
  ${() => getRandomBackgroundColor()}
  background-image: url(${props => props.background});
`
const Content = styled.div`
  ${tw`flex flex-col items-end justify-end w-full h-full absolute top-0 left-0`}
  backdrop-filter: saturation(2) contrast(0.9) brightness(0.8);
`
const Category = styled.span`
  ${tw`uppercase tracking-widest text-xs font-bold text-gray-500`}
`

const Caption = styled.div`
  ${tw`inline-block relative m-2 p-4 text-white w-auto overflow-hidden rounded-lg`};
  max-width: 200px;
  max-height: 66%;
  background: hsla(0, 0%, 0%, 0.7);
`

const Name = styled.h2`
  ${tw`font-bold font-sans text-3xl my-1 p-0 leading-none tracking-wide`};
`

// TODO: check if this works
const Tagline = styled.p`
  ${tw`my-2 mb-0 mx-0 p-0 text-lg leading-none text-gray-300`};
`

const Image = styled.div`
  ${tw`block w-24 h-24 m-0 p-0 bg-cover rounded-md`}
  background-image: url(${props => props.src});
`

export function LargeRecommendation(props: RecommendationProps) {
  const {
    picture,
    category = 'Uncategorized',
    name = 'Untitled',
    tagline = 'Not much is known about this.',
  } = props

  return (
    <Box background={picture}>
      <Content>
        <Caption>
          <Category>{category}</Category>
          <Name>{name}</Name>
          <Tagline>{tagline}</Tagline>
        </Caption>
      </Content>
    </Box>
  )
}

export default LargeRecommendation
