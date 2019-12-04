import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Line } from './subtitle.css';
import { useObservable } from 'rxjs-hooks';
import { interval } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

function shuffle(input = []) {
  if (!input || input.length < 2) {
    return input;
  }

  const [current, ...rest] = input;
  const randomIndex = Math.floor(Math.random() * rest.length);
  const next = rest[randomIndex];
  const remaining = rest.filter(x => x !== next);
  return [next, current, ...remaining];
}

const MorphingPhrase = ({ children }) => {
  return <>{children}</>;
};

const Segment = ({ before, children, options }) => {
  return (
    <Line>
      {before}
      <MorphingPhrase>{children}</MorphingPhrase>
    </Line>
  );
};

const Subtitle = ({ as = 'span', size = 'medium', options }) => {
  const { first, second } = options;
  const [firstOptions, setFirstOptions] = useState(first);
  const [secondOptions, setSecondOptions] = useState(second);

  useEffect(() => {
    const i = setInterval(() => {
      setFirstOptions(shuffle(firstOptions));
      setTimeout(() => {
        setSecondOptions(shuffle(secondOptions));
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <Text as={as} size={size}>
      <Segment before="a ">{firstOptions[0]}</Segment>
      <Segment before="of ">{secondOptions[0]}</Segment>
    </Text>
  );
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

export default Subtitle;
