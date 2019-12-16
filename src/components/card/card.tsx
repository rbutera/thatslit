import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { getRandomBackgroundColor } from '../../utils/random'

const Box = styled.div`
  ${tw`relative flex bg-white text-black rounded-lg overflow-hidden w-full h-full`};
  ${(props: any) => (props.horizontal ? tw`flex-row` : tw`flex-col`)};
`
const Body = styled.figure`
  ${() => getRandomBackgroundColor()}
  ${tw`relative m-0 p-0 text-center flex flex-col justify-center uppercase select-none text-white font-bold tracking-widest overflow-hidden`};
  width: ${props => (props.horizontal ? props.size : '100%')};
  height: ${props => (props.horizontal ? 'auto' : props.size)};
  ${props =>
    props.horizontal && props.small ? tw`flex-initial` : tw`flex-auto`};
`

const Label = styled.div`
  ${tw`flex-grow flex-col flex p-6 justify-between`};
  width: ${props => (props.horizontal ? '1fr' : 'auto')};
`

const Content = styled.div`
  ${tw`flex-grow`};
`

const Footer = styled.div`
  ${tw`flex-none text-xs`};
`

export type Image = {
  src?: string,
  alt?: string,
}

export type CardProps = {
  image?: Component,
  footer?: Component,
  children: Component,
  vertical?: boolean,
  horizontal?: boolean,
  size?: string,
  small?: boolean,
}

export const Card = (props: CardProps) => {
  const { children, footer, image, ...rest } = props
  const {
    vertical = true,
    horizontal = !vertical,
    size = '300px',
    small = false,
  } = rest

  return (
    <Box {...rest}>
      <Body {...rest}>{image}</Body>
      <Label {...rest}>
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </Label>
    </Box>
  )
}

export default Card
