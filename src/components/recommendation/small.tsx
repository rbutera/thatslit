import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { RecommendationProps } from './recommendation'
import { getRandomBackgroundColor } from '../../utils/random'
import { Card } from '../card/card'

const Name = styled.h2`
  ${tw`font-bold m-0 p-0 text-base`};
`

const Tagline = styled.p`
  ${tw`m-0 mb-4 p-0 text-base`};
`

const Image = styled.figure`
  ${tw`
    w-full h-full bg-cover bg-center m-0 p-0
  `}
  background-image: url(${props => props.src});
  ${() => getRandomBackgroundColor()}
`

const Category = styled.span`
  ${tw`mt-4 uppercase tracking-wide text-sm text-gray-600`}
`

// export function SmallRecommendation(props: RecommendationProps) {
//   const {
//     picture,
//     name = 'Untitled',
//     category = 'Uncategorised',
//     tagline = 'Not much is known about this.',
//     includeCategory = false,
//   } = props

//   return (
//     <Box>
//       <Image src={picture}>{picture ? '' : name.charAt(0)}</Image>

//       <Caption>
//         {includeCategory ? <Category>{category}</Category> : ''}
//         <Name>{name}</Name>
//         <Tagline>{tagline}</Tagline>
//       </Caption>
//     </Box>
//   )
// }
export function SmallRecommendation(props: RecommendationProps) {
  const {
    picture,
    name = 'Untitled',
    category = 'Uncategorised',
    tagline = 'Not much is known about this.',
    includeCategory = false,
  } = props

  return (
    <Card
      size="25%"
      horizontal
      small
      footer={<Category>{category}</Category>}
      image={<Image src={picture}>{picture ? '' : name.charAt(0)}</Image>}
    >
      <Name>{name}</Name>
      <Tagline>{tagline}</Tagline>
    </Card>
  )
}

export default SmallRecommendation
