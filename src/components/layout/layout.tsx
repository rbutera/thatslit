import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from 'components/head'
import Header from 'components/header'
import GlobalStyle from '../../global-style'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Root = styled.div`
  ${tw``}
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

const Layout = ({ data, children }) => (
  <Root>
    <GlobalStyle />

    <Head />

    <Header
      title={data.site.siteMetadata.siteTitle}
      subtitleOptions={subtitleOptions}
    />
    {children}
  </Root>
)

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
