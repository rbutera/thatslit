import React from 'react'
import Media from 'react-media'

import BREAKPOINTS from '../../constants/breakpoints'

const { sm, md, lg, xl } = BREAKPOINTS

export const Responsive = ({ children }) => {
  return (
    <div>
      <Media
        queries={{
          xs: `(max-width: ${sm - 1}px)`,
          sm: `(min-width: ${sm}px) and (max-width: ${md - 1}px)`,
          md: `(min-width: ${md}px) and (max-width: ${lg - 1}px)`,
          lg: `(min-width: ${lg}px) and (max-width: ${xl - 1}px)`,
          xl: `(min-width: ${xl}px)`,
        }}
      >
        {children}
      </Media>
    </div>
  )
}
