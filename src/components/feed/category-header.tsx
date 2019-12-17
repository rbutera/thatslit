import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
const Text = styled.h1`
  ${tw`inline-block font-sans tracking-tight`};
`

const CategoryHeader = ({ children, as = 'h1' }) => {
  return <Text as={as}>{children}</Text>
}

export default CategoryHeader
