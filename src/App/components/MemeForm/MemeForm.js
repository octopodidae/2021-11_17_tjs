import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./MemeForm.module.scss";
import {connect} from 'react-redux'
import { CURRENT_PUBLIC_ACTIONS } from "../../store/store";
// import { CURRENT_PUBLIC_ACTIONS, RESSOURCES_PUBLIC_ACTIONS } from "../../store/store"

const initialState = {};
function MemeForm(props) {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, [state]);
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h2>Titre</h2>
        <input
          type="text"
          placeholder="Saisir un titre"
          value={props.meme.title}
          className={styles.normalInput}
        />
        <hr />
        <h2>Image</h2>
        <select value={props.meme.imageId} className={styles.normalInput} onChange=
          {(evt) => {
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}>
          <option value="-1">Aucune</option>
          {props.images.map((e, i) => (
            <option value={e.id}>{e.title}</option>
          ))}
          
        </select>
        <hr />
        <h2>Text</h2>
        <input
          type="text"
          placeholder="Saisir un texte"
          value={props.meme.text}
          className={styles.normalInput}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <hr />
        <div className={styles.half}>
          <h2>Coordonnées</h2>
          <div>
            <label htmlFor="x">X :</label>
            <br />
            <input
              className={styles.smallInput}
              type="number"
              id="x"
              value={props.meme.x}
              onChange={(evt) => {
                props.onMemeChange({
                  ...props.meme,
                  x: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="y">Y :</label>
            <br />
            <input
              className={styles.smallInput}
              type="number"
              id="y"
              value={props.meme.y}
              onChange={(evt) => {
                props.onMemeChange({
                  ...props.meme,
                  y: Number(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <br />
        <h2>Mise en forme</h2>
        <div>
          <label htmlFor="color">Couleur</label>
          <br />
          <input
            type="color"
            id="color"
            className={styles.smallInput}
            value={props.meme.color}
            onChange={(evt) => {
              props.onMemeChange({
                ...props.meme,
                color: evt.target.value,
              });
            }}
          />
        </div>
        <br />
        <div className={styles.checkBoxes}>
          <label htmlFor="f_italic">Italic</label>
          <input
            type="checkbox"
            id="f_italic"
            checked={props.meme.italic}
            className={styles.checkInput}
            onChange={(evt) => {
              props.onMemeChange({ ...props.meme, italic: evt.target.checked });
            }}
          />
          <label htmlFor="f_underline">Underline</label>
          <input
            type="checkbox"
            id="f_underline"
            checked={props.meme.underline}
            className={styles.checkInput}
            onChange={(evt) => {
              props.onMemeChange({
                ...props.meme,
                underline: evt.target.checked,
              });
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="weight">Font Weight</label>
          <input
            type="number"
            id="weight"
            min="100"
            max="900"
            step="100"
            className={styles.smallInput}
            value={props.meme.fontWeight}
            onChange={(evt) => {
              props.onMemeChange({
                ...props.meme,
                fontWeight: evt.target.value,
              });
            }}
          />
        </div>
        <hr />
        <br />
        <div>
          <Button type="reset" bgColor="tomato" text="Clear"></Button>
          <Button type="submit" text="Save"></Button>
        </div>
      </form>
    </div>
  );
}

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  onMemeChange: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
MemeForm.defaultProps = {};
const mapStateToProps=(state,own) => {
  return {
      ...own,
      meme:state.current,
      images:state.ressources.images
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    onMemeChange:(meme)=>dispatch({type:CURRENT_PUBLIC_ACTIONS.UPDATE_CURRENT, value:meme})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MemeForm);
// export const unConnectedMemeForm=MemeForm
