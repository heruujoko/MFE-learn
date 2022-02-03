import { FETCH_CATALOG_EFFECT, FETCH_CATALOG_LOADING } from "./catalog-actions";

const initialState = {
  catalogs: [],
  loading: false
}

const catalogReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CATALOG_EFFECT:
      state = {
        ...state,
        catalogs: action.payload
      }
      break;
    case FETCH_CATALOG_LOADING:
      state = {
        ...state,
        loading: action.payload
      }
      break;
    default:
      state = { ...state };
      break;
  }

  return state;
}

export default catalogReducer;