import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Recommendation from '../recommendation/recommendation';

function normalizeFields(fields) {
  const { Name, Tagline, Picture, Subcat } = fields;

  const result = {
    name: Name,
    tagline: Tagline,
    category: Subcat,
    picture:
      Picture && Picture[0] ? Picture[0]['thumbnails']['large']['url'] : '',
  };

  return result;
}

const FeedStyle = styled.ul`
  ${tw`m-0 p-0 flex flex-col`};
`;

const Item = styled.li`
  ${tw`my-1 p-0 block`};
  height: 240px;
`;

const Feed = ({ items = [] }) => {
  return (
    <FeedStyle>
      {items && items.length
        ? items.map((record, index) => {
            return (
              <Item>
                <Recommendation
                  size="large"
                  {...normalizeFields(record.fields)}
                />
              </Item>
            );
          })
        : 'No items to show'}
    </FeedStyle>
  );
};

export default Feed;
