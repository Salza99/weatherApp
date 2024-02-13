import { useState } from "react";
import { Button, Col, Container, Form, Navbar, Offcanvas, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/actions/MeteoAction";
import CanvasForFavourite from "./CanvasForFavourite";
import { Search } from "react-bootstrap-icons";

const Topbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  const favourites = useSelector((state) => state.meteo.favouriteLocations);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(searchValue));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="nav-bg justify-content-between mb-4">
        <Container>
          <Form className="me-3" onSubmit={handleSubmit}>
            <Row className="position-relative">
              <Col xs="auto">
                <Form.Control
                  value={searchValue}
                  type="text"
                  placeholder="Cerca..."
                  className=" mr-sm-2"
                  onChange={handleChange}
                />
              </Col>
              <Col xs="auto">
                <button className="btn-src" type="submit">
                  <Search />
                </button>
              </Col>
            </Row>
          </Form>
          <button className="btn-fav" onClick={handleShow}>
            Preferiti
          </button>
        </Container>
      </Navbar>
      <CanvasForFavourite show={show} handleClose={handleClose} favourites={favourites} />
    </>
  );
};
export default Topbar;
