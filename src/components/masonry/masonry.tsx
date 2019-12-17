import * as React from 'react'
import { Grid } from 'mauerwerk'
import data from './data'

import Recommendation from '../recommendation/recommendation'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Card } from '../card/card'

function normalizeFields(fields) {
  const { Name, Tagline, Picture, Subcat } = fields

  const result = {
    name: Name,
    tagline: Tagline,
    category: Subcat,
    picture:
      Picture && Picture[0] ? Picture[0]['thumbnails']['large']['url'] : '',
  }

  return result
}

const Cell = styled.div`
  ${tw`w-full h-full`};
`

const Minimized = styled.div`
  ${tw`w-full h-full`};
`

export const Masonry = ({}) => {
  const RECS = [
    { key: 'a', title: 'foo', height: '120px', size: 'large' },
    { key: 'b', title: 'bar', height: '120px', size: 'small' },
    { key: 'c', title: 'om', height: '120px', size: 'large' },
    { key: 'd', title: 'kar', height: '120px', size: 'small' },
  ]
  return (
    <Grid
      className="grid"
      // Arbitrary data, should contain keys, possibly heights, etc.
      data={data}
      // Key accessor, instructs grid on how to fet individual keys from the data set
      keys={d => d.name}
      // Can be a fixed value or an individual data accessor
      heights={d => d.height}
      // Number of columns
      columns={3}
    >
      {(data, maximized, toggle) => (
        <Cell style={{ backgroundImage: data.css }} onClick={toggle}>
          <Recommendation
            name={data.name}
            tagline={data.description}
            category={data.name}
            picture="https://source.unsplash.com/random/1024x1024"
            variant="large"
          ></Recommendation>
        </Cell>
      )}
    </Grid>
  )
}
