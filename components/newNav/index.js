import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Typography, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Text } = Typography;
const applicantDrop = (
  <div
    style={{
      background: "white",
      paddingLeft: "10px",
      border: "5px",
      fontFamily: "Montserrat",
    }}>
    <NavDropdown.Item
      href="#link"
      style={{ fontSize: "15px", color: "#047735" }}>
      Home
    </NavDropdown.Item>
    <NavDropdown.Item
      href="#link"
      style={{ fontSize: "15px", color: "#047735" }}>
      Home
    </NavDropdown.Item>
    <NavDropdown.Item
      href="#link"
      style={{ fontSize: "15px", color: "#047735" }}>
      Home
    </NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item
      href="#link"
      style={{ fontSize: "15px", color: "#047735" }}>
      Home
    </NavDropdown.Item>
  </div>
);

export default function NewNav() {
  return (
    <div style={{ marginBottom: "100px", fontFamily: "Montserrat" }}>
      <Navbar
        style={{ background: "#047735" }}
        expand="lg"
        variant="dark"
        fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={"../../ilaro-logo.jpeg"}
              style={{ height: 50, width: 50, padding: 5, marginLeft: 30 }}
              className="rounded"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ border: "none", boxShadow: "none", color: "white" }}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
            style={{ justifyContent: "end", alignItems: "center" }}>
            <Nav className="">
              <Container>
                <Space
                  style={{ gap: "10px" }}
                  className="d-block d-lg-flex d-xl-flex ml-4 ml-lg-1 ml-xl-1">
                  <Nav.Link
                    href="#link"
                    style={{ fontSize: "15px", color: "#FFFFFF" }}>
                    Home
                  </Nav.Link>
                  <Dropdown
                    id="basic-nav-dropdown"
                    overlay={applicantDrop}
                    style={{ fontSize: "20px", color: "#FFFFFF" }}>
                    <Space>
                      <Text style={{ fontSize: "15px", color: "#FFFFFF" }}>
                        Applicant
                      </Text>
                      <DownOutlined
                        style={{ fontSize: "9px", color: "#FFFFFF" }}
                      />
                    </Space>
                  </Dropdown>
                  <Dropdown
                    id="basic-nav-dropdown"
                    overlay={applicantDrop}
                    style={{ fontSize: "20px", color: "#FFFFFF" }}>
                    <Space>
                      <Text style={{ fontSize: "15px", color: "#FFFFFF" }}>
                        Returning Student
                      </Text>
                      <DownOutlined
                        style={{ fontSize: "9px", color: "#FFFFFF" }}
                      />
                    </Space>
                  </Dropdown>
                  <Dropdown
                    id="basic-nav-dropdown"
                    overlay={applicantDrop}
                    style={{ fontSize: "15px", color: "#FFFFFF" }}>
                    <Space>
                      <Text style={{ fontSize: "15px", color: "#FFFFFF" }}>
                        Graduate
                      </Text>
                      <DownOutlined
                        style={{ fontSize: "9px", color: "#FFFFFF" }}
                      />
                    </Space>
                  </Dropdown>
                  <Nav.Link
                    href="#link"
                    style={{ fontSize: "15px", color: "#FFFFFF" }}>
                    Complaints
                  </Nav.Link>
                  <Nav.Link
                    href="#link"
                    style={{ fontSize: "15px", color: "#FFFFFF" }}>
                    User Guide
                  </Nav.Link>
                </Space>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
