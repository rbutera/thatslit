import React from 'react';
import PropTypes from 'prop-types';
import { Text, Line } from './subtitle.css';

const MorphingPhrase = ({ children }) => {
  return <>{children}</>;
};

const Segment = ({ before, children }) => {
  return (
    <Line>
      {before}
      <MorphingPhrase>{children}</MorphingPhrase>
    </Line>
  );
};

const Subtitle = ({ as = 'span', size = 'medium' }) => {
  return (
    <Text as={as} size={size}>
      <Segment before="a ">optionA</Segment>
      <Segment before="of ">optionB</Segment>
    </Text>
  );
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default Subtitle;
