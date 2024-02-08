import { FETCH_FIVE_DAYS_INFO_WEATHER, FETCH_INFO_WEATHER, FETCH_ON_SEARCH, SELECT_DAY } from "../actions/MeteoAction";

const initialState = {
  content: "",
  fiveDaysContent: { data: [] },
  location: [],
  selectedDay: { datetime: "" },
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
    default:
      return state;
  }
};
export default MeteoReducer;
