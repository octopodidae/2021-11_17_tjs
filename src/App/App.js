import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App" >
      <Button text="OK" onButtonClicked={(arg)=>{
          console.log(arg)
          alert("Le user a osé cliquer")
       }}/>
      <Button text="Cancel" onButtonClicked={(arg)=>{
          console.log(arg)
          alert("Le user a osé cliquer")
       }}/>
      <Button text="User ne clique pas ICI" onButtonClicked={(arg)=>{
          console.log(arg)
          alert("Le user a osé cliquer")
       }}/>
      <Button text="Je ne sais pas" onButtonClicked={(arg)=>{
          console.log(arg)
          alert("Le user a osé cliquer")
       }}/>
    </div>
  );
}

export default App;
