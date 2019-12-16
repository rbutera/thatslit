import React from 'react'
import Card from './card'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Atoms|Card',
  decorators: [withKnobs],
}

const image = {
  alt: text('image alt', 'Unsplash'),
  src: text('image url', 'https://source.unsplash.com/random'),
}

const Img = styled.div`
  ${tw`w-full h-full bg-cover bg-center select-none m-0 p-0`}
  background-image: url(${props => props.src});
`

const Title = styled.p`
  ${tw`m-0 p-0 font-bold`};
`

const Description = styled.p`
  ${tw`m-0 p-0`};
`

const Caption = styled.div`
  ${props => (props.small ? tw`h-auto` : tw`h-24`)};
`

const Content = ({ small = false }) => {
  const title = text('Title', 'Photo Lab for Kids')
  const description = text('Description', 'Festive family portraits')

  return (
    <Caption small={small}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Caption>
  )
}

const Ftr = styled.div`
  ${tw`my-2 p-0 opacity-75`}
`

const Footer = () => <Ftr>Footer</Ftr>

export const normal = () => (
  <Card
    size={text('size', '420px')}
    image={<Img {...image} />}
    footer={<Footer />}
  >
    <Content />
  </Card>
)
export const vertical = () => (
  <Card
    size={text('size', '420px')}
    image={<Img {...image} />}
    footer={<Footer />}
    vertical
  >
    <Content />
  </Card>
)
export const horizontal = () => (
  <Card
    size={text('size', '420px')}
    image={<Img {...image} />}
    footer={<Footer />}
    horizontal
  >
    <Content />
  </Card>
)

export const horizontalSmall = () => (
  <Card
    size={text('size', '180px')}
    image={<Img {...image} />}
    footer={<Footer />}
    horizontal
    small
  >
    <Content small />
  </Card>
)
