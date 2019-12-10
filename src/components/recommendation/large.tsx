import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { RecommendationProps } from './recommendation';

const Box = styled.article`
  ${tw`relative w-full h-full bg-cover m-0 overflow-hidden bg-center`}
  min-height: 240px;
  background-image: url(${props => props.background});
`;
const Content = styled.div`
  ${tw`flex flex-col items-end justify-end w-full h-full absolute top-0 left-0`}
  backdrop-filter: saturation(2) contrast(0.9) brightness(0.8);
`;
const Category = styled.span`
  ${tw`uppercase tracking-widest text-sm`}
`;

const Caption = styled.div`
  ${tw`inline-block relative m-1 p-3 text-white w-auto overflow-hidden rounded-sm`};
  max-width: 50%;
  max-height: 66%;
  background: hsla(0, 0%, 10%, 0.2);
  backdrop-filter: blur(100px) brightness(0.4);
`;

const Name = styled.h1`
  ${tw`font-bold tracking-wide uppercase text-2xl m-0 p-0 leading-none`};
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
      <Content>
        <Caption>
          <Category>{props.category}</Category>
          <Name>{props.name}</Name>
          <Tagline>{props.tagline}</Tagline>
        </Caption>
      </Content>
    </Box>
  );
}

export default LargeRecommendation;
