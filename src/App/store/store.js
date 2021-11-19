import { combineReducers, createStore } from "redux";
import { REST_ADR, REST_RESSOURCES } from "../config/config";

export const ressourcesInitialSate = {
  memes: [],
  images: [],
};

export const RESSOURCES_PUBLIC_ACTIONS = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});

function ressourceReducer(state = ressourcesInitialSate, action) {
  console.log(action);
  switch (action.type) {
    case "INIT":
      const pmemes = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`).then((f) =>
        f.json()
      );
      const pimages = fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then((f) =>
        f.json()
      );
      Promise.all([pmemes, pimages]).then((arr_arr) => {
        store.dispatch({ type: "INIT_ARRAYS", values: arr_arr });
      });
      console.log(action);
      return state;
    case "INIT_ARRAYS":
      return {
        ...state,
        
        memes: [...action.values[0]],
        images: [...action.values[1]],
      };
    case RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST:
      return { ...state, images: action.values };
    case RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST:
      return { ...state, memes: action.values };
    case RESSOURCES_PUBLIC_ACTIONS.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    default:
      return state;
  }
}
// let state=ressourceReducer(undefined, {type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST, values:[{ id: 0}, { id: 1}]})
// console.log(state);
// state=ressourceReducer(state, {type:RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST, values:[{ id: 0}, { id: 1}]})
// console.log(state);

export const currentInitialState = {
  titre: "",
  text: "",
  x: 0,
  y: 10,
  color: "#ACACAC",
  underline: false,
  italic: false,
  frameX: 0,
  frameY: 0,
  fontWeight: "500",
  fontSize: 10,
  imageId: -1,
};
export const CURRENT_PUBLIC_ACTIONS = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  CLEAR_MEME: "CLEAR_MEME",
  SAVE_MEME: "SAVE_MEME",
});
const currentReducer = (state = currentInitialState, action) => {
  console.log(action);
  switch (action.type) {
    case CURRENT_PUBLIC_ACTIONS.UPDATE_CURRENT:
      return { ...action.value };
    case CURRENT_PUBLIC_ACTIONS.CLEAR_MEME:
      return { ...currentInitialState };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ current: currentReducer, ressources: ressourceReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INIT",
});

// store.dispatch({
//   type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_IMAGES_LIST,
//   values: [{ id: 0 }, { id: 1 }],
// });

// store.dispatch({
//   type: RESSOURCES_PUBLIC_ACTIONS.REPLACE_MEMES_LIST,
//   values: [{ id: 0 }, { id: 1 }],
// });

// store.dispatch({
//   type: RESSOURCES_PUBLIC_ACTIONS.ADD_MEME,
//   value: { id: 11 },
// });

export default store;
