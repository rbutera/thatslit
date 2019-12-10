import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Text = styled.div`
  ${tw`leading-tight text-4xl`};
`;

const Logo = () => {
  return <Text>That's Lit!</Text>;
};

export default Logo;
