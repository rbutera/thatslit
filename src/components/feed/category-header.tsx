import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
const Text = styled.h1`
  ${tw`inline-block py-2 px-0 m-0 font-sans tracking-normal`};
`

const CategoryHeader = ({ children, as = 'h1' }) => {
  return <Text as={as}>{children}</Text>
}

export default CategoryHeader
