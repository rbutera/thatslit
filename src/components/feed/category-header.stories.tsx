import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import CategoryHeader from './category-header';

export default {
  title: 'Atoms|Feed/CategoryHeader',
  decorators: [withKnobs],
};

export const normal = () => {
  const label = text('Heading Label', 'Uncategorised');

  return <CategoryHeader>{label}</CategoryHeader>;
};
