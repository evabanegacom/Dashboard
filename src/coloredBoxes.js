import React from 'react';
import './box.css';

const ColoredBoxes = () => {
    return (
        <div className='boxes'>
          <div className='smallbox box1'>
              <p>Registered companies</p>
              <p className='number'>849</p>
              <p className='percent'>&#8593; 1.33%</p>
              <p className='lastweek'>since last week</p>
          </div>
          <div className='smallbox box2'>
              <p>Registered companies</p>
              <p className='number'>849</p>
              <p className='percent1'>&#8595; 2.43%</p>
              <p className='lastweek'>since last week</p>
          </div>
          <div className='smallbox box3'>
              <p>Registered companies</p>
              <p className='number'>849</p>
              <p className='percent'>1.33%</p>
              <p className='lastweek'>since last week</p>
          </div>
          <div className='smallbox box4'>
              <p>Registered companies</p>
              <p className='number'>849</p>
              <p className='percent1'>3.45%</p>
              <p className='lastweek'>since last week</p>
          </div>
        </div>
    )
}

export default ColoredBoxes
