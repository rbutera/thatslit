import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
const Text = styled.h1`
  ${tw`text-white bg-black inline-block py-2 px-4`};
  text-transform: uppercase;
`

const CategoryHeader = ({ children, as = 'h1' }) => {
  return <Text as={as}>{children}</Text>
}

export default CategoryHeader
