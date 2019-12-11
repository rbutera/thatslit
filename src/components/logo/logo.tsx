import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Text = styled.div`
  ${tw`leading-tight tracking-wide uppercase`};
  font-weight: 900;
  font-size: 6rem;
`

const Logo = () => {
  return <Text>That's Lit!</Text>
}

export default Logo
