import React from 'react';
import Red from './media/Red.png';
import Blue from './media/Blue.png';
import './ForceScanner.css';

const ForceScanner =({PushMe, CharGen})=>{
    return (
        <div id="ForceScanner" className="flex justify-around items-center bg-dark-gray ba b--mid-gray br4 bw3" >
            <div id="Mid-card" className="order-1 pv5 tc bg-silver ba b--mid-gray br4 pa2 bw3 ">          
                <div className="yellow pa2 ma2">
                    <h1 className="f3 ">ForceScanner</h1>
                </div>                       
                <div className='w5  '>
                    <p className="flex justify-center items-center bg-black ba b--yellow br4 bw2 
                            yellow f4 h3"> {CharGen} </p>
                </div>
                <div className=''>
                    <button className="br-pill ba b--yellow bg-black bw2 yellow pa2 shadow-1 f5"onClick={PushMe} >Press Me</button>
                </div>
                       
            </div>                                
                <div id='Red' className='order-0 pv3 w3 h-80 pv4  ba b--mid-gray bg-dark-gray br4 bw3 shadow-1 '>
                    <img  src={Red} className=' ' alt='Sith'/>
                </div>                
                <div id='Blue' className='order-2 pv3 w3 h-80 pv4  ba b--mid-gray bg-dark-gray br4 bw3 shadow-1'>
                        <img src={Blue} className=' ' alt='Jedi'/>
                </div>    
            </div>
    );
}

export default ForceScanner;