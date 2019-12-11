import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { RecommendationProps } from './recommendation'

const Box = styled.article`
  ${tw`flex items-center`}
`

const Caption = styled.figcaption`
  ${tw`flex flex-col content-start p-4`};
`

const Name = styled.h2`
  ${tw`font-bold uppercase text-xl m-0 p-0 tracking-widest font-condensed`};
`

const Tagline = styled.p`
  ${tw`m-0 p-0`};
`

const Image = styled.figure`
  ${tw`inline-block w-24 h-24 bg-cover bg-center overflow-hidden rounded-full m-0 p-0 flex-none`}
  background-image: url(${props => props.src});
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
      <Image src={picture} />

      <Caption>
        {includeCategory ? <Category>{category}</Category> : ''}
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
      </Caption>
    </Box>
  )
}

export default SmallRecommendation
