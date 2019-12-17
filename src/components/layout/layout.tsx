import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from 'components/head'
import Header from 'components/header'
import GlobalStyle from '../../global-style'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const Root = styled.div`
  ${tw``}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow-x: hidden;
`

const subtitleOptions = {
  first: [
    'curated collection',
    'sexy smörgåsbord',
    'supreme selection',
    'personal platter',
    'stupendous set',
  ],
  second: [
    'dope developments',
    'superb suggestions',
    'incredible inspiration',
    'terrific tools',
    'incredible innovation',
    'delightful design',
    'electric endeavours',
    'fan favorites',
    'awesome apps',
    "tomorrow's technology",
    'wavy websites',
    'songs that slap',
    'professional passion',
    'motivation and muse',
  ],
}

const Container = styled.div`
  ${tw`flex flex-col m-0 p-2 justify-start`};
`

const Layout = ({ data, children }) => {
  const pRef = useRef()

  return (
    <Root>
      <GlobalStyle />

      <Head />

      <Container>
        <Header subtitleOptions={subtitleOptions} />
        {children}
      </Container>
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithQuery
