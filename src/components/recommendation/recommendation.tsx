import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { getRandomBackgroundColor } from '../../utils/random'
import { Card } from '../card/card'
import { Link } from 'gatsby'
import * as slug from 'slug'

const Label = styled.caption`
  ${tw`m-0 p-0 flex flex-col text-left`}
`

const Name = styled.h2`
  ${tw`font-bold m-0 p-0 text-base cursor-pointer`};
`

const Tagline = styled.p`
  ${tw`m-0 p-0 text-base cursor-pointer`};
`

const Image = styled.figure`
  ${tw`
    cursor-pointer w-full h-full bg-cover bg-center m-0 p-0 text-4xl flex justify-center items-center text-center text-white text-bold
  `}
  background-image: url(${props => props.src});
`

const Category = styled.span`
  ${tw`cursor-pointer block mt-8 uppercase tracking-wide text-gray-600`}
  ${(props: any) => (props.variant === 'small' ? tw`text-xs` : tw`text-sm`)};
`

export type RecommendationProps = {
  name?: string,
  tagline?: string,
  category?: string,
  url?: string,
  picture?: string,
  variant?: 'small' | 'medium' | 'large',
  includeCategory?: boolean,
  size?: number,
}

export function Recommendation(props: RecommendationProps) {
  const {
    picture,
    name = 'Untitled',
    category = 'Random',
    tagline = 'Not much is known about this.',
    includeCategory = true,
    variant = 'small',
    size,
  } = props

  const sizeValue = size ? `${size}px` : variant === 'small' ? '7rem' : '100%'

  return (
    <Card
      size={sizeValue}
      horizontal={variant === 'small'}
      small={variant === 'small'}
      footer={
        includeCategory && (
          <Category variant={variant}>
            <Link to={`/${slug(category)}`}>{category}</Link>
          </Category>
        )
      }
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
