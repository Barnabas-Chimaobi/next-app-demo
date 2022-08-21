import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../assets/logo.png";

const { Header } = Layout;

export default function Navibar(props) {
  return (
    <div>
      {/* <Header> */}
      <Navbar expand="lg" style={{ backgroundColor: "#FFFFFF" }}>
        <Container fluid>
          {/* <Button onClick={props.close}> */}
          <MenuOutlined
            className="pr-lg-0 pr-md-0 d-lg-none d-md-none d-block p-4"
            onClick={props.close}
          />
          {/* </Button> */}
          <Navbar.Brand href="#home">
            <img src={Logo} />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Header> */}
    </div>
  );
}
