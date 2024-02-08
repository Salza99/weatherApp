export const FETCH_ON_SEARCH = "FETCH_ON_SEARCH";
export const FETCH_INFO_WEATHER = "FETCH_INFO_WEATHER";
export const FETCH_FIVE_DAYS_INFO_WEATHER = "FETCH_FIVE_DAYS_INFO_WEATHER";
export const SELECT_DAY = "SELECT_DAY";
export const SAVE_LOCATION = "SAVE_LOCATION";
export const REMOVE_LOCATION = "REMOVE_LOCATION";

export const search = (searchValue) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" + searchValue + "&appid=bcae100f71feffc555debc4f59f71440"
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: FETCH_ON_SEARCH, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const searchInfoWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=bcae100f71feffc555debc4f59f71440"
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: FETCH_INFO_WEATHER, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const searchFiveDaysInfoWeather = (lat, lon) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://api.weatherbit.io/v2.0/forecast/daily?lat=" +
          lat +
          "&lon=" +
          lon +
          "&key=210fe85cf1ec45c0842ded8cd67be0a7&lang=it"
      );
      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: FETCH_FIVE_DAYS_INFO_WEATHER, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
