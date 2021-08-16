import React from 'react';
import './App.css';
import styled from 'styled-components';
import FrontAcc from './components/frontacc/index';





const AppContainer = styled.div `
width: 100%;
height: 100%;
top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;




function App() {
  return(
   
  <AppContainer>

  
   <div className="bounce-in-top" id="form">
   <FrontAcc/>
   </div>
  
   
    
    
  </AppContainer>);

}



export default App;
