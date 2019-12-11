import React from 'react';
import { action } from '@storybook/addon-actions';
import Logo from './logo';
import { useAirtable } from '../../utils/useAirtable';

const SOURCE_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0&maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc';

export default {
  title: 'Atoms|Header/Logo',
};

export const normal = () => <Logo />;
