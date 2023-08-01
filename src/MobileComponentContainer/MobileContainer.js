import './MobileContainer.css';
import star from '../star/star.svg';
import {useState} from 'react';
import SecondContainer from '../SecondContainer/SecondContainer';




function MobileContainer(props) { 

const rating  = [ 1, 2, 3 ,4 ,5 ]; 

const Submit = () => {
  return(
    <div>
      <button onClick={() =>{props.setIsSubmitted(true);
      }}  className="submit">SUBMIT</button> 
    </div>
  );
};

 const Buttonnumber = () => {
  return (
    rating.map(number => {
      return (
        <div onClick={() =>  {props.setRate(number)}} key={number}  className="rating-number">
          <p>{number}</p>
        </div>
      )
    })
  );
 }

  return (
        <div className="container">
          <div className="main-container">
            <div className="star">
              <img src={star} alt="star" />
            </div>
            <div className="text">
              <h1 className="h1text">How did we do?</h1>
              <p className="ptext">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className='rating-parent'>
             <Buttonnumber/>
            </div>
            <div className='submit-btn'>
               <Submit />
            </div> 
          </div>
        </div>
  );
  };

  export default MobileContainer;
