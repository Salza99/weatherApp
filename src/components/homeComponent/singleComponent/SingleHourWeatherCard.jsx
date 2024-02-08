import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ArrowRight, CloudRainFill, SunriseFill, SunsetFill, Thermometer, Wind } from "react-bootstrap-icons";
import pressione from "../../../assets/pressione-icon.png";

const SingleHourWeatherCard = ({ selectedDay }) => {
  let rise;
  let set;
  let moonRise = {
    hours: "",
    minutes: "",
    seconds: "",
  };
  let moonSet = {
    hours: "",
    minutes: "",
    seconds: "",
  };

  rise = new Date(selectedDay.moonrise_ts * 1000);
  set = new Date(selectedDay.moonset_ts * 1000);
  moonRise.hours = rise.getHours();
  moonRise.minutes = rise.getMinutes();
  moonRise.seconds = rise.getSeconds();
  moonSet.hours = set.getHours();
  moonSet.minutes = set.getMinutes();
  moonSet.seconds = set.getSeconds();

  return (
    <Card className="not-selected">
      <Row>
        <Col xs={12}>
          <Card.Header>
            <h4>{selectedDay.datetime}</h4>
          </Card.Header>
          <Card.Body>
            <div>
              <div className=" d-flex justify-content-between align-items-center mb-4">
                <p className="m-0">
                  <Thermometer className="me-2 termo-anim" />
                  Minime: {selectedDay.app_min_temp.toFixed(2)}&deg; / Massime: {selectedDay.app_max_temp.toFixed(2)}
                  &deg;
                </p>
                <p className="m-0">
                  <CloudRainFill className="me-2 cloud-anim" />
                  Probabilità precip: {selectedDay.precip.toFixed(2)}%
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <div>
                  <img className="img-fluid me-2" src={pressione} alt="pressure-icon" />
                </div>
                <p className="m-0">Pressione: {selectedDay.pres.toFixed(2)} mbar</p>
              </div>
              <div className="d-flex align-items-center">
                <Wind className="me-2" color="white" />
                <p className="m-0">Velocità del vento: {selectedDay.wind_spd.toFixed(2)} km/h</p>
              </div>
            </div>
            <div className="d-flex justify-content-between p-3 align-items-center mb-1">
              <p>
                <SunriseFill className="me-2 fs-4" />
                Tramonto: {moonRise.hours < 10 ? "0" + moonRise.hours.toString() : moonRise.hours} :{" "}
                {moonRise.minutes < 10 ? "0" + moonRise.minutes.toString() : moonRise.minutes} :{" "}
                {moonRise.seconds < 10 ? "0" + moonRise.seconds.toString() : moonRise.seconds}
              </p>
              <ArrowRight style={{ fontSize: "3rem" }} color="white" />
              <p>
                <SunsetFill className="me-2 fs-4" />
                Alba: {moonSet.hours < 10 ? "0" + moonSet.hours.toString() : moonSet.hours} :{" "}
                {moonSet.minutes < 10 ? "0" + moonSet.minutes.toString() : moonSet.minutes} :{" "}
                {moonSet.seconds < 10 ? "0" + moonSet.seconds.toString() : moonSet.seconds}
              </p>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleHourWeatherCard;
