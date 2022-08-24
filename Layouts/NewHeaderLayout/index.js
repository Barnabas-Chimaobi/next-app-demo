import { Navbar, Container, Nav } from "react-bootstrap";
import { Space, Typography, Dropdown, Layout } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { colors } from "../../utils/colors";

const { Header } = Layout;

const { Text } = Typography;
function NewHeader(props) {
  const items = (
    <ul style={{ backgroundColor: "white" }}>
      <Text className="d-block d-lg-none d-xl-none">Ibekwe Lilian</Text>
      <li>Test 1</li>
      <li>Test 1</li>
      <li>Test 1</li>
    </ul>
  );
  return (
    <div>
      <Header
        style={{
          backgroundColor: colors.ashGrayBg,
          // marginBottom: "10px",
          paddingBottom: "30px",
        }}>
        <Navbar
          // bg="light"
          // expand="lg"
          className="d-flex justify-content-between"
          style={{ justifyContent: "space-between" }}>
          <Container fluid>
            <Navbar.Brand href="#home">
              <Space style={{ gap: 20 }}>
                <MenuOutlined
                  onClick={props.close}
                  className="d-block d-lg-none d-xl-none"
                  style={{
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    fontSize: "20px",
                  }}
                />
                <Space>
                  <img
                    src={"../../ilaro-logo.jpeg"}
                    // className="w-20 w-lg-50"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                    }}
                  />

                  <Text
                    className="d-none d-lg-block d-xl-block"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "0px",
                      wordSpacing: "-2px",
                    }}>
                    <span>Federal Polytechnic</span>{" "}
                    <span className="">Ilaro</span>
                  </Text>
                  <Text
                    className="d-block d-lg-none d-xl-none"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "0px",
                      wordSpacing: "-2px",
                    }}>
                    FPI
                  </Text>
                </Space>
              </Space>
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
              //   style={{ alignItems: "center", justifyContent: "end" }}
            >
              {/* <Nav
            className="me-auto d-flex justify-content-end"
            style={{ alignItems: "center", justifyContent: "end" }}> */}
              <Space style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: "20px" }}
                  className="text-dark  mt-3 d-none d-lg-block d-xl-block">
                  Ibekwe Lilian
                </Text>
                <Dropdown overlay={items}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <img
                        className=" ml-2"
                        src={"../../ilaro-logo.jpeg"}
                        style={{
                          width: "59px",
                          height: "59px",
                          borderRadius: "100px",
                          border: "1px solid green",
                        }}
                      />
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Space>
              {/* </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
    </div>
  );
}

export default NewHeader;
