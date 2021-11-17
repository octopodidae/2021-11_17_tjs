import React from "react";
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
  console.log('props', props);
  return (
  <button
    className="Button"
    onClick={(evt)=>{props.onButtonClicked()}}
    style={{backgroundColor:props.bgColor, color:props.color}}
  >
    {props.text}
  </button>)
}

// const Button=(props)=>{
//     return (
//         <button className="Button">

//         </button>
//     );
// }

Button.propTypes={
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}
Button.defaultProps={
  bgColor: 'yellowgreen',
  color: 'white'
}
export default Button;
