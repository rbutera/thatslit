import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import posed from 'react-pose'
import { Container } from './header.css'
import Title from 'components/title'
import Nav from 'components/header/nav'
import Logo from '../logo/logo'
import Subtitle from '../subtitle/subtitle'
import styled from 'styled-components'
import tw from 'tailwind.macro'

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
})

const LogoContainer = styled.div`
  ${tw`flex flex-col`};
`

const LogoAndSubtitle = ({ subtitleOptions }) => (
  <LogoContainer>
    <Link to="/">
      <Logo />
    </Link>
    <Subtitle options={subtitleOptions}></Subtitle>
  </LogoContainer>
)

const Header = ({ title, subtitleOptions }) => (
  <AnimatedContainer>
    <Container>
      <LogoAndSubtitle subtitleOptions={subtitleOptions} />

      <Nav />
    </Container>
  </AnimatedContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
