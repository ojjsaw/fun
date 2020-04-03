import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ML5jsPlayground from "./ml5js/playground";

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home">OJAS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="ml5js">ml5js</Nav.Link>
          <Nav.Link href="#pricing">Coming Soon</Nav.Link>
          <Nav.Link>
            <div onClick={() => setModalShow(true)}>About</div>
          </Nav.Link>

          <AboutFun show={modalShow} onHide={() => setModalShow(false)} />
        </Nav>
      </Navbar>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Switch>
          <Route path="/">Hello</Route>
          <Route path="/ml5js">
            <ML5jsPlayground />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function AboutFun(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">About...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Years ago... I used to be the goto front-end guy until my dev career
          led me to a lot of unity3d, a bit of ios & android dev, satisfying
          amount of depth-sensing cameras & algos, a whole lot of docker, edgy
          VR followed by AR, and now swimming amidst kubernetes.
        </p>
        <h5>so what?</h5>
        <p>
          just catching up on some of the 2020 webstack! Starting on this very
          page with...
        </p>
        <Container>
          <Row>
            <Col align="right" sm={5}>
              <Button variant="secondary">react router dom</Button>{" "}
            </Col>
            <Col sm={7}>routing multiple pages in a single react webapp</Col>
          </Row>
          <Row>
            <Col align="right" sm={5}>
              <Button variant="dark">react bootstrap</Button>
            </Col>
            <Col sm={7}>responsive HTML, CSS, JS framework</Col>
          </Row>
          <Row>
            <Col align="right" sm={5}>
              <Button variant="info">codesandbox</Button>
            </Col>
            <Col sm={7}>coding with live feedback in the browser</Col>
          </Row>
          <Row>
            <Col align="right" sm={5}>
              <Button variant="warning">gh-pages</Button>
            </Col>
            <Col sm={7}>packaging git repo and hosting on github pages</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
