import { Card } from "react-bootstrap";
import { DropletFill, HeartFill, Thermometer, ThermometerHalf } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions/MeteoAction";

const SingleFavouriteCard = ({ fav }) => {
  const dispatch = useDispatch();
  const actualSearch = useSelector((state) => state.meteo.content);
  const handleClick = () => {
    if (fav.name !== actualSearch.name) {
      dispatch(search(fav.name));
    }
  };
  return (
    <Card className={`not-selected mb-3 ${fav.name !== actualSearch.name && "cursor-pointer"} `} onClick={handleClick}>
      <Card.Header className="d-flex justify-content-between align-items-center p-3">
        <h4>{fav.name}</h4>
        <HeartFill color="white" className="me-2 fs-4" />
      </Card.Header>
      <Card.Body>
        <div className="rounded shadow d-flex justify-content-between p-2">
          <div className="d-flex justify-content-center align-items-center">
            <Thermometer color="white" className="me-2 fs-4" />{" "}
            <p className="m-0">Temp: {(fav.main.temp - 273.15).toFixed(2)}&deg;</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <ThermometerHalf color="white" className="me-2 fs-4" />{" "}
            <p className="m-0">Perc: {(fav.main.feels_like - 273.15).toFixed(2)}&deg;</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <DropletFill color="white" className="me-2 fs-4" />{" "}
            <p className="m-0">Umid: {fav.main.humidity.toFixed(2)}%</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default SingleFavouriteCard;
