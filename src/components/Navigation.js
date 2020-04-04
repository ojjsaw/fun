import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Home from "./Home";
import ML5jsPlayground from "./ML5jsPlayground";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>OJAS</Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem eventkey={1} href="/">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </NavItem>
                <NavItem eventkey={1} href="/ML5jsPlayground">
                  <Nav.Link as={Link} to="/ML5jsPlayground">
                    ML5jsPlayground
                  </Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ML5jsPlayground" component={ML5jsPlayground} />

            <Route
              render={function() {
                return <p>Not found</p>;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Navigation;
