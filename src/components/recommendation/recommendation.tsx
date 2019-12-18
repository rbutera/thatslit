import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { getRandomBackgroundColor } from '../../utils/random'
import { Card } from '../card/card'

const Label = styled.caption`
  ${tw`m-0 p-0 flex flex-col text-left`}
`

const Name = styled.h2`
  ${tw`font-bold m-0 p-0 text-base`};
`

const Tagline = styled.p`
  ${tw`m-0 mb-8 p-0 text-base`};
`

const Image = styled.figure`
  ${tw`
    w-full h-full bg-cover bg-center m-0 p-0 text-4xl flex justify-center items-center text-center text-white text-bold
  `}
  background-image: url(${props => props.src});
  ${() => getRandomBackgroundColor()}
`

const Category = styled.span`
  ${tw` uppercase tracking-wide text-sm text-gray-600`}
`

export type RecommendationProps = {
  name?: string,
  tagline?: string,
  category?: string,
  url?: string,
  picture?: string,
  variant?: 'small' | 'medium' | 'large',
  includeCategory?: boolean,
}

export function Recommendation(props: RecommendationProps) {
  const {
    picture,
    name = 'Untitled',
    category = 'Uncategorised',
    tagline = 'Not much is known about this.',
    includeCategory = true,
    variant = 'small',
  } = props

  const sizeValue = variant === 'small' ? '7rem' : '100%'

  return (
    <Card
      size={sizeValue}
      horizontal={variant === 'small'}
      small={variant === 'small'}
      footer={<Category>{includeCategory ? category : ''}</Category>}
      image={
        <Image src={picture}>
          {picture && picture.length ? '' : name.charAt(0)}
        </Image>
      }
    >
      <Label>
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
      </Label>
    </Card>
  )
}

export default Recommendation
