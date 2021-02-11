import React from 'react';
import './customers.css';
import human from './images/human.jpeg'
import amarillo from './images/amarillo.png'
import white from './images/white-human.png'
import red from './images/red-person.png'

const Customers = () => {
    return (
        <div className='satisfaction'>
            <div className='boxes1'>
                <div style={{marginTop: '30px'}}>
                    <p style={{ color: '#2979F2', fontWeight: 'bolder', fontSize: '20px'}}>Customer Satisfaction</p>
                    <p style={{ fontSize: '15px', color: 'grey'}}>across help desk this month</p>
                </div>
                <div style={{marginTop: '20px'}}>
                    <p style={{ color: '#2979F2', fontSize: '15px'}}>Response received</p>
                    <p style={{ fontWeight: 'bolder', fontSize: '20px'}}>390</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
                    <div style={{ color: 'grey', fontSize: '15px'}}><p>Positive</p></div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <img style={{ width: '20px', height: '20px'}} src={human} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={human} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={human} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={human} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={human} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={human} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                    </div>
                    <div style={{ color: 'grey', fontSize: '15px'}}><p>60%</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
                    <div style={{ color: 'grey', fontSize: '15px'}}><p>Neutral</p></div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <img style={{ width: '20px', height: '20px'}} src={amarillo} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={amarillo} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={amarillo} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                    </div>
                    <div style={{ color: 'grey', fontSize: '15px'}}><p>60%</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
                    <div style={{ color: 'grey', fontSize: '15px'}}><p>Negative</p></div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <img style={{ width: '20px', height: '20px'}} src={red} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={red} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                      <img style={{ width: '20px', height: '20px'}} src={white} alt='' />
                    </div>
                    <div style={{ color: 'grey', fontSize: '15px'}}><p>20%</p></div>
                </div>
            </div>
            <div class>box 2</div>
        </div>
    )
}

export default Customers
