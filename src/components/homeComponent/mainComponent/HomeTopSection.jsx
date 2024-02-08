import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Droplet, Heart, HeartFill, Thermometer, ThermometerHalf } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_LOCATION, SAVE_LOCATION } from "../../../redux/actions/MeteoAction";

const HomeTopSection = ({ result }) => {
  const favourites = useSelector((state) => state.meteo.favouriteLocations);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch({ type: SAVE_LOCATION, payload: result });
  };
  const handleRemove = () => {
    const newFav = favourites.filter((fav) => {
      return fav.name !== result.name;
    });
    console.log(newFav);
    dispatch({ type: REMOVE_LOCATION, payload: newFav });
  };
  useEffect(() => {
    if (favourites.length > 0 && favourites.find((fav) => fav.name === result.name)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [favourites, result]);
  return (
    <Card className="not-selected p-3">
      <Row>
        <Col className="d-flex align-items-center justify-content-center" xs={1}>
          <img
            style={{ width: "75px", height: "75px" }}
            className="img-fluid"
            src={"https://openweathermap.org/img/wn/" + result.weather[0].icon + ".png"}
            alt="weather-icon"
          />
        </Col>
        <Col className="d-flex flex-column align-items-center justify-content-center" xs={4}>
          <h3>{result.name}</h3>
          <p>
            <Droplet className="fs-4" color="white" /> umidità {result.main.humidity}%
          </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center" xs={3}>
          <Thermometer className="termo-anim" />
          <h4>
            {(result.main.temp - 273.15).toFixed(2)}&deg; / {(result.main.feels_like - 273.15).toFixed(2)}&deg;
          </h4>
        </Col>
        <Col className="d-flex align-items-center justify-content-center" xs={3}>
          <ThermometerHalf className="termo-anim" />
          <h4>
            {(result.main.temp_min - 273.15).toFixed(2)}&deg; / {(result.main.temp_max - 273.15).toFixed(2)}&deg;
          </h4>
        </Col>
        <Col xs={1} className="d-flex align-items-center justify-content-center">
          {isFav ? (
            <HeartFill className="fs-4 pointer-cursor" color="white" onClick={handleRemove} />
          ) : (
            <Heart className="fs-4 pointer-cursor" color="white" onClick={handleSave} />
          )}
        </Col>
      </Row>
    </Card>
  );
};
export default HomeTopSection;
