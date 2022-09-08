import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "./ProgressCard";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Typography, Space, Divider, Button, Input } from "antd";

const { Text } = Typography;

export default function Admission() {
  return (
    <div>
      <Frontlayout>
        <div
          className="d-block d-lg-flex container mt-5 mb-3"
          style={{ gap: 20 }}>
          {/* <Row> */}
          {/* <Col lg={6} sm={6}> */}
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
                  marginBottom: "62px",
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
                  <Divider
                    style={{ border: "1px solid #000000", height: "0px" }}
                  />

                  <Space>
                    <Button
                      style={{
                        borderRadius: "100px",
                        border: "1px solid #047735",
                      }}>
                      <Text
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "14px",
                          textTransform: "uppercase",

                          color: "#047735",
                        }}>
                        HOSTEL REQUEST
                      </Text>
                    </Button>
                    <Button
                      style={{
                        borderRadius: "100px",
                        border: "1px solid #047735",
                      }}>
                      <Text
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "14px",
                          textTransform: "uppercase",
                          // fontFamily: "Gilroy-Bold",
                          color: "#047735",
                        }}>
                        HOSTEL INVOICE
                      </Text>
                    </Button>
                  </Space>
                  <Divider
                    style={{ border: "1px solid #000000", height: "0px" }}
                  />
                </div>
                <div>
                  <Row>
                    <Col lg={6} sm={6}>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          textTransform: "capitalize",
                          color: "#3E4851",
                        }}>
                        Hostel Invoice Number
                      </Text>
                      <Input
                        style={{
                          background: "#E1E1E1",
                          borderRadius: "5px",
                        }}
                      />
                      <Button
                        style={{
                          background: "#047735",
                          borderRadius: "5px",
                          padding: "12px 38px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "54px",
                          marginBottom: "76px",
                        }}>
                        <Text
                          style={{
                            fontSize: "16px",
                            lineHeight: "19px",
                            textTransform: "capitalize",
                            color: "#FFFFFF",
                          }}>
                          Generate Hostel Receipt
                        </Text>
                      </Button>
                    </Col>
                    <Col lg={6} sm={6} style={{ alignItems: "end" }}>
                      <Text
                        style={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          textTransform: "capitalize",
                          color: "#3E4851",
                        }}>
                        Hostel Confirmation Number
                      </Text>
                      <Input
                        style={{
                          background: "#E1E1E1",
                          borderRadius: "5px",
                        }}
                      />
                      <Space
                        className="d-block d-lg-flex d-xl-flex"
                        style={{
                          marginTop: "54px",
                          alignSelf: "flex-end",
                        }}>
                        <Button
                          style={{
                            marginBottom: "10px",
                            border: "1px solid #047735",
                            borderRadius: "100px",
                          }}>
                          <Text
                            style={{
                              fontSize: "12px",
                              lineHeight: "14px",
                              textTransform: "uppercase",
                              color: "#047735",
                            }}>
                            PRINT ADMISSION LETTER
                          </Text>
                        </Button>
                        <Button
                          style={{
                            marginBottom: "10px",
                            border: "1px solid #047735",
                            borderRadius: "100px",
                          }}>
                          <Text
                            style={{
                              fontSize: "12px",
                              lineHeight: "14px",
                              textTransform: "uppercase",
                              color: "#047735",
                            }}>
                            PRINT rECEIPT
                          </Text>
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                  <Divider
                    style={{ border: "1px solid #000000", height: "0px" }}
                  />
                </div>
                <div>
                  <Text
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",
                      textTransform: "uppercase",
                      color: "#616161",
                    }}>
                    Generate ScHOOL FEES Invoice{" "}
                  </Text>
                  <div
                    style={{
                      background: "#E5E5E5",
                      paddingTop: "84px",
                      paddingRight: "29px",
                      paddingLeft: "29px",
                      paddingBottom: "29px",
                    }}>
                    <Row>
                      <Col lg={4} sm={6} style={{ marginBottom: "10px" }}>
                        <Space
                          style={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}>
                          <Text
                            style={{
                              fontSize: "12px",
                              lineHeight: "14px",
                              color: "#0C0B0B",
                            }}>
                            Acceptance Receipt Number
                          </Text>
                          <Text
                            style={{
                              fontSize: "12px",
                              lineHeight: "14px",
                              fontWeight: 700,
                              color: "#0C0B0B",
                            }}>
                            637766803863796215
                          </Text>
                        </Space>
                      </Col>
                      <Col lg={4} sm={6} style={{ marginBottom: "10px" }}>
                        <Space
                          style={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}>
                          <Text
                            style={{
                              fontSize: "12px",
                              lineHeight: "14px",
                              color: "#0C0B0B",
                            }}>
                            Include CISCO?
                          </Text>
                          <Form.Select
                            defaultValue={"SELECT"}
                            className="form-control"
                            style={{ width: "200px" }}>
                            <option>SELECT</option>
                          </Form.Select>
                        </Space>
                      </Col>
                      <Col lg={4} sm={6} style={{ marginBottom: "10px" }}>
                        <Space
                          style={{
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}>
                          <Text
                            style={{
                              fontSize: "12px",
                              lineHeight: "14px",
                              color: "#0C0B0B",
                            }}>
                            Regenerate Invoice?
                          </Text>
                          <Form.Select
                            defaultValue={"SELECT"}
                            className="form-control"
                            style={{ width: "200px" }}>
                            <option>SELECT</option>
                          </Form.Select>

                          <Button
                            style={{
                              background: "#047735",
                              borderRadius: "5px",
                              padding: "12px",
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "40px",
                            }}>
                            <Text
                              style={{
                                fontSize: "14px",
                                lineHeight: "16px",
                                textTransform: "capitalize",
                                color: "#FFFFFF",
                              }}>
                              Generate School Fees Invoice
                            </Text>
                          </Button>
                        </Space>
                      </Col>
                    </Row>
                  </div>
                </div>
                <Space
                  className="d-block d-lg-flex d-xl-flex"
                  style={{
                    justifyContent: "space-between",
                    marginTop: "50px",
                  }}>
                  <Button
                    style={{
                      border: "1px solid #047735",
                      borderRadius: "100px",
                    }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        lineHeight: "14px",
                        textTransform: "uppercase",

                        color: "#047735",
                      }}>
                      PRINT School fees Invoice
                    </Text>
                  </Button>
                  <div style={{ marginTop: "57px" }}>
                    <Button
                      style={{
                        background: "#047735",
                        borderRadius: "5px",
                      }}>
                      <Text
                        style={{
                          fontSize: "16px",
                          lineHeight: "19px",

                          textTransform: "capitalize",

                          color: "#FFFFFF",
                        }}>
                        Next
                      </Text>
                    </Button>
                  </div>
                </Space>
              </Card>
            </div>
          </div>
          {/* </Col> */}
          {/* <Col lg={6} sm={6}> */}
          <ProgressCard />
          {/* </Col> */}
          {/* </Row> */}
        </div>
      </Frontlayout>
    </div>
  );
}
