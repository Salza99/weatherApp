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
        <Col className="d-flex flex-column align-items-center justify-content-center" xs={5} sm={4}>
          <h3>{result.name}</h3>
          <p>
            <Droplet className="fs-4" color="white" /> umidità {result.main.humidity}%
          </p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center flex-column" xs={5} sm={4}>
          <Thermometer className="termo-anim" />
          <p className="m-0">temp / perc</p>
          <p className="m-0">
            {(result.main.temp - 273.15).toFixed(2)}&deg; / {(result.main.feels_like - 273.15).toFixed(2)}&deg;
          </p>
        </Col>
        <Col className="d-sm-flex align-items-center justify-content-center flex-column d-none" sm={3}>
          <ThermometerHalf className="termo-anim" />
          <p className="m-0">min / max</p>
          <p className="m-0">
            {(result.main.temp_min - 273.15).toFixed(2)}&deg; / {(result.main.temp_max - 273.15).toFixed(2)}&deg;
          </p>
        </Col>
        <Col xs={2} sm={1} className="d-flex align-items-center justify-content-center">
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
