import React from 'react'
import Card from './card'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export default {
  title: 'Atoms|Card',
}

const image = {
  alt: 'Unsplash',
  src: 'https://source.unsplash.com/random/1024x1024',
}

const Title = styled.p`
  ${tw`m-0 p-0 font-bold`};
`

const Description = styled.p`
  ${tw`m-0 p-0`};
`

const Content = () => (
  <>
    <Title>Photo Lab for Kids</Title>
    <Description>Festive Family Portraits</Description>
  </>
)

const Footer = () => <>Footer</>

export const normal = () => (
  <Card image={image} footer={<Footer />}>
    <Content />
  </Card>
)
export const vertical = () => (
  <Card image={image} footer={<Footer />} vertical>
    <Content />
  </Card>
)
export const horizontal = () => (
  <Card image={image} footer={<Footer />} horizontal>
    <Content />
  </Card>
)
