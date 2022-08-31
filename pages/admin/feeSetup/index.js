import React from "react";
import Logo from "../../../Images/ilaro-logo.jpeg";
import { AdminLayout } from "../../../Layouts/adminLayout/adminLayout";
import { Select, Space, Typography, Row, Col, Button } from "antd";
import { Card, Container, Form } from "react-bootstrap";
const { Option } = Select;
const { Text } = Typography;

export default function index() {
  return (
    // <AdminLayout>
    //   <div>
    //     <div className=" container bg-light pb-5 pl-5">
    //       <div
    //         className=" container bg-white p-5 card mt-5"
    //         style={{ border: "none" }}>
    //         <div className="container">
    //           <h4 className="text-dark" style={{ marginBottom: "40px" }}>
    //             Dynamic Fee Setup
    //           </h4>
    //           <form>
    //             <div className="form-row row pt-3">
    //               <div className="form-group col-lg-3 col-6">
    //                 <Space className="d-block">
    //                   <Text style={{ color: "#9C9C9C", fontSize: "12px" }}>
    //                     Form Type
    //                   </Text>
    //                   <Select
    //                     id=""
    //                     className=""
    //                     style={{
    //                       width: "",
    //                       border: "1px solid #616161",
    //                       borderRadius: "8px",
    //                     }}
    //                     defaultValue={"REGULAR"}>
    //                     <Option selected>REGULAR</Option>
    //                     <Option>TEXT</Option>
    //                     <Option>EMAIL</Option>
    //                     <Option>PASSWORD</Option>
    //                   </Select>
    //                 </Space>
    //               </div>
    //               <div className="form-group col-lg-3 col-6">
    //                 <Space className="d-block">
    //                   <Text style={{ color: "#9C9C9C", fontSize: "12px" }}>
    //                     Form Session
    //                   </Text>
    //                   <Select
    //                     id=""
    //                     className=""
    //                     style={{
    //                       width: "238px",
    //                       border: "1px solid #616161",
    //                       borderRadius: "8px",
    //                     }}
    //                     defaultValue={"REGULAR"}>
    //                     <Option selected>REGULAR</Option>
    //                     <Option>TEXT</Option>
    //                     <Option>EMAIL</Option>
    //                     <Option>PASSWORD</Option>
    //                   </Select>
    //                 </Space>
    //               </div>
    //               <div className="form-group col-lg-3 col-6">
    //                 <Space className="d-block">
    //                   <Text style={{ color: "#9C9C9C", fontSize: "12px" }}>
    //                     Programme
    //                   </Text>
    //                   <Select
    //                     id=""
    //                     className=""
    //                     style={{
    //                       width: "238px",
    //                       border: "1px solid #616161",
    //                       borderRadius: "8px",
    //                     }}
    //                     defaultValue={"REGULAR"}>
    //                     <Option selected>REGULAR</Option>
    //                     <Option>TEXT</Option>
    //                     <Option>EMAIL</Option>
    //                     <Option>PASSWORD</Option>
    //                   </Select>
    //                 </Space>
    //               </div>
    //               <div className="form-group col-lg-3 col-6">
    //                 <Space className="d-block">
    //                   <Text style={{ color: "#9C9C9C", fontSize: "12px" }}>
    //                     Programme Level
    //                   </Text>
    //                   <Select
    //                     id=""
    //                     className=""
    //                     style={{
    //                       width: "238px",
    //                       border: "1px solid #616161",
    //                       borderRadius: "8px",
    //                     }}
    //                     defaultValue={"REGULAR"}>
    //                     <Option selected>REGULAR</Option>
    //                     <Option>TEXT</Option>
    //                     <Option>EMAIL</Option>
    //                     <Option>PASSWORD</Option>
    //                   </Select>
    //                 </Space>
    //               </div>
    //             </div>
    //           </form>
    //           <div
    //             className="text-right"
    //             style={{
    //               paddingTop: "220px;",
    //               marginBottom: "89px",
    //             }}>
    //             <button className="btn btn-success rounded mr-3 px-5">
    //               Save & Continue
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </AdminLayout>
    <AdminLayout>
      <Container
        style={{
          display: "flex",
          alignSelf: "center",
          alignItems: "center",
        }}>
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            padding: "46px",
            width: "1113px",
            border: "none",
            margin: "74px",
          }}>
          <Space style={{ paddingBottom: "40px" }}>
            <Text style={{ fontSize: "20px", color: "#000000" }}>
              Dynamic Fee Setup
            </Text>
          </Space>
          <Row style={{ gap: 20 }}>
            <Col lg={4} sm={12}>
              <Text
                style={{
                  fontSize: "12px",
                  color: "#9C9C9C",
                  paddingBottom: "16px",
                }}>
                Form type
              </Text>
              <Form.Select style={{ width: "" }}>
                <option selected>REGULAR</option>
                <option>TEXT</option>
                <option>EMAIL</option>
                <option>PASSWORD</option>
              </Form.Select>
            </Col>
            <Col lg={4} sm={12}>
              <Text
                style={{
                  fontSize: "12px",
                  color: "#9C9C9C",
                  paddingBottom: "16px",
                }}>
                Form Session
              </Text>
              <Form.Select style={{ width: "" }}>
                <option selected>REGULAR</option>
                <option>TEXT</option>
                <option>EMAIL</option>
                <option>PASSWORD</option>
              </Form.Select>
            </Col>
            <Col lg={4} sm={12}>
              <Text
                style={{
                  fontSize: "12px",
                  color: "#9C9C9C",
                  paddingBottom: "16px",
                }}>
                Programme
              </Text>
              <Form.Select style={{ width: "" }}>
                <option selected>REGULAR</option>
                <option>TEXT</option>
                <option>EMAIL</option>
                <option>PASSWORD</option>
              </Form.Select>
            </Col>
            <Col lg={4} sm={12}>
              <Text
                style={{
                  fontSize: "12px",
                  color: "#9C9C9C",
                  paddingBottom: "16px",
                }}>
                Programme Level
              </Text>
              <Form.Select style={{ width: "" }}>
                <option selected>REGULAR</option>
                <option>TEXT</option>
                <option>EMAIL</option>
                <option>PASSWORD</option>
              </Form.Select>
            </Col>
          </Row>
          <Space
            style={{
              // display: "flex",
              alignItems: "center",
              justifyContent: "end",
              paddingTop: "200px",
            }}>
            <Button
              style={{
                background: "#047735",
                borderRadius: "5px",
                width: "150px",
                // display: "flex",
                // alignSelf: "end",
                // alignContent: "center",
                // justifyContent: "center",
              }}>
              <Text style={{ color: "white" }}>Save & Continue</Text>
            </Button>
          </Space>
        </Card>
      </Container>
    </AdminLayout>
  );
}
