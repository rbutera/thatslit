import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Recommendation from '../recommendation/recommendation'
import { take } from 'rambda'

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

const FeedStyle = styled.ul`
  ${tw`m-0 p-0 flex flex-col`};
`

const Item = styled.li`
  ${tw`my-1 p-0 block overflow-hidden`};
  height: ${(props: any) => (props.size === 'large' ? '240px' : 'auto')};
`

type FeedProperties = {
  items: any[],
  numLarge: number,
  count: number,
}

type ItemProperties = {
  size: 'small' | 'large',
}

/**
 * Feed component - renders a list of recommendations
 * @params category the
 * @param items an array of the recommendation data
 * @param numLarge if 0 then all large, else this is the number of large recommendations to render (the rest are rendered as medium/small)
 * @param count if 0 then show all, otherwise limit the number of recommendations to render by this amount
 */
const Feed = (props: FeedProperties) => {
  const { items = [], numLarge = 0, count = 0 } = props
  const filtered = count ? take(count, items) : items

  return (
    <FeedStyle>
      {filtered && filtered.length
        ? filtered.map((record, index) => {
            const size = numLarge
              ? index < numLarge
                ? 'large'
                : 'small'
              : 'large'
            return (
              <Item size={size}>
                <Recommendation
                  size={size}
                  {...normalizeFields(record.fields)}
                />
              </Item>
            )
          })
        : 'No items to show'}
    </FeedStyle>
  )
}

export default Feed
