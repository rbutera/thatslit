import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import posed from 'react-pose'
import Title from 'components/title'
import Nav from 'components/header/nav'
import Logo from '../logo/logo'
import Subtitle from '../subtitle/subtitle'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`

// Example of a component-specific page transition
const AnimatedContainer = styled.div`` // TODO: replace with actual animated container

const LogoContainer = styled.div`
  ${tw`flex flex-col`};

  a,
  a:hover,
  a:active {
    ${tw`text-black`}
  }
`

const SubtitleWrapper = styled.div`
  ${tw`text-lg text-gray-600 px-2 w-full h-12 overflow-hidden inline-block font-body font-thin`};
`

const LogoAndSubtitle = ({ subtitleOptions }) => (
  <LogoContainer>
    <Link to="/">
      <Logo />
    </Link>
    <SubtitleWrapper>
      <Subtitle options={subtitleOptions} />
    </SubtitleWrapper>
  </LogoContainer>
)

const Header = ({ subtitleOptions }) => (
  <AnimatedContainer>
    <Container>
      <LogoAndSubtitle subtitleOptions={subtitleOptions} />
    </Container>
  </AnimatedContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
