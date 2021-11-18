import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./MemeForm.module.scss";

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
        <input type="text" placeholder="Saisir un titre" />
        <hr />
        <h2>Image</h2>
        <select>
          <option value="-1">Aucune</option>
        </select>
        <hr />
        <h2>Text</h2>
        <input type="text" placeholder="Saisir un texte" />
        <hr />
        <div className={styles.half}>
          <h2>Coordonnées</h2>
          <div>
            <label htmlFor="x">X :</label>
            <br />
            <input className={styles.smallInput} type="number" id="x" />
          </div>
          <div>
            <label htmlFor="y">Y :</label>
            <br />
            <input className={styles.smallInput} type="number" id="y" />
          </div>
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

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
