import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
const Text = styled.div`
  ${tw`tracking-wide text-white bg-black inline-block py-2 px-4`};
  text-transform: uppercase;
`;

const Header = ({ children, as = 'h1' }) => {
  return <Text as={as}>{children}</Text>;
};

export default Header;
