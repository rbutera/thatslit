import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { RecommendationProps } from './recommendation';

const Box = styled.article`
  ${tw`w-full h-full bg-cover m-0 p-0 overflow-hidden`}
  
  background-image: url(${props => props.background});
`;

const Category = styled.span`
  ${tw`uppercase tracking-widest text-sm`}
`;

const Caption = styled.figcaption`
  ${tw`p-4 h-full m-0 text-white`};

  background: linear-gradient(
    162deg,
    hsl(0, 0%, 0%) 0%,
    hsla(0, 0%, 0%, 0.988) 7.4%,
    hsla(0, 0%, 0%, 0.954) 13.1%,
    hsla(0, 0%, 0%, 0.902) 17.5%,
    hsla(0, 0%, 0%, 0.835) 20.9%,
    hsla(0, 0%, 0%, 0.755) 23.7%,
    hsla(0, 0%, 0%, 0.668) 26.3%,
    hsla(0, 0%, 0%, 0.575) 29%,
    hsla(0, 0%, 0%, 0.48) 32.2%,
    hsla(0, 0%, 0%, 0.386) 36.3%,
    hsla(0, 0%, 0%, 0.297) 41.6%,
    hsla(0, 0%, 0%, 0.217) 48.6%,
    hsla(0, 0%, 0%, 0.147) 57.5%,
    hsla(0, 0%, 0%, 0.092) 68.8%,
    hsla(0, 0%, 0%, 0.056) 82.9%,
    hsla(0, 0%, 0%, 0.04) 100%
  );
  backdrop-filter: contrast(1.1) brightness(0.9);
`;

const Name = styled.h1`
  ${tw`font-bold tracking-wide uppercase text-3xl m-0 p-0 leading-none`};
`;

const Tagline = styled.p`
  ${tw`m-0 p-0 text-lg`};
`;

const Image = styled.div`
  ${tw`block w-24 h-24 m-0 p-0 bg-cover rounded-md`}
  background-image: url(${props => props.src});
`;

export function LargeRecommendation(props: RecommendationProps) {
  return (
    <Box background={props.picture}>
      <Caption>
        <Category>{props.category}</Category>
        <Name>{props.name}</Name>
        <Tagline>{props.tagline}</Tagline>
      </Caption>
    </Box>
  );
}

export default LargeRecommendation;
