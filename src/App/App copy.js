import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import Button from './components/Button/Button'
// import Button2 from './components/Button2/Button'

function App() {
  return (
    <div className="App" >
      <Button
        text="OK"
        onButtonClicked={(arg)=>{
          console.log('arg', arg)
          alert("OK!")
        }}   
      />
      <Button 
        text="Cancel"
        onButtonClicked={(arg)=>{
          console.log('arg', arg)
          alert("Cancel")
        }}         
       />
      <Button
        text="User ne clique pas ICI !"
        onButtonClicked={(arg)=>{
          console.log('arg', arg)
          alert("Le user a cliqué !")
        }}
        style={{fontSize:'45pt'}}
        bgColor="tomato"           
       />
      <Button 
        text="Je ne sais pas"
        onButtonClicked={(arg)=>{
          console.log(arg)
          alert("Je ne sais pas")          
        }}
       bgColor="olive"
       color="wheat"         
       />
    </div>
  );
}

export default App;
