import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Recommendation from '../recommendation/recommendation'
import { take } from 'rambda'
import { Responsive } from '../media/responsive'
import { Grid } from 'mauerwerk'

function normalizeFields(fields) {
  const { Name, Tagline, Picture, Subcat, Color, ...rest } = fields

  const result = {
    name: Name,
    tagline: Tagline,
    category: Subcat,
    picture:
      Picture && Picture[0] ? Picture[0]['thumbnails']['large']['url'] : '',
    color: Color,
    ...rest,
  }

  return result
}

const FeedStyle = styled.ul`
  ${tw`m-0 p-0 flex flex-col`};
`

const MobileOnlyCell = styled.li`
  ${tw`block p-4`};
  height: 30rem;
`

type FeedProperties = {
  items: any[],
  numLarge: number,
  count: number,
  includeCategory?: boolean,
}

type ItemProperties = {
  size: 'small' | 'large',
}

const Cell = styled.div`
  ${tw`w-full h-full p-0`};
`

const Padding = styled.div`
  ${tw`w-full h-full p-4 xl:p-8`};
`

const DesktopFeed = ({
  baseHeight,
  data,
  numLarge,
  columns,
  includeCategory,
}) => {
  const withSizes = data.map((record, index) => {
    const size =
      numLarge >= 0
        ? index < numLarge
          ? 'large'
          : 'small'
        : numLarge < 0
        ? 'large'
        : 'small'

    const height =
      size === 'small' ? 200 : index > 0 ? baseHeight : baseHeight * 1.337
    return { recommendation: normalizeFields(record.fields), size, height }
  })

  return (
    <Grid
      // className="grid"
      // Arbitrary data, should contain keys, possibly heights, etc.
      data={withSizes}
      // Key accessor, instructs grid on how to fet individual keys from the data set
      keys={d => d.recommendation.name}
      // Can be a fixed value or an individual data accessor
      heights={d => d.height}
      // Number of columns
      columns={columns}
    >
      {(data, maximized, toggle) => (
        <Cell>
          <Padding>
            <Recommendation
              {...data.recommendation}
              variant={data.size}
              size={data.height}
              horizontal={maximized && data.size === 'small'}
              includeCategory={includeCategory}
            />
          </Padding>
        </Cell>
      )}
    </Grid>
  )
}

/**
 * Feed component - renders a list of recommendations
 * @params category the
 * @param items an array of the recommendation data
 * @param numLarge if 0 then all small, else this is the number of large recommendations to render (the rest are rendered as medium/small). if -1 then all large
 * @param count if 0 then show all, otherwise limit the number of recommendations to render by this amount
 * @param includeCategory if true then include categories
 */
const Feed = (props: FeedProperties) => {
  const { items = [], numLarge = 0, count = 0, includeCategory = true } = props
  const filtered = count ? take(count, items) : items

  const calculateBaseHeight = matches => {
    if (matches.md) {
      return 400
    }
    if (matches.lg) {
      return 400
    }
    if (matches.xl) {
      return 450
    }
  }

  return (
    <Responsive>
      {matches => (
        <>
          {(matches.xs || matches.sm) &&
            filtered.map(record => {
              return (
                <MobileOnlyCell>
                  <Recommendation
                    variant="large"
                    {...normalizeFields(record.fields)}
                    includeCategory={includeCategory}
                  />
                </MobileOnlyCell>
              )
            })}
          {(matches.md || matches.lg || matches.xl) && (
            <DesktopFeed
              baseHeight={calculateBaseHeight(matches)}
              numLarge={numLarge}
              data={filtered}
              columns={2}
              includeCategory={includeCategory}
            />
          )}
        </>
      )}
    </Responsive>
  )
}

export default Feed
