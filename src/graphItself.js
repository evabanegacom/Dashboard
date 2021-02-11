import React from 'react';
import './graph.css';
import eclipse from './images/eclipse.png'

const GraphItself = () => {
    return (
        <div className='graphCon'>
            <div className='graphNumbers'>
                <div><p>900</p></div>
                <div><p>600</p></div>
                <div><p>300</p></div>
                <div><p>0</p></div>
            </div>
            <div className='theGraph'>
                <div className='chart'>
                  <div className='insideChart'>
                      <div className='outlier'>
                          <p style={{ fontWeight: 'bold', color: 'black'}}>689</p>
                          <p>New Applicants</p>
                      </div>
                      <hr className='unknown'/>
                      <div className='eclipse'>
                        <img src={eclipse} alt='' />
                        <hr/>
                      </div>
                  </div>
                  <div className='pink'>
                    <hr/>
                  </div>
                </div>
                <div className='theMonths'>
                    <div className='jan'>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div><p className='midMonth'>Jun</p></div>
                    <div>Jul</div>
                    <div>Aug</div>
                    <div>Sep</div>
                    <div>Oct</div>
                    <div>Nov</div>
                    <div className='lastMonth'>Dec</div>
                </div>
            </div>
        </div>
    )
}

export default GraphItself
