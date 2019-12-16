import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Box = styled.div`
  ${tw`flex flex-col bg-white text-black rounded-lg`};
  width: 420px;
  height: 420px;
`
const Image = styled.div`
  ${tw`block bg-cover flex-grow bg-red-400 w-full h-full`};

  background-image: url('https://source.unsplash.com/random/1024x1024');
`

const Label = styled.div`
  ${tw`flex-none flex-col flex p-6 h-32 justify-between`};
`

const LabelBody = styled.div`
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

export const VerticalCard = () => {
  return (
    <Box>
      <Image></Image>
      <Label>
        <LabelBody>
          <Title>Photo Labs for Kids</Title>
          <Text>Festive Family Portraits</Text>
        </LabelBody>
        <Footer>See times and locations</Footer>
      </Label>
    </Box>
  )
}

export default VerticalCard
