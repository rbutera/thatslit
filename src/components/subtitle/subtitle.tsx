import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useObservable } from 'rxjs-hooks'
import { interval } from 'rxjs'
import { map, withLatestFrom } from 'rxjs/operators'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Text = styled.div`
  ${tw`leading-tight select-none`};
`

export const Line = styled.span`
  ${tw`block leading-tight`}
`

function shuffle(input = []) {
  if (!input || input.length < 2) {
    return input
  }

  const [head, ...tail] = input
  const randomIndex = Math.floor(tail.length * Math.random())
  const next = tail[randomIndex]
  const remaining = tail.filter(x => x !== next)
  const result = [next, ...remaining, head]
  return result
}

const AnimatedSegmentStyle = styled.span`
  ${tw``};
`

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
  })
  return transitions.map(
    ({ item, key, props: { innerWidth, ...rest } }) =>
      item && (
        <animated.span className="transitions-item" key={key} style={rest}>
          <animated.span style={{ overflow: 'hidden', width: innerWidth }}>
            <AnimatedSegmentStyle>{item}</AnimatedSegmentStyle>
          </animated.span>
        </animated.span>
      )
  )
}

const Segment = ({ before, children }) => {
  return (
    <Line>
      {before}
      <AnimatedSegment>{children}</AnimatedSegment>
    </Line>
  )
}

const Subtitle = ({ as = 'span', size = 'medium', options }) => {
  const { first, second } = options
  const optionsRef = useRef(options)
  const [firstOptions, setFirstOptions] = useState(first)
  const [secondOptions, setSecondOptions] = useState(second)

  useEffect(() => {
    const i = setInterval(() => {
      setFirstOptions([])

      setTimeout(() => {
        optionsRef.current.first = shuffle(optionsRef.current.first)
        setFirstOptions(optionsRef.current.first)
        setSecondOptions([])
        setTimeout(() => {
          optionsRef.current.second = shuffle(optionsRef.current.second)
          setSecondOptions(optionsRef.current.second)
        }, 1000)
      }, 1000)
    }, 10000)

    return () => {
      clearInterval(i)
    }
  }, [])

  return (
    <Text as={as} size={size}>
      <Segment before="a ">{firstOptions[0]}</Segment>
      <Segment before="of ">{secondOptions[0]}</Segment>
    </Text>
  )
}

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
}

export default Subtitle
