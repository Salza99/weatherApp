import {
  FETCH_FIVE_DAYS_INFO_WEATHER,
  FETCH_INFO_WEATHER,
  FETCH_ON_SEARCH,
  REMOVE_LOCATION,
  SAVE_LOCATION,
  SELECT_DAY,
} from "../actions/MeteoAction";

const initialState = {
  content: "",
  fiveDaysContent: { data: [] },
  location: [],
  selectedDay: { datetime: "" },
  favouriteLocations: [],
};

const MeteoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ON_SEARCH:
      return {
        ...state,
        location: action.payload,
      };
    case FETCH_FIVE_DAYS_INFO_WEATHER:
      return {
        ...state,
        fiveDaysContent: action.payload,
      };
    case FETCH_INFO_WEATHER:
      return {
        ...state,
        content: action.payload,
      };
    case SELECT_DAY:
      return {
        ...state,
        selectedDay: action.payload,
      };
    case SAVE_LOCATION:
      return {
        ...state,
        favouriteLocations: [...state.favouriteLocations, action.payload],
      };
    case REMOVE_LOCATION:
      return {
        ...state,
        favouriteLocations: action.payload,
      };
    default:
      return state;
  }
};
export default MeteoReducer;
