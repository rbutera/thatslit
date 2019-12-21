import React from 'react'
import Layout from '../components/layout'
import Feed from '../components/feed/feed'
import { useAirTable } from '../utils/useAirtable'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Masonry } from '../components/masonry/masonry'
import { getRandomBackgroundColor } from '../utils/random'
import { UI_COLORS, getBackgroundColor } from '../utils/colors'
import { Link } from 'gatsby'
import * as slug from 'slug'

const BASE_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0'

const RECENT_URL =
  BASE_URL +
  '&maxRecords=9999&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

const ALL_URL =
  BASE_URL +
  '&maxRecords=9999&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

const Section = styled.section`
  ${tw`w-full flex flex-row justify-center py-4 sm:py-8 md:pt-16 md:pb-24`}
`
const ContainerStyle = styled.div`
  ${tw`w-full sm:px-4 md:px-8 lg:px-16 xl:w-4/5`}
`

const Container = ({ children, ...rest }) => {
  return (
    <ContainerStyle className="container" {...rest}>
      {children}
    </ContainerStyle>
  )
}

const Header = styled.h1`
  ${tw`text-xl sm:text-2xl md:text-4xl font-bold m-0 p-0 mx-4 my-4 md:my-8 tracking-tight md:mx-12`};
`

const More = styled.div`
  ${tw`w-full py-8 px-8 text-center`}
`

const MoreLink = styled(Link)`
  ${tw`text-gray-800 opacity-75`}
`

const RecentlyAdded = () => {
  const items = useAirTable(RECENT_URL)

  return (
    <Section>
      <Container>
        <Header>Recently Added</Header>
        <Feed numLarge="4" count="5" items={items} />
        <More>
          <MoreLink to="/recent">
            browse all our latest recommendations
          </MoreLink>
        </More>
      </Container>
    </Section>
  )
}

const SectionWithBackgroundColor = styled(Section)`
  /* ${tw`text-white`}; */

  ${props => getBackgroundColor(props.color, 'light')};
`

const Subcat = ({
  category = 'all',
  color = 'gray',
  name = category,
  ...rest
}) => {
  const items = useAirTable(ALL_URL)
  const categoryUrl = `/${slug(category)}`
  return (
    <SectionWithBackgroundColor color={color}>
      <Container>
        <Header>
          <Link to={categoryUrl}>{name}</Link>
        </Header>
        <Feed
          {...rest}
          includeCategory={false}
          numLarge="3"
          count="5"
          items={items.filter(({ fields }) => fields['Subcat'] === category)}
        />
        <More>
          <MoreLink to={categoryUrl}>
            more {category.toLowerCase()} recommendations?
          </MoreLink>
        </More>
      </Container>
    </SectionWithBackgroundColor>
  )
}

const Index = ({ data }) => {
  return (
    <Layout>
      <RecentlyAdded />
      <Subcat color="yellow" category="Productivity" />
      <Subcat color="green" category="Web Development" />
    </Layout>
  )
}

export default Index
