import React from 'react'
import { Responsive } from './responsive'

export default {
  title: 'Responsive',
}

export const example = () => {
  return (
    <div>
      <Responsive>
        {matches => (
          <>
            {matches.xs && <p>I am TINY!</p>}
            {matches.sm && <p>I am small!</p>}
            {matches.md && <p>I am medium!</p>}
            {matches.lg && <p>I am large!</p>}
            {matches.xl && <p>I am SUPER LARGE!</p>}
          </>
        )}
      </Responsive>
    </div>
  )
}
