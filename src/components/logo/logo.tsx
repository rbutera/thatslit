import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Text = styled.div`
  ${tw`font-black tracking-tight select-none`};
  font-size: 3rem;
  line-height: 2.9rem;
`

const Logo = () => {
  return <Text>That's Lit!</Text>
}

export default Logo
