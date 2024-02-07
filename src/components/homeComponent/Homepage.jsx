import { Col, Container, Row } from "react-bootstrap";
import HomeTopSection from "./mainComponent/HomeTopSection";
import HomeLeftSection from "./mainComponent/HomeLeftSection";
import HomeRightSection from "./mainComponent/HomeRightSection";

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <HomeTopSection />
        </Col>
        <Col xs={12} sm={5} md={4}>
          <HomeLeftSection />
        </Col>
        <Col xs={12} sm={7} md={8}>
          <HomeRightSection />
        </Col>
      </Row>
    </Container>
  );
};
export default Homepage;
