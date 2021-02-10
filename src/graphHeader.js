import React from 'react';
import './graphheader.css';
import down from './images/down.png'
import redDot from './images/red-dot.png'
import bluedot from './images/bluedot.png'

const GraphHeader = () => {
    return (
        <div className='monthCon'>
            <div className='month'>
                <p>month</p>
                <img src={down} alt='' />
            </div>
            <div className='projects'>
                <div className='legends'>
                   <div><img src={bluedot} alt='' /></div> 
                   <div>Projects Done</div> 
                </div>
                <div className='legends'>
                   <div><img src={redDot} alt='' /></div> 
                   <div>New Applications</div> 
                </div>
            </div>
        </div>
    )
}

export default GraphHeader
