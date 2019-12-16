import React from 'react'

import { SmallRecommendation } from './small'
import { LargeRecommendation } from './large'
import { MediumRecommendation } from './medium'

export type RecommendationProps = {
  name?: string,
  tagline?: string,
  category?: string,
  url?: string,
  picture?: string,
  size?: string,
  includeCategory?: boolean,
}

export default function Recommendation(props: RecommendationProps) {
  const { size, ...rest } = props

  switch (size) {
    case 'large':
      return <LargeRecommendation {...rest} />
    case 'medium':
      return <MediumRecommendation {...rest} />
    default:
      return <SmallRecommendation {...rest} />
  }
}
