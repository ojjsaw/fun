import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center">
          <div>
            <p />
            <h1 class="font-weight-light">What is this all about?</h1>
            <p>
              Years ago... I used to be the goto front-end guy until my dev
              career led me to a lot of unity3d, a bit of ios & android dev,
              satisfying amount of depth-sensing cameras & algos, a whole lot of
              docker, edgy VR followed by AR, and now swimming amidst
              kubernetes.
            </p>
            <h5>so what?</h5>
            <p>
              just catching up on some of the 2020 webstack! Starting on this
              very page with...
            </p>
            <Container>
              <Row>
                <Col align="right" sm={5}>
                  <Button variant="secondary">react router dom</Button>{" "}
                </Col>
                <Col sm={7}>
                  routing multiple pages in a single react webapp
                </Col>
              </Row>
              <p />
              <Row>
                <Col align="right" sm={5}>
                  <Button variant="dark">react bootstrap</Button>
                </Col>
                <Col sm={7}>responsive HTML, CSS, JS framework</Col>
              </Row>
              <p />
              <Row>
                <Col align="right" sm={5}>
                  <Button variant="info">codesandbox</Button>
                </Col>
                <Col sm={7}>coding with live feedback in the browser</Col>
              </Row>
              <p />
              <Row>
                <Col align="right" sm={5}>
                  <Button variant="warning">gh-pages</Button>
                </Col>
                <Col sm={7}>packaging git repo and hosting on github pages</Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
