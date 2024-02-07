import { Card, Col, Row } from "react-bootstrap";
import { SunFill, Thermometer, ThermometerHalf } from "react-bootstrap-icons";

const HomeTopSection = () => {
  return (
    <Card>
      <Row>
        <Col xs={2}>
          <SunFill style={{ fontSize: "3rem" }} />
        </Col>
        <Col xs={4}>
          <h3>Roma</h3>
          <p>Domenica 23/07/2023</p>
        </Col>
        <Col xs={3}>
          <Thermometer />
          <h4>17.6&deg;</h4>
        </Col>
        <Col xs={3}>
          <ThermometerHalf />
          <h4>13.2&deg; / 19.4&deg;</h4>
        </Col>
      </Row>
    </Card>
  );
};
export default HomeTopSection;
