import React from 'react';
import { action } from '@storybook/addon-actions';
import Subtitle from '../src/components/subtitle/subtitle';

export default {
  title: 'Subtitle',
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

export const text = () => <Subtitle options={options}>asfasfsfasffsa</Subtitle>;
