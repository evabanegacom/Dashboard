import React from 'react';
import './customers.css';
import human from './images/human.jpeg'
import amarillo from './images/amarillo.png'
import white from './images/white-human.png'
import red from './images/red-person.png'
import cregital from './images/Cregital.png'
import intelia from './images/intelia.png'
import talosmart from './images/talosmart.png'
import imperial from './images/imperial.png'
import reverse from './images/reverse.png'

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
            <div className='lastBox'>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontWeight: 'bold', fontSize: '20px', width: '130px', height: '35px', color: '#2979F2'}}><p>Messages</p></div>
                    <div style={{width: '130px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', height: '35px', background: '#2979F2'}}> + New Messages</div>
                </div>
                <div style={{display: 'flex', borderBottom: '1px solid lightgrey', justifyContent: 'space-around', marginTop: '20px'}}>
                    <div><img src={cregital} alt='' /></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: '#2979F2', fontSize: '15px', fontWeight: 'bold'}}><p>Cregital</p></div>
                        <div style={{fontSize: '12px', color: 'grey'}}><p>Hey don't forget to clear the server cache</p></div>
                        <div style={{fontSize: '10px', color: 'grey', marginBottom: '10px'}}><p>25 mins ago</p></div>
                    </div>
                    <div  className='dots' style={{ display: 'flex', flexDirection: 'column', lineHeight: '10px'}}>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                    </div>
                </div>
                <div style={{display: 'flex', borderBottom: '1px solid lightgrey', justifyContent: 'space-around', marginTop: '10px'}}>
                    <div><img src={intelia} alt='' /></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: '#2979F2', fontSize: '15px', fontWeight: 'bold'}}><p>Intelia</p></div>
                        <div style={{fontSize: '12px', color: 'grey'}}><p>Hey don't forget to clear the server cache</p></div>
                        <div style={{fontSize: '10px', color: 'grey', marginBottom: '10px'}}><p>25 mins ago</p></div>
                    </div>
                    <div  className='dots' style={{ display: 'flex', flexDirection: 'column', lineHeight: '10px'}}>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                    </div>
                </div>
                <div style={{display: 'flex', borderBottom: '1px solid lightgrey', justifyContent: 'space-around', marginTop: '10px'}}>
                    <div><img src={talosmart} alt='' /></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: '#2979F2', fontSize: '15px', fontWeight: 'bold'}}><p>Talosmart</p></div>
                        <div style={{fontSize: '12px', color: 'grey'}}><p>Hey don't forget to clear the server cache</p></div>
                        <div style={{fontSize: '10px', color: 'grey', marginBottom: '10px'}}><p>25 mins ago</p></div>
                    </div>
                    <div  className='dots' style={{ display: 'flex', flexDirection: 'column', lineHeight: '10px'}}>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                    </div>
                </div>
                <div style={{display: 'flex', borderBottom: '1px solid lightgrey', justifyContent: 'space-around', marginTop: '10px'}}>
                    <div><img src={imperial} alt='' /></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: '#2979F2', fontSize: '15px', fontWeight: 'bold'}}><p>ImperialSoft</p></div>
                        <div style={{fontSize: '12px', color: 'grey'}}><p>Hey don't forget to clear the server cache</p></div>
                        <div style={{fontSize: '10px', color: 'grey', marginBottom: '10px'}}><p>25 mins ago</p></div>
                    </div>
                    <div  className='dots' style={{ display: 'flex', flexDirection: 'column', lineHeight: '10px'}}>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                    </div>
                </div>
                <div style={{display: 'flex', borderBottom: '1px solid lightgrey', justifyContent: 'space-around', marginTop: '10px'}}>
                    <div><img src={reverse} alt='' /></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: '#2979F2', fontSize: '15px', fontWeight: 'bold'}}><p>Cregital</p></div>
                        <div style={{fontSize: '12px', color: 'grey'}}><p>Hey don't forget to clear the server cache</p></div>
                        <div style={{fontSize: '10px', color: 'grey', marginBottom: '10px'}}><p>25 mins ago</p></div>
                    </div>
                    <div  className='dots' style={{ display: 'flex', flexDirection: 'column', lineHeight: '10px'}}>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                        <div><p>.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
