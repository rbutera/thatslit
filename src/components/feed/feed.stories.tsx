import React from 'react';
import { action } from '@storybook/addon-actions';
import Feed from './feed';
import { useAirTable } from '../../utils/useAirtable';

export default {
  title: 'Feed',
};

function FeedWithAirtable({ url }) {
  const items = useAirTable(url);
  return <Feed items={items} />;
}

const RECENT_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0&maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc';

const ALL_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0&maxRecords=9999&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc';

export const recent = () => <FeedWithAirtable url={RECENT_URL} />;
export const all = () => <FeedWithAirtable url={ALL_URL} />;
export const empty = () => <Feed items={[]} />;
