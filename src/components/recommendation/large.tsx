import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { RecommendationProps } from './recommendation'
import { getRandomBackgroundColor } from '../../utils/random'

const Box = styled.article`
  ${tw`inline-block relative w-full h-full bg-cover m-0 overflow-hidden bg-center`}
  min-height: 240px;
  ${() => getRandomBackgroundColor()}
  background-image: url(${props => props.background});
`
const Content = styled.div`
  ${tw`flex flex-none items-start justify-center w-full h-full absolute top-0 left-0`}
`
const Category = styled.span`
  ${tw`uppercase tracking-widest text-xs font-bold`}
`

const Caption = styled.div`
  ${tw`inline-block flex-none relative py-4 px-4 text-white w-auto overflow-hidden h-full`};
  max-width: 150px;
  min-width: 150px;
  background: hsla(0, 0%, 0%, 0.1);
  backdrop-filter: contrast(0.9) blur(50px) brightness(0.7);
`

const Name = styled.h2`
  ${tw`font-bold font-sans text-xl my-1 p-0 leading-none tracking-tight`};
`

const Tagline = styled.p`
  ${tw`my-2 mb-0 mx-0 p-0 leading-none text-gray-100`};
`

const Image = styled.div`
  ${tw`block w-24 h-24 m-0 p-0 bg-cover rounded-md`}
  background-image: url(${props => props.src});
`

const Foobar = styled.div`
  ${tw`bg-red-400 w-full h-full block m-0 p-0 bg-cover bg-center`}
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
        <Foobar src={picture} />
      </Content>
    </Box>
  )
}

export default LargeRecommendation
