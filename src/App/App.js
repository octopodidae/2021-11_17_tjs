import React from 'react'
import Button from './components/Button/Button'
import FlexLayout from './components/FlexLayout/FlexLayout';
import Header from './components/Header/Header';
import MemeViewer from './components/MemeViewer/MemeViewer';
import MemeForm from './components/MemeForm/MemeForm';


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
    return (
    <><Header /><div className="App">
        <FlexLayout>
          <MemeViewer
            meme={{
              titre: 'mon 1er meme',
              text: 'Stop la triche !',
              x: 375,
              y: 530,
              fontSize: 32,
              fontWeight: '900',
              underline: true,
              italic: true,
              frameX: 0,
              frameY: 0,
              color: 'DarkSlateBlue'
            }} image={{
              url: "img/meme1.jpg",
              title: "meme1",
              h: 778,
              w: 736
            }} />
          <MemeForm />
        </FlexLayout>
      </div></>
    );
  }

}

export default App;