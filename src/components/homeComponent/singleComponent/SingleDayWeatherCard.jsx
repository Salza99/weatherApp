import { Card, Col, Row } from "react-bootstrap";
import { SunFill } from "react-bootstrap-icons";

const SingleDayWeatherCard = () => {
  return (
    <Card>
      <Row>
        <Col xs={4}>
          <SunFill />
        </Col>
        <Col xs={8}>
          <h5>28/07/2023</h5>
          <p>Soleggiato</p>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleDayWeatherCard;
