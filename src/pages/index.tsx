import React from 'react'
import Layout from '../components/layout'
import CategoryHeader from '../components/feed/category-header'
import Feed from '../components/feed/feed'
import { useAirTable } from '../utils/useAirtable'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Masonry } from '../components/masonry/masonry'

const BASE_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0'

const RECENT_URL =
  BASE_URL +
  '&maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

const ALL_URL =
  BASE_URL +
  '&maxRecords=9999&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

const Section = styled.section``

const RecentlyAdded = () => {
  const items = useAirTable(RECENT_URL)

  return (
    <Section>
      <CategoryHeader>Recently Added</CategoryHeader>
      <Feed numLarge="-1" items={items} />
    </Section>
  )
}

const Subcat = ({ category = 'all', name = category, ...rest }) => {
  const items = useAirTable(ALL_URL)

  return (
    <Section>
      <CategoryHeader>{name}</CategoryHeader>
      <Feed
        {...rest}
        items={items.filter(({ fields }) => fields['Subcat'] === category)}
      />
    </Section>
  )
}

const Index = ({ data }) => {
  return (
    <Layout>
      <RecentlyAdded />
      <Subcat category="Productivity" />
      <Subcat category="Web Development" />
    </Layout>
  )
}

export default Index
