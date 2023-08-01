import { useState } from 'react';
import  thanks from '../star/thanks.svg';
import './SecondContainer.css';
import MobileContainer from '../MobileComponentContainer/MobileContainer';

function SecondContainer (props) {
   
    
    return(
        <div className="secondContainer">
               <div className='second-main-container'>
                    <div className='thanks'>
                        <img src= {thanks} alt="Thanks"/>
                    </div>
                    <div className='selected-text'>
                        <h1 className='selected-h1'>
                        You selected {props.rate} out of 5
                        
                        </h1>
                       
                    </div>
                    <div className='main-text'>
                        <h1 className='main-h1'>Thank you</h1>
                        <p className='main-p'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>
                    
               </div>
        </div>
        
    )
}



export default SecondContainer;