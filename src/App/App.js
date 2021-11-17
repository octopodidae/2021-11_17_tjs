import React from 'react'
import Button from './components/Button/Button'

class App extends React.Component{

  counter = 0;

  constructor(props){
    super(props);
    this.state={counter:0, value2:0}
  }
  componentDidUpdate(){
    console.table(arguments);
    console.log('%c%s', 'font-size:42pt; color:red', 'Le changement est pret et effectif '+this.state.counter)
  }
  render(){
    return <div className="App">
    {/* My Comment */}
      counter: {this.state.counter}<br/>
      <Button
      text="Soustraire 1"
      onButtonClicked={()=>{
        this.setState({ counter:this.state.counter-1 });
        console.log(this.state)}
      }
      bgColor="tomato" />
      <Button
      text="Ajouter 1"
      onButtonClicked={()=>{
        this.setState({ counter:this.state.counter+1 });
        console.log(this.state)}
      }
      bgColor="yellowgreen" />
    </div>
  }

}

export default App;