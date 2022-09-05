import React from "react";
import { AdminLayout } from "../../../Layouts/adminLayout/adminLayout";
import { Select, Typography, Space } from "antd";
import { Container, Form } from "react-bootstrap";
const { Option } = Select;
const { Text } = Typography;

export default function index() {
  return (
    <AdminLayout>
      <Container>
        <div>
          <div className=" container bg-light pb-5 pt-5 pl-5">
            <div className="container bg-white pb-3 mt-4">
              <div className="container bg-white pb-3">
                <h4 className="text-center pb-4 pt-5">Dynamic Reports Setup</h4>
                <form>
                  <div
                    className="form-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Space
                      className="form-group d-block d-lg-flex d-xl-flex"
                      style={
                        {
                          // display: "flex",
                          // alignItems: "center",
                          // justifyContent: "center",
                          // gap: 10,
                        }
                      }>
                      <Text
                        style={{
                          gap: 10,
                          padding: "15px",
                          fontSize: "12px",
                          color: "#9C9C9C",
                        }}
                        className="pb-5 pb-lg-0 pb-xl-0">
                        Report Type
                      </Text>
                      <Form.Select
                        id=""
                        placeholder="-- Select fee type --"
                        className="form-control mt-3 mt-xl-0 mt-lg-0"
                        // defaultValue={"--SELECT FEE TYPE--"}
                        style={{
                          width: "300px",
                          marginLeft: "10px",
                          display: "flex",
                          alignItems: "center",
                          alignContent: "center",
                        }}>
                        <option
                          selected
                          style={{
                            fontSize: "16px",
                            color: "rgba(0, 0, 0, 0.7)",
                          }}>
                          -- --SELECT FEE TYPE-- --
                        </option>
                        <option>REGULAR</option>
                        <option>TEXT</option>
                        <option>EMAIL</option>
                        <option>PASSWORD</option>
                      </Form.Select>
                    </Space>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </AdminLayout>
  );
}
