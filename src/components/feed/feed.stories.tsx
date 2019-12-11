import React from 'react'
import { action } from '@storybook/addon-actions'
import Feed from './feed'
import { useAirTable } from '../../utils/useAirtable'
import { text, withKnobs, number } from '@storybook/addon-knobs'

import { storiesOf } from '@storybook/react'

export default {
  title: 'Molecules|Feed',
  decorators: [withKnobs],
}

const BASE_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0'

const RECENT_URL =
  BASE_URL +
  '&maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

const ALL_URL =
  BASE_URL +
  '&maxRecords=9999&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc'

function FeedWithAirtable({ url = ALL_URL, category = 'all', ...rest }) {
  const items = useAirTable(url)
  if (category && category !== 'all') {
    return (
      <Feed
        {...rest}
        items={items.filter(({ fields }) => fields['Subcat'] === category)}
      />
    )
  }
  return <Feed {...rest} items={items} />
}

export const def = () => <FeedWithAirtable />
def.story = {
  name: 'Default (all)',
}

export const recent = () => {
  const chosenCategory = text('Category', 'all')
  const numLarge = number('Number of large (featured) recommendations', 3)
  const count = number('Total number of recommendations to display', 0)
  return (
    <FeedWithAirtable
      numLarge={numLarge}
      count={count}
      category={chosenCategory}
      url={RECENT_URL}
    />
  )
}
export const category = () => {
  const chosenCategory = text('Category', 'Productivity')
  const numLarge = number('Number of large (featured) recommendations', 1)
  const count = number('Total number of recommendations to display', 8)
  return (
    <FeedWithAirtable
      numLarge={numLarge}
      count={count}
      category={chosenCategory}
    />
  )
}

export const smallOnly = () => <FeedWithAirtable numLarge="0" />
export const largeOnly = () => <FeedWithAirtable numLarge="-1" />
export const empty = () => <Feed items={[]} />
