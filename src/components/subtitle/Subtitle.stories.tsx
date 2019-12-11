import React from 'react';
import { action } from '@storybook/addon-actions';
import Subtitle from './subtitle';

export default {
  title: 'Atoms|Header/Subtitle',
};

const options = {
  first: [
    'curated collection',
    'sexy smörgåsbord',
    'supreme selection',
    'personal platter',
    'stupendous set',
  ],
  second: [
    'dope developments',
    'superb suggestions',
    'incredible inspiration',
    'terrific tools',
    'incredible innovation',
    'delightful design',
    'electric endeavours',
    'fan favorites',
    'awesome apps',
    "tomorrow's technology",
    'wavy websites',
    'songs that slap',
    'professional passion',
    'motivation and muse',
  ],
};

export const subtitle = () => (
  <Subtitle options={options}>This is the subtitle</Subtitle>
);
