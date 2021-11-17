import React from "react";
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
  console.log('props', props);
  return <button className="Button" onClick={(evt)=>{props.onButtonClicked()}}>{props.text}</button>;
}

// const Button=(props)=>{
//     return (
//         <button className="Button">

//         </button>
//     );
// }

Button.propTypes={
  text: PropTypes.string.isRequired,
}
export default Button;
