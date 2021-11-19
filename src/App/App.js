import React from "react";
import Button from "./components/Button/Button";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import Header from "./components/Header/Header";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import MemeForm from "./components/MemeForm/MemeForm";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store from "./store/store";
import { connect } from "react-redux";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";

class App extends React.Component {
  // counter = 0;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     current: {
  //       imageId: 0,
  //       title: "mon 1er meme",
  //       text: "Stop la triche !",
  //       x: 375,
  //       y: 530,
  //       fontSize: 32,
  //       fontWeight: "900",
  //       underline: true,
  //       italic: true,
  //       frameX: 0,
  //       frameY: 0,
  //       color: "DarkSlateBlue",
  //     },
  //     images: [],
  //   };
  // }
  // componentDidMount() {
  //   fetch(`${REST_ADR}${REST_RESSOURCES.images}`)
  //     .then((f) => f.json())
  //     .then((arr) => this.setState({ images: arr }));
  // }
  componentDidUpdate() {
    console.table(arguments);
    console.log(
      "%c%s",
      "font-size:8px; color:red",
      "Le changement est pret et effectif " + JSON.stringify(this.props)
    );
  }
  render() {
    return (
      <>
        <Header />
        <div className="App">
          <MemeThumbnail/>
          {/* <FlexLayout>
            <MemeViewer
              meme={this.props.current}
              image={this.props.images.find(
                (e) => e.id === this.props.current.imageId
              )}
            />
            <MemeForm
              // meme={this.state.current}
              // onMemeChange={(meme) => {
              //   this.setState({ current: meme });
              // }}
              // images={this.state.images}
            />
          </FlexLayout> */}
        </div>
      </>
    );
  }
}

function mapStateToProps(state, own) {
  return {
    ...own,
    images: state.ressources.images,
    memes: state.ressources.memes,
    current: state.current,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
