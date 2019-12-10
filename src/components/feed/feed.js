import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
const Text = styled.div`
  ${tw`tracking-wide text-white bg-black inline-block py-2 px-4`};
  text-transform: uppercase;
`;

const SOURCE_URL =
  'https://api.airtable.com/v0/appzWIcmWWhnfUEtf/Prototype?api_key=keyD9WDUfMMgSQkg0&maxRecords=3&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc';

const Feed = ({ children, as = 'h1' }) => {
  return <Text as={as}>{children}</Text>;
};

export default Feed;
