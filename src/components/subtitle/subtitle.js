import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Line, LineHeight } from './subtitle.css';
import { useObservable } from 'rxjs-hooks';
import { interval } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { useTransition, animated } from 'react-spring';

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

const AnimatedSegment = ({ children }) => {
  const transitions = useTransition(children, null, {
    from: {
      display: 'inline-block',
      opacity: 0,
      transform: 'translate3d(0px,-100%,0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0px,0px,0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0px,100%,0)',
    },
  });
  return transitions.map(
    ({ item, key, props: { innerWidth, ...rest } }) =>
      item && (
        <animated.span className="transitions-item" key={key} style={rest}>
          <animated.span style={{ overflow: 'hidden', width: innerWidth }}>
            {item}
          </animated.span>
        </animated.span>
      )
  );
};

const Segment = ({ before, children }) => {
  return (
    <Line>
      {before}
      <AnimatedSegment>{children}</AnimatedSegment>
    </Line>
  );
};

const Subtitle = ({ as = 'span', size = 'medium', options }) => {
  const { first, second } = options;
  const [firstOptions, setFirstOptions] = useState(first);
  const [secondOptions, setSecondOptions] = useState(second);

  useEffect(() => {
    const i = setInterval(() => {
      setFirstOptions([]);
      setTimeout(() => {
        setFirstOptions(shuffle(firstOptions));
        setSecondOptions([]);
        setTimeout(() => {
          setSecondOptions(shuffle(secondOptions));
        }, 1000);
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
