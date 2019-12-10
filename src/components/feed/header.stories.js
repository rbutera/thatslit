import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './header';

export default {
  title: 'Header',
};

export const normal = () => <Header as="h1">Latest Recommendations</Header>;
