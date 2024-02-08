import { Card, Col, Row } from "react-bootstrap";
import { Droplet, Thermometer, ThermometerHalf } from "react-bootstrap-icons";

const HomeTopSection = ({ result }) => {
  return (
    <Card className="not-selected p-2">
      <Row>
        <Col xs={2}>
          <img src={"https://openweathermap.org/img/wn/" + result.weather[0].icon + ".png"} alt="weather-icon" />
        </Col>
        <Col xs={4}>
          <h3>{result.name}</h3>
          <p>
            <Droplet className="fs-4" color="white" /> umidità {result.main.humidity}%
          </p>
        </Col>
        <Col xs={3}>
          <Thermometer className="termo-anim" />
          <h4>
            {(result.main.temp - 273.15).toFixed(2)}&deg; / {(result.main.feels_like - 273.15).toFixed(2)}&deg;
          </h4>
        </Col>
        <Col xs={3}>
          <ThermometerHalf className="termo-anim" />
          <h4>
            {(result.main.temp_min - 273.15).toFixed(2)}&deg; / {(result.main.temp_max - 273.15).toFixed(2)}&deg;
          </h4>
        </Col>
      </Row>
    </Card>
  );
};
export default HomeTopSection;
