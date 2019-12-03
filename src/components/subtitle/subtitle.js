import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './subtitle.css';

const Subtitle = ({ children, as = 'span', size }) => {
  return (
    <Text as={as} size={size}>
      {children}
    </Text>
  );
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Subtitle;
