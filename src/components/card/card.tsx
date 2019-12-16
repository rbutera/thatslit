import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { getRandomBackgroundColor } from '../../utils/random'

const Box = styled.div`
  ${tw`flex flex-col bg-white text-black rounded-lg overflow-hidden`};
  width: 420px;
  height: 420px;
`
const Image = styled.figure`
  ${tw`bg-cover bg-center flex-grow w-full h-full m-0 p-2 text-center flex flex-col justify-center uppercase select-none text-white font-bold tracking-widest overflow-hidden`};
  ${() => getRandomBackgroundColor()}
  background-image: url(${(props: any) => (props.src ? props.src : '')});
`

const Label = styled.div`
  ${tw`flex-none flex-col flex p-6 h-32 justify-between`};
`

const Content = styled.div`
  ${tw`flex-grow`};
`

const Title = styled.div`
  ${tw`font-bold`};
`

const Text = styled.div`
  ${tw``};
`

const Footer = styled.div`
  ${tw`flex-none text-xs opacity-75`};
`

export type Image = {
  src?: string,
  alt?: string,
  color?: string,
}

export type CardProps = {
  image?: Image,
  footer?: Component,
  children: Component,
  vertical?: boolean,
  horizontal?: boolean,
}

export const Card = (props: CardProps) => {
  const {
    image = {
      alt: 'Unknown',
      src: '',
    },
    children,
    footer,
    vertical = true,
    horizontal = !vertical,
  } = props

  return (
    <Box>
      <Image src={image && image.src ? image.src : ''}>
        {image && image.src ? '' : image.alt}
      </Image>
      <Label>
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </Label>
    </Box>
  )
}

export default Card
