import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { RecommendationProps } from './recommendation';

const Box = styled.article`
  ${tw`flex`}
`;

const Caption = styled.figcaption`
  ${tw`flex flex-col content-start p-4`};
`;

const Name = styled.span`
  ${tw`font-bold uppercase text-lg m-0 p-0`};
`;

const Tagline = styled.p`
  ${tw`m-0 p-0`};
`;

const Image = styled.div`
  ${tw`block w-24 h-24 m-0 p-0 bg-cover rounded-sm`}
  background-image: url(${props => props.src});
`;

export function SmallRecommendation(props: RecommendationProps) {
  return (
    <Box>
      <Image src={props.picture} />
      <Caption>
        <Name>{props.name}</Name>
        <Tagline>{props.tagline}</Tagline>
      </Caption>
    </Box>
  );
}

export default SmallRecommendation;
