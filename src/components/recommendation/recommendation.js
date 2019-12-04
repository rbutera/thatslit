import React from 'react';

import { SmallRecommendation } from './small';
import { LargeRecommendation } from './large';

export default function Recommendation({ size, ...rest }) {
  switch (size) {
    case 'large':
      return <LargeRecommendation {...rest} />;
    default:
      return <SmallRecommendation {...rest} />;
  }
}
