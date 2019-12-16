import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { RecommendationProps } from './recommendation'
import { getRandomBackgroundColor } from '../../utils/random'

const Box = styled.article`
  ${tw`inline-block relative w-full h-full bg-cover m-0 overflow-hidden bg-center`}
  ${() => getRandomBackgroundColor()}
  background-image: url(${props => props.background});
`
const Content = styled.div`
  ${tw`flex flex-none items-start justify-center w-full h-full absolute top-0 left-0 m-0 p-0`}
`
const Category = styled.span`
  ${tw`uppercase tracking-widest text-xs font-bold`}
`

const Caption = styled.div`
  ${tw`flex flex-col flex-none relative text-white w-auto pt-4 px-4 pb-4 h-full w-full`};
  max-width: 10rem;
  background: hsla(0, 0%, 0%, 0.1);
  backdrop-filter: contrast(0.9) blur(50px) brightness(0.7);
`

const Name = styled.h2`
  ${tw`flex-none font-bold font-sans text-2xl my-1 p-0 leading-none tracking-tight`};
`

const Tagline = styled.p`
  ${tw`flex-none my-2 mb-0 mx-0 p-0 leading-none text-gray-100`};
`

const Image = styled.div`
  ${tw`block w-24 h-24 m-0 p-0 bg-cover rounded-md`}
  background-image: url(${props => props.src});
`

const Picture = styled.div`
  ${tw`bg-red-400 w-full h-full block m-0 p-0 bg-cover bg-center`}
  background-image: url(${props => props.src});
`

const Spacer = styled.div`
  ${tw`flex-auto`};
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
          <Name>{name}</Name>
          <Tagline>{tagline}</Tagline>
          <Spacer />
          <Category>{category}</Category>
        </Caption>
        <Picture src={picture} />
      </Content>
    </Box>
  )
}

export default LargeRecommendation
