import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { RecommendationProps } from './recommendation'
import { getRandomBackgroundColor } from '../../utils/random'

const Box = styled.article`
  ${tw`flex items-center p-0`}
`

const Caption = styled.figcaption`
  ${tw`flex flex-col content-start mx-2 p-0`};
`

const Name = styled.h2`
  ${tw`font-bold font-sans text-2xl m-0 p-0 tracking-normal font-sans`};
`

const Tagline = styled.p`
  ${tw`m-0 p-0`};
`

const Image = styled.figure`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    text-center
    w-24
    h-24
    bg-cover
    bg-center
    overflow-hidden
    m-0
    p-0
    flex-none
    text-5xl 
    font-condensed
    uppercase
    font-bold 
    select-none
    text-white 
  `}
  background-image: url(${props => props.src});
  ${() => getRandomBackgroundColor()}
`

const Category = styled.span`
  ${tw`uppercase tracking-widest text-xs font-bold text-gray-600`}
`

export function SmallRecommendation(props: RecommendationProps) {
  const {
    picture,
    name = 'Untitled',
    category = 'Uncategorised',
    tagline = 'Not much is known about this.',
    includeCategory = false,
  } = props

  return (
    <Box>
      <Image src={picture}>{picture ? '' : name.charAt(0)}</Image>

      <Caption>
        {includeCategory ? <Category>{category}</Category> : ''}
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
      </Caption>
    </Box>
  )
}

export default SmallRecommendation
