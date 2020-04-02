import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  About
                </Button>
                <AboutFun show={modalShow} onHide={() => setModalShow(false)} />
              </ButtonGroup>
              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>ml5js</Button>
                <Button>Coming Soon</Button>
                <Button>Coming Soon</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
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
            <Col align="right" sm={3}>
              <Button variant="secondary">react-router-dom</Button>{" "}
            </Col>
            <Col sm={9}>routing multiple pages in a single react webapp</Col>
          </Row>
          <Row>
            <Col align="right" sm={3}>
              <Button variant="dark">react-bootstrap</Button>
            </Col>
            <Col sm={9}>responsive HTML, CSS, JS framework</Col>
          </Row>
          <Row>
            <Col align="right" sm={3}>
              <Button variant="info">codesandbox</Button>
            </Col>
            <Col sm={9}>coding with live feedback in the browser</Col>
          </Row>
          <Row>
            <Col align="right" sm={3}>
              <Button variant="warning">gh-pages</Button>
            </Col>
            <Col sm={9}>packaging git repo and hosting on github pages</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
