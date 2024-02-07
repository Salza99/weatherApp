import { Card, Col, Row } from "react-bootstrap";
import { SunFill, Thermometer, Water, Wind } from "react-bootstrap-icons";

const SingleHourWeatherCard = () => {
  return (
    <Card>
      <Row>
        <Col xs={3}>
          <p>12:00</p>
        </Col>
        <Col xs={2}>
          <SunFill />
        </Col>
        <Col xs={2}>
          <Thermometer />
          <p>23&deg;</p>
        </Col>
        <Col xs={3}>
          <Wind />
          <p>3 km/h</p>
        </Col>
        <Col xs={2}>
          <Water />
          <p>2%</p>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleHourWeatherCard;
