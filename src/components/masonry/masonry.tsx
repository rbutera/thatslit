import * as React from 'react'
import { Grid } from 'mauerwerk'
import data from './data'
import './masonry.css'
import Recommendation from '../recommendation/recommendation'

export const Masonry = () => {
  const RECS = [
    { key: 'a', title: 'foo', height: '120px' },
    { key: 'b', title: 'bar', height: '120px' },
    { key: 'c', title: 'om', height: '120px' },
    { key: 'd', title: 'kar', height: '120px' },
  ]
  return (
    <Grid
      className="grid"
      // Arbitrary data, should contain keys, possibly heights, etc.
      data={data}
      // Key accessor, instructs grid on how to fet individual keys from the data set
      keys={d => d.name}
      // Can be a fixed value or an individual data accessor
      heights={d => d.height}
      // Number of columns
      columns={3}
    >
      {(data, maximized, toggle) => (
        <div
          className="cell"
          style={{ backgroundImage: data.css }}
          onClick={toggle}
        >
          {maximized && (
            <div className="details">
              <div className="circle" style={{ background: data.css }} />
              <h1>{data.name}</h1>
              <p>{data.description}</p>
            </div>
          )}
          {!maximized && <div className="default">{data.name}</div>}
        </div>
      )}
    </Grid>
  )
}
