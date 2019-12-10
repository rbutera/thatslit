import React from 'react';

import { SmallRecommendation } from './small';
import { LargeRecommendation } from './large';

export type RecommendationProps = {
  name: string,
  tagline: string,
  category: string,
  url: string,
  picture: string,
  size?: string,
};

export default function Recommendation(props: RecommendationProps) {
  const { size, ...rest } = props;

  switch (size) {
    case 'large':
      return <LargeRecommendation {...rest} />;
    default:
      return <SmallRecommendation {...rest} />;
  }
}
