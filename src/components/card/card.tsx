import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { getRandomBackgroundColor } from '../../utils/random'

const Box = styled.div`
  ${tw`relative flex bg-white text-black rounded-lg overflow-hidden w-full h-full`};
  ${(props: any) => (props.horizontal ? tw`flex-row` : tw`flex-col`)};
  height: ${(props: any) => (props.height ? props.height : '')}px;
`
const Image = styled.figure`
  background-image: url(${(props: any) => (props.src ? props.src : '')});
  ${() => getRandomBackgroundColor()}
  ${tw`bg-cover bg-center flex-grow w-full h-full m-0 p-2 text-center flex flex-col justify-center uppercase select-none text-white font-bold tracking-widest overflow-hidden`};
  ${(props: any) => (props.horizontal ? tw`opacity-25` : tw`opacity-50`)};
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
  height?: number,
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
    height = 300,
  } = props

  return (
    <Box horizontal={horizontal} height={height}>
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
