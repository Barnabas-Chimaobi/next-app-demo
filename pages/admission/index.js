import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "../Application/progressCard";
import { Card, Col, Row } from "react-bootstrap";
import { Typography, Space, Divider, Button, Input } from "antd";

const { Text } = Typography;

export default function Admission() {
  return (
    <div>
      <Frontlayout>
        <div className="d-block d-lg-flex container mt-3 mb-3">
          <div>
            <Card
              style={{
                background: "#FFFFFF",
                boxShadow:
                  "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
                borderRadius: "10px",
                padding: "32px 40px",
              }}>
              <Text
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "32px",
                  // line-height: 38px;

                  color: "#474747",
                }}>
                Admission
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  // line-height: 38px;

                  color: "#474747",
                }}>
                Current Status:{" "}
                <span style={{ color: "#047735" }}>
                  Completed Student Information Form
                </span>
              </Text>
              {/* <div style={{ border: "1px solid #D6D6D6", maxWidth: "907px" }} /> */}
              <Divider style={{ border: "1px solid #D6D6D6" }} />

              <div>
                <Row>
                  <Col lg={4} sm={6} style={{ paddingBottom: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          textTransform: "capitalize",
                          color: "#3E4851",
                        }}>
                        Full Name
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          lineHeight: "19px",
                          textTransform: "uppercase",
                          color: "#000000",
                          paddingTop: "5px",
                        }}>
                        BANKOLE DAMILOLA ARIKE
                      </Text>
                    </div>
                  </Col>
                  <Col lg={4} sm={6} style={{ paddingBottom: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          textTransform: "capitalize",
                          color: "#3E4851",
                        }}>
                        Application Form Number
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          lineHeight: "19px",
                          textTransform: "uppercase",
                          color: "#000000",
                          paddingTop: "5px",
                        }}>
                        FPI/PND/2021/000009528
                      </Text>
                    </div>
                  </Col>
                  <Col lg={4} sm={6} style={{ paddingBottom: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          textTransform: "capitalize",
                          color: "#3E4851",
                        }}>
                        Programme
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          lineHeight: "19px",
                          textTransform: "uppercase",
                          color: "#000000",
                          paddingTop: "5px",
                        }}>
                        ND Part Time
                      </Text>
                    </div>
                  </Col>
                  <Col lg={4} sm={6} style={{ paddingBottom: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          textTransform: "capitalize",
                          color: "#3E4851",
                        }}>
                        Course Of Study
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          lineHeight: "19px",
                          textTransform: "uppercase",
                          color: "#000000",
                          paddingTop: "5px",
                        }}>
                        science laboratory technology
                      </Text>
                    </div>
                  </Col>
                  <Col lg={4} sm={6} style={{ paddingBottom: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          textTransform: "capitalize",
                          color: "#3E4851",
                        }}>
                        Course Option
                      </Text>
                      <Text
                        style={{
                          fontSize: "16px",
                          lineHeight: "19px",
                          textTransform: "uppercase",
                          color: "#000000",
                          paddingTop: "5px",
                        }}>
                        ---
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
            <div style={{ paddingTop: "62px" }}>
              <Card
                style={{
                  background: "#FFFFFF",
                  boxShadow:
                    "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
                  borderRadius: "10px",
                  padding: "32px 40px",
                }}>
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textTransform: "uppercase",
                    color: "#616161",
                    paddingBottom: "32px",
                  }}>
                  Generate ScHOOL FEES INVOICE
                </Text>
                <Space className="d-block d-lg-flex d-xl-flex d-md-flex">
                  <Button
                    style={{ background: "#047735", borderRadius: "5px" }}
                    className="mb-3 mb-lg-0">
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",
                        textTransform: "uppercase",

                        color: "#FFFFFF",
                      }}>
                      Generate Acceptance Invoice
                    </Text>
                  </Button>
                  <Button
                    style={{ background: "#047735", borderRadius: "7px" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",
                        textTransform: "uppercase",

                        color: "#FFFFFF",
                      }}>
                      PRINT INVOICE
                    </Text>
                  </Button>
                </Space>
                <div
                  style={{
                    border: "1px solid #616161",
                    maxWidth: "373px",
                    height: "58px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "37px",
                    marginBottom: "37px",
                  }}>
                  <Text
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",
                      textTransform: "uppercase",

                      color: "#616161",
                    }}>
                    <span style={{ fontWeight: 700 }}>
                      ACCEPTANCE INVOICE NUMBER
                    </span>
                    : <span>FPI220000615185</span>
                  </Text>
                </div>
                <div>
                  <Text
                    style={{
                      fontSize: "14px",
                      lineHeight: "16px",
                      textTransform: "capitalize",
                      color: "#3E4851",
                      paddingBottom: "28px",
                    }}>
                    Acceptance Confirmation Number
                  </Text>
                  <Input
                    style={{
                      height: "48px",
                      background: "#E1E1E1",
                      borderRadius: "5px",
                    }}
                  />
                  <Button
                    style={{
                      width: "229px",
                      height: "43px",
                      background: "#047735",
                      borderRadius: "5px",
                      marginTop: "32px",
                    }}>
                    <Text
                      style={{
                        fontSize: "16px",
                        lineHeight: "19px",
                        textTransform: "capitalize",

                        color: "#FFFFFF",
                      }}>
                      Generate Receipt
                    </Text>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <ProgressCard />
        </div>
      </Frontlayout>
    </div>
  );
}
