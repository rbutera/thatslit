import React from 'react'
import Layout from '../components/layout'
import Feed from '../components/feed/feed'
import { useAirTable } from '../utils/useAirtable'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Masonry } from '../components/masonry/masonry'
import { getRandomBackgroundColor } from '../utils/random'
import { UI_COLORS, getBackgroundColor } from '../utils/colors'

const BASE_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0'

const RECENT_URL =
  BASE_URL +
  '&maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

const ALL_URL =
  BASE_URL +
  '&maxRecords=9999&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

const Section = styled.section`
  ${tw`w-full flex flex-row justify-center py-24`}
`
const Container = styled.div`
  ${tw`w-full sm:w-4/5 lg:w-3/4 xl:w-2/3`}
`

const Header = styled.h1`
  ${tw`text-4xl font-bold m-0 p-0 mx-4 pt-8 pb-4 tracking-tight`};
`

const RecentlyAdded = () => {
  const items = useAirTable(RECENT_URL)

  return (
    <Section>
      <Container>
        <Header>Recently Added</Header>
        <Feed numLarge="-1" items={items} />
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

  return (
    <SectionWithBackgroundColor color={color}>
      <Container>
        <Header>{name}</Header>
        <Feed
          {...rest}
          numLarge="3"
          count="5"
          items={items.filter(({ fields }) => fields['Subcat'] === category)}
        />
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
