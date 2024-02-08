import { useState } from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions/MeteoAction";

const Topbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(searchValue));
  };
  return (
    <Navbar className="nav-bg justify-content-between mb-4">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs="auto">
              <Form.Control
                value={searchValue}
                type="text"
                placeholder="Verona"
                className=" mr-sm-2"
                onChange={handleChange}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Cerca</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};
export default Topbar;
