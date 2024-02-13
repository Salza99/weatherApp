import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_DAY } from "../../../redux/actions/MeteoAction";

const SingleDayWeatherCard = ({ data }) => {
  const dispatch = useDispatch();
  const scrollToSection = (sectionId) => {
    if (sectionId === "DETAILS") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };
  const selected = useSelector((state) => state.meteo.selectedDay);
  const handleClick = () => {
    if (selected.datetime !== data.datetime) {
      dispatch({ type: SELECT_DAY, payload: data });
    } else {
      dispatch({ type: SELECT_DAY, payload: "" });
    }
  };
  return (
    <Card
      className={`mb-3 p-2 shadow transition-background cursor-pointer ${
        selected.datetime === data.datetime ? "selected" : "not-selected"
      }`}
      onClick={() => {
        handleClick();
        scrollToSection("DETAILS");
      }}
    >
      <Row>
        <Col xs={4}>
          <img
            className={`transition-transform ${selected.datetime === data.datetime && "icon-select"}`}
            src={"https://cdn.weatherbit.io/static/img/icons/" + data.weather.icon + ".png"}
            alt="meteo-icon"
          />
        </Col>
        <Col xs={8}>
          <div className={`transition-transform ${selected.datetime === data.datetime && "text-select"}`}>
            <h5>{data.datetime}</h5>
            <p>{data.weather.description}</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleDayWeatherCard;
