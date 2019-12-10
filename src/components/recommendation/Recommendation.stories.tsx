import React from 'react';
import { action } from '@storybook/addon-actions';
import Recommendation from './recommendation';
import styled from 'styled-components';

export default {
  title: 'Recommendation',
};

const LargeWrapper = styled.div`
  height: 375px;
  width: 375px;
  background: tomato;
`;

const data = {
  name: 'Lorem ipsum dolor sit amet',
  tagline:
    'A free and open source framework based on React that helps developers build blazing fast websites and apps',
  picture: 'https://source.unsplash.com/random/1024x1024',
  category: 'Example',
  url: 'https://google.com',
};

export const small = () => <Recommendation {...data} size="small" />;
export const large = () => (
  <LargeWrapper>
    <Recommendation {...data} size="large" />
  </LargeWrapper>
);
