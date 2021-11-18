import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from 'prop-types';

function Button(props) {
  const [isClicked, setClicked] = useState({clicked:false,uneValue:0});
  useEffect(() => {
    console.log(isClicked);
    setTimeout(()=>{
      setClicked({...isClicked, clicked:false});
    },300);
    // return () => {
    //   cleanup
    // }
  }, [isClicked])
  console.log('props', props);
  return (
    <button
      className={`${style.Button}${isClicked.clicked?' '+style.clicked:''}`}
      onClick={(evt) => {
          setClicked({...isClicked, clicked:true});
          setTimeout(()=>{
            setClicked({...isClicked, clicked:false});
          },300);
          props.onButtonClicked()
          }}
      style={{
        backgroundColor:props.bgColor,
        color:props.color,...props.style
      }}
    >
      {props.text}
    </button>)
}

Button.propTypes={
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
}
Button.defaultProps={
  bgColor: 'yellowgreen',
  color: 'white'
}
export default Button;
