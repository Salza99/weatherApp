import { Col, Container, Row } from "react-bootstrap";
import HomeTopSection from "./mainComponent/HomeTopSection";
import HomeLeftSection from "./mainComponent/HomeLeftSection";
import HomeRightSection from "./mainComponent/HomeRightSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { searchFiveDaysInfoWeather, searchInfoWeather } from "../../redux/actions/MeteoAction";

const Homepage = () => {
  const searchedCity = useSelector((state) => state.meteo.location);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.meteo.content);
  const fiveDaysResult = useSelector((state) => state.meteo.fiveDaysContent);
  useEffect(() => {
    if (searchedCity.length > 0) {
      dispatch(searchInfoWeather(searchedCity[0].lat, searchedCity[0].lon));
      dispatch(searchFiveDaysInfoWeather(searchedCity[0].lat, searchedCity[0].lon));
    }
  }, [searchedCity]);
  return (
    <Container fluid>
      <Row>
        {result && (
          <>
            <Col className="mb-3" xs={12}>
              <HomeTopSection result={result} />
            </Col>
            <Col className="mb-3" xs={12} sm={5} md={4}>
              <HomeLeftSection fiveDaysResult={fiveDaysResult} />
            </Col>
            <Col className="mb-3" xs={12} sm={7} md={8}>
              <HomeRightSection />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
export default Homepage;
