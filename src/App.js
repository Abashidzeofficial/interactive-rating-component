
import MobileContainer from './MobileComponentContainer/MobileContainer';
import SecondContainer from './SecondContainer/SecondContainer';
import { useState } from 'react';


function App() {
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [rate,setRate] = useState(0);
  console.log(rate)


  return (
    <div className="App">
      {isSubmitted ? <SecondContainer rate={rate}/> : <MobileContainer setRate={setRate} setIsSubmitted={setIsSubmitted}/>}   
    </div>
  );
};

export default App;
