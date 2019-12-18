import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { getRandomBackgroundColor } from '../../utils/random'
import { generateColor } from '../../utils/colors'
import { Card } from '../card/card'
import { Link } from 'gatsby'
import slug from '../../utils/slug'

const Label = styled.caption`
  ${tw`m-0 p-0 flex flex-col text-left`}
`

const Name = styled.h2`
  ${tw`font-bold m-0 p-0 text-base cursor-pointer`};
`

const Tagline = styled.p`
  ${tw`m-0 p-0 text-base`};
`

const Image = styled(Link)`
  ${tw`
    cursor-pointer w-full h-full bg-cover bg-center m-0 p-0 text-4xl flex justify-center items-center text-center text-white text-bold
  `}
  background-image: url(${props => props.src});
  ${() => generateColor()};
`

const Category = styled.span`
  ${tw`cursor-pointer block mt-8 uppercase tracking-wide text-gray-600`}
  ${(props: any) => (props.variant === 'small' ? tw`text-xs` : tw`text-sm`)};
`

const LinkToDetail = ({ category = 'random', name = '404', children }) => {
  return <Link to={`/${slug(category)}/${slug(name)}`}>{children}</Link>
}

export type RecommendationProps = {
  name?: string,
  tagline?: string,
  category?: string,
  url?: string,
  picture?: string,
  variant?: 'small' | 'medium' | 'large',
  includeCategory?: boolean,
  size?: number,
  id: string,
  color: UI_COLOR,
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
    color = 'gray',
    id = '404',
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
        <Image
          className={generateColor('bg', color, 400)}
          to={`/${slug(category)}/${slug(name)}`}
          src={picture}
        >
          {picture && picture.length ? '' : name.charAt(0)}
        </Image>
      }
    >
      <Label>
        <LinkToDetail category={category} name={name}>
          <Name>{name}</Name>
        </LinkToDetail>
        <Tagline>{tagline}</Tagline>
      </Label>
    </Card>
  )
}

export default Recommendation
